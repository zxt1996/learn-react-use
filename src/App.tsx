import React from 'react';
// import { Demo } from './components/createGlobalState.Demo';
// import { Demo } from './components/createMemo.Demo';
// import Demo from './components/useUpdate.Demo';
import { Demo, DemoWrong } from './components/useGetSet.Demo';


function App() {
  return (
    <div className="App">
      <Demo/>
      <DemoWrong/>
    </div>
  );
}

export default App;
