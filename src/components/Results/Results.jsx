const Results = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // use like this:
  // formatter.format(yearlyData.yearlyInterest);
  return (
    <tbody>
      <tr>
        <td>{props.year}</td>
        <td>{formatter.format(props.savings)} </td>
        <td>{formatter.format(props.interest)} </td>
        <td>{formatter.format(props.contribution)} </td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    </tbody>
  );
};

export default Results;
