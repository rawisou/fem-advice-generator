import React, { useEffect, useState } from "react";
import './style.css';


const App = () => {

  const [advice, setAdvice] = useState([])
  // const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
  }, [])

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth > 900);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // });

  return (
    <>
      <main>
        <div className="wrapper">
          <div className="advice">
            <p>ADVICE NO.# {advice.id}</p>
            <p>"{advice.advice}"</p>

            <img src="./images/pattern-divider-mobile.svg" alt="pattern divider mobile" />

            <div className="dice-round">
              <img src="./images/icon-dice.svg" alt="button" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor</a></p>.

      </footer>
    </>
  )
}

export default App