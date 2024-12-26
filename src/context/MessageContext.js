import useAddToInstantDB from "../CustomHooks/useAddToInstantDB";
import { db } from "../db";
import { AuthContext } from "./AuthContext";

const { createContext, useState, useContext } = require("react");


export const MessagContext = createContext()


export const MessageConetxtProvider = ({ children }) => {
    const { addData, loading, Error, success } = useAddToInstantDB('messages');
    const [userNumber, setuserNumber] = useState("")
    const { Data } = useContext(AuthContext)
    const { isLoading, error, data } = db.useQuery({
        messages: {
          $: {
            where: {
              or: [
                { from: Data.number, to: userNumber },      
                { to: Data.number, from: userNumber },         
              ],
            },
          },
        },
      });

      function handleSendMessage(message) {
        addData({...message, dateTime:Date.now()})
    }


    function setReceiverNumber(id) {
        setuserNumber(id)
    }


    return <MessagContext.Provider value={{ messages: data?.messages, handleSendMessage, setReceiverNumber }} >{children}</MessagContext.Provider>
}