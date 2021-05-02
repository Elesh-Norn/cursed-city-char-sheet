import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ExaltedPoints({ ExaltedToggle }) {
  const [points, setPoints] = useState(0);
  const [exalted, setExalted] = useState(false);
  function addPoints(x) {
    if (x + points < 4 && x + points >= 0) {
      setPoints(x + points);
    }
  }

  function goExalted() {
    if (points === 3) {
      setPoints(0);
      ExaltedToggle();
      setExalted(true);
    }
  }

  var exaltedPoints = " ";
  for (var i = 0; i < points; i++) {
    exaltedPoints += "\u26A1";
  }

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "white",
      }}
    >
      <div>
        <b>Points d'Exaltation</b>
      </div>
      <div>{exaltedPoints}</div>
      <Button onClick={() => addPoints(1)}>+1 </Button>
      <Button onClick={() => addPoints(-1)}>-1</Button>
      {!exalted && points === 3 && (
        <Button onClick={() => goExalted()}>Go exalted </Button>
      )}
    </div>
  );
}
export default ExaltedPoints;
