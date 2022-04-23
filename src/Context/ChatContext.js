// import { useState } from "react";
// import { createContext, useContext } from "react";

// const chatContext = createContext();

// const ChatContext = ({ childern }) => {
//   const [user, setuser] = useState();
//   return (
//     <chatContext.Provider value={{ user, setuser }}>
//       {childern}
//     </chatContext.Provider>
//   );
// };
// export const ChatState = () => {
//   return useContext(chatContext);
// };
// export default ChatContext;

import { createContext } from "react";

const Context = createContext();

const ChatProvider = ({ childern }) => {
  return (
    <>
      <Context.Provider value={{ name: "shah" }}>
        <>{childern}</>
      </Context.Provider>
    </>
  );
};

export default Context;
export { ChatProvider };
