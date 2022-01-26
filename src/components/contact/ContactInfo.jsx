import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info row">
	  <div class='col-lg-7 col-xl-6 m-15px-tb'>
	  
        <h4>What’s your story? Get in touch</h4>
        <p>
          I would love to get to know you and connect. Send me a text message or email, and we will start from there.
        </p>
	</div>
		  <div class='col-lg-5 col-xl-4 m-15px-tb'>

        <ul>
			<li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              PACCAR Hall
			  <br/>
			  4277 NE Stevens Way, Seattle, WA 98195
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">ebar@uw.edu</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+1 (415) 812-5028 </span>
          </li>
          {/* End li */}
        </ul>
			</div>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
