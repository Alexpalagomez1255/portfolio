import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

        try {
      
      setIsModalOpen(true);
      console.log(formData.name);
      console.log(formData.email);
      console.log(formData.message);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Ha ocurrido un error al enviar tu mensaje.');
    }
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 h-screen">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-bold text-gray-700">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Enviar</button>
        </div>
      </form>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Mensaje enviado"
        className="modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl font-bold mb-2">Formulario en proceso...</h2>
        <p className="mb-4">Gracias por su comprensión</p>
        <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Cerrar</button>
      </Modal>
    </>
  );
};

export default ContactForm;