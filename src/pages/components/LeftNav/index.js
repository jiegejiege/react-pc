import React from 'react';
import './index.less';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
 function handleClick(e) {
    console.log('click', e);
    }

export default class LeftNav extends React.Component {

   
    render () {
        return <div className='leftBox'>
                    <img className='logo' alt='hello world' src='https://assets.souche.com/projects/jupiter-f2e/jupiter-pc/img/logo_02.44959e27.png'/>
    <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical" theme="dark">
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="mail" />
          <span>Navigation One</span>
        </span>
      }
    >
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Iteom 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="appstore" />
          <span>Navigation Two</span>
        </span>
      }
    >
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu
      key="sub4"
      title={
        <span>
          <Icon type="setting" />
          <span>Navigation Three</span>
        </span>
      }
    >
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
  </Menu>
        </div>
    }
}