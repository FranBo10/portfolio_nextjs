import React from 'react';
import Image from 'next/image';

const SkillsItem = () => {
  return (
    <div class="lg:flex gap-10 text-gray-800">
    <div class="text-center shadow-xl p-10 border-2 rounded-xl my-10 dark:bg-gray-200 flex-1">
              <Image src={doc} width={200} height={200} alt="html" />
              <h3 class="text-lg font-medium pt-8 pb-2 ">
                Beautiful Designs
              </h3>
              <p class="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 class="py-4">Design Tools I Use</h4>
              <p class="py-1">Photoshop</p>
              <p class="py-1">Illustrator</p>
              <p class="py-1">Figma</p>
              <p class="py-1">Indesign</p>
            </div>
            <div class="text-center shadow-lg p-10 border-2 rounded-xl my-10 dark:bg-gray-200 flex-1">
              <Image src={paint} width={200} height={200} alt="code"/>
              <h3 class="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p class="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <h4 class="py-4">Design Tools I Use</h4>
              <p class="text-gray-800 py-1">Photoshop</p>
              <p class="text-gray-800 py-1">Illustrator</p>
              <p class="text-gray-800 py-1">Figma</p>
              <p class="text-gray-800 py-1">Indesign</p>
            </div>
            <div class="text-center shadow-lg p-10 border-2 rounded-xl my-10 dark:bg-gray-200 flex-1">
              <div>
              <Image src={rocket} width={200} height={200} alt=""/>
              </div>
              <h3 class="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p class="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 class="py-4 text-teal-600">Design Tools I Use</h4>
              <p class="text-gray-800 py-1">Photoshop</p>
              <p class="text-gray-800 py-1">Illustrator</p>
              <p class="text-gray-800 py-1">Figma</p>
              <p class="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
  )
}

export default SkillsItem