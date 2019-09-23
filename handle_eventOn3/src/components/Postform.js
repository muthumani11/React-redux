import React from 'react';


class Postform extends React.Component {
constructor(props){
  super(props);
  this.state = {
title:'',
body:''

};
this.onChange = this.onChange.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}
onChange(e){
  this.setstate({[e.target.name] : e.target.value });
}
onSubmit(e){
 e.preventDefault();
 const post = {
   title :this.state.title,
   body : this.state.body
 }
fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST',
headers :{
  'content-type':'application/json'
},
body : JSON.stringify(post)
})
.then(res => res.json())
.then(data => console.log(data));
}


})
}


  render() {

    return (
      <div>  <h1>Add POST</h1>
<form onSubmit={this.onSubmit}>
<div>
<label>Title :</label><br/>
<input type="text name="title" onChange={this.onChange} value={this.state.title}/>
</div><br/>
<div>
<label>Body :</label><br/>
<input type="text name="body" value={this.state.title} />
</div><br />
<button type ="submit" >Submitted</button>


</div>



</form>


        </div>

    );
  }
}


export default Postform;
