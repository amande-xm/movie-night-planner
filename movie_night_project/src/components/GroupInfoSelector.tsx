function GroupInfoSelector() {
  return (
    <>
      <label htmlFor="groupInfo" hidden>
        Choose the age group:
      </label>

      <select
        className="form-select"
        aria-label="Default select example"
        hidden
      >
        <option selected>Open this select menu</option>
        <option value="1">First option</option>
        <option value="2">Second option</option>
        <option value="3">Third option</option>
      </select>
    </>
  );
}

export default GroupInfoSelector;
