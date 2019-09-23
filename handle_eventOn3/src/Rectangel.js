import React,{ Component} from 'react';




export class Rectangel extends Component {
  constructor(props) {
    super(props);


  this.clickevent = this.clickevent.bind(this);

}



clickevent(){
  alert(JSON.stringify(this.props.rectDetails));
}


    render(){
const {rectDetails} = this.props;
console.log(rectDetails);
        return (
          <form >
    <label>
      Rectangle Length :
      <input type="text" name="Length" value={rectDetails.Length} onChange={this.props.rectLen} />
    </label><br/>
    <label>
      Rectangle Width :
      <input type="text" name="Width" value={rectDetails.Width} onChange={this.props.rectWid} />
    </label><br/>
    <input  type="submit" value="click"  onClick={this.clickevent}/>
  </form>
        );
    }
}


export default Rectangel;
