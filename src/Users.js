import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "./store/usersSlice";

export default function Users() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);

  return (
    <section className="users">
      {users.length > 0  ? <p>Yes we are here</p> : <p>No Users Found</p>}
      <button onClick={() => dispatch(getUsers())} disabled={loading}>
        {!loading ? "Get Users" : "Loading ..."}
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </section>
  );
}
