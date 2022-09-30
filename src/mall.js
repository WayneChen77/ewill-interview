import React from "react";

const Mall = () => {
  return (
    <div className="mallbackground">
      <div className="mall">
        <div className="malltxt">
          <p>Neque porro quisquam est qiu dolorem</p>
        </div>
        <div className="mallhouse">
          <img src={require("./icons/Group1.png")} alt="Group1" />
          <div className="mallcontent">
            <div className="malltxt">
              <h3>Argentina</h3>
              <div className="mallstart">
                <img src={require("./icons/Vector3.png")} alt="Vector3" />
                <p>adipisci velit</p>
              </div>
              <div className="mallstart">
                <img src={require("./icons/Vector3.png")} alt="Vector3" />
                <p>adipisci velit</p>
              </div>
              <div className="malllink">
                <a href="#">
                  <img src={require("./icons/Group830.png")} alt="Group830" />
                </a>
                <a href="#">
                  <img src={require("./icons/Group831.png")} alt="Group831" />
                </a>
                <a href="#">
                  <img src={require("./icons/Group832.png")} alt="Group832" />
                </a>
                <a href="#">
                  <img src={require("./icons/Group833.png")} alt="Group833" />
                </a>
              </div>
              <img src={require("./icons/Group2.png")} alt="Group2" />
            </div>
          </div>
          <img
            className="mallbotbtn"
            src={require("./icons/Vector4.png")}
            alt="Vector4"
          />
        </div>
      </div>
    </div>
  );
};

export default Mall;
