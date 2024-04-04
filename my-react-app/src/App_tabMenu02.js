import React, { useState } from "react";

const App_tabMenu02 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [initialText, setinitialText] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni fugit necessitatibus modi beatae deleniti, corporis atque architecto perspiciatis eligendi!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni fugit necessitatibus modi beatae deleniti, corporis atque architecto perspiciatis eligendi!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni fugit necessitatibus modi beatae deleniti, corporis atque architecto perspiciatis eligendi!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni fugit necessitatibus modi beatae deleniti, corporis atque architecto perspiciatis eligendi!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni fugit necessitatibus modi beatae deleniti, corporis atque architecto perspiciatis eligendi!",
  ]);
  return (
    <>
      <h1>Tab Menu Practice</h1>
      <ul className="tabs">
        <li className="tab"></li>
      </ul>
    </>
  );
};

export default App_tabMenu02;
