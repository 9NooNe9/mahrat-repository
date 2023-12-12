import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Conatct = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  const emailSend = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_og736dm",
        "template_bptnx4d",
        refForm.current,
        "h4ssCrmHNb9D71abO"
      )
      .then(
        () => {
          alert("Message Successfully Sent!");
          window.location.reload(false);
        },
        () => {
          alert("Faild To Send The Message, Please Try Agian!");
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {};
  }, []);
  return (
    <>
      <div className="constainer contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            consequat semper viverra nam libero. Egestas maecenas pharetra
            convallis posuere morbi leo urna.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={emailSend}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value={"SEND"} />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Conatct;
