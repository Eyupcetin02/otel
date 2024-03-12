import React, { useState } from 'react';
import Navbarr from './components/Navbarr.jsx';
import Content from './components/Content.jsx';
const App = () => {
  
  const [user1 , setUser1] = useState({dogaoy : 0 , dogarezervasyon : "" , denizoy : 0 , denizrezervasyon : "" , partioy : 0 , partirezervasyon : "" , gezioy : 0 , gezirezervasyon : ""})
  const [user2 , setUser2] = useState({dogaoy : 0 , dogarezervasyon : "" , denizoy : 0 , denizrezervasyon : "" , partioy : 0 , partirezervasyon : "" , gezioy : 0 , gezirezervasyon : ""})
  
  const [userSelect , setUserSelect] = useState("user1")
  return (
    <div>
      <Navbarr setUserSelect={setUserSelect} userSelect={userSelect}/>
      <Content user1={user1} setUser1={setUser1} user2={user2} setUser2={setUser2} userSelect={userSelect}/>
    </div>
  );
}

export default App;
