import React, { useEffect, useState } from "react";
import './style.css';


const App = () => {

  const [advice, setAdvice] = useState([])
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
  }, [])

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <main>
        <div className="wrapper">
          <div className="advice">
            <p>Advice no.# {advice.id}</p>
            <p>"{advice.advice}"</p>
            {isDesktop ?
              <img src="./images/pattern-divider-desktop.svg" alt="pattern divider desktop" /> 
              :
              <img src="./images/pattern-divider-mobile.svg" alt="pattern divider mobile" />
            }
            <div className="dice-round">
              <img src="./images/icon-dice.svg" alt="button" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://www.github.com/rawisou">Rawisara Saman</a>.
      </footer>
    </>
  )
}

export default App