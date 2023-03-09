import React from "react";
import selfie from "../img/Selfie.png";

function Home() {
  return (
    <div class="flex justify-around ">
      <div class="grid grid-cols-2 text-center">
        <div class="grid grid-rows-4">
          <div>I'm</div>
          <div>Alejandro Palacios Gomez</div>
          <div>Fullstack Web Devloper</div>
          <div class="flex justify-around">
            <div>Hire me!</div>
            <div>Contact me!</div>
          </div>
        </div>
        <div>
          <img src={selfie} alt="selfie" />
        </div>
      </div>
    </div>
  );
}

export default Home;
