import React,{ useState } from 'react';

import UseContext from './components/useContext.js';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <>
    <h1>Lab Hooks-basic </h1>
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
    </>
  );
}

export default App;