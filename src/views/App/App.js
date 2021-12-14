import React from 'react'
import Background from 'components/templates/Background/Background';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'

const App = () =>{
  return (
    <div className="App">
      <Background>
        <div>
          <div sidemenu>
            <div appcontrols></div>
            <div nav></div>
          </div>
          <div>
            <MainTemplate/>
          </div>
        </div>
      </Background>
    </div>
  );
}

export default App;
