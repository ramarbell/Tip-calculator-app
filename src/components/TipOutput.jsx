const formatMoney = (value) => {
  if (isNaN(value) || value === null) return "0.00";
  return Number(value).toFixed(2);
};

function TipOutput({ tipAmount, totalPerPerson, isResetDisabled, onReset }) {
  return (
    <div className="tip-output-box">
      <div className="output-row">
        <div className="output-label">
          <p className="tip-output-title">Tip Amount</p>
          <p className="small">/ person</p>
        </div>
        <div className="total-value">${formatMoney(tipAmount)}</div>
      </div>
      <div className="output-row">
        <div className="output-label">
          <p>Total</p>
          <p className="small">/ person</p>
        </div>
        <div className="total-value">${formatMoney(totalPerPerson)}</div>
      </div>
      <button
        className="reset-button"
        disabled={isResetDisabled}
        onClick={onReset}
      >
        RESET
      </button>
    </div>
  );
}

export default TipOutput;
