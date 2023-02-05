import Image from 'next/image';
import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";


const Header = () => {
  return (
    <div class="text-center">
          <div class="text-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-76 md:w-76">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved" />
            </div>
            <h2 class="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              FranBo#10
            </h2>
            <div class="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>            
          </div>
  )
}

export default Header