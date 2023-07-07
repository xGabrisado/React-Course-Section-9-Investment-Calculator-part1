import Results from "./Results";

const ResultsTable = ({ yearlyData }) => {
  // console.log("yearlyData ResultsTable");
  // console.log(yearlyData);

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
      {yearlyData.map((data, i) => (
        <Results
          key={i}
          year={data.year}
          interest={data.yearlyInterest}
          savings={data.savingsEndOfYear}
          contribution={data.yearlyContribution}
        />
      ))}
    </table>
  );
};

export default ResultsTable;
