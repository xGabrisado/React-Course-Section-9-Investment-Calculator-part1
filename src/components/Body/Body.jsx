import { useState } from "react";
import InvestmentsForm from "../Investments/InvestmentsForm";
import ResultsTable from "../Results/ResultsTable";

const Body = () => {
  const [yearlyData, setYearlyData] = useState([]);
  // console.log(yearlyData);

  // const yearlyData = [];

  const calculateHandler = (userInput) => {
    // console.log(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // console.log("current-savings:");
    // console.log(currentSavings);
    // console.log("yearlyContribution");
    // console.log(yearlyContribution);
    // console.log("expectedReturn");
    // console.log(expectedReturn);
    // console.log("duration");
    // console.log(duration);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      // console.log("yearlyInterest");
      // console.log(yearlyInterest);
      currentSavings += yearlyInterest + yearlyContribution;
      // console.log("currentSavings");
      // console.log(currentSavings);

      setYearlyData((prevState) => {
        return [
          ...prevState,
          {
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          },
        ];
      });

      // yearlyData.push({
      //   // feel free to change the shape of the data pushed to the array!
      //   year: i + 1,
      //   yearlyInterest: yearlyInterest,
      //   savingsEndOfYear: currentSavings,
      //   yearlyContribution: yearlyContribution,
      // });
    }

    // do something with yearlyData ...
    // console.log(yearlyData);
  };
  const resetHandler = () => {
    setYearlyData([]);
  };

  return (
    <>
      <InvestmentsForm
        onResetingForm={resetHandler}
        onFormSubmit={calculateHandler}
      />
      {yearlyData.length === 0 && (
        <p className="noInvest">No investments yet</p>
      )}
      {yearlyData.length !== 0 && <ResultsTable yearlyData={yearlyData} />}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </>
  );
};

export default Body;
