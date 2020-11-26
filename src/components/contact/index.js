import React from "react";
import Icon from "react-icons-kit";
import { envelopeOpen } from "react-icons-kit/fa/envelopeOpen";
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import TitleSection from "../../Elements/TitleSection";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <TitleSection title="get in touch" titleBg="contact" />
      <section className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h3>don't be shy</h3>
              <p className="mb-3">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <p className="custom-span-contact position-relative">
                <Icon icon={envelopeOpen} size={20} className="icon-envelop" />
                <span className="d-block">mail me</span>
                knazim667@gmail.com
              </p>
              <p className="custom-span-contact position-relative">
                <Icon icon={phoneSquare} size={20} className="icon-phone" />
                <span className="d-block">call me</span>
                +15046158098
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
