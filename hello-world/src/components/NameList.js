import React from "react";
import Person from "./Person";
function NameList() {
  //   const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "VUE",
    },
  ];
  const personList = persons.map((person) => <Person person={person} />);
  return (
    <div>
      <div>{personList}</div>
    </div>
  );
}

export default NameList;
