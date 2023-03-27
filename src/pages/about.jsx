import { React, Fragment } from "react";
import selfie from "../img/Selfie2.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import CardSlider from "../componentes/CardSlider";

function About() {
  const technologiesFrontend = [
    { name: "React", icon: "fab fa-react" },
    { name: "Redux", icon: "fa fa-arrow-right" },
    { name: "Javascript", icon: "fab fa-square-js" },
    { name: "TailwindCss", icon: "fa-brands fa-css3-alt" },
  ];

  const technologiesBackend = [
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express Js", icon: "fa fa-arrow-right", icon2: "fab fa-node-js" },
    { name: "Sequelize", icon: "fa fa-arrow-right", icon2: "fab fa-node-js" },
  ];

  const technologiesDatabase = [
    { name: "MySQL", icon: "fas fa-database", icon2: "fa-regular fa-dolphin" },
    {
      name: "PostgreSQL",
      icon: "fas fa-database",
      icon2: "fa-regular fa-elephant",
    },
  ];
  return (
    <Fragment>
      <header className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Este Soy Yo
          </h1>
          <p className="mt-1 text-lg text-gray-400">
            Aquí encontrarás información sobre mí y mis habilidades.
          </p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                <img
                  src={selfie}
                  alt="Foto de perfil"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="sm:w-2/3 sm:pl-8">
                <h2 className="text-2xl font-bold leading-tight text-gray-900">
                  Alejandro Palacios Gomez
                </h2>
                <p className="mt-2 text-lg text-gray-500">
                  Soy una persona apasionada por la tecnología y me encanta
                  adquirir nuevos conocimientos constantemente. Me gusta
                  mantenerme actualizado en las últimas tendencias y tecnologías
                  emergentes, por lo que siempre estoy estudiando y aprendiendo
                  sobre ellas.
                </p>
                <p className="mt-2 text-lg text-gray-500">
                  Además, soy proactivo y me gusta tomar la iniciativa para
                  alcanzar mis objetivos. Soy autónomo y tengo la capacidad de
                  trabajar de manera independiente. También soy un buen
                  colaborador y tengo habilidades para trabajar en equipo,
                  resolver problemas y pensar de manera lógica.
                </p>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                          Frontend Technologies
                        </h3>
                        <div className="mt-2 flex items-center justify-center">
                          <ul className="space-y-4">
                            {technologiesFrontend.map((technology) => (
                              <li
                                key={technology.name}
                                className="flex items-center space-x-2"
                              >
                                <i
                                  className={`${technology.icon} text-indigo-500`}
                                />

                                <span>{technology.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                          Backend Technologies
                        </h3>
                        <div className="mt-2 flex items-center justify-center">
                          <ul className="space-y-4">
                            {technologiesBackend.map((technology) => (
                              <li
                                key={technology.name}
                                className="flex items-center space-x-2"
                              >
                                <i
                                  className={`${technology.icon} text-indigo-500`}
                                />
                                <i
                                  className={`${technology.icon2} text-indigo-500`}
                                />
                                <span>{technology.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                          Database Technologies
                        </h3>
                        <div className="mt-2 flex items-center justify-center">
                          <ul className="space-y-4">
                            {technologiesDatabase.map((technology) => (
                              <li
                                key={technology.name}
                                className="flex items-center space-x-2"
                              >
                                <i
                                  className={`${technology.icon} text-indigo-500`}
                                />
                                <i
                                  className={`${technology.icon2} text-indigo-500`}
                                />
                                <span>{technology.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className=" mx-6 pb-0 lg:mx-auto mb-28">
        <div className="sm:w-2/3 sm:pl-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-900">
            Proyectos realizados
          </h2>
        </div>
        <CardSlider />
      </div>
    </Fragment>
  );
}

export default About;
