import { createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [searchTerm , setSearchTerm] = useState("")
  const [typeSearch , setTypeSearch] = useState("")
  const [currentUser , setCurrentUser] = useState(null)
  const [singleHotelData , setSingleHotelData] = useState(null)
  const [text , setText] = useState("")
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <AuthContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        currentUser,
        setCurrentUser,
        singleHotelData,
        setSingleHotelData,
        date,
        setDate,
        text,
        setText,
        typeSearch,
        setTypeSearch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
