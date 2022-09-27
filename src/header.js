import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="txtandbtn">
        <h1>There is no one</h1>
        <p>who loves pain</p>
        <button className="btn">FORM</button>
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
        </div>
      </div>
      <div className="header-food">
        <img src={require("./icons/海浪.png")} alt="" />
        <img src={require("./icons/海浪.png")} alt="" />
      </div>
    </div>
  );
};

export default Header;
