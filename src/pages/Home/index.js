import React from 'react';
import { Row,Button,Col } from 'antd';
import './index.less';
import appStore from '../../store/index'
// import { getBanner } from '../../utils/api.js'
import { observer } from 'mobx-react';

@observer
class Home extends React.Component {

    render() {
        const store = appStore;
        // getBanner().then(res => console.log(res))
        return (
            <Row className='homeMain'>
                <p>这里是测试的store </p>   
                <h1>{store.timer}</h1>
                <Col span={6} className='time'>
                    <Button type="primary" onClick={()=>store.decrease()} size={'large'}>minus</Button>
                </Col>
                <Col span={6} className='time'>
                    <Button  type={'danger'} onClick={()=>store.resetTimer()} size={'large'}>reset</Button>
                </Col>
                <Col span={6} className='time'>
                    <Button type="primary" onClick={()=>store.increase()} size={'large'}>add</Button>
                </Col>
            </Row>
        )
    }
}

export default Home