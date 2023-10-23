export default function CarList({ carList }) {
  return (
    <div className="carList">
      <h1>CarList</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}>
        {carList.map((currCar) => (
          <li
            key={currCar.carname}
            style={{
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              alignContent: "space-evenly",
              width: "fit-content",
            }}>
            <div>Name: {currCar.carname}</div>
            <div>Model: {currCar.model}</div>
            Quantity: {currCar.qty}
          </li>
        ))}
      </ul>
    </div>
  );
}
