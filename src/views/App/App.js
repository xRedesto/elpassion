import React from 'react'
import Background from 'components/templates/Background/Background';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'

const App = () =>{
  return (
    <div className="App">
      <Background>
        <MainTemplate/>
      </Background>
    </div>
  );
}

export default App;
