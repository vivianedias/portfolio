import { BlogPosts, Sparkle } from "@/components";

export default function Page() {
  const yearsOfExperience = new Date().getFullYear() - 2019;
  return (
    <section>
      <h1 className="mb-8 text-6xl font-black inline-flex flex-col gap-2">
        <span>
          Olá <span className="wave">👋🏾</span>
        </span>
        <span className="inline-flex gap-2">
          {`I'm`}
          <Sparkle text="Viviane Dias" />
        </span>
      </h1>
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
