import React, { useRef } from "react";
import Footer from "../components/Footer";
import IndexHeader from "../components/IndexHeader";

function Index() {
  const hero = useRef();
  const feature = useRef();
  const about = useRef();
  const contact = useRef();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
  };

  const handleSlide = (e) => {
    const str = e.currentTarget.textContent;
    let position = 0;
    if (str === "Contact") position = contact.current.offsetTop;
    else if (str === "Features") position = feature.current.offsetTop;
    else if (str === "About") position = about.current.offsetTop;
    else position = hero.current.offsetTop;
    window.scrollTo({
      top: position - 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <IndexHeader handleSlide={handleSlide}/>
      <div ref={hero} className="hero-container">
        <div>
          <p>
            Unlocking Online Personal Banking Solutions for Financial Freedom
            and Empowering Your Journey Towards Financial Success
          </p>
          <input type="button" value="Get Started" />
        </div>
      </div>
      <div ref={feature} className="feature-container">
        <h1>Features</h1>
        <div>
          <div>
            <div></div>
            <p>Easy Money Transfers</p>
          </div>
          <div>
            <div></div>
            <p>Online Bill Payment</p>
          </div>
          <div>
            <div></div>
            <p>Enhanced Security</p>
          </div>
          <div>
            <div></div>
            <p>Customer Support</p>
          </div>
        </div>
      </div>
      <div className="banner-container">
        <div>
          <h1>Join SmartBank Today</h1>
          <p>
            Experience the future of banking with SmartBank. Join thousands of
            satisfied customers who have chosen us as their trusted financial
            partner. Start your journey towards financial success and enjoy a
            seamless banking experience like never before.
          </p>
          <input type="button" value="Join Us Today" />
        </div>
      </div>
      <div className="testimonial-container">
        <h1>Testimonials</h1>
        <div className="testimonial-list">
          <div className="testimonial">
            <div>
              <span></span>
              <div>
                <p>Profile Name</p>
                <div>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              corrupti harum, velit minus error perspiciatis fugiat quas neque
              molestias sapiente.
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <div className="testimonial">
            <div>
              <span></span>
              <div>
                <p>Profile Name</p>
                <div>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              corrupti harum, velit minus error perspiciatis fugiat quas neque
              molestias sapiente.
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <div className="testimonial">
            <div>
              <span></span>
              <div>
                <p>Profile Name</p>
                <div>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              corrupti harum, velit minus error perspiciatis fugiat quas neque
              molestias sapiente.
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <div className="testimonial">
            <div>
              <span></span>
              <div>
                <p>Profile Name</p>
                <div>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              corrupti harum, velit minus error perspiciatis fugiat quas neque
              molestias sapiente.
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <div className="testimonial">
            <div>
              <span></span>
              <div>
                <p>Profile Name</p>
                <div>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star  star-checked"></span>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              corrupti harum, velit minus error perspiciatis fugiat quas neque
              molestias sapiente.
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <div className="testimonial">
            <div>
              <span></span>
              <div>
                <p>Profile Name</p>
                <div>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              corrupti harum, velit minus error perspiciatis fugiat quas neque
              molestias sapiente.
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <div className="testimonial">
            <div>
              <span></span>
              <div>
                <p>Profile Name</p>
                <div>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                  <span className="fa fa-star star-checked"></span>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              corrupti harum, velit minus error perspiciatis fugiat quas neque
              molestias sapiente.
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
      </div>
      <div ref={about} className="about-container">
        <div>
          <div>
            <h1>About SmartBank</h1>
            <p>
              At SmartBank, we are committed to revolutionizing the way you
              experience banking. With a customer-centric approach and
              cutting-edge technology, we strive to make managing your finances
              effortless, secure, and rewarding.
            </p>
          </div>
          <div>
            <h1>Our Vision</h1>
            <p>
              Our vision is to empower individuals and businesses to achieve
              their financial goals by offering innovative banking solutions
              tailored to their needs. We believe in simplifying banking
              processes and providing personalized experiences that enhance your
              financial journey.
            </p>
          </div>
        </div>
        <div>
          <h1>Why Choose SmartBank?</h1>
          <ul>
            <li>
              Seamless Digital Banking: Enjoy the convenience of 24/7 access to
              your accounts, transactions, and services through our
              user-friendly online and mobile banking platforms.
            </li>
            <li>
              Robust Security Measures: Your privacy and security are our top
              priorities. We employ advanced encryption and authentication
              methods to ensure the safety of your financial information.
            </li>
            <li>
              Personalized Support: Our dedicated team of banking experts is
              always ready to assist you with any queries or concerns. We
              provide personalized support to ensure you receive the best
              banking experience.
            </li>
            <li>
              Competitive Products and Services: From savings and checking
              accounts to loans and investments, we offer a comprehensive range
              of financial products and services designed to meet your diverse
              needs.
            </li>
          </ul>
        </div>
      </div>
      <div ref={contact} className="contact-container">
        <div>
          <div>
            <h1>Contact Us</h1>
            <p>
              Have a question or need assistance? Our dedicated support team is
              here to help. Reach out to us using the contact information below
              or fill out the form, and we'll get back to you as soon as
              possible.
            </p>
            <ul>
              <li>Contact Information:</li>
              <li>Phone: +1234567890</li>
              <li>Email: info@smartbank.com</li>
              <li>Address: 123 Smart Street, City, Country</li>
            </ul>
          </div>
          <form onSubmit={handleContactSubmit}>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Full Name" />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter your message here..."
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <Footer handleSlide={handleSlide} />
    </>
  );
}

export default Index;
