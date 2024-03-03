import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy-Electrokart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy2.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          
          <p><b>OUR USE OF DATA:</b></p>
          <p><ul>
            <li>Any or all the above Data may be required by us from time to time to provide information relating to IRL and to work on the experience when using our website or mobile application</li>
            <li>Specifically, Data may be used by us for the following reasons:</li>

            <li> Carry out our obligations arising from any contract entered into between you and us</li>
            <li>Provide products and/or services and communicate with you about products and/or services offered by us</li>
            
            <li>Provide privileges and benefits to you, marketing and promotional campaigns based on your profile</li>
            <li><b>ONCE THE ORDER IS PLACED THERE WILL BE NO REFUND, RETURN OR CANCELLATION OF THE ORDER</b></li>
          </ul></p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;