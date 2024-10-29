import { BlogPosts, Sparkle } from "@/components";
import Image from "next/image";

export default function Page() {
  const yearsOfExperience = new Date().getFullYear() - 2019;
  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="inline-flex flex-col gap-2 text-6xl font-black">
          <span>
            Olá <span className="wave">👋🏾</span>
          </span>
          <span className="inline-flex gap-2">
            {`I'm`}
            <Sparkle text="Viviane Dias" />
          </span>
        </h1>
        <div
          className={
            "relative flex h-36 w-36 content-center items-center justify-center rounded-full bg-[#ffd500]"
          }
        >
          <Image
            src={"/profile.png"}
            alt={"Illustration of my done by my partner."}
            width={160}
            height={160}
            style={{ width: "auto", height: "160px" }}
          />
        </div>
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
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
