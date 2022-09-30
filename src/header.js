import React from "react";

const Header = () => {
  return (
    <div className="header">
      {/* <img id="wave" src={require("./icons/wave.png")} alt="wave" /> */}
      <img id="wave2" src={require("./icons/wave2.png")} alt="wave2" />
      {/* animail */}
      <div className="turtle">
        <img src={require("./icons/turt11.png")} alt="turt" />
      </div>
      {/* animail */}
      <div className="txtandbtn">
        <h1>There is no one</h1>
        <p>who loves pain</p>
        <div className="btn">
          <a href="#lotteryform">FORM</a>
        </div>
      </div>

      <div className="content">
        <div className="con1 con">
          <h3>parapraph</h3>
          <ol>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. um hic
              harum officiis.
            </li>
          </ol>
        </div>
        <div className="con2 con">
          <div className="bubblesup">
            <div className="bubble" />
            <img src={require("./icons/sup.png")} alt="sup" />
          </div>
          <h3>parapraph</h3>
          <ol>
            <li>
              Quisque sodales leo <strong>vitae vulputate auctor.</strong>
            </li>
            <li>
              Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero
              a pellentesque blandit.
            </li>
            <li>
              Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.
            </li>
            <li>
              Donec ultrices sapien
              <strong>vitae leo venenatis ullamcorper.</strong>
            </li>
          </ol>
          <div className="firesup" />
        </div>
      </div>
      <div className="header-food">
        <img src={require("./icons/wavess.png")} alt="" />
        {/* <img src={require("./icons/waves.png")} alt="" /> */}
      </div>
    </div>
  );
};

export default Header;
