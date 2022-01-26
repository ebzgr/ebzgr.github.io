import React from "react";

const AwardContnet = [
  {
    img: "foster",
    awardName: "James B. Wiley Endowed PhD Fellowship",
    awardFor: "2020-2021",
    delayAnimation: "0",
  },
  {
    img: "foster",
    awardName: "Gary Furukawa Distinguished Leader Fellowship",
    awardFor: "2016-2020",
    delayAnimation: "200",
  },
  {
    img: "bmn",
    awardName: "NFE's Grant for Undergraduate Studies",
    awardFor: "2009-2013",
    delayAnimation: "0",
  },
  {
    img: "bmn",
    awardName: "Introduced as Scientific Elite by NFE",
    awardFor: "Fall 2008",
    delayAnimation: "200",
  },
  {
    img: "ysc",
    awardName: "Silver Medal at INOI",
    awardFor: "April 2007",
    delayAnimation: "0",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-6 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
