import React from "react";

const ServiceContent = [
  {
    icon: "icon-target",
    title: "Marketing Science",
    descriptions: `Ph.D. in quantitative marketing, with the experience of working on industry-motivated marketing problems in the domain of customer acquisition and retention in 
	the SaaS business model. Ad-hoc reviewer at Marketing Science, and Quantitative Marketing and Economics journals.`,
	delayAnimation : "",
  },
  {
    icon: "icon-layers",
    title: "Data Science",
    descriptions: `Used state-of-the-art machine learning tools for prediction, treatment effect estimation, causal inference, and personalized policy design tasks.
	Proven track record of working on novel problems with the experience of designing and coding an open-source machine learning algorithm.`,
	delayAnimation : "100",
  },
  {
    icon: "icon-lightbulb",
    title: "Business Analytics",
    descriptions: `Ability to gather data from different sources, and extract the big picture story behind customers' behavior through data modeling.
	Experienced measuring the causal effect of marketing interventions at individual level and designing personalized marketing intervention policies.`,
	delayAnimation : "200",
  },
  {
    icon: "icon-presentation",
    title: "Management",
    descriptions: `More than two years of management experience with a master's degree in business administration. Self motivated with strong
	relationship management skills, presentation skills, problem-solving skills, and team-working capabilities.`,
	delayAnimation : "",
  },
  {
    icon: "icon-tools-2",
    title: "System Design",
    descriptions: `More than two years of system design and development experience. Designed a fully-integrated payroll system consist of more than 30 subsystems
	for SAIPA corporation, one of the largest car manufacturers in middle east with around 50K employees.`,
	delayAnimation : "100",
  },
  {
    icon: "icon-gears",
    title: "Computer Engineering",
    descriptions: `More than 10 years of programming experience in different languages including, but not limited to, C++, Java, ASP, JavaScript, Python and R. Experience working with
	database query tools including SQL, BigQuery, Hive, Hadoop, Pandas, and Dask.`,
	delayAnimation : "200",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
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
