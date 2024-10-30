import { Sparkle, LinksDock } from "@/components";
import Image from "next/image";

export default function Page() {
  const yearsOfExperience = new Date().getFullYear() - 2019;

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="inline-flex flex-col gap-2 text-4xl font-black sm:text-6xl">
          <span>
            Olá <span className="wave">👋🏾</span>
          </span>
          <span className="inline-flex gap-2">
            {`I'm`}
            <Sparkle text={"Viviane Dias"} className={"text-4xl sm:text-6xl"} />
          </span>
        </h1>
        <div className={"size-24 rounded-full bg-[#ffd500] sm:size-36"}>
          <Image
            src={"/profile.png"}
            alt={"Illustration of my done by my partner."}
            width={160}
            height={160}
            className={"m-auto h-28 w-auto sm:h-40"}
          />
        </div>
      </div>
      <div className={"mb-8"}>
        <LinksDock />
      </div>
      <p className="mb-4 text-lg">
        {`I'm a full-stack software developer with over ${yearsOfExperience} years of experience, with a passion for building impactful solutions that are accessible to everyone.`}
      </p>

      <p className="mb-4 text-lg">
        {`But mostly, I'm a generalist that loves to learn a bit of everything - from coding to literature, music and food.`}
      </p>

      <p className="mb-4 text-lg">
        {`Here you'll find some of my latest tips & tricks to excell as a non-traditional developer, and projects I've been working on.`}
      </p>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
