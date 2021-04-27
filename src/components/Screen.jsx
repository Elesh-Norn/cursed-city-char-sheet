import React, { useState } from "react";

import HeaderBar from "./navbar.jsx";
import CharCard from "./CharCard.jsx";
import { QULATHIS } from "./Characters";

function Screen() {
  const [show, setShow] = useState("Char");

  function loadDataFromStorage(name) {
    // prob need to put it in js file
    const stored = localStorage.getItem(name);
    const data = stored ? JSON.parse(stored) : [];
    return data;
  }

  function getPage() {
    if (show === "Char")
      ///this.loadDataFromStorage("character")
      return <CharCard character={QULATHIS()} />;
  }

  const content = getPage();
  return (
    <>
      <HeaderBar
        showChar={() => setShow("Char")}
        showItem={() => setShow("Item")}
        showCampaign={() => setShow("Campaign")}
      />
      {content}
    </>
  );
}

export default Screen;
