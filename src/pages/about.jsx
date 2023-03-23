import { React, Fragment } from "react";
import selfie from "../img/Selfie2.jpg";
import '@fortawesome/fontawesome-free/css/all.css';

function About() {
  const technologiesFrontend = [
    { name: "React", icon: "fab fa-react" },
    { name: "Vue.js", icon: "fab fa-vuejs" },
    { name: "Angular", icon: "fab fa-angular" },
  ];

  const technologiesBackend = [
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "Java", icon: "fab fa-java" },
  ];

  const technologiesDatabase = [
    { name: "MySQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "PostgreSQL", icon: "fas fa-database" },
  ];
  return (
    <Fragment>
      <header className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Sobre mí
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
                  Mi nombre completo
                </h2>
                <p className="mt-2 text-lg text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac tortor nulla. Integer vitae justo velit. Maecenas varius
                  turpis quis eros bibendum, vel rutrum ex finibus.
                </p>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
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
                    <div className="bg-white overflow-hidden shadow rounded-lg">
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
                                <span>{technology.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
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
    </Fragment>
  );
}

export default About;
