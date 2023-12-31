import { useState } from "react";
import "./App.css";
import AddCar from "./Components/AddCar";

import CarList from "./Components/CarList";
import SellCar from "./Components/SellCar";

function App() {
  let [carList, setCarList] = useState([]);
  let [extraMessage, setExtraMessage] = useState("");
  let [page, setPage] = useState("addform");
  const handleAddCar = (car) => {
    let curr = carList.filter(({ carname, model, qty }) => {
      return carname === car.carname && model === car.model;
      //return { carname, model, qty };
      //}
    });
    if (curr.length === 0) setCarList((prevCarLsit) => [...prevCarLsit, car]);
    else {
      setCarList((carList) => {
        let newList = carList.filter(({ carname, model, qty }) => {
          return carname !== car.carname || model !== car.model;
          //   return { carname, model, qty };
          // }
        });
        curr[0].qty = Number(curr[0].qty) + Number(car.qty);
        return [...newList, curr[0]];
      });
    }
    console.log(carList);
  };

  return (
    <div className="App">
      <div id="extramessage">{extraMessage}</div>
      <button
        onClick={() => {
          page === "addform" ? setPage("carList") : setPage("addform");
        }}>
        {page === "addform" ? "Take me to Car list" : "Take me to add form"}
      </button>
      <button
        onClick={() => {
          page === "sellcar" ? setPage("carList") : setPage("sellcar");
        }}>
        {page === "sellcar" ? "Take me to CarList" : "Take me to Sell Car Page"}
      </button>
      {page === "sellcar" && (
        <SellCar
          carList={carList}
          setCarList={setCarList}
          setExtraMessage={setExtraMessage}
        />
      )}
      {page === "addform" && <AddCar handleAddCar={handleAddCar} />}
      {page === "carList" && <CarList carList={carList} />}
    </div>
  );
}

export default App;
