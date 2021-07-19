import { useState } from "react"

export default function Userform() {
    const [Userform, setUserform] = useState({ firstname: 'Ram', age: 22 });
    const handleevent = function (event) {
        console.log(event);
        setUserform({ ...Userform, firstname: event.target.value });

    }
    const handleevent2 = function (event) {
        console.log(event);
        setUserform({ ...Userform, age: event.target.value });

    }
    const save = function (event) {
        console.log(Userform);
    }
    return (
        <div>
            <h3>Create User</h3>
            <input value={Userform.firstname} onChange={handleevent}></input>
            <input value={Userform.age} onChange={handleevent2}></input>
            <button onClick={save}>Save</button>
        </div>
    )
}