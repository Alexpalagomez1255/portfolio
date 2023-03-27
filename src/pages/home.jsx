import { React, Fragment } from "react";
import ImageCarousel from "../componentes/AutoSlider";

function Home() {
  return (
    <Fragment>
      <header className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Soy Alejandro Palacios Gomez
          </h1>
          <p className="mt-1 text-lg text-gray-400">FullStack Web developer</p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Bienvenido a mi portafolio de desarrollador web.
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Aquí podrás encontrar una selección de los proyectos que he
                    creado y desarrollado durante mi carrera como desarrollador
                    web Fullstack.
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    {" "}
                    Mi enfoque principal es crear aplicaciones web de alta
                    calidad y escalables utilizando tecnologías modernas como el
                    PERN stack (PostgreSQL, Express.js, React y Node.js).
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Siempre me aseguro de que mis aplicaciones sean accesibles,
                    usables y estén optimizadas para un rendimiento excepcional.
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Además, estoy siempre buscando nuevas oportunidades para
                    mejorar mis habilidades y aprender nuevas tecnologías para
                    mantenerme actualizado y seguir creciendo en mi carrera como
                    desarrollador web.
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Gracias por visitar mi portafolio y por tu interés en mi
                    trabajo. Si tienes alguna pregunta o estás interesado en
                    trabajar conmigo, no dudes en ponerte en contacto conmigo.{" "}
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Algunas muestras de mis proyectos y en los que he
                    participado
                  </h3>
                  <div>
                    <ImageCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Home;
