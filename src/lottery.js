import React from "react";

const Lottery = () => {
  return (
    <div className="lottery">
      <div className="form">
        <form action="" id="myForm">
          <label htmlFor="store">store</label>
          <input
            placeholder="store"
            list="stores"
            id="store"
            type="text"
            required
          />
          <datalist id="stores">
            <option value="store1" type="radio" id="dewey" name="drone" />
            <option value="store2" type="radio" id="dewey" name="drone" />
            <option value="store3" type="radio" id="dewey" name="drone" />
            <option value=" no" type="radio" id="dewey" name="drone" />
          </datalist>

          <label htmlFor="name">name</label>
          <input placeholder="Your Name" id="name" type="text" required />
          <label htmlFor="phone">phone</label>
          <input placeholder="phone number" id="phone" type="phone" required />
          <label htmlFor="amount">Amount&nbsp;of&nbsp;consunption</label>
          <input id="amount" type="number" min={0} required />
          <label htmlFor="payment">payment</label>
          <input id="pament" type="text" required />
        </form>
      </div>
      <button type="submit" form="myForm">
        submit
      </button>
    </div>
  );
};

export default Lottery;
