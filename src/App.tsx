import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage'
import Square from './components/square/Square'
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import './App.css';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [selected, setSelected] = useState(defaultDark);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setSelected(!selected);
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <div className="darkModeContainer">
        <span className="darkModeSpan">Dark/Light mode: </span>
        <ToggleSwitch selected={selected}
                      toggleSelected={()=> {
                        switchTheme();
        }}/>
      </div>
      <Square />
    </div>
  );
}

export default App;
