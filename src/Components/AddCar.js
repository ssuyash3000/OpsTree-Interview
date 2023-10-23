import { useState } from "react";

export default function AddCar({ handleAddCar }) {
  const [input, setInput] = useState({
    carname: "",
    model: "",
    qty: "",
  });

  const addCar = (e) => {
    e.preventDefault();
    let car = {
      carname: input.carname,
      model: input.model,
      qty: input.qty,
    };
    setInput({ carname: "", model: "", qty: "" });
    handleAddCar(car);
  };

  return (
    <div className="AddCar">
      <h1>Add Car</h1>
      <form onSubmit={addCar}>
        <label>Enter Car Name</label>
        <input
          type="text"
          required
          value={input.carname}
          onChange={(e) => {
            //console.log(e.target.value);
            setInput((prevState) => ({
              ...prevState,
              carname: e.target.value,
            }));
          }}
        />
        <label>Enter Model</label>
        <input
          type="text"
          required
          value={input.model}
          onChange={(e) => {
            // console.log(e.target.value);
            setInput((prevState) => ({ ...prevState, model: e.target.value }));
          }}
        />
        <label>Quantity</label>
        <input
          type="number"
          required
          value={input.qty}
          onChange={(e) => {
            //console.log(e.target.value);
            setInput((prevState) => ({ ...prevState, qty: e.target.value }));
          }}
        />
        <button>Add Car</button>
      </form>
    </div>
  );
}
