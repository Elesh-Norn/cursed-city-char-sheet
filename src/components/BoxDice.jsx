import React, {useState} from "react";

import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';


function BoxDice(){
  const [value, setValue] = useState("");
  const [wound, setWound] = useState(0);

  const roll = () => {
    setValue(Math.ceil(Math.random()*6));
  };

  const add = (number) => {
    if (wound < 1){
    const new_value = value + number
    if (new_value < 7 & new_value > 0){
      setValue(new_value)
    }
    };
  }

  const add_wound = (number) => {
    const new_value = wound + number
    if (new_value < 3 & new_value >= 0){
      setWound(new_value);
      if (new_value === 2) setValue("XX");
      else if (new_value === 1) setValue("X");
      else if (new_value === 0) setValue("");
    };
  }

  return(<>
    <Col>
          <div style={{
            fontSize: "50px",
            width: "75px",
            height: "75px",
            outline: "black solid 3px",
            margin: "20px",
            cursor:"pointer",
            justifyContent: "center",
            alignItems: "center",
          }} onClick={() => setValue("")}>
            {value}
          </div>
    </Col>
    <Col>
      <Badge style={{cursor:"pointer"}} variant="primary" onClick={() => roll()}>Roll</Badge>
      <Badge style={{cursor:"pointer"}} variant="primary" onClick={() => add(1)}>+1</Badge>
      <Badge style={{cursor:"pointer"}} variant="primary" onClick={() => add(-1)}>-1</Badge>
      <Badge style={{cursor:"pointer"}} variant="danger" onClick={() => add_wound(1)}>Wound</Badge>
      <Badge style={{cursor:"pointer"}} variant="light" onClick={() => add_wound(-1)}>Heal</Badge>
    </Col>
  </>
  );
}

export default BoxDice;
