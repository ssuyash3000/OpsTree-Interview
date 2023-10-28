export default function CarList({ carList }) {
  return (
    <div
      className="carList"
      style={{ display: "flex", flexDirection: "column" }}>
      <h1>CarList</h1>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Model</th>
            <th>Quntity</th>
          </tr>
        </thead>
        <tbody>
          {carList.map((currCar, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{currCar.carname}</td>
              <td>{currCar.model}</td>
              <td>{currCar.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
