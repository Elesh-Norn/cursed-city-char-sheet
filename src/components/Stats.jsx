import SpecialDice from "./SpecialDice.jsx";
function Stats({ profile }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "white",
      }}
    >
      <div>Mouvement <SpecialDice dices={profile.mouvement}/></div>
      <div>Agilité <SpecialDice dices={profile.agility}/></div>
      <div>Defense <SpecialDice dices={profile.defense}/></div>
      <div>Vitalité <SpecialDice dices={profile.vitality}/></div>
    </div>
  );
}
export default Stats;
