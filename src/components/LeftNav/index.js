import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';
import MenuConfig from '../../config/MenuConfig.js'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftNav extends React.Component {

    componentWillMount(){
      const menuTreeNode = this.renderMenu(MenuConfig);
      this.setState({
        menuTreeNode
      })
    }
    renderMenu =(data)=>{
      return   data.map((item) =>{
          if(item.children){
            return (
              <SubMenu
                key={item.key}
                title={item.title} >
                {this.renderMenu(item.children)}
              </SubMenu>
            )
          }
        return (
          <Menu.Item key={item.key} title={item.title} >
            <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
        )
      })
    }
    render () {
        return (
          <div className='leftBox'>
            <img className='logo' alt='hello world' src='https://assets.souche.com/projects/jupiter-f2e/jupiter-pc/img/logo_02.44959e27.png'/>
            <Menu theme="dark">
              {this.state.menuTreeNode}
            </Menu>
          </div>
        )
    }
}