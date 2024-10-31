"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FolderOpen, SquareArrowOutUpRightIcon } from "lucide-react";

function Project({
  description,
  link,
  title,
  stack,
  contribution,
}: {
  description: string;
  link: string;
  title: string;
  stack: string[];
  contribution: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="h-16 w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-1 focus-within:ring-violet-500 hover:border-violet-500 sm:w-80"
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
            <p className="mb-4 text-gray-600">{description}</p>
            <p className="mb-4 text-sm text-gray-600">{contribution}</p>
            <p className="mb-4 text-sm italic text-gray-600">
              Built with: {stack.join(", ")}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded text-sm font-medium text-violet-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              See more <SquareArrowOutUpRightIcon className={"inline size-3"} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const DATA = [
    {
      title: "iana-chatbot",
      description:
        "An AI-powered chatbot created to support volunteers in training, answering questions about their course content. The project was developed with the support of the Bill and Melinda Gates Foundation.",
      contribution:
        "Led the technical development of the chatbot using ChatGPT and LlamaIndex, deploying it in a serverless AWS architecture and Vercel.",
      link: "https://github.com/mapadoacolhimento/boas-vindas-chatbot/",
      stack: [
        "Next.js",
        "ChatGPT",
        "LlamaIndex",
        "Serverless",
        "AWS Lambda",
        "AWS S3",
      ],
    },
    {
      title: "conviction-voting-app",
      description:
        "1Hive's Conviction Voting app enables decentralized organizations to allocate funds based on the collective conviction of their members.",
      contribution:
        "As an early contributor, developed the front end with Aragon’s UI components and React, integrating it with the Aragon DAO to enhance user experience.",
      link: "https://github.com/1Hive/conviction-voting-app",
      stack: ["Aragon", "React", "Web3", "Solidity"],
    },
    {
      title: "development-linux-setup",
      description:
        "A shell script to install (most) of the dependencies that I need to setup my development enviroment.",
      contribution:
        "I was tired of setting up my development environment every time I got a new computer, so I created this script to automate the process.",
      link: "https://github.com/vivianedias/development-linux-setup",
      stack: ["Shell"],
    },
    {
      title: "me-representa",
      description:
        "A platform that connects voters with candidates who align with their core values, supporting more informed, values-driven electoral choices.",
      contribution:
        "Developed the application end-to-end, revamping the UI with Next.js, implementing authentication with NextAuth, and setting up a scalable MongoDB database.",
      link: "https://github.com/vivianedias/me-representa/",
      stack: ["MongoDB", "Next.js", "ChakraUI", "NextAuth"],
    },
    {
      title: "infografico-edh",
      description:
        "An interactive infographic designed to disseminate information about education on human rights in Brazil throughout the years.",
      contribution:
        "Developed the whole front end application with responsive, visually appealing components, ensuring an intuitive user experience.",
      link: "https://github.com/vivianedias/infografico-edh",
      stack: ["Next.js", "Airtable", "ChakraUI", "Jest", "Github Actions"],
    },
  ];
  return (
    <div className="my-8">
      <h2 className="inline-flex items-center gap-x-2 pb-4 text-2xl font-semibold">
        projects 🛠️
      </h2>
      <div className={"flex flex-row flex-wrap gap-4"}>
        {DATA.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </div>
  );
}
