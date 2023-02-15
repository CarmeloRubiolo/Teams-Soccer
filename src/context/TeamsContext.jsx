import { useContext, createContext } from "react";

const Context = createContext();

export const useContextGlobal = () => useContext(Context)

const TeamsContext = ({children}) => {

    const Saludar = () => {
        console.log("hola");
    }

    return (
        <div>

            <Context.Provider value={{
                Saludar
            }}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default TeamsContext