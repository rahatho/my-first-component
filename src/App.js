import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List(){
  const listItems = people.filter(person => person.profession==="chemist").map(person=>
    <li key={person.id}>
      <img 
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name} : </b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const othersList = people.filter(person => person.profession !== "chemist").map(
    person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name} : </b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
  );
  return(
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{listItems}</ul>
      <h2>Others</h2>
      <ul>{othersList}</ul>
    </article>
  );
}