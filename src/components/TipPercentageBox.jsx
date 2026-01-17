const tipOptions = [5, 10, 15, 25, 50];

function TipPercentageBox({
  customActive,
  setCustomActive,
  selectedTip,
  setSelectedTip,
  customPercentage,
  setCustomPercentage,
}) {
  function handleSelectTip(tip) {
    setSelectedTip(tip);
    setCustomActive(false);
    setCustomPercentage("");
  }

  function handleCustomChange(e) {
    const value = e.target.value;
    if (value === "" || Number(value) >= 0) {
      setCustomPercentage(value);
      setSelectedTip(Number(value) || null);
    }
  }

  return (
    <div className="tip-percentage-box">
      <h3 className="tip-percentage-box-title">Select Tip %</h3>
      <div className="tip-percentage-box-options">
        {tipOptions.map((tip) => (
          <button
            key={tip}
            className={`tip-button ${selectedTip === tip ? "active" : ""}`}
            onClick={() => {
              handleSelectTip(tip);
            }}
          >
            {tip}%
          </button>
        ))}

        {customActive ? (
          <input
            className="custom-input"
            type="number"
            placeholder="Custom"
            value={customPercentage}
            onChange={handleCustomChange}
            onBlur={() => {
              if (customPercentage === "") {
                setCustomActive(false);
                setSelectedTip(null);
              }
            }}
            autoFocus
          />
        ) : (
          <button
            className="tip-button custom"
            onClick={() => {
              setCustomActive(true);
              setSelectedTip(null);
            }}
          >
            Custom
          </button>
        )}
      </div>
    </div>
  );
}

export default TipPercentageBox;
