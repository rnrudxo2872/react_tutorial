import React, {Component} from 'react';
import './App.css';
import TopOfPage from './component/TopOfPage';
import Subject from './component/Subject'
import TopicData from './listfile/topic.json'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{ title: "Tutorial", decs: "Welcome my tutorial App!"},
      topic: TopicData
  }
    
  }
  render(){
    return(//하나의 최상위 tag가 있어야 함.  === > javascript에서는 tag를 그대로 못쓴다. 하지만 여기에는 쓸수 있다. 왜? jsx facebook에서 개발한 유사 javascipt언어이기 때문이다.     
      <article className = "App">   
      <TopOfPage sub={this.state.subject} />
      <Subject data={this.state.topic} />
      </article>
    )
  }
}

export default App;
