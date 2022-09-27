import React from "react";

const Lottery = () => {
  return (
    <div className="lottery">
      <div className="form">
        <form action="">
          <label htmlFor="store">store</label> <input type="text" />
          <label htmlFor="name">name</label> <input type="text" />
          <label htmlFor="phone">phone</label> <input type="phone" />
          <label htmlFor="amount">Amount&nbsp;of&nbsp;consunption</label>{" "}
          <input type="text" />
          <label htmlFor="payment">payment</label> <input type="text" />
        </form>
      </div>
      <button>submit</button>
    </div>
  );
};

export default Lottery;
