import "./styles.css";
import React, { useState } from "react";
import {animalsList} from './animalsList'


let animalEmo = Object.keys(animalsList);

export default function App() {
  let [meaning, setMeaning] = useState("Animal name appears here");

  function onChangeHandler(event) {
    let inputEmojie = event.target.value;
    if (animalsList[inputEmojie] != undefined) {
      setMeaning(animalsList[inputEmojie]);
    } else {
      if (inputEmojie === "") {
        setMeaning("Animal name appears here");
      } else {
        setMeaning("Invalid Animal Emojie 🚫");
      }
    }
  }

  function onClickHandler(emojie) {
    setMeaning(animalsList[emojie]+" "+emojie);
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="heading-one">Animal 🐵 Fun</h1>
      </header>
      <div className="container" >
        <div class="heading">Enter Animal or Choose any Animal below to know it's name . . .</div>
        <div className="io-container">
          <input className="input"
            onChange={onChangeHandler}
            placeholder="Put animal emojie here"
          />
          <div className="equals" >
            =
          </div>
          <div className="output">
            {meaning}
          </div>
        </div>
        <h2 className="emo-container-top">
          Animals we know 📙
        </h2>
        <div className="emo-container">
          {animalEmo.map((emo) => {
            return (
              <span className="emojie-span"
                onClick={() => {
                  onClickHandler(emo);
                }} key={emo}>
                {emo}
              </span>
            );
          })}
        </div>
      </div>
      <footer className="footer">
        <h2>No Animals were harmed during building this project</h2>
        <span className="footer-span">🙊 🙈 🙉</span>
      </footer>
    </div>
  );
}
