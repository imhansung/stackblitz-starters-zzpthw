import React from 'react';
import './style.css';
function Header(props){
  console.log('props', props, props.title);
  return  <header>
  <h1><a href="/" onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}
function Nav(props){
  const lis = [  ]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(event.target.id);// target은 이벤트를 유발시킨 태그. 여기서는 a태그를 가리킴
        }}>{t.title}</a>
      </li>)
  }
  return<nav>
        <ol>
          {lis}
        </ol>
      </nav>
}
function Article(props){
  return  <article>
      <h2>{props.title}</h2>
      {props.body}
      </article>
}

export default function App() {
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'java', body:'java is...'}
  ]
  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello"></Article>
      <Article title="HI" body="react"></Article>
      
    </div>
    
  );
}
