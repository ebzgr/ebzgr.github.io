import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Machine Learning",
    descriptions: `Used state-of-the-art machine learning tools for prediction, treatment effect estimation, causal inference, and personalized policy design tasks.
	Proven track record of working on novel problems with the experience of designing and coding an open-source machine learning algorithm.`,
  },
  {
    icon: "icon-desktop",
    title: "Causal Inference",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "icon-target",
    title: "System Design",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
