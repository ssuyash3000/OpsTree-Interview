export default function CarList({ carList }) {
  return (
    <div className="carList">
      <h1>CarList</h1>
      <ul style={{ listStyle: "none" }}>
        {carList.map((currCar) => (
          <li key={currCar.carname}>
            <div>Name: {currCar.carname}</div>
            <div>Model: {currCar.model}</div>
            Quantity: {currCar.qty}
          </li>
        ))}
      </ul>
    </div>
  );
}
