import { Layout, Menu } from 'antd';
import { PieChartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import 'font-awesome/css/font-awesome.css'
import { useState } from 'react';
import './Nav.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

function Nav() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<UnorderedListOutlined />}>
                    Data
                </Menu.Item>
                <SubMenu key="company1" icon={<i className="fa fa-industry" />} title="Empresa Teste">
                    <Menu.Item key="c1unit1">Unidade Jaguar</Menu.Item>
                    <Menu.Item key="c1unit2">Unidade Tobias</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default Nav