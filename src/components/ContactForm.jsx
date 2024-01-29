import React, { useRef, useState } from "react";
import Label from "./Label";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

const inputData = [
  { id: "email", label: "Email", type: "email" },
  { id: "name", label: "Name", type: "text" },
  { id: "subject", label: "Subject", type: "text" },
];

export default function ContactForm() {
  const [active, setActive] = useState(false);
  const formRef = useRef();

  const handleSendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_0hv3f9r",
        "template_31dtint",
        formRef.current,
        "mHTQDLdjVf3Wtd63_"
      )
      .then(
        () => {
          setActive(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {" "}
      <section
        id="contact"
        className="w-10/12 xl:w-6/12 p-2 md:p-8 border-2 border-emerald-400 rounded-xl flex flex-col justify-center items-center gap-4 mb-6"
      >
        <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-widest">
          Contact Form
        </h2>
        <form className="w-full flex flex-col gap-3" ref={formRef}>
          {inputData.map(({ id, label, type }) => {
            return (
              <fieldset key={id} className="w-full flex flex-col gap-1">
                <Label id={id} label={label} />
                <Input id={id} type={type} />
              </fieldset>
            );
          })}
          <fieldset className="w-full flex flex-col gap-1">
            <Label id={"message"} label={"Message"} />
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="p-2 rounded-lg text-emerald-800 border-2 border-emerald-300 placeholder:text-emerald-700"
              placeholder="Enter your message here..."
            ></textarea>
          </fieldset>
          <button
            type="submit"
            className="w-full py-3 border-2 rounded-lg text-white font-semibold text-lg tracking-widest hover:bg-lime-50 hover:text-emerald-600 hover:border-emerald-600 active:bg-emerald-400 active:text-white hover:border-white"
            onClick={(e) => handleSendEmail(e)}
          >
            Send
          </button>
        </form>
      </section>
      <Modal active={active} setActive={setActive} styles={"bg-lime-50"}>
        <p className="text-emerald-600 font-bold text-2xl tracking-wider">
          Your email was sent :)
        </p>
      </Modal>
    </>
  );
}
