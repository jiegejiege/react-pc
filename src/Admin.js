import React from 'react';
import {Row, Col} from 'antd';
import Header from './pages/components/Header/index'
import Footer from './pages/components/Footer/index'
import LeftNav from './pages/components/LeftNav/index'
import './pages/style/commen.less'

export default class Admin extends React.Component {

    render () {
        return <Row className='container'>
            <Col span={3} className='leftNav'>
                <LeftNav />
            </Col>
            <Col span={21} className='main'>
                <Header className='header'/>
                <Row className='content'>
                    content
                </Row>
                <Footer className='footer'/>
            </Col>
        </Row>
    }
}