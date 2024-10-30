"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FolderGit2Icon, FolderOpen } from "lucide-react";
import Link from "next/link";

function Project({
  description,
  link,
  title,
}: {
  description: string;
  link: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="w-80 overflow-hidden rounded-lg bg-white shadow-sm focus-within:ring-2 focus-within:ring-violet-500"
      initial={false}
      animate={{ height: isOpen ? "auto" : "60px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <button
        className="flex w-full items-center justify-between p-4 focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        <div className="relative h-6 w-6">
          <motion.div
            initial={false}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Folder className="h-6 w-6 text-gray-500" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <FolderOpen className="h-6 w-6 text-violet-500" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <p className="mb-4 text-sm text-gray-600">{description}</p>
            <Link
              href={link}
              className="inline-block rounded text-sm font-medium text-violet-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              See more
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const DATA = [
    {
      title: "Project 1",
      description: "Description of project 1",
      link: "/project-1",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      link: "/project-2",
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      link: "/project-3",
    },
  ];
  return (
    <div className="my-8">
      <h2 className="inline-flex items-center gap-x-2 pb-4 text-2xl font-semibold">
        projects <FolderGit2Icon className={"size-6"} />
      </h2>
      <div className={"flex flex-row flex-wrap gap-4"}>
        {DATA.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </div>
  );
}
