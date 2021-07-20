import { useState } from "react"

export default function Userlist(){
    const [users,setUsers]= useState([]);
    return (
        <div>
            <table className="table table-border table-striped table-hover">
                <thead>
                    <tr>
                    <td>First Name</td>
                    <td>Age</td>
                    </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td>Yash</td>
                        <td>22</td>
                    </tr>
                </tbody>
                
            </table>

        </div>
    )
}