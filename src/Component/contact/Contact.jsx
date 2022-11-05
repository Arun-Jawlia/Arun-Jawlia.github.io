import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6uiryl8",
      "template_2gprq4v",
      form.current,
      "21KymLPRnAuY26ycj"
      );
      e.target.reset();
      
    };
  

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>
          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card_title">Email</h3>
              <span className="contact_card_data">
                arunkumar08.mk@gmail.com
              </span>
              <a
                href="mailto:arunkumar08.mk@gmail.com"
                className="contact_button"
                target="blank"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>
              <h3 className="contact_card_title">Whatsapp</h3>
              <span className="contact_card_data">+91 9718653508</span>
              <a
                href="https://web.whatsapp.com/"
                className="contact_button"
                target="blank"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-linkedin contact_card-icon"></i>
              <h3 className="contact_card_title">Linked In</h3>
              <span className="contact_card_data">Arun Jawlia</span>
              <a
                href="https://www.linkedin.com/in/arun-jawlia-0a262022b/"
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button_icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="contact_title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form_div">
              <label className="contact_form_tag">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="contact_form_input"
                required
              />
            </div>
            <div className="contact_form_div">
              <label className="contact_form_tag">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="contact_form_input"
                required
              />
            </div>
            <div className="contact_form_div contact_form_area">
              <label className="contact_form_tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact_form_input"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* < onSubmit={sendEmail}  className="sendBtn" >Send Message/> */}
            <button type="submit"  className="sendBtn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
