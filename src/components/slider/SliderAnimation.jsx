import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {

};

const sliderContent = {
  name: "Ebi Barzegary",
  description: `A multifaceted professional with solid skillset in
				computer engineering, business administration, data science,
				and marketing science.`,
  btnText: "Experiences",
  btnText3: "Download Resume",
};


const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-lang">
		  {/*<ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul>*/}
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                <TextLoop>
                  <p className="loop-text lead">Marketing Research Scientist</p>
                  <p className="loop-text lead">Business Analyst</p>
				  <p className="loop-text lead">Data Scientist</p>
                  <p className="loop-text lead">Software Engineer</p>
                </TextLoop>{" "}
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div className="d-flex btn-wrapper">
                  <a className="px-btn btn-outline mr-4" href="#resume">
                    {sliderContent.btnText}
                  </a>
				  <a className="px-btn px-btn-theme" target="_blank" href="/data/Resume_Barzegary.pdf">
                    {sliderContent.btnText3}
                  </a>
                </div>
         
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/me_laptop_fire.jpg"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
