import Issue from 'components/molecules/Issue/Issue';
import IssueDateGroup from 'components/molecules/IssueDateGroup/IssueDateGroup'
import Background from 'components/templates/Background/Background';

function App() {
  return (
    <div className="App">
      <Background>
        <div>
          <div sidemenu>
            <div appcontrols></div>
            <div nav></div>
          </div>
          <div>
            <IssueDateGroup date='19-07-2016'>
              <Issue title="Page changes" isChecked />
              <Issue title="Page changes"/>
              <Issue title="Page changes" isChecked />
            </IssueDateGroup>
          </div>
        </div>
      </Background>
    </div>
  );
}

export default App;
