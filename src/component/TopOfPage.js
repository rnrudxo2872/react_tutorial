import React, {Component} from 'react';
import './TopOfPage.css';

class TopOfPage extends Component{
    render(){ // 현 javascript 스펙에서는 class 안에서 function은 function을 생략
      return(
        <h1>{this.props.sub.title}</h1>
      );
    }
}

export default TopOfPage;