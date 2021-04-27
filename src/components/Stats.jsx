function Stats({ profile }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "white",
      }}
    >
      <div>Mouvement {profile.mouvement}</div>
      <div>Agilité {profile.agility}</div>
      <div>Defense {profile.defense}</div>
      <div>Vitalité {profile.vitality}</div>
    </div>
  );
}
export default Stats;
