import React from "react";
import Selfie from "../img/Selfie.jpg";

function About() {
  return (
    <div class="container mx-auto mt-5 text-center">
      <div class="grid grid-rows-3 grid-flow-col gap-4 mx-auto">
        <div class="grid grid-cols-1 mx-auto sm:row-span-3 max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full mx-auto" src={Selfie} alt="selfie" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 mx-auto">
              Alejandro Palacios Gomez
            </div>
            <p class="text-gray-700 text-base mx-auto">FullStack Web Developer</p>
          </div>
        </div>
        <div class="grid grid-cols-1 mx-auto sm:col-span-2 font-bold text-xl mb-2 ">
          Let me tell you who I am...
        </div>
        <div class="grid grid-cols-1 sm:row-span-2 col-span-2 mx-auto">
          <p class="text-gray-700 font-bold text-base">
            I'm a FullStack web developer and a systems engineer in process, I'm
            passionate about technology and devourer of new knowledge, I'm
            always looking to learn new things and I have a tendency to study
            emerging technologies as well, I am proactive, autonomous, teamwork,
            problem solving, logical thinking and empathic.{" "}
          </p>
          <div class="grid grid-cols-1 sm:flex flex-row mx-auto">
            <div class="px-5 mx-auto py-5 font-bold text-base border rounded">FrontEnd</div>
            <div class="px-5 mx-auto py-5 font-bold text-base border rounded">BackEnd</div>
            <div class="px-5 mx-auto py-5 font-bold text-base border rounded">DataBase</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
