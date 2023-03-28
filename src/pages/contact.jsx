import { React, Fragment } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "../componentes/MailComponent";

function Contact() {
  return (
    <Fragment>
      <header className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Contáctame
          </h1>
          <p className="mt-1 text-gray-300">
            Puedes encontrarme en estas plataformas:
          </p>
        </div>
      </header>
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Email
                    </div>
                    <div className="text-sm text-gray-500">
                      <a
                        href="mailto:alexpalagomez_1255@hotmail.com "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        alexpalagomez_1255@hotmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaLinkedin className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      LinkedIn
                    </div>
                    <div className="text-sm text-gray-500">
                      <a
                        href="https://www.linkedin.com/in/alejandro-palacios-gomez-6a1292172/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alejandro-palacios-gomez-6a1292172
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaGithub className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      GitHub
                    </div>
                    <div className="text-sm text-gray-500">
                      <a
                        href="https://github.com/Alexpalagomez1255"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alexpalagomez1255
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
      <div className="flex justify-center items-center">
        <div className=" mx-6 text-lg font-bold text-gray-900 text-center bg-white overflow-hidden shadow-lg rounded-lg p-1">
          Deja tus datos a continuación y me pondré en contacto contigo
        </div>
      </div>
      <div >
        <ContactForm />
      </div>
      </div>
    </Fragment>
  );
}

export default Contact;
