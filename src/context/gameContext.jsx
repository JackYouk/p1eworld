import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const GameProvider = ({ children }) => {

    const [loadingState, setLoadingState] = useState(0.0);
    // load when app is started
    useEffect(() => {
        setLoadingState(99.0);
        setTimeout(() => setLoadingState(100.0), 500);
    }, []);

    const value = {
        loadingState,
        setLoadingState,
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export const GameContext = () => {
    return useContext(Context);
}