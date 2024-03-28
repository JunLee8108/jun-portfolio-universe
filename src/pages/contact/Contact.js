import "./Contact.css";
import TypingAnimation from "../../components/TypingAnimation";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import HashLoader from "react-spinners/HashLoader";

export default function Contact() {
  const [isLoading, setLoading] = useState(false);
  const form = useRef();

  const openInNewTab = (link) => () => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_wmziyym",
        "template_88iu1vq",
        form.current,
        "pcJjne1oLOj6u9K6j"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Your message was successfully sent!");
          e.target.reset();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        },
        (error) => {
          setLoading(false);
          alert("Error to send a message");
        }
      );
  };

  return (
    <>
      <TypingAnimation text="Contact Me" class="contact-typing-animation" />
      <div className="contact animation-slow">
        <form
          className="contact-form"
          autoComplete="off"
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="contact-input-container">
            <input
              type="text"
              id="firstName"
              autoComplete="new-password"
              placeholder="Your First Name"
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>

          <div className="contact-input-container">
            <input
              type="text"
              id="lastName"
              autoComplete="new-password"
              placeholder="Your Last Name"
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>

          <div className="contact-input-container">
            <input
              type="email"
              id="email"
              autoComplete="new-password"
              placeholder="Your Email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="contact-textarea-container">
            <textarea
              id="message"
              placeholder="Your Message"
              rows="8"
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <center>
            {isLoading ? (
              <HashLoader color="#39ff14" className="hash-loader" />
            ) : (
              <button type="submit">SEND</button>
            )}
          </center>
        </form>

        <section className="contact-info">
          <h1>Other Contact Info</h1>

          <div className="contact-info-container">
            <div
              className="contact-img-container"
              onClick={openInNewTab("https://github.com/JunLee8108")}
            >
              <div className="contact-img">
                <img src="/imgs/github-sign.webp" alt="github"></img>
              </div>
              <h2>Github</h2>
            </div>

            <div
              className="contact-img-container"
              onClick={openInNewTab(
                "https://www.linkedin.com/in/jeong-hyun-lee-a5362319a/"
              )}
            >
              <div className="contact-img">
                <img src="/imgs/linkedin.webp" alt="linkedin"></img>
              </div>
              <h2>LinkedIn</h2>
            </div>

            <div
              className="contact-img-container"
              onClick={openInNewTab(
                "https://drive.google.com/file/d/1_EP8613vyZL0BBwtRhlCicwsxFxBt0t2/view?usp=drive_link"
              )}
            >
              <div className="contact-img">
                <img src="/imgs/human-resources.webp" alt="resume"></img>
              </div>
              <h2>Resume</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
