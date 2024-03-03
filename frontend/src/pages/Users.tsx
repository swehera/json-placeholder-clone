import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserData } from "../typeofdata/usersData";

const Users = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      if (res?.status === 200) {
        setUsers(res?.data); // get this data from console
      } else {
        console.log("data fetching error", res);
      }
    });
  }, []);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 py-4 px-20">
      {user.map((item: UserData) => (
        <div key={item?.id} className=" w-full flex ">
          <div className="border-solid border-2 border-purple-300  rounded-md px-3 py-2 items-center justify-center">
            <p>Name: {item?.name}</p>
            <p>Username: {item?.username}</p>
            <p>Email: {item?.email}</p>
            <div className=" flex items-center justify-center">
              <p>
                Address: <span>{item?.address?.suite}</span>
                {", "}
                <span>{item?.address?.street}</span>
                {", "}
                <span>{item?.address?.city}</span>
                {", "}
                <span>{item?.address?.zipcode}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
