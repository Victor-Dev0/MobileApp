import { SQLiteProvider } from "expo-sqlite";
import { createContext, useContext, useState } from "react"
import { initDb } from "./database";

const DataConext = createContext({});

export function DataProvider({ children }) {
    const [data, setData] = useState(false)

    return (
        <DataConext.Provider value={{ data }}>
            <SQLiteProvider databaseName="FairyHands.db" onInit={initDb}>
                {children}
            </SQLiteProvider>
        </DataConext.Provider>
    )

}

export function useData() {
    const context = useContext(DataConext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider')
    }
    return context
}