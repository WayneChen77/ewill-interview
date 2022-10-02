import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Lottery = () => {
  const {
    register,

    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({ mode: "onBlur" });
  const onSubmit = () => {
    //尚無判斷是否成功要求暫定成功
    setBtnCss("success");
    //if(失敗){setBtnCss("failure");}
  };
  const { name, store, amount, phone, pament } = errors;
  const [btncss, setBtnCss] = useState("submit");
  const [btntxt, setBtnTxt] = useState("submit");
  useEffect(() => {
    if (name || store || amount || phone || pament) {
      setBtnCss("disabled");
    } else if (btncss === "success") {
      setBtnTxt("success");
      // } else if (btncss === "failure") {
      //   setBtnTxt("failure");
    } else if (btncss === "disabled") {
      const a = () => {
        setBtnTxt("submit");
      };

      a();
    }
    if (!name & !store & !amount & !phone & !pament & (btncss !== "success")) {
      setBtnCss("submit");
    }
  }, [name, store, amount, phone, pament, btncss]);

  const contBtnCss = {
    submit: "submit",
    disabled: "submit  disabled",
    success: "submit  setsubmit",
    failure: "submit  setfailure",
  };

  return (
    <div className="lottery">
      <div id="lotteryform" className="form">
        <div className="formtag">
          <p>FORM </p>
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
            style={{ borderColor: errors.store && "red" }}
          />
          {errors.store?.type === "validate" && (
            <span role="alert" className="errormsg">
              no&nbsp;result
            </span>
          )}
          {errors.store?.type === "required" && (
            <span role="alert" className="errormsg">
              required
            </span>
          )}

          <datalist id="stores" defaultValue={"123"}>
            <option value="store1" />
            <option value="store2" />
            <option value="store3" />
            <option defaultValue="123" />
            {errors.store?.type === "validate" && <option value="no result" />}
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
            style={{ borderColor: errors.name && "red" }}
          />
          {errors.name?.type === "pattern" && (
            <span role="alert" className="errormsg">
              wrong format
            </span>
          )}
          {errors.name?.type === "required" && (
            <span role="alert" className="errormsg">
              required
            </span>
          )}
          <label htmlFor="phone">phone</label>
          <input
            placeholder="0900-000-000"
            id="phone"
            type="tel"
            {...register("phone", {
              required: true,
              pattern: /09\d{2}(\d{6}|-\d{3}-\d{3})/,
            })}
            style={{ borderColor: errors.phone && "red" }}
          />
          {/* 09\d{2}(\d{6}|-\d{3}-\d{3}) */}
          {errors.phone?.type === "pattern" && (
            <span role="alert" className="errormsg">
              wrong format
            </span>
          )}
          {errors.phone?.type === "required" && (
            <span role="alert" className="errormsg">
              required
            </span>
          )}
          <label htmlFor="amount">Amount&nbsp;of&nbsp;consunption</label>
          <input
            id="amount"
            {...register("amount", {
              required: true,
              min: 0,
              pattern: /\d/,
            })}
            placeholder="Amount"
            type="number"
            inputMode="numeric"
            style={{ borderColor: errors.amount && "red" }}
          />
          {errors.amount?.type === "min" && (
            <span role="alert" className="errormsg">
              wrong format
            </span>
          )}
          {errors.amount?.type === "pattern" && (
            <span role="alert" className="errormsg">
              wrong format
            </span>
          )}
          {errors.amount?.type === "required" && (
            <span role="alert" className="errormsg">
              required
            </span>
          )}
          <label htmlFor="payment">payment</label>
          <select
            id="pament"
            {...register("pament", {
              required: true,
            })}
            style={{ borderColor: errors.pament && "red" }}
          >
            <option value=""></option>

            <option value="digital payment">digital payment</option>
            <option value="ATM">ATM</option>
          </select>
          {errors.pament?.type === "required" && (
            <span role="alert" className="errormsg">
              required
            </span>
          )}
          {/* <input id="pament" type="select" /> */}
        </form>
      </div>
      <button
        type="submit"
        form="myForm"
        disabled={isSubmitting}
        className={contBtnCss[btncss]}
      >
        <img className="success" src={require("./icons/Vector.png")} alt="" />
        <img className="failure" src={require("./icons/VectorX.png")} alt="" />
        {btntxt}
      </button>
      {btncss === "success" && (
        <p className="successmsg">This person does exist </p>
      )}
      {btncss === "failure" && (
        <p className="failuremsg">This person does not exist </p>
      )}
    </div>
  );
};

export default Lottery;
