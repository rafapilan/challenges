import { createContext, useContext, useState } from "react";

export const QuestionsContext = createContext()

export default function QuestionsProvider({ children }) {
    const [questions, setQuestions] = useState([])

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