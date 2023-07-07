import InvestmentsButon from "./InvestmentsButton";
import InvestmentsButtonGroup from "./InvestmentsButtonGroup";
import InvestmentsInput from "./InvestmentsInput";
import InvestmentsInputGroup from "./InvestmentsInputGroup";
import { useState } from "react";

const InvestmentsForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    const userInput = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      duration: duration,
    };

    // console.log(userInput);

    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");

    props.onFormSubmit(userInput);
  };

  const currentInputHandler = (e) => {
    setCurrentSavings(e.target.value);
  };
  const yearlyInputHandler = (e) => {
    setYearlyContribution(e.target.value);
  };
  const expectedInputHandler = (e) => {
    setExpectedReturn(e.target.value);
  };
  const durationInputHandler = (e) => {
    setDuration(e.target.value);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <InvestmentsInputGroup>
        <InvestmentsInput
          htmlFor="current-savings"
          id="current-savings"
          label="Current Savings ($)"
          value={currentSavings}
          onChange={currentInputHandler}
        />
        <InvestmentsInput
          htmlFor="yearly-contribution"
          id="yearly-contribution"
          label="Yearly Savings ($)"
          value={yearlyContribution}
          onChange={yearlyInputHandler}
        />
      </InvestmentsInputGroup>
      <InvestmentsInputGroup>
        <InvestmentsInput
          htmlFor="expected-return"
          id="expected-return"
          label="Expected Interest (%, per year)"
          value={expectedReturn}
          onChange={expectedInputHandler}
        />
        <InvestmentsInput
          htmlFor="duration"
          id="duration"
          label="Investment Duration (years)"
          value={duration}
          onChange={durationInputHandler}
        />
      </InvestmentsInputGroup>
      <InvestmentsButtonGroup>
        <InvestmentsButon
          type="reset"
          className="buttonAlt"
          label="Reset"
          action={props.onResetingForm}
        />
        <InvestmentsButon
          type="submit"
          className="button"
          label="Calculate"
          action={submitHandler}
        />
      </InvestmentsButtonGroup>
    </form>
  );
};

export default InvestmentsForm;
