import React from "react";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { Button } from "@mui/material";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id='contact' class="w-full lg:h-screen">
      <div class="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p class="text-xl tracking-widest uppercase text-[#0D9488] font-bold">Contact</p>
        <h2 class="py-4 dark:text-gray-200">Get in touch</h2>
        <div class="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div class="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 dark:bg-gray-200">
            <div class="lg:p-4 h-full">
              <div>
                <Image
                  class="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/web-development.png"
                  alt="/"
                  objectFit="cover"
                  width={300}
                  height={200}
                />
              </div>
              <div class="text-gray-800">
                <h2 class="text-3xl py-2">Name here</h2>
                <p class="text-xl py-2">Front-end Developper</p>
                <p>
                  Je suis disponible à temps complet. Contactez-moi et
                  parlons-en.
                </p>
                <div>
                  <p class="text-md uppercase pt-8">Connectez avec moi</p>
                  <div class="flex items-center justify-between py-4">
                    <div class="text-3xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
                      <AiFillTwitterCircle />
                      <AiFillLinkedin />
                      <AiFillYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div class="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:bg-gray-200">
            <div class="p-4">
              <form>
                <div class="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div class="flex flex-col">
                    <label className="uppercase text-gray-800 text-sm py-2">
                      Name
                    </label>
                    <input
                      class="border-2 rounded-lg p-3 flex"
                      type="text"
                    ></input>
                  </div>
                  <div class="flex flex-col">
                    <label className="uppercase text-gray-800 text-sm py-2">
                      Téléphone
                    </label>
                    <input
                      class="border-2 rounded-lg p-3 flex"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div class="flex flex-col py-2">
                  <label className="uppercase text-gray-800 text-sm py-2">
                    Email
                  </label>
                  <input
                    class="border-2 rounded-lg p-3 flex"
                    type="email"
                  ></input>
                </div>
                <div class="flex flex-col py-2">
                  <label className="uppercase text-gray-800 text-sm py-2">
                    Subject
                  </label>
                  <input
                    class="border-2 rounded-lg p-3 flex"
                    type="text"
                  ></input>
                </div>
                <div class="flex flex-col py-2">
                  <label className="uppercase text-gray-800 text-sm py-2">
                    Message
                  </label>
                  <textarea
                    class="text-gray-800 border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <div class="flex justify-center">
                  <Button
                    variant="outlined"
                    class="flex justify-center items-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-gray-100 p-4 border-none rounded-md w-2/3 mt-4"
                  >
                    Envoyer
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-gray-800">
        <Link href="/">
          <div class="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} class='m-auto text-[#0D9488]' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
