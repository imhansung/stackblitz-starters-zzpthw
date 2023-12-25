import React from 'react';
import './style.css';
import { useState } from 'react';
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
          props.onChangeMode(Number(event.target.id));// target은 이벤트를 유발시킨 태그. 여기서는 a태그를 가리킴
          //id를 숫자로 바꿔줌. 
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
 // const _mode = useState('WELCOME'); //usestate의 인자는 그 스테이트의 초기값
  //const mode = _mode[0];//0번째의 인덱스로 읽는다
  //const setMode = _mode[1];//스테이트를 바꿀때는 1번째 인자로 바꾼다.
  const [mode, setMode] = useState('WELCOME');// 복잡하니 위의 3줄을 축약하면 이렇게 됨.
  const [id, setId] = useState(null);
  //console.log('_mode', _mode);//0번째 원소는 들어오는 값, 1번째 원소는 함수,
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'java', body:'java is...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, web"></Article>
  }else if(mode ==='READ'){
    let title, body = null;
    for(let i = 0; i<topics.length; i++){
      console.log(topics[i].id , id); // 입력한 값이 숫자였는데 태그의 속성으로 넘기면 문자가 됨; 왜 루프 두번 도는지 확인 좀....
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;

      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
        mode = 'WELCOME'
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
    
  );
}
