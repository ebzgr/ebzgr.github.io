import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.289190027665!2d-122.31120178414116!3d47.659378179188174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490148c7ff84a3f%3A0x8a58dcfd31224abd!2sPACCAR%20Hall!5e0!3m2!1sen!2sus!4v1643231110717!5m2!1sen!2sus"
          ></iframe>
		  
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
