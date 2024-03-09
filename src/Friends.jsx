import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [Friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      {Friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
