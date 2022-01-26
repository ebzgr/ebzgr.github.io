import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Data Science Researcher`,
    jobType: `Adobe`,
    jobDuration: `Jun 2017 - Sep 2019`,
    timeDuraton: `Full Time / Part Time`,
    compnayName: "Adobe Inc",
    jobDescription: `A research collaboration opportunity focused on open-ended questions on customer acquisition and retention in the SaaS business model.
I designed a personalized free trial length assignment policy that led to a 6.8% increase in post-trial subscription rate in offline evaluation metric.
I used Spark and Hive to query into huge Hadoop databases.
I designed a new algorithm for the novel problem of modeling customers' dynamic choices in high-dimensional settings which reduced estimation bias by as much as 40% compared to traditional estimation approaches in simulation studies.`,
      delayAnimation: "",
  },
  {
    jobPosition: `Co-founder and Senior Developer`,
    jobType: `EPie`,
    jobDuration: `Sep 2013 - Jul 2016`,
    timeDuraton: `Co-founder`,
    compnayName: "EPie",
    jobDescription: `EPie is a startup with the focus on design and development of fully-tailored web applications for large corporations. Some of my notable tasks during my professional experience at EPie are i)
	design and implementation of an extensive code-generator for HTML, ASP.NET and JavaScript using Visual Studio scaffolding, ii) leading a engineering team of 5 members to design a fully-tailored and integrated payroll
	system for SAIPA corporation, and iii) implementation of a single-page MVVM front-end architecture using KendoUI.`,
      delayAnimation: "100",
  },
  {
    jobPosition: `Teacher`,
    jobType: `Special topics in discrete math, algorithms and data structures`,
    jobDuration: `2009 - 2012`,
    timeDuraton: `Part Time`,
    compnayName: "Various schools",
    jobDescription: `Following my medal in Iranian National Olympiad in Informatics (INOI), I was hired as a teacher to prepare students for INOI. 
	The teaching curriculum includes topics in discrete mathematics, algorithm design and data structures. During my four years of experience as a teacher I was hired by seven schools in 
	four different states across Iran.`,
      delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "Sep 2016 - Dec 2021",
    degreeTitle: "Ph.D in Quantitative Marketing",
    instituteName: "Foster School of Business, University Of Washington",
  },
  {
    passingYear: "Sep 2014 - Jun 2016",
    degreeTitle: "Master of Business Administration",
    instituteName: "Sharif University of Technology",
  },
  {
    passingYear: "Feb 2009 - Sep 2013",
    degreeTitle: "Bachelor's in Computer Engineering",
    instituteName: "Sharif University of Technology",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
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
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
