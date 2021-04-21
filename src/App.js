import "./styles.css";
import React, { useState } from "react";

let animalsList = {
  "🦁": "Lion",
  "🐵": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🐈‍": "Black Cat",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦮": "Guide Dog",
  "🐕‍": "Service Dog",
  "🐩": "Poodle",
  "🦓": "Zebra",
  "🐒": "Monkey Sitting",
  "🦌": "Deer",
  "🦬": "Bison",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐷": "Pig Face",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦣": "Mammoth",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐭": "Mouse Face",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐇": "Rabbit",
  "🐿️": "Chipmunk",
  "🦫": "Beaver",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐻‍❄": "Polar Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🕊️": "Dove",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦤": "Dodo",
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "🐬": "Dolphin",
  "🦭": "Seal",
  "🐟": "Fish",
  "🐠": "Tropical Fish",
  "🐡": "Blowfish",
  "🦈": "Shark",
  "🐙": "Octopus",
  "🐌": "Snail",
  "🦋": "Butterfly",
  "🐛": "Bug",
  "🐜": "Ant",
  "🐝": "Honeybee",
  "🪲": "Beetle",
  "🐞": "Lady Beetle",
  "🦗": "Cricket",
  "🪳": "Cockroach",
  "🕷️": "Spider",
  "🦂": "Scorpion",
  "🦟": "Mosquito",
  "🪰": "Fly",
  "🦀": "Crab",
  "🦞": "Lobster",
  "🦐": "Shrimp",
  "🦑": "Squid"
};

let animalEmo = Object.keys(animalsList);

export default function App() {
  let [meaning, setMeaning] = useState("Animal name will appear here");

  function onChangeHandler(event) {
    let inputEmojie = event.target.value;
    if (animalsList[inputEmojie] != undefined) {
      setMeaning(animalsList[inputEmojie]);
    } else {
      if (inputEmojie === "") {
        setMeaning("Animal name will appear here");
      } else {
        setMeaning("Please enter a correct Animal Emojie");
      }
    }
  }

  function onClickHandler(emojie) {
    setMeaning(animalsList[emojie]+" "+emojie);
  }

  return (
    <div className="App">
      <header style={{padding: "1rem 0", backgroundColor: "#10B981" }}>
        <h1 style={{fontSize:"2.5rem"}}>Animal 🐵 Fun</h1>
      </header>
      <div style={{ paddingTop: "0.5rem" }}>
        <h2>Enter Animal or Choose any Animal below to know it's name . . .</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems:"center",
            margin: "1rem",
            height: "4rem"
          }}
        >
          <input
            onChange={onChangeHandler}
            style={{
              padding: "1rem",
              fontSize: "2.5rem"
            }}
            placeholder="Put animal emojie here"
          />
          <div
            style={{
              color: "white",
              fontSize: "4rem",
              padding:"0 2rem"
            }}
          >
            =
          </div>
          <div
            style={{
              width:"490px",
              padding: "0.5rem",
              fontSize: "2.5rem",
              backgroundColor: "white",
              color: "#10b981"
            }}
          >
            {meaning}
          </div>
        </div>
        <h2
          style={{
            width: "90%",
            backgroundColor: "#FCD34D",
            margin: "2rem auto 0 auto",
            padding: "1rem"
          }}
        >
          Animals we know
        </h2>
        <div
          style={{
            backgroundColor: "#ECFDF5",
            width: "90%",
            margin: "0 auto 4rem auto"
          }}
        >
          {animalEmo.map((emo) => {
            return (
              <span
                onClick={() => {
                  onClickHandler(emo);
                }}
                key={emo}
                style={{
                  fontSize: "3rem",
                  padding: "0.5rem",
                  cursor: "pointer"
                }}
              >
                {emo}
              </span>
            );
          })}
        </div>
      </div>
      <footer style={{ display:"flex",flexDirection:"column",alignContent:"center", padding: "1.5rem 0",fontSize:"1rem", backgroundColor: "#10B981" }}>
        <h2>No Animals were harmed during building this project</h2>
        <span style={{fontSize:"3rem"}}>🙊 🙈 🙉</span>
      </footer>
    </div>
  );
}
