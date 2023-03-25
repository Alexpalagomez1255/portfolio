import {React,Fragment } from "react";


function Home() {
  return (
    <Fragment>
      <header className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Soy Alejandro Palacios Gomez
          </h1>
          <p className="mt-1 text-lg text-gray-400">
           FullStack Web developer
          </p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Servicio 1
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Descripción del servicio 1.
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Servicio 3
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Descripción del servicio 3.
                  </p>
                </div>
              </div>
              <div >
                    
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </Fragment>
  );
}

export default Home;

{/* <div class="flex justify-around ">
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
    </div> */}
