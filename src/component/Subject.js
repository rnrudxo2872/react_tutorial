import {Component} from 'react';

class Subject extends Component{
    render(){
        var tags = this.props.data;
        var i = 0;
        var topics = [];
        while(i < tags.length){
            topics.push(<li key={tags[i].id}>
              <a 
              href={"/content/" + tags[i].id}
              onClick={
                function(e){
                  console.log(e);
                  debugger;
                }
              }
              >
                {tags[i].title}
              </a>
            </li>)
            i++;
        }

      return(
        <ul>
          {topics}
        </ul>
      )
    }
  }

  export default Subject;