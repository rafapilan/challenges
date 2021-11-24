import { createContext, useContext, useState } from "react";

export const QuestionsContext = createContext()

export default function QuestionsProvider({ children }) {
    const [questions, setQuestions] = useState([{
        category: 'Category',
        difficulty: 'Difficulty',
        question: 'How about a question?',
        correct_answer: 'Correct answer.',
        incorrect_answers: ['Incorrect answer 1.', 'Incorrect answer 2.']
    }])

    return (
        <QuestionsContext.Provider value={{ questions, setQuestions }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export function useQuestions() {
    const context = useContext(QuestionsContext)
    if (!context) throw new Error("useQuestions must be used within a QuestionsProvider")
    const { questions, setQuestions } = context
    return { questions, setQuestions }
}