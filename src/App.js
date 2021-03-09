import React, {Component} from 'react';
import './App.css';
import TopOfPage from './component/TopOfPage';
import Subject from './component/Subject'
import TopicData from './listfile/topic.json'
import Content from './component/Content'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: "main",
      subject:{ title: "Welcome!", desc: "Welcome my tutorial App!"},
      topic: TopicData,
      selected_content_id: 1
  }
    
  }
  render(){
    var CurTitle, CurDesc = null;
    if(this.state.mode == "main"){
      CurTitle = this.state.subject.title;
      CurDesc = this.state.subject.desc;
    } else if(this.state.mode == "topic"){
      var i = 0;
      while(i < this.topic.length){
        if(this.topic[i].id == this.state.selected_content_id){
          CurTitle = this.state.topic[i].title;
          CurDesc = this.state.topic[i].decs;
          break;
        }
        i++;
      }
    }
    return(//하나의 최상위 tag가 있어야 함.  === > javascript에서는 tag를 그대로 못쓴다. 하지만 여기에는 쓸수 있다. 왜? jsx facebook에서 개발한 유사 javascipt언어이기 때문이다.     
      <article className = "App">   
      <TopOfPage sub={this.state.subject} />
      <Subject data={this.state.topic} />
      <Content title={CurTitle} desc={CurDesc}/>
      </article>
    )
  }
}

export default App;
