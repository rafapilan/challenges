import { createContext, useContext, useState } from "react";

export const QuestionsContext = createContext()

export default function QuestionsProvider({ children }) {
    const [questions, setQuestions] = useState()

    const [on, setOn] = useState(false)

    return (
        <QuestionsContext.Provider value={{ questions, setQuestions, on, setOn }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export function useQuestions() {
    const context = useContext(QuestionsContext)
    if (!context) throw new Error("useQuestions must be used within a QuestionsProvider")
    const { questions, setQuestions, on, setOn } = context
    return { questions, setQuestions, on, setOn }
}