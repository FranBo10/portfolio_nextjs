import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div class="relative flex items-center justify-center h-auto w-4/5 shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-cyan-500 text- to-teal-500 cursor-pointer hover:scale-105 ease-in duration-100">
      <Image
        class="rounded-xl group-hover:opacity-10 h-full w-full"
        src={backgroundImg}
        alt=""
      />
      <div class="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 class="text-2xl text-white tracking-wider text-center"></h3>
        <p class="pb-4 pt-2 text-white text-center text-2xl">{title}</p>
        <div class="flex">
          <Link href={projectUrl}>
            <a target="_blank" class="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-black-500 text- to-slate-500 text-gray-100 hover:scale-125 ease-in duration-100">
              Demo
            </a>
          </Link>
          <button class="px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-black-500 text- to-slate-500 text-gray-100 hover:scale-125 ease-in duration-100">
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
