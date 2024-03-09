export default function Friend({ friend }) {
  const { name, email } = friend;
  return (
    <div className="main-div">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}
