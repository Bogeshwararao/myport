import React, { useState } from "react";
import contact from "../assets/images/Contact.png";

import emailjs from "emailjs-com";
import IconCard from "../Components/IconCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const Sucessnotify = () => toast("Email has been sent sucessfully!");
  const Errornotify = () => {
    toast.error("Something gone wrong, Plz try again!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // const Errornotify = () => toast("Some thing has gone wrong, Plz try again!");

  const [result, showResult] = React.useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k60oku9",
        "service_k60oku9",
        e.target,
        "user_YusD37poMXKw4YVVOoC0s"
      )
      .then(
        (result) => {
          console.log(result.text);
          Sucessnotify();
        },
        (error) => {
          console.log(error.text);
          Errornotify();
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      <div className="my-5 mx-auto">
        <h1 className="text-center">Let's get in touch</h1>
        <h6 id="emailHelp" className="form-text text-muted text-center">
          Want to discuss anything? Just fill up this form or write me an email
        </h6>
        <div className="container contact-div">
          <div className="row">
            <div className="col-md-5 col-10 mx-auto">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={sendEmail}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Your Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Please type your message"
                    name="message"
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Submit
                  <ToastContainer />
                </button>
              </form>
              <div className="row social-icons">
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                  link="https://linkedin.com/in/avinash-mahanthi"
                />
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                  link="https://github.com/AvinashMahanthi"
                />
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
                  link="https://twitter.com/@mahanthiavinash"
                />
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg"
                  link="https://www.hackerrank.com/AvinashMahanthi"
                />
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/medium.svg"
                  link="https://medium.com/@avinashmahanthi"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-5 order1 order-lg-2 header-img   ">
              <img src={contact} alt="home" className="img-fluid animated" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
