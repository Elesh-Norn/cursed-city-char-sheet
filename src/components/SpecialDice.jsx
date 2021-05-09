import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const roll = (number) => {
    return Math.ceil(Math.random() * number);
  };

  const roll_white = () => {
    const result = roll(6);
    if (result < 5) return "Fail"
    if (result === 5) return "Success"
    return "Crit"
  };

  const roll_grey = () => {
    const result = roll(4);
    if (result < 3) return "Fail"
    if (result === 3) return "Success"
    return "Crit"
  };

  const roll_red = () => {
    const result = roll(3);
    if (result < 1) return "Fail"
    if (result === 2) return "Success"
    return "Crit"
  };

const diceToFunc = {};
diceToFunc["D6"] = () => roll(6);
diceToFunc["D8"] = () => roll(8);
diceToFunc["D12"] = () => roll(12);
diceToFunc["▢"] = () => roll_white();
diceToFunc["▲"] = () => roll_grey();
diceToFunc["⬟"] = () => roll_red();




// Credits @Zer0tonin github.com/zer0tonin/Ulfenkarn 
function SpecialDice({dices}) {
  const [result, setResult] = useState("")
  const [show, setShow] = useState(false)
  
   const rolling = () => {
    var newResult = ""
    for (let c of dices){
      newResult += diceToFunc[c]() + " "
    }
    setResult(newResult)
    setShow(true)
  }
  return(

  <>

    <span 
  style={{
      cursor: "pointer"
      }} 
      onClick={rolling}>
      {dices}
    </span>

    <Modal show={show} onHide={() => setShow(false)}>

    <Modal.Header closeButton>
      <Modal.Title>Result for {dices}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{result}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShow(false)}>
            Close
      </Button>
    </Modal.Footer>
    </Modal>
        </>
      );
}

export default SpecialDice;
