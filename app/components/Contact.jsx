import React, { useContext, useState } from 'react';
import { MiContexto } from './context';


function ContactForm() {
  const context = useContext(MiContexto);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que necesites con los datos del formulario,
    // como enviarlos a través de una API o realizar alguna acción.

    // Luego, puedes volver a la página anterior usando la función del contexto
    context.setContent(context.previousContent);
  };

  return (
    <div className='contactContainer'>
      <span onClick={() => context.setContent(context.previousContent)} class="returnButton material-symbols-outlined">
arrow_back
</span>
      <form className='contactFormContainer' onSubmit={handleSubmit}>
<h1 className='contactTitle'>Contact</h1>
          <input
          required
          className='contactFormInput'
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
          required
          className='contactFormInput'
            type="email"
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
          required
          className='contactFormInput'
            type="tel"
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
          required
          className='contactFormInput'
            value={message}
            placeholder='Text'
            onChange={(e) => setMessage(e.target.value)}
          />
        <button className='contactBtn' type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;