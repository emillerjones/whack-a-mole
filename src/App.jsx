import { useState } from "react";

const moleArray = Array.from({ length: 9 });


export default function App() {

  const [moleIndex, setMoleIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [introScreen, setIntroScreen] = useState(true);
  const [highScoreList, setHighScoreList] = useState([]);

  if (introScreen){
    return <>
      <h1>Whack a Mole</h1>
      <div>Welcome to Whack a Mole!</div>
      <div>Whack a mole to earn points.</div>
      <div>How many can you get ?</div>
      
      <button onClick={()=> {
        setIntroScreen(false)
        setMoleIndex(Math.floor(Math.random() * moleArray.length))
      }}
      >Play Game</button>
      <h2>High Scores</h2>
      <ul>
        {highScoreList.map((score, i) => (          
          <li 
            key={i}             
          >
            {highScoreList[i]}
          </li>          
        ))}      
      </ul>
    </>;
  }
  else{
    return <>
      <h1>Whack a Mole</h1>
      <div>moleIndex : {moleIndex}</div>
      <section>
        <div>Score : {currentScore}</div>
        <button onClick={()=> {
          setCurrentScore(0)
          setIntroScreen(true)   
          setHighScoreList([...highScoreList, currentScore])   
          }
        }>        
        Restart</button>
      </section>
      <section className="grid">
        {moleArray.map((_, i) => (
          (i===moleIndex ? 
          <div 
            key={i} 
            className= "mole hole"
            onClick={()=> {
              setCurrentScore(currentScore + 1)
              setMoleIndex(Math.floor(Math.random() * moleArray.length))              
              }
            }>
          </div> 
          : 
          <div key={i} className ="hole"></div>)          
        ))}      
      </section>
    </>;
  }
}
