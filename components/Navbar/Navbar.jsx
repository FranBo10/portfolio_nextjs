import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import deved from "../../public/dev-ed-wave.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
      window.addEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <AppBar
      class={
        shadow
          ? "static w-full h-20 shadow-xl text-[#0D9488] font-bold"
          : "static w-full h-20 text-[#0D9488] font-bold"
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton sx={{ p: 0 }}>
              <div class="flex items-center gap-3 text-[#0D9488]">
                <Avatar>
                  <Image
                    src={deved}
                    layout="fill"
                    objectFit="cover"
                    alt="deved"
                  />
                </Avatar>
                <AiOutlineMenu
                  onClick={handleNav}
                  class="md:hidden dark:text-gray-200"
                  size={25}
                />
              </div>
            </IconButton>
          </Box>
          <div>
            <ul class="hidden md:flex cursor-pointer">
              <Link href="/">
                <li class="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li class="ml-10 text-sm uppercase hover:border-b">About me</li>
              </Link>
              <Link href="/#skills">
                <li class="ml-10 text-sm uppercase hover:border-b">Skills</li>
              </Link>
              <Link href="/#projects">
                <li class="ml-10 text-sm uppercase hover:border-b">Projects</li>
              </Link>
              <Link href="/#contact">
                <li class="ml-10 text-sm uppercase hover:border-b">Contact</li>
              </Link>
            </ul>
          </div>
          <div class=" z-[100]">
            <div
              class={
                nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
              }
            >
              <div
                class={
                  nav
                    ? "md:hidden fixed left-0 top-0 w-[75%] sm:x-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-[100]"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }
              >
                <div>
                  <div class="flex w-full justify-between align-center text-gray-800">
                    <Link href="/">
                      <Avatar>
                        <Image
                          src={deved}
                          layout="fill"
                          objectFit="cover"
                          alt="deved"
                        />
                      </Avatar>
                    </Link>
                    <div
                      onClick={handleNav}
                      class="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>
                  <div class="border-b border-gray-300 my-4">
                    <p class="w-[85%] md:w-[90%] py-">
                      Nous allons créer quelques choses de légendaires
                    </p>
                  </div>
                </div>
                <div class="py-4 flex flex-col w-[90%]">
                  <ul class="uppercase text-gray-800">
                    <Link href="/">
                      <li
                        onClick={() => setNav(false)}
                        class="px-4 py-4 text-sm cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg shadow-gray-400"
                      >
                        Home
                      </li>
                    </Link>
                    <Link href="/#about">
                      <li
                        onClick={() => setNav(false)}
                        class="px-4 py-4 text-sm cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg shadow-gray-400"
                      
                      >
                        About me
                      </li>
                    </Link>
                    <Link href="/#skills">
                      <li
                        onClick={() => setNav(false)}
                        class="px-4 py-4 text-sm cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg shadow-gray-400"
                      
                      >
                        Skills
                      </li>
                    </Link>
                    <Link href="/#projects">
                      <li
                        onClick={() => setNav(false)}
                        class="px-4 py-4 text-sm cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg shadow-gray-400"
                      
                      >
                        Projects
                      </li>
                    </Link>
                    <Link href="/#contact">
                      <li
                        onClick={() => setNav(false)}
                        class="px-4 py-4 text-sm cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg shadow-gray-400"
                      
                      >
                        Contact
                      </li>
                    </Link>
                  </ul>
                  <div class="pt-10 px-2">
                    <p class="uppercase tracking-widest text-[#0D9488]">
                      Restez connecté
                    </p>
                    <div class="text-2xl flex gap-10 py-3 text-gray-600 dark:text-gray-400">
                      <AiFillTwitterCircle />
                      <AiFillLinkedin />
                      <AiFillYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Box>
              <BsFillMoonStarsFill
                onClick={handleClick}
                class="text-[#0D9488] cursor-pointer ml-4 w-full text-3xl dark:text-white"
              />
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
