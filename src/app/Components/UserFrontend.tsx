import React, { useEffect, useState } from "react";

interface Props {}

const UserFrontend: React.FC<Props> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const [user, setUser] = useState<any>(null);
  const getUsers = async () => {
    const response = await fetch("http://localhost:7000/api/user");
    const json = await response.json();
    if (json) {
      setUser(json.data.result);
      return json;
    }
  };

  const addNewUser = async () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    const response = await fetch("http://localhost:7000/api/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json) {
      getUsers();
      return json;
    }
  };

  const updateUser = async (oldUser: any) => {
    const user = JSON.parse(JSON.stringify(oldUser));
    user.firstName =
      user.firstName || "no-name" + Math.random().toFixed(2).toString();
    user.lastName =
      user.lastName || "no-name" + Math.random().toFixed(2).toString();
    const response = await fetch(
      `http://localhost:7000/api/user/${oldUser._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = response.json();
    getUsers();
  };

  const deleteUser = async (oldUser: any) => {
    const user = JSON.parse(JSON.stringify(oldUser));
    const response = await fetch(
      `http://localhost:7000/api/user/${oldUser._id}`,
      {
        method: "DELETE",
        body: JSON.stringify({}),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = response.json();
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ border: "1px dashed red" }}>
      <h3>User Service</h3>

      <h4>Add User Form</h4>
      <div>
        <table>
          <tr>
            <td>
              {" "}
              <label>Enter First Name</label>
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={firstName}
                onChange={(e: any) => setFirstName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <label>Enter Last Name</label>
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <label>Enter Age</label>
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={age}
                onChange={(e: any) => setAge(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {" "}
              <button type="submit" onClick={addNewUser}>
                ADD USER{" "}
              </button>
            </td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <h4>Displaying users</h4>
      <table>
        <tr>
          <th>Sr.</th>
          <th>id.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Action</th>
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
                <td
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <button onClick={() => updateUser(data)}>Update</button>
                  <button onClick={() => deleteUser(data)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default UserFrontend;
