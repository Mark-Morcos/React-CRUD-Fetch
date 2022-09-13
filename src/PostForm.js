import React ,{useState} from 'react'

const ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
const intialState ={
  
    name: '',
    roomName: '',
    roomArea: '',
    rooms: []
}
function PostForm(){

    const [formState, setFormState] = useState(intialState)

const onChange = e => setFormState({...formState, [e.target.name]: e.target.value})

const postData = async () =>{
    const res = await fetch(ENDPOINT,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                   
                    name: formState.name,
                    rooms: [(formState.roomName),(formState.roomArea)]

                    
                })      
    })
    const data = await res.json()
    console.log(data)
}

const onSubmit = event =>{
    event.preventDefault()
    postData()
}


const handleClick = () => {
    console.log('inside click')
    return(
         
            <div>
                <input type="text"
                placeholder='Enter rooms name'
                name='roomName'
                value={formState.roomName}
                onChange={onChange}
                />
                <input
                type="text"
                placeholder='Enter rooms area'
                name='roomsArea'
                value={formState.roomArea}
                onChange={onChange}
                />
                </div>
               
    );
  };
return (
    <div>
        <h1>Post Form</h1>
        <form onSubmit={onSubmit}>
            
            <div>
                <input
                type="text"
                placeholder='Enter New House'
                name='name'
                value={formState.name}
                onChange={onChange}
            />
                </div>
                <div>
                <input 
               type="text"
                placeholder='Enter room name'
                name='roomName'
                value={formState.roomName}
                onChange={onChange}
                />
                <input
                type="text"
                placeholder='Enter room area'
                name='roomArea'
                value={formState.roomArea}
                onChange={onChange}
                />
             </div>
            <div>
               
                
            <button type="button" onClick={handleClick}>
        Click Here to add a room
      </button>
                
            </div>
            <input type="submit" />
        </form>
    </div>
  )

}
export default PostForm;