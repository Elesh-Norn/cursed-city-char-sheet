import React, { useState, useRef } from "react";

import HeaderBar from "./navbar.jsx";
import CharCard from "./CharCard.jsx";
import char_template from "../character_template.json";
import qulathis from "./qulathis.json";

function SaveasJson(file) {
  const element = document.createElement("a");
  const textFile = new Blob([
    [JSON.stringify(file)],
    { type: "application/json" },
  ]);
  element.href = URL.createObjectURL(textFile);
  element.download = "userFile.json";
  document.body.appendChild(element);
  element.click();
}

function Screen() {
  const [show, setShow] = useState("Char");
  const charFile = useRef(null);
  const [character, setCharacter] = useState(qulathis);

  function getPage() {
    if (show === "Char") return <CharCard character={character} />;
  }

  async function loadFile(event) {
    const file = event.target.files[0];
    var text = await file.text();
    text = text.replace("[object Object]", ""); //Saving add this. I remove it here.
    const data = text ? JSON.parse(text) : [];
    localStorage.setItem("character", data);
    setCharacter(data);
  }

  const content = getPage();
  return (
    <>
      <input
        type="file"
        id="file"
        ref={charFile}
        onChange={loadFile}
        style={{ display: "none" }}
      />
      <HeaderBar
        showChar={() => setShow("Char")}
        showItem={() => setShow("Item")}
        showCampaign={() => setShow("Campaign")}
        loadFile={() => charFile.current.click()}
        saveFile={() => SaveasJson(character)}
      />
      {content}
    </>
  );
}

export default Screen;
