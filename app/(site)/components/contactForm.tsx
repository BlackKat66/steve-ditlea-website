"use client";

import { useState } from "react";

const ContactForm = () => { 
  const [ inputs, setInputs ] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  }); 

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

		setInputs((prev) => ({
			...prev,
			[e.target.id]: target.value,
		}))
	};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    await fetch("/api/email", { method: "POST", body: JSON.stringify(inputs) }); 

    setInputs({
      name: "",
      email: "",
      phone: "",
      message: ""
    }); 
  }

  return (
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-envelope-open-text" style={{ fontSize: "3.5 rem" }}></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form id="contactForm" name="sentMessage" onSubmit={handleSubmit}>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input 
                      className="form-control" 
                      id="name" 
                      type="text" 
                      placeholder="Name" 
                      value={inputs.name}
                      onChange={handleChange}
                      required
                      data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label>
                    <input 
                      className="form-control" 
                      id="email" 
                      type="email"
                      placeholder="Email Address" 
                      value={inputs.email}
                      onChange={handleChange}
                      required
                      data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Phone Number</label>
                    <input 
                      className="form-control" 
                      id="phone" 
                      type="tel" 
                      value={inputs.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows={5} 
                      placeholder="Message" 
                      value={inputs.message}
                      onChange={handleChange}
                      required
                      data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <button 
                    className="btn btn-primary btn-xl" 
                    id="sendMessageButton"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
} 

export default ContactForm; 