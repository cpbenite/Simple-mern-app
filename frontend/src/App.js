import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'http://localhost:3001'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios.get(url + '/users').then((res) => {
      setUsers(res.data)
    })
  }, [])

  const createUser = (e) => {
    e.preventDefault()
    const user = {name, age, username}
    axios
      .post(url + '/users', user)
      .then((res) => {
        alert('User created')
        setUsers([...users, user])
      })
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="userDisplay">
        {
          users.map((user) => {
            return (
              <div key={user._id}>
                <h2>Name: {user.name}</h2>
                <h2>Age: {user.age}</h2>
                <h2>Username: {user.username}</h2>
              </div>
            )
          })
        }
      </div>

      <div className="form">
        <form>
          <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
          <input type="number" placeholder="Age" onChange={e => setAge(e.target.value)}  />
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}  />
          <button onClick={createUser}>Create User</button>
        </form>
      </div>
    </div>
  );
}

export default App;
