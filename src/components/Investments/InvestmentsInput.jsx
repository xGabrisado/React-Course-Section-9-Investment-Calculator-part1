const InvestmentsInput = (props) => {
  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        value={props.value}
        type="number"
        id={props.id}
        onChange={props.onChange}
      />
    </p>
  );
};

export default InvestmentsInput;
