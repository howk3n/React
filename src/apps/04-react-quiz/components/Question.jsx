import PropTypes from "prop-types";
import Options from "./Options";

Question.propTypes = {
  data: PropTypes.any,
  dispatch: PropTypes.func,
  answer: PropTypes.any,
};

function Question({ data, dispatch, answer }) {
  const { question: questionText } = data;
  return (
    <div>
      <h4>{questionText}</h4>
      <Options dispatch={dispatch} question={data} answer={answer} />
    </div>
  );
}
export default Question;
