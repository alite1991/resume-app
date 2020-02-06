import React from 'react';

import TitlesAndIcons from './sections/TitlesAndIcons'
import AboutSection from './sections/AboutSection'
import SkillSection from './sections/SkillSection'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation">
  
      </div>
      
      <TitlesAndIcons></TitlesAndIcons>
      
      <AboutSection></AboutSection>
    
      <SkillSection></SkillSection>
     
    </div>
  );
}

export default App;
