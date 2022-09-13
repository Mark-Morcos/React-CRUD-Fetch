import {useState , useEffect} from 'react'
import PostForm from './PostForm'
import UpdateHouseForm from './UpdateHouseForm'
import DeleteHouseForm from './DeleteHouseForm'
import DataTable from './DataTable';
import './App.css';

const ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
function App(){
  const [houses, setHouses] = useState([])

const fetchHouses = async () => {
  const res = await fetch(ENDPOINT)
  const data = await res.json()
  setHouses(data)   // parse the new data to setHouses 
  console.log(data)
  //data.forEach(house => {document.write(house.name + '<br>')})
  
}
useEffect(() => {
  fetchHouses()

},[])

return(
  <div className='App'>
   <div className='container'>
    <div className='col-4'>
    <DataTable />
    <div className='col-4'>
    <PostForm />
    <UpdateHouseForm />
    <DeleteHouseForm />
    
        </div>
        </div>
        </div>
        </div>
);
}
export default App;