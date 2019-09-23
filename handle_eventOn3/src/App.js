import React from 'react';
import Posts from  './components/Posts';
import Postform from  './components/Postform';

class App extends React.Component {


  render() {

    return (
      <div>  <h1>REDUX EXAMPLE1</h1>

      <Postform/>
    <hr/>
<Posts/>
        </div>

    );
  }
}


export default App;
