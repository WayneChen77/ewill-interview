import React from "react";

const Gift = () => {
  //模擬data資料
  const giftdata = [
    {
      lavel: "A",
      giftright: "one",
      txt: "dehumidifier",
      color: "gold",
    },
    {
      lavel: "B",
      giftright: "one",
      txt: "range hood",
      color: "gold",
    },
    {
      lavel: "C",
      giftright: "one",
      txt: "vacuum cleaner",
      color: "gold",
    },
    {
      lavel: "D",
      giftright: "one",
      txt: "toaster",
      color: "silver",
    },
    {
      lavel: "E",
      giftright: "one",
      txt: "scale",
      color: "silver",
    },
    {
      lavel: "F",
      giftright: "one",
      txt: "straightening iron",
      color: "silver",
    },
    {
      lavel: "G",
      giftright: "FIVE",
      txt: "vacum cleaner",
      color: "silver",
    },
    {
      lavel: "H",
      giftright: "TEN",
      txt: "rice cooker",
      color: "silver",
    },
  ];
  console.log(giftdata);

  return (
    <div className="Gift">
      <div className="background">
        {giftdata.map((data) => (
          <div className="giftitem">
            <div className="giftbottom" />
            <div className="giftlabel">
              <img src={require("./icons/certificateA.png")} alt="" />
              <p>{data.lavel}</p>
            </div>
            <div className="giftright">
              <p>{data.giftright}</p>
            </div>
            <div className="gifttxt">
              <p>{data.txt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;
