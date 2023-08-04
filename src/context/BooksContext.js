import axios from "axios";
import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const requestData = async (query, type) => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${type}&key=${API_KEY}`;

    try {
      const {
        data: { items },
      } = await axios(URL);
      setData(items);
      console.log('Request has sent!');
    } catch (error) {
      console.log(error);
    } finally {
      const endTime = Date.now();
      console.log(`Request has completed!`);
      return endTime;
    }
  };

  return (
    <BooksContext.Provider value={{ data, requestData }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksContextProvider;
