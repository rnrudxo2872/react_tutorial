import {Component} from 'react';

class Content extends Component{
    render(){
        
        return(
            <article>
                <h2>{this.props.title}</h2>
                <div>{this.props.desc}</div>
            </article>
        );
    }
}

export default Content;