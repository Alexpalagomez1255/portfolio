import React from "react";
import Selfie from "../img/Selfie.jpg";

function About() {
  return (
    <div class="container mx-auto mt-5 text-center">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={Selfie} alt="selfie" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Im Alejandro Palacios Gomez
            </div>
            <p class="text-gray-700 text-base">FullStack Web Developer</p>
          </div>
        </div>
        <div class="col-span-2 font-bold text-xl mb-2">Let me tell you who i am...</div>
        <div class="row-span-2 col-span-2" >
        <p class="text-gray-700 font-bold text-base">Im a FullStack web developer and a systems engineer in process I am passionate about technology and devourer of new knowledge, I am always looking to learn new things and I have a tendency to study emerging technologies as well, I am proactive, autonomous,
teamwork, problem solving, logical thinking and empathic. </p>
        
        </div>
      </div>
    </div>
  );
}

export default About;
