import axios from "axios";
import { useEffect, useState } from "react"
import Counter from "./Counter";
export default function Userlist(){
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        if(users.length!==0){
            return;
        }
        console.log("called...")
        const promise=axios.get("http://localhost:4200/users");
        promise.then((response)=>setUsers(response.data))
    })
    return (
        <div>
            <Counter count={users.length}></Counter>
            <table className="table table-border table-striped table-hover">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Age</th>
                    <th>Joining Date</th>
                    <th>Skill</th>
                    </tr>
                    </thead>
                <tbody>
                    {users.map((user,index)=><tr key={user.id}>
                        <td>{user.firstname}</td>
                        <td>{user.age}</td>
                        <td>{user.date}</td>
                        <td>{user.skill}</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    )
                    }
                </tbody>
                
            </table>

        </div>
    )
}