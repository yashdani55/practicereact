import axios from "axios";
import { useState } from "react";
import Messages from "./Messages";
export default function UserForm() {

  const [userform, setUserForm] = useState({ firstname: "Ram", age: 20 });
  const [message,setMessage]=useState({type:"",text:""});
  const handleEvent = function (event) {
    setUserForm({ ...userform, [event.target.name]: event.target.value })
  }


  const save = function (event) {
    console.log(userform);
    const promise = axios.post("http://localhost:4200/users", userform);
    promise.then(function (response) {
      console.log(response);
      setMessage({...message, type: 'success', text: "Record was saved"});
    })
    promise.catch(function(error){
      setMessage({...message, type: 'error', text: "Record was not saved"})
    })
  
  }
  function handleSelectChange(event) {
    console.log(event.target.value);
    setUserForm({ ...userform, [event.target.name]: event.target.value })
  }


  return (
    <div>
      <h3>Create User</h3>
      <Messages message={message}></Messages>
      <div className="form-group">
        <label htmlFor="fname">First Name</label>
        <input name='firstname' placeholder="First Name" id="fname" className="form-control" value={userform.firstname} onChange={handleEvent}></input>
      </div>
      <label htmlFor="age">Age</label>
      <div className="form-group">
        <input name='age' type='number' className="form-control" id="age" placeholder="Age" value={userform.age} onChange={handleEvent}></input>
      </div>
      <div className="form-group">
        <label htmlFor="doj">Joining Date</label>
        <input type="date" name="date" id="doj" className="form-control" onChange={handleEvent}></input>
      </div>
      <div className="dropdown">
      <select onChange={handleSelectChange} name="skill">
        <option value="default" defaultValue>Select the Skill</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
      </div>
      <button className="btn btn-primary" onClick={save}>Save</button>

    </div>

  )
}