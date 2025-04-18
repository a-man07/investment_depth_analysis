import { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    });
  }

  // const inputIsValid = userInput.duration >= 1;

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 12,
    duration: 15,
  });

  const inputIsValid = userInput.duration >= 1;

  useEffect(()=>{
    console.log(userInput);
  },[userInput])

  return (
    <>
    <Header/>
    {userInput.initialInvestment && (
       <UserInput userInput={userInput} onChange={handleChange}/>
    )}
    {!inputIsValid && <p className="center">Input is not valid</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
