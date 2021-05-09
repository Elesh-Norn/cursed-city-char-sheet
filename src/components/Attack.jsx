import Table from "react-bootstrap/Table";
import SpecialDice from "./SpecialDice.jsx";

export function Attack({ name, type, dice, dmg }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td><SpecialDice dices={dice}/></td>
      <td>{dmg}</td>
    </tr>
  );
}

export function AttackBox(props) {
  return (
    <Table striped>
      <thead style={{ backgroundColor: props.color() }}>
        <tr style={{ color: "white", fontWeight: "bold" }}>
          <th>Action d'Arme</th>
          <th>Type</th>
          <th>Dés</th>
          <th>Dégâts</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </Table>
  );
}
