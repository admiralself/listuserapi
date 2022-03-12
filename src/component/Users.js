import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //console.log('Mount')
    //fetch("https://jsonplaceholder.typicode.com/users")
    axios("https://jsonplaceholder.typicode.com/users")
      //.then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {isLoading && <div>Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
