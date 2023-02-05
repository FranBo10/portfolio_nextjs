import { CssBaseline } from "@mui/material";
import Image from "next/image";
import react from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/react.png";
import tailwind from "../../public/tailwind.png";
import nextjs from "../../public/nextjs.png";
import github from "../../public/github1.png";
import nodejs from "../../public/node.png";

const Skills = () => {
  return (
    <div id='skills' class="w-full lg:h-screen p-2 py-10 mt-20">
      <div class="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p class="text-xl tracking-widest uppercase text-[#0D9488] font-bold">
          Skills
        </p>
        <h2 class="py-4 dark:text-gray-100">Mes outils de programmation</h2>
        <div class="grid grid-cols-2 gap-8">          
          <div class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <Image src={html} width={80} height={80} alt="html" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <Image src={css} width={80} height={80} alt="html" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <Image src={javascript} width={80} height={80} alt="javascript" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <Image src={reactjs} width={80} height={80} alt="react" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <Image src={nextjs} width={80} height={80} alt="next" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <Image src={nodejs} width={80} height={80} alt="node" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>NODEJS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <Image src={tailwind} width={80} height={80} alt="tailwind" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <Image src={github} width={80} height={80} alt="github" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
