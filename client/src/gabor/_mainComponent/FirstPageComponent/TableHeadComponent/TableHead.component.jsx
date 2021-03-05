import '../../style.css'
const TableHeadComponent = () => {
  return ( 
    <thead className="table table-dark table-hover">
    <tr>
      <th scope="col bold"># on page</th>
      <th scope="col bold">Planet Name</th>
      <th scope="col bold">Diameter</th>
      <th scope="col bold">Climate</th>
      <th scope="col bold">Surface Water (%)</th>
      <th scope="col bold">Population</th>
      <th scope="col bold">Residents</th>
    </tr>
  </thead>
   );
}
 
export default TableHeadComponent;