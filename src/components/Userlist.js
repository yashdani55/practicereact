import axios from "axios";
import { useEffect, useState } from "react"

export default function Userlist(){
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        if(users.length!=0){
            return;
        }
        console.log("called...")
        const promise=axios.get("http://localhost:4200/users");
        promise.then((response)=>setUsers(response.data))
    })
    return (
        <div>
            <table className="table table-border table-striped table-hover">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Age</th>
                    </tr>
                    </thead>
                <tbody>
                    {users.map((user,index)=><tr>
                        <td>{user.firstname}</td>
                        <td>{user.age}</td>
                        </tr>
                    )
                    }
                </tbody>
                
            </table>

        </div>
    )
}