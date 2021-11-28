import { Layout } from 'antd';
import './Admin.css'
import Nav from '../components/template/Nav';
import ColumnChart from 'components/chart/ColumnChart';
import VariablePie from 'components/chart/VariablePie';

function Admin() {
    return (
        <div className="body">
            <Layout style={{ minHeight: '100%' }}>
                <Nav />
                <div className="content">
                    <ColumnChart />
                    <VariablePie />
                </div>
            </Layout>

        </div>
    )
}

export default Admin