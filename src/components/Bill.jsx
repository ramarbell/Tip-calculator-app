import iconDollarUrl from "../images/icon-dollar.svg";

function Bill({ billValue, setBillValue }) {
  return (
    <div className="bill-box">
      <h3 className="bill-title">Bill</h3>
      <input
        className="input-field"
        type="number"
        inputMode="decimal"
        min="0"
        step="0.01"
        placeholder="0"
        value={billValue}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "" || Number(value) >= 0) {
            setBillValue(value);
          }
        }}
      />
      <span>
        <img src={iconDollarUrl} alt="dollar icon" />
      </span>
    </div>
  );
}

export default Bill;
