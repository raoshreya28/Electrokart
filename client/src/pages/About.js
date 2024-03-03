import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Electrokart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Launched in 2016, Electrokart was the first one-of-its kind large format specialist retail store that catered to all multi-brand digital gadgets and home electronic needs in India. 
          </p>
          <p>
          Bringing alive the promise of a ‘Brighter Every Day’ for its customers, Electrokart offers its customers a world-class ambience to shop both in-store and Staged at www.electrokart.com and also allows for a seamless ‘omni-channel’ shopping experience that lets a customer enjoy the best of both the Staged & the offline worlds. </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;