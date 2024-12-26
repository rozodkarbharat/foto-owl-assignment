import useAddToInstantDB from "../CustomHooks/useAddToInstantDB";

const { createContext } = require("react");


const MessagwContext = createContext()


export const MessageConetxtProvider = ({children})=>{
    const { addData, loading, error, success } = useAddToInstantDB("/messages");


    return <MessagwContext.Provider value={{addData}} >{children}</MessagwContext.Provider>
}