import React from "react";
// sass is a css pre-processor.
// A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax.
// SASS code is processed by the program and compiled into CSS code, which can be used to style HTML elements.
// SCSS is a superset of CSS, HTML will not interpret it by default. You have to transpile it to CSS first.
// The SCSS transpiler will create CSS files for you, which you can then use in your HTML file.
// when you run npm build, babel converts scss to css so that browser can read it. (webpack is the babel for SCSS. converts scss to css. babel is a js compiler.)
import "./assets/css/style02.scss";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>
          <a href="#">logo</a>
        </h1>
        <nav className="gnbMenu">
          <ul>
            <li>Menu1</li>
            <li>Menu1</li>
            <li>Menu1</li>
            <li>Menu1</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default App;
