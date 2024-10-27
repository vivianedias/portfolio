import React, { PropsWithChildren } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { serialize } from "next-mdx-remote/serialize";

function Table({
  data,
}: {
  data: { headers: React.ReactNode[]; rows: React.ReactNode[][] };
}) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink({
  href,
  children,
  ...props
}: React.LinkHTMLAttributes<HTMLAnchorElement>) {
  const styles =
    "underline transition-all decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em]";

  if (href?.startsWith("/")) {
    return (
      <Link {...props} href={href} className={styles}>
        {children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a className={styles} {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={styles}
      {...props}
    />
  );
}

function RoundedImage(props: ImageProps) {
  return <Image {...props} alt={props.alt} className="rounded-lg m-0" />;
}

function Code({ children, ...props }: PropsWithChildren) {
  const codeHTML = highlight(children?.toString() ?? "");
  return (
    <code
      className={"px-1 py-0.5 rounded-lg p-0 leading-normal border-none"}
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: PropsWithChildren) => {
    const slug = slugify(children?.toString() ?? "");
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className:
            "absolute invisible no-underline hover:visible cursor-pointer w-10/12 max-w-3xl pr-2 -ml-4 after after:content-['#'] after:text-neutral-300 after:dark:text-neutral-700",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

export default async function CustomMDX(props: MDXRemoteProps) {
  const serializedSource = await serialize(props.source);

  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      {...serializedSource}
    />
  );
}
