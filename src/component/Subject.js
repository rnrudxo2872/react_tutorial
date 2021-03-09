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
              data-topic={tags[i].id}
              onClick={
                function(e){
                  e.preventDefault();
                  console.log(this.props);
                  debugger;
                  this.props.PageChange(e.target.dataset.topic);
                }.bind(this)
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