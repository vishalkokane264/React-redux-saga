import React, { useEffect, useState } from "react";

interface Props {}

const UserFrontend: React.FC<Props> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:7000/api/user");
      const json = await response.json();
      if (json) {
        setUser(json.data.result);
        return json;
      }
    };
    getUsers();
  }, []);

  const addNewUser = async () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    const response = await fetch("http://localhost:7000/api/user", {
      method: "POST",
      body: JSON.parse(JSON.stringify(user)),
    });
    const json = await response.json();
    if (json) {
      setUser(json.data.result);
      return json;
    }
  };

  return (
    <div>
      <h4>User Service</h4>

      <h5>Add User</h5>
      <div>
        <label>Enter First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e: any) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Enter Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e: any) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Enter Age</label>
        <input
          type="text"
          value={age}
          onChange={(e: any) => setAge(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={addNewUser}>
          ADD USER{" "}
        </button>
      </div>

      <table>
        <tr>
          <th>Sr.</th>
          <th>id.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
        {user &&
          user.length &&
          user.map((data: any, index: any) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{data._id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.age}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default UserFrontend;
