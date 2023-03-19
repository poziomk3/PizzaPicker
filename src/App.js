import React, { useState, useRef, useLayoutEffect } from "react";
import { data } from "./data.js";
import { default as UUID } from "node-uuid";
import Card from "./components/Card";
import ButtonSections from "./components/ButtonSections.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import FinalView from "./components/FinalView.jsx";
function App() {
  const [userChoice, setUserChoice] = useState(Array(data.length).fill([]));
  const [delivery, setDelivery] = useState(false);

  // useLayoutEffect(() => {
  //   const { height } = ref.current.getBoundingClientRect();
  //   console.log(height);
  // }, []);

  const price = () => {
    let price = 0;
    for (let i = 0; i < userChoice.length; i++) {
      var sum = 0;
      if (userChoice[i].length > 0) {
        for (let index = 0; index < userChoice[i].length; index++) {
          sum += data[i].selections[userChoice[i][index]].price;
        }
        sum /= userChoice[i].length;
        price += sum;
      }
    }

    return price.toFixed(2);
  };

  const picking = () => {
    for (let i = 0; i < userChoice.length; i++) {
      if (userChoice[i].length == 0 && data[i].important == true) {
        return true;
      }
    }

    return false;
  };

  return (
    <div
      className="min-h-screen bg-yellow-200 relative flex flex-col items-strech   "
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/866776.jpg)`,
      }}
    >
      <Nav price={price} />
      {delivery ? (
        <FinalView
          clickHandle={() => {
            setDelivery(!delivery);
            setUserChoice(Array(data.length).fill([]));
          }}
        />
      ) : (
        <>
          <Hero
            data={data}
            userChoice={userChoice}
            setUserChoice={setUserChoice}
          />{" "}
          <ButtonSections
            state={picking() ? true : false}
            clickHandle={() => setDelivery(!delivery)}
          />
        </>
      )}
    </div>
  );
}

export default App;
