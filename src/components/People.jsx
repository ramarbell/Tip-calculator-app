function People({ numPeople, onPeopleChange, peopleError }) {
  return (
    <>
      <div className="people-box">
        <h3 className="people-title">Number of People</h3>
        <input
          className={`people-input ${peopleError ? "error" : ""}`}
          type="number"
          inputMode="numeric"
          min="0"
          step="1"
          placeholder="0"
          value={numPeople}
          onChange={onPeopleChange}
        />
        <span>
          <img src={"/images/icon-person.svg"} alt="person icon" />
        </span>
      </div>
      <div>{peopleError && <p className="error-text">{peopleError}</p>}</div>
    </>
  );
}

export default People;
