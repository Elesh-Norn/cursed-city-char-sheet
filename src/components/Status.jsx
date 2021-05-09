import React, {useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";

const StatusEnum = {
  BURIED: 1,
  CURSED: 2,
  SICK:3,
  TIRED:4,
  DAZZED:5,
  TRAPPED:6,
  NORMAL:7
};

const frenchStatus = {}
frenchStatus[StatusEnum.BURIED] = "Enterré";
frenchStatus[StatusEnum.CURSED] = "Maudit";
frenchStatus[StatusEnum.SICK] = "Malade";
frenchStatus[StatusEnum.TIRED] = "Fatigué";
frenchStatus[StatusEnum.DAZZED] = "Sonné";
frenchStatus[StatusEnum.TRAPPED] ="Piégé";
frenchStatus[StatusEnum.NORMAL] = "Normal";


function Status(){
  const [status, setStatus] = useState(StatusEnum.NORMAL);
  var options = []
  Object.keys(frenchStatus).forEach((key, index) => options.push(
    <Dropdown.Item onClick={()=> setStatus(key)}>{frenchStatus[key]}</Dropdown.Item>
  )
  )
    return (
      <div style={{
        color: "white"
        }}>
        <b>Status:</b> {frenchStatus[status]} 
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-status">
          Change Status
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options}
        </Dropdown.Menu>
      </Dropdown>
        </div>
  );
}

export default Status;
