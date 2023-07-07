const InvestmentsButon = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.action}
    >
      {props.label}
    </button>
  );
};

export default InvestmentsButon;
