import React from 'react';
import {Row, Col} from 'antd';
import utils from '../../utils/utils.js'
import './index.less'

export default class Header extends React.Component {
    state={
        username:'杰哥第一帅',
        time:'00-00--00'
    }
    componentWillMount(){
        setInterval(() => {
            let date=utils.dateFormat("YYYY-mm-dd HH:MM:SS", new Date());
             this.setState({time:date})
        }, 1000);
    }

    render () {
        return (<div>
            <Row>
                <Col span={24} className='headerUesrinfo'><span>{this.state.username}</span><span><a href=" # ">退出</a></span></Col>
            </Row>
            <Row className='weatherBox' >
                <Col span={18} className='time'>
                    <div className='bread'><p>首页</p></div>
                </Col>
                <Col span={6} className='weather'><span>{this.state.time}</span><span>天气</span></Col>
            </Row>
        </div>)
    }
}