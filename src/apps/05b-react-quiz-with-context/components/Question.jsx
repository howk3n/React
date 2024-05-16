import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const {
    currentQuestion: { question: questionText },
  } = useQuiz();
  return (
    <div>
      <h4>{questionText}</h4>
      <Options />
    </div>
  );
}
export default Question;
