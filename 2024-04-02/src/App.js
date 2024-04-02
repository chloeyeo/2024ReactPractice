// INSTALL "ES7+ React/Redux/React-Native snippets" EXTENSION on vscode!
// then rafce+tab
import React, { useState } from "react";
import "./assets/css/style.css";

// useEffect empty dependency list only renders once when page loads

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [content, setContent] = useState([
    "1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad nobis laudantium ipsa eius repellat, doloremque aliquid, porro, exercitationem excepturi nemo? Commodi ad eos cum officiis pariatur enim atque sed neque praesentium laudantium, aliquam voluptatum, non consequuntur sequi magni. Deserunt nisi atque aliquid ducimus eos itaque odio maiores maxime quam soluta id consequuntur reprehenderit nulla nostrum, magnam commodi! Quibusdam aliquid totam beatae nostrum, deleniti cumque ipsum ex dolores culpa fugiat eligendi voluptates cupiditate ut, exercitationem expedita. Porro voluptate voluptatum sunt dolorum dolore alias atque tenetur nam quas ab sint vitae, quam nostrum nulla accusantium laudantium iusto? Quod cumque mollitia atque?",
    "2) Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad nobis laudantium ipsa eius repellat, doloremque aliquid, porro, exercitationem excepturi nemo? Commodi ad eos cum officiis pariatur enim atque sed neque praesentium laudantium, aliquam voluptatum, non consequuntur sequi magni. Deserunt nisi atque aliquid ducimus eos itaque odio maiores maxime quam soluta id consequuntur reprehenderit nulla nostrum, magnam commodi! Quibusdam aliquid totam beatae nostrum, deleniti cumque ipsum ex dolores culpa fugiat eligendi voluptates cupiditate ut, exercitationem expedita. Porro voluptate voluptatum sunt dolorum dolore alias atque tenetur nam quas ab sint vitae, quam nostrum nulla accusantium laudantium iusto? Quod cumque mollitia atque?",
    "3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad nobis laudantium ipsa eius repellat, doloremque aliquid, porro, exercitationem excepturi nemo? Commodi ad eos cum officiis pariatur enim atque sed neque praesentium laudantium, aliquam voluptatum, non consequuntur sequi magni. Deserunt nisi atque aliquid ducimus eos itaque odio maiores maxime quam soluta id consequuntur reprehenderit nulla nostrum, magnam commodi! Quibusdam aliquid totam beatae nostrum, deleniti cumque ipsum ex dolores culpa fugiat eligendi voluptates cupiditate ut, exercitationem expedita. Porro voluptate voluptatum sunt dolorum dolore alias atque tenetur nam quas ab sint vitae, quam nostrum nulla accusantium laudantium iusto? Quod cumque mollitia atque?",
    "4) Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad nobis laudantium ipsa eius repellat, doloremque aliquid, porro, exercitationem excepturi nemo? Commodi ad eos cum officiis pariatur enim atque sed neque praesentium laudantium, aliquam voluptatum, non consequuntur sequi magni. Deserunt nisi atque aliquid ducimus eos itaque odio maiores maxime quam soluta id consequuntur reprehenderit nulla nostrum, magnam commodi! Quibusdam aliquid totam beatae nostrum, deleniti cumque ipsum ex dolores culpa fugiat eligendi voluptates cupiditate ut, exercitationem expedita. Porro voluptate voluptatum sunt dolorum dolore alias atque tenetur nam quas ab sint vitae, quam nostrum nulla accusantium laudantium iusto? Quod cumque mollitia atque?",
  ]);
  const [editedContent, setEditedContent] = useState(["", "", "", ""]);

  const handleTextAreaChange = (event) => {
    const newContent = [...editedContent];
    newContent[tabIndex] = event.target.value;
    setEditedContent(newContent);
  };

  return (
    <>
      <h2>Tab Menu</h2>
      <ul className="tabs">
        {content.map((_, index) => {
          return (
            <li
              key={`tab ${index}`}
              className={`tab ${index === tabIndex ? "active" : ""}`}
              onClick={() => {
                setTabIndex(index);
              }}
            >
              Tab{index + 1}
            </li>
          );
        })}
      </ul>
      <div className="tabContent">
        <p>{editedContent[tabIndex] || content[tabIndex]}</p>
        <div className="inputSection">
          <label htmlFor="inputContent">
            Type in text to replace tab content:
          </label>
          <textarea
            id="inputContent"
            rows="10"
            placeholder="Start typing here..."
            value={editedContent[tabIndex]}
            onChange={handleTextAreaChange}
          />
        </div>
      </div>
    </>
  );
};

export default App;
