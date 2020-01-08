import React from 'react';
import { Row } from 'antd';
import './index.less';
import { getBanner } from '../../utils/api.js'

export default class Home extends React.Component {

    render() {
        getBanner().then(res => console.log(res))
        return (
            <Row className='homeMain'>
                这是home页面的内容
            </Row>
        )
    }
}