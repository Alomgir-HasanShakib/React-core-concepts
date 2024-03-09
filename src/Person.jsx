export default function Person() {
  const persons = { name: "Shakib", age: 18 };
  return (
    <div>
      <h3>Person name is : {persons.name}</h3>
      <h3>Person age is : {persons.age}</h3>
    </div>
  );
}
