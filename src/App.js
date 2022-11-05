import React, { useEffect, useState } from "react";
import './style.css';


const App = () => {

  const [advice, setAdvice] = useState([])

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
  }, [])

  return (
    <>
      <main>
        <section className="wrapper">
          <div className="advice">
            <p>Advice no.# {advice.id}</p>
            <p>{advice.advice}</p>
            <img src="./images/icon-dice.svg" alt="button"/>
          </div>
        </section>
      </main>
      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://www.github.com/rawisou">Rawisara Saman</a>.
      </footer>
    </>
  )
}

export default App