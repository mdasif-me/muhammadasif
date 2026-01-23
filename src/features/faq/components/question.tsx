import { IQuestion } from "../interface"
import styles from "../styles/faq.module.css"

const Question = ({
  question,
  isActive,
}: {
  question: IQuestion
  isActive: boolean
}) => {
  return (
    <div
      className={`${styles.questionCard} ${isActive ? styles.questionCardActive : ""}`}
    >
      <h3 className="gradient-text text-center">{question.question}</h3>
      <p className="description text-center">{question.answer}</p>
    </div>
  )
}

export default Question
