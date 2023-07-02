import React from "react";
import "./Trend.css";

const Trend = () => {
  return (
    <div className="trend-box">
      <div className="main-scroll-div">
        <div>1</div>
        <div className="cover">
          <div className="scroll-images">
            <div className="child">
              <img className="child-img" src="desert.jpg" alt="n" />
            </div>
            <div className="child">
              <img className="child-img" src="desert.jpg" alt="n" />
            </div>
            <div className="child">
              <img className="child-img" src="desert.jpg" alt="n" />
            </div>
            <div className="child">
              <img className="child-img" src="desert.jpg" alt="n" />
            </div>
            <div className="child">
              <img className="child-img" src="desert.jpg" alt="n" />
            </div>
            <div className="child">
              <img className="child-img" src="desert.jpg" alt="n" />
            </div>
          </div>
        </div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Trend;
