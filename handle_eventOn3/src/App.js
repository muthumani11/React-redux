import React from 'react';
import Rectangel from './Rectangel';
import './App.css';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = { Rectangle :
                 {Length: '',
                  Width: '',
                  results :''
                  } };

 this.rectLength = this.rectLength.bind(this);
 this.rectWidth = this.rectWidth.bind(this);
console.log(this.state.Rectangle );

 }


 rectLength(e) {
   this.setState({Rectangle:{Length: e.target.value}});
 }
 rectWidth(e) {
   this.setState({Rectangle:{Width: e.target.value}});
 }



 render() {
   return (

<div>

<h1> Rectangel calculation </h1>

<Rectangel rectDetails={this.state.Rectangle}
         rectLen={this.rectLength}
         rectWid={this.rectWidth}
         />

</div>

   );
 }
}

export default App;
