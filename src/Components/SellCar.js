import { useState } from "react";

export default function SellCar({ carList, setCarList, setExtraMessage }) {
  let [input, setInput] = useState({
    carnameinput: "",
    modelinput: "",
    qty: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("handle Submit called");
    let carexist = true;
    carList.map((currCar) => {
      if (
        currCar.carname === input.carnameinput &&
        currCar.model === input.modelinput &&
        input.qty > currCar.qty
      ) {
        carexist = false;
        setExtraMessage("That much cars are not available");
        setTimeout(() => setExtraMessage(""), 2000);
      }
    });
    if (carexist) {
      setCarList((prevCarList) => {
        let newCarList = prevCarList.map((currCar) => {
          if (
            currCar.carname === input.carnameinput &&
            currCar.model === input.modelinput
          ) {
            console.log(Number(input.qty));
            return {
              carname: currCar.carname,
              model: currCar.model,
              qty: Number(currCar.qty) - Number(input.qty),
            };
          } else {
            return currCar;
          }
        });
        return [...newCarList];
      });
    }
  
  }
  function handlecarInput(e) {
    console.log(e);
    setInput((prevState) => {
      console.log(e.target.value);
      return {
        ...prevState,
        carnameinput: e.target.value,
      };
    });
  }
  function handleModelInput(e) {
    console.log(e.target.value);
    setInput((prevState) => {
      console.log(e.target.value);
      return {
        ...prevState,
        modelinput: e.target.value,
      };
    });
  }
  function handleQtyInput(e) {
    console.log("hi", e.target.value);
    setInput((prevState) => {
      console.log(e.target.value);
      return {
        ...prevState,
        qty: Number(e.target.value),
      };
    });
  }
  return (
    <div id="sell-car">
      {carList.length === 0 ? (
        <h1>There is no car in the list</h1>
      ) : (
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}>
          <select value={input.carnameinput} onChange={handlecarInput}>
            <option value={0}>Please Select Carname</option>
            {carList.map(({ carname }) => {
              return <option value={carname}>{carname}</option>;
            })}
          </select>
          <select value={input.modelinput} onChange={handleModelInput}>
            <option value={0}>Please Select CarModel</option>
            {carList.map(({ carname, model }) => {
              return carname === input.carnameinput ? (
                <option value={model}>{model}</option>
              ) : (
                <></>
              );
            })}
          </select>
          <input value={input.qty} onChange={handleQtyInput} />
          {/* <select value={input.qty} onChange={handleQtyInput}>
            <option value={0}>Select Number of Cars</option>
            {carList.map(({ carname, model, qty }) => {
              return carname === input.carnameinput &&
                model === input.modelinput ? (
                <option value={qty}>{qty}</option>
              ) : (
                <></>
              );
            })}
          </select> */}
          <button>sell car</button>
        </form>
      )}
    </div>
  );
}
