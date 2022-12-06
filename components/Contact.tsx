import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useTypewriter } from "react-simple-typewriter";

import Title from "./Title";

// form legato al servizio Getform.io
const Contact = () => {
  const [text] = useTypewriter({
    words: ["Ravenna", "Arezzo", "Siena", "Forlì"],
    loop: true,
    delaySpeed: 500,
  });

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/a8dad0b5-4d3c-4f04-9603-4483f12d6e41"
          method="POST"
          className="flex flex-col w-full md:w-7/12">
          <Title>Get In Touch</Title>
          <div className="flex flex-col space-y-5 mb-8 mt-4">
            <div className="flex items-center space-x-5">
              <MapPinIcon className="text-orange-400 w-7 h-7 animate-pulse" />
              <p className="text-xl">{text} (Italy)</p>
            </div>
            <div className="flex items-center space-x-5">
              <PhoneIcon className="text-orange-400 w-7 h-7 animate-pulse" />
              <p className="text-xl">+39 3661110378</p>
            </div>
            <div className="flex items-center space-x-5">
              <EnvelopeIcon className="text-orange-400 w-7 h-7 animate-pulse" />
              <p className="text-xl">gcmgualtieri@gmail.com</p>
            </div>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact-input"
            required
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="contact-input"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={8}
            className="contact-input"
            required
            autoComplete="off"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 text-xl font-medium rounded text-stone-900 bg-orange-400 drop-shadow-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
