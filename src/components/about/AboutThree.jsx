import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const AboutThree = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/me_pro.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Quantitative Marketing Ph.D.</p>
                  <h3>Ebi Barzegary</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I started my computer science journey during high school when I competed in a national-level algorithm design and programming competition where I won a silver medal. I followed my passion for computer science by doing my bachelor’s in computer engineering and three years of professional full-stack development experience at EPie. My solid computer science and engineering background is the foundation of my professional and academic careers.  </p>
                  <p>
                    I realized my passion for human behavior and psychology after joining a Social Neuroscience Research center during my undergrad studies. In addition to being involved in various research projects on decision-making, I worked on modeling the evolution of human behaviors using methodologies such as evolutionary game theory and genetic algorithms. 
				  </p>
				  <p>
				    After my undergraduate studies, I co-founded EPie; a startup focused on developing fully-tailored web applications for large corporations. We started it with two people - after two years, EPie had around ten employees working on multiple projects. Additionally, my interest in social science and business prompted me to do my master’s in business administration while working at EPie. Doing an MBA not only helped me with managing EPie but also inspired me to do my Ph.D. in marketing.</p>
				  <p>
				  I started my Ph.D. in quantitative marketing at the University of Washington in Fall 2016. I started collaborating with Adobe as a data science researcher beginning in the summer of 2017. My dissertation titled “Algorithms for customer acquisition and retention in SaaS business model” is motivated by this research opportunity. I finished my Ph.D. in Fall 2021 with computer science and economics minors.
				  </p>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>Core skill set</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated }
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
			
			
          {/*<div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />*/}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default AboutThree;
