import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Lottery = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => {
    //尚無判斷是否成功要求暫定成功
    setBtnCss("success");
    //if(失敗){setBtnCss("failure");}
  };
  const { name, store, amount, phone, pament } = errors;

  useEffect(() => {
    if (name || store || amount || phone || pament) {
      setBtnCss("disabled");
    } else if (btncss === "success") {
      setBtnTxt("success");
    } else if (btncss === "failure") {
      setBtnTxt("failure");
    } else if (btncss === "disabled") {
      const a = () => {
        setBtnTxt("submit");
      };
      a();
    }
  }, [name, store, amount, phone, pament, onSubmit]);

  const contBtnCss = {
    submit: "submit",
    disabled: "submit  disabled",
    success: "submit  setsubmit",
    failure: "submit  setfailure",
  };

  const [btncss, setBtnCss] = useState("submit");
  const [btntxt, setBtnTxt] = useState("submit");

  return (
    <div className="lottery">
      <div id="lotteryform" className="form">
        <div className="formtag">
          <p>FORM</p>
          <div className="turtle">
            <img src={require("./icons/turt11.png")} alt="turt" />
          </div>
        </div>
        <form action="" id="myForm" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="store">store</label>
          <input
            placeholder="store"
            list="stores"
            id="store"
            type="text"
            {...register("store", {
              required: { value: true, message: "error message" },
              validate: (value) => {
                if (value === "store1") {
                  console.log(value);
                  return true;
                } else if (value === "store2") {
                  return true;
                } else if (value === "store3") {
                  return true;
                }
                return false;
              },
            })}
          />
          {errors.store?.type === "validate" && <p role="alert">no result</p>}
          {errors.store?.type === "required" && <p role="alert">required</p>}
          <datalist id="stores">
            <option value="store1" />
            <option value="store2" />
            <option value="store3" />
          </datalist>
          <label htmlFor="name">name</label>
          <input
            placeholder="Your Name"
            id="name"
            type="text"
            {...register("name", {
              required: true,
              pattern: /^[\u4E00-\u9FA5A-Za-z]/,
            })}
          />
          {errors.name?.type === "pattern" && <p role="alert">wrong format</p>}
          {errors.store?.type === "required" && <p role="alert">required</p>}
          <label htmlFor="phone">phone</label>
          <input
            placeholder="123-4567-8901"
            id="phone"
            type="tel"
            {...register("phone", {
              required: true,
              pattern: /09\d{2}\d{3}\d{3}/,
            })}
          />
          {errors.phone?.type === "pattern" && <p role="alert">wrong format</p>}
          {errors.phone?.type === "required" && <p role="alert">required</p>}
          <label htmlFor="amount">Amount&nbsp;of&nbsp;consunption</label>
          <input
            id="amount"
            {...register("amount", {
              required: true,
              min: 0,
              pattern: /\d/,
            })}
          />
          {errors.amount?.type === "min" && <p role="alert">wrong format</p>}
          {errors.amount?.type === "pattern" && (
            <p role="alert">wrong format</p>
          )}
          {errors.amount?.type === "required" && <p role="alert">required</p>}
          <label htmlFor="payment">payment</label>
          <select
            id="pament"
            {...register("pament", {
              required: true,
            })}
          >
            <option value=""></option>
            <option value="digital payment">digital payment</option>
            <option value="ATM">ATM</option>
          </select>
          {errors.pament?.type === "required" && <p role="alert">required</p>}
          {/* <input id="pament" type="select" /> */}
        </form>
      </div>
      <button type="submit" form="myForm" className={contBtnCss[btncss]}>
        <img className="success" src={require("./icons/Vector.png")} alt="" />
        <img className="failure" src={require("./icons/VectorX.png")} alt="" />
        {btntxt}
      </button>
      {btncss === "success" && (
        <p className="successmsg">This person does exist</p>
      )}
      {btncss === "failure" && (
        <p className="failuremsg">This person does not exist</p>
      )}
    </div>
  );
};

export default Lottery;
