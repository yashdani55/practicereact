import axios from "axios";
import { useState } from "react"

export default function UserForm() {

  const [userform, setUserForm] = useState({ firstname: "Ram", age:20  });
  const handleEvent = function (event) {
    setUserForm({ ...userform, [event.target.name]: event.target.value })
  }


  const save = function (event) {
    console.log(userform);
    const promise = axios.post("http://localhost:4200/users", userform);
    promise.then(function(response) {
      console.log(response);
    })
  }

  return (
    <div>
      <h3>Create User</h3>
      <input name='firstname' placeholder="First Name" value={userform.firstname} onChange={handleEvent}></input>
      <input name='age' type='number' placeholder="Age" value={userform.age} onChange={handleEvent}></input>
      Joining Date: <input type="date" name="date" onChange={handleEvent}></input>
      <button onClick={save}>Save</button>
    </div>
  )
}