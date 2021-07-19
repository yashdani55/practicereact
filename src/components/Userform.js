import axios from "axios";
import { useState } from "react"

export default function Userform() {
    const [Userform, setUserform] = useState({ firstname: 'Ram', age: 22 });
    const handleevent = function (event) {
        console.log(event);
        setUserform({ ...Userform,[event.target.name]: event.target.value });

    }
    
    const save = function (event) {
        console.log(Userform);
        const promise=axios.post("http://localhost:4200/users",Userform);
        promise.then(function(response){
            console.log(response);
        })
    }
    return (
        <div>
            <h3>Create User</h3>
            <input name="name" value={Userform.firstname} onChange={handleevent}></input>
            <input name="age" value={Userform.age} onChange={handleevent}></input>
            <button onClick={save}>Save</button>
        </div>
    )
}