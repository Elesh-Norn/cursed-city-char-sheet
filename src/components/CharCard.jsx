import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import BoxDice from "./BoxDice.jsx";
import { Attack, AttackBox } from "./Attack.jsx";
import Title from "./CharTitle.jsx";
import { Aptitude, UniqueAptitudes } from "./Aptitudes.jsx";
import Sentier from "./Sentier.jsx";
import Stats from "./Stats";

function CharCard({ character }) {
  const [exalted, setExalted] = useState(false);

  function Cardcolor() {
    if (exalted) return "#b39b3b";
    return "#232045";
  }

  const normalAptitudes = character.normal.aptitudes.map((aptitude) => (
    <Aptitude name={aptitude.name} text={aptitude.text} key={aptitude.name} />
  ));

  const exaltedAptitudes = character.exalted.aptitudes.map((aptitude) => (
    <Aptitude name={aptitude.name} text={aptitude.text} key={aptitude.name} />
  ));

  const normalAttacks = character.normal.attacks.map((attack) => (
    <Attack
      name={attack.name}
      type={attack.type}
      dice={attack.dice}
      dmg={attack.dmg}
      key={attack.name}
    />
  ));
  const exaltedAttacks = character.exalted.attacks.map((attack) => (
    <Attack
      name={attack.name}
      type={attack.type}
      dice={attack.dice}
      dmg={attack.dmg}
      key={attack.name}
    />
  ));

  return (
    <Container>
      <div>
        <Row style={{ height: "400px" }}>
          <Col style={{ backgroundColor: Cardcolor(), maxWidth: "190px" }}>
            <img
              alt="Character portrait"
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              src={character.picture_link}
            />
            {exalted && <Stats profile={character.exalted} />}
            {!exalted && <Stats profile={character.normal} />}
            <Button onClick={() => setExalted(!exalted)}>Exalted</Button>
          </Col>
          <Col style={{ maxWidth: "10px" }}></Col>
          <Col>
            <Title name={character.name} keywords={character.keywords} />
            <div>
              <Row>
                <BoxDice />
                <BoxDice />
                <BoxDice />
                <BoxDice />
              </Row>
              <Row>
                <AttackBox color={Cardcolor}>
                  {exalted && exaltedAttacks}
                  {!exalted && normalAttacks}
                </AttackBox>
              </Row>
              <UniqueAptitudes>
                {exalted && exaltedAptitudes}
                {!exalted && normalAptitudes}
              </UniqueAptitudes>
              {!exalted && (
                <Sentier
                  name={character.gloryRule.name}
                  text={character.gloryRule.text}
                />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default CharCard;
