import React from "react";

const Lottery2 = () => {
  return (
    <div className="lottery2">
      <div className="lottety2item">
        <div className="left">
          <img src={require("./icons/leftimg.png")} alt="leftimg" />
        </div>
        <div className="lottery2txt">
          <p>13.32</p>
          <p>who seeks after it and wants to have it</p>
        </div>
        <div className="right">
          <img src={require("./icons/rightimg.png")} alt="rightimg" />
        </div>
        <div className="lottery2img">
          <img src={require("./icons/lighthouse.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Lottery2;
