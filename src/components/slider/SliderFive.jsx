import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Ebi Barzegary",
  description: `A multifaceted professional with solid skillset in
				computer engineering, business administration, data science,
				and marketing science.`,
  btnText: "Experiences",
  btnText2: "Projects",
  btnText3: "Download Resume",
};

const SliderFive = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner home-banner-two slider-four bg-normal">
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="type-box">
                <h6>Hello there...</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">Marketing Science Research</p>
                  <p className="loop-text lead">Business Analysis</p>
				  <p className="loop-text lead">Data Science</p>
                  <p className="loop-text lead">Software Engineering</p>
				  <p className="loop-text lead">System Design</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
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
            {/* End .col */}
            <div className="col-md-6 order-1 order-md-2">
              <img src="img/slider/me_laptop_fire.jpg" alt="about image" />
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFive;
