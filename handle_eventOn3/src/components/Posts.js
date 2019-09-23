import React from 'react';


class Posts extends React.Component {
constructor(props){
  super(props);
  this.state = {

    posts :[]
  }
}

  componentWillMount(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setstate({posts: data}));
  }


  render() {
    const postItems =this.state.posts.map(post => (
<div key ={post.id}>
<h3> {post.title}</h3>
<p>{post.body}</p>

));

    return (
      <div>  <h1>POST1</h1>
      {postItems}

        </div>

    );
  }
}


export default Posts;
