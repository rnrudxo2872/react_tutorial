import React, {Component} from 'react';
import './App.css';
import TopOfPage from './component/TopOfPage';
import Subject from './component/Subject'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject:{ title: "Tutorial", decs: "Welcome my tutorial App!"},
      topic:[{
        id:1,
        title:"html",
        decs:`"Hyper Text Mark-up Language" 의 약자. 웹 페이지의 모습을 기술하기 위한 규약. 프로그래밍 언어가 아니라 마크업 언어[2]다. 헷갈리지 않도록 하자.[3] 웹사이트에서 흔히 볼 수 있는 htm이나 html 확장자가 바로 이 언어로 작성된 문서다.
        최초 제안자는 CERN의 물리학자 티머시 J. 버너스리이다. URL, HTTP, WWW의 전신인 Enquire 등도 그가 세트로 개발하고 제안했다. TCP/IP 통신규약을 만든 빈턴 G. 서프(Vinton Gray Cerf)와 함께 인터넷의 아버지로 불린다.`
      },{
        id:2,
        title:"css",
        decs:`종속형 시트 또는 캐스케이딩 스타일 시트(Cascading Style Sheets, CSS)는 마크업 언어가 실제 표시되는 방법을 기술하는 언어로[1], HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이며, 레이아웃과 스타일을 정의할 때의 자유도가 높다.`
      },{
        id:3,
        title:"react",
        decs:`컴퓨팅에서 리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서[2] 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다.
        리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션의 개발 시 토대로 사용될 수 있다. 복잡한 리액트 애플리케이션들은 상태 관리, 라우팅, API와의 통신을 위한 추가 라이브러리의 사용이 일반적으로 요구된다.`
      }
    ]
  }
    
  }
  render(){
    console.log(this.state.subject);
    return(//하나의 최상위 tag가 있어야 함.  === > javascript에서는 tag를 그대로 못쓴다. 하지만 여기에는 쓸수 있다. 왜? jsx facebook에서 개발한 유사 javascipt언어이기 때문이다.     
      <article className = "App">   
      <TopOfPage />
      <Subject data={this.state.topic} />
      </article>
    )
  }
}

export default App;
