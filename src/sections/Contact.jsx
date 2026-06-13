import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed To Send Message");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <h2 className="text-6xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div
          className="
          p-10
          rounded-3xl
          bg-gradient-to-b
          from-[#101c42]
          border
          border-cyan-500/20
          hover:shadow-[0_0_60px_rgba(0,255,255,.15)]
          duration-500
          "
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            Let's Connect
          </h3>

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <div className="text-cyan-400 text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <p>kv217471@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-cyan-400 text-2xl">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-400">Phone</p>
                <p>+91 8923340720</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-cyan-400 text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-400">Location</p>
                <p>India</p>
              </div>

            </div>

            <div>
              <a href="/Khushi_Resume.pdf"
              download
             rel="noreferrer"
             className="
             inline-block
             flex justify-center
              px-6 py-3
              border
              border-cyan-500
              text-cyan-400
              hover:bg-cyan-500
              hover:text-white
              duration-300
              rounded-xl
              
              "> Download Resume</a>
              </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="
          p-10
          rounded-3xl
          bg-gradient-to-b
          from-[#101c42]
          border
          border-cyan-500/20
          hover:shadow-[0_0_60px_rgba(0,255,255,.15)]
          duration-500
          "
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
              w-full
              p-4
              rounded-xl
              bg-[#16213e]
              border border-transparent
              focus:border-cyan-400
              outline-none
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
              w-full
              p-4
              rounded-xl
              bg-[#16213e]
              border border-transparent
              focus:border-cyan-400
              outline-none
              "
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="
              w-full
              p-4
              rounded-xl
              bg-[#16213e]
              border border-transparent
              focus:border-cyan-400
              outline-none
              resize-none
              "
            /><button
              type="submit"
              className="
              w-full
              py-4
              bg-cyan-500
              rounded-xl
              font-semibold
              hover:scale-105
              duration-300
              "
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;