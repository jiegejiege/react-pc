import React from 'react';
import './index.less'

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'jack'
        };
    }
    render() {
        return <div >
            <h3 className='main'>我是一个子组件</h3>
            <p>我是来自父组件传的值：{this.props.coco}</p>
        </div>
    }
}