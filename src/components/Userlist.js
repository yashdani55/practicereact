import axios from "axios";
import { useEffect, useState } from "react"
import Counter from "./Counter";
export default function Userlist() {
    const [users, setUsers] = useState([]);
    const [flags, setFlags] = useState([]);
    useEffect(() => {
        if (users.length !== 0) {
            return;
        }
        console.log("called...");
        const promise = axios.get("http://localhost:4200/users");
        promise.then((response) => setUsers(response.data))
    })
    const deleteUser = function () {


        const promise = axios.delete("http://localhost:4200/users/" + this);
        promise.then(response => {
            users.splice(arguments[0], 1);
            const users1 = [...users];
            setUsers(users1);
        })
    }
    const sortByAge = () => {
        setFlags(!setFlags);
        users.sort(function (a, b) {
            if (flags) {
                return a.age - b.age;
            }
            else {
                return b.age - a.age;
            }

        });
        setUsers([...users]);
    }

    return (
        <div>
            <Counter count={users.length}></Counter>
            <table className="table table-border table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th onClick={sortByAge}>Age</th>
                        <th>Joining Date</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => <tr key={user.id}>
                        <td>{user.firstname}</td>
                        <td>{user.age}</td>
                        <td>{user.date}</td>
                        <td>{user.skill}</td>
                        <td><button className="btn btn-danger" onClick={deleteUser.bind(user.id)}>Delete</button></td>
                    </tr>
                    )
                    }
                </tbody>

            </table>

        </div>
    )
}