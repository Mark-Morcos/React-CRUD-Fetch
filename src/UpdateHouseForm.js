import React, {useState} from 'react'

const ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
const initialState = {
    id: '',
    name: '',
    roomName: '',
    roomArea: '',
    rooms: []

}

function UpdateHouseForm() {
    const [formState, setFormState] = useState(initialState)
    const onChange = e => setFormState({...formState, [e.target.name]: e.target.value})
    const updateData = async () => {
        const res = await fetch(`https://ancient-taiga-31359.herokuapp.com/api/houses/${formState.id}`, 
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                    id: formState.id,
                    name: formState.name,
                    rooms: [(formState.roomName),(formState.roomArea)]
                })
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = event => {
        event.preventDefault()
        updateData()
    }

  return (
    <div>
        <h2>UpdatePost Form</h2>
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter ID'
                    name='id'
                    value={formState.id}
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder='New House name'
                    name='name'
                    value={formState.name}
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter New Room Name'
                    name='roomName'
                    value={formState.roomName}
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter New Room Area'
                    name='roomArea'
                    value={formState.roomArea}
                    onChange={onChange}
                />
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export default UpdateHouseForm