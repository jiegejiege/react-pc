import React from 'react';
import {Row} from 'antd';
// import './index.less';

export default class NoMatch extends React.Component {

    render () {
        return (
            <Row className='footer' style={{textAlign:"center",color:'red'}}>
                <h1>Oops,Page not found!</h1>
            </Row>
        )
    }
}