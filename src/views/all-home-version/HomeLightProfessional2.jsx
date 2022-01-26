import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFive";
import About from "../../components/about/AboutThree";
import Resume from "../../components/resume/ResumeAnimation";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Map from "../../components/contact/Map";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeLightSidebarTwo = () => {
  useDocumentTitle("Ebi Barzegary Homepage");
  document.body.classList.add("theme-light");
  return (
    <div className="main-left">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Resume />
      {/* End Resume Section */}

      {/*<section id="work" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <Portfolio />
        </div>
      </section>
       End Portfolio Section */}

      {/*<section id="projects" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
            <h3>Projects</h3>
          </div>
          <Blog />
        </div>
      </section>
      {/* End Portfolio Section */}

      <section id="contactus" className="section theme-light dark-bg">
        <div className="container">
          <div className="row">
            <div className="">
              <ContactInfo />
            </div>
            {/* End Contact info 

            <div className="col-lg-7 ml-auto m-15px-tb  ">
              <div className="contact-form">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}

            <div className="col-12">
             <Map />
              {/* End google-map */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className="footer dark">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default HomeLightSidebarTwo;
