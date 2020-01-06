import React from 'react';
import Child from './Child';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
      }
      handleClick= ()=>{
          this.setState(
              {count: this.state.count+1}
          )
      }

    render(){
        return <div>
            <h2 style={{fontSize:20,color:'#f00',marginLeft:40}}>hello world</h2>
            <button onClick={this.handleClick}>点我加一</button>
            <p>{this.state.count}</p>
            <Child  coco={this.state.count}/>
        </div>
    }
}