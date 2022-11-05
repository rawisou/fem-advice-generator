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
    <main>
    <section>
      <p>Advice no.# {advice.id}</p>
      <p>{advice.advice}</p>
    </section>
    <footer>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="https://www.github.com/rawisou">Rawisara Saman</a>.
    </footer>
    </main>
  )
}

export default App