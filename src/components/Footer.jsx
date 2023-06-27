import React from "react";

const Footer = ({handleSlide}) => {
  return (
    <div className="footer-container">
      <div>
        <img src={require("../images/logo.jpeg")} alt="SmartBank" onClick={handleSlide}/>
        <ul>
          <li onClick={handleSlide}>Home</li>
          <li onClick={handleSlide}>Features</li>
          <li onClick={handleSlide}>About</li>
          <li onClick={handleSlide}>Contact</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
        <div>
          <h1>Disclaimer</h1>
          <p>
            The information provided on this website is for general
            informational purposes only. SmartBank does not guarantee the
            accuracy, completeness, or reliability of any information presented.
            Any reliance you place on such information is strictly at your own
            risk. SmartBank shall not be liable for any losses or damages
            arising from the use of or reliance on the information provided on
            this website. Always consult with a financial advisor or
            professional for specific financial advice tailored to your
            individual needs.
          </p>
        </div>
      </div>
      <div className="copyright">© 2023 SmartBank. All rights reserved.</div>
    </div>
  );
};

export default Footer;
