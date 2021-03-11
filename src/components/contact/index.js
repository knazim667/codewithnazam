import React from "react";
import Icon from "react-icons-kit";
import { envelopeOpen } from "react-icons-kit/fa/envelopeOpen";
import { phoneSquare } from "react-icons-kit/fa/phoneSquare";
import Input from "../../Elements/Input/input";
import TitleSection from "../../Elements/TitleSection";
import PageWrapper from "../pageWrapper";
import "./contact.css";

const Contact = () => {
  return (
    <PageWrapper>
      <TitleSection title="get in" span="touch" titleBg="contact" />
      <section className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h3 className="text-uppercase custom-title">don't be shy</h3>
              <p className="mb-3">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <p className="custom-span-contact position-relative">
                <Icon
                  icon={envelopeOpen}
                  size={30}
                  className="icon-envelop position-absolute"
                />
                <span className="d-block">mail me</span>
                knazim667@gmail.com
              </p>
              <p className="custom-span-contact position-relative">
                <Icon
                  icon={phoneSquare}
                  size={35}
                  className="icon-phone position-absolute"
                />
                <span className="d-block">call me</span>
                +15046158098
              </p>
            </div>
            <div className="col-12 col-lg-8">
              <form>
                <div className="contact-form">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <Input
                        type="text"
                        name={"yourname"}
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <Input
                        type="text"
                        name={"email"}
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <Input
                        type="text"
                        name={"subject"}
                        placeholder="Your Subject"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        type="textarea"
                        name={"message"}
                        placeholder="Your Message"
                      />
                      <button className="btn btn-about">send message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
