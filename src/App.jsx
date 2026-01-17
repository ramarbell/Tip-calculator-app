import { useState } from "react";

import Container from "./components/Container";
import Bill from "./components/Bill";
import TipPercentageBox from "./components/TipPercentageBox";
import People from "./components/People";
import TipOutput from "./components/TipOutput";

export default function App() {
  const [billValue, setBillValue] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [selectedTip, setSelectedTip] = useState(null);
  const [customActive, setCustomActive] = useState(false);
  const [customPercentage, setCustomPercentage] = useState("");

  const bill = Number(billValue);
  const people = Number(numPeople);
  const tip = Number(selectedTip);

  const peopleError = numPeople === "0" ? "Can't be zero" : "";

  const isValidCalculation = bill > 0 && people > 0 && tip > 0;

  const tipAmount = isValidCalculation ? (bill * tip) / people / 100 : 0;

  const totalPerPerson = isValidCalculation
    ? (bill * (1 + tip / 100)) / people
    : 0;

  const handlePeopleChange = (e) => {
    setNumPeople(e.target.value);
  };

  const isResetDisabled =
    !billValue && !numPeople && !selectedTip && !customPercentage;

  function handleReset() {
    setBillValue("");
    setNumPeople("");
    setSelectedTip(null);
    setCustomPercentage("");
    setCustomActive(false);
  }

  return (
    <div>
      <div className="header-box">
        <h1>Splitter</h1>
      </div>
      <Container>
        <div className="inputs-section">
          <Bill billValue={billValue} setBillValue={setBillValue} />
          <TipPercentageBox
            customActive={customActive}
            setCustomActive={setCustomActive}
            customPercentage={customPercentage}
            setCustomPercentage={setCustomPercentage}
            selectedTip={selectedTip}
            setSelectedTip={setSelectedTip}
          />
          <People
            numPeople={numPeople}
            setNumPeople={setNumPeople}
            onPeopleChange={handlePeopleChange}
            peopleError={peopleError}
          />
        </div>
        <TipOutput
          billValue={billValue}
          tipAmount={tipAmount}
          numPeople={numPeople}
          totalPerPerson={totalPerPerson}
          selectedTip={selectedTip}
          isResetDisabled={isResetDisabled}
          onReset={handleReset}
        />
      </Container>
    </div>
  );
}
