import React ,{useState,useEffect} from 'react'


const ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

function DataTable(){
const [TableState, setTableState] = useState([])

const fetchData = async () =>{
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    setTableState(data)
    console.log("render in fetchData")
}
useEffect(() => {
    fetchData()
    console.log("render in fetchData")
  
  },[])
return (
    
      <table>
        <thead>
        <tr>
          <th>House</th>
          <th>Room</th>
          <th>Area</th>
        </tr>
        </thead>
        {TableState.map(table => {
          return (
            <tbody>
            <tr >
              <td>{table.name}</td>
              <td>{table.roomName}</td>
              <td>{table.roomArea}</td>
            </tr>
            </tbody>
          )
        })}
      </table>
    
  )

}
export default DataTable;