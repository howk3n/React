import ReactQuizBody from "./ReactQuizBody";
import { QuizProvider } from "../contexts/QuizContext";

function ReactQuizWithContext() {
  return (
    <QuizProvider>
      <ReactQuizBody></ReactQuizBody>;
    </QuizProvider>
  );
}

export default ReactQuizWithContext;
