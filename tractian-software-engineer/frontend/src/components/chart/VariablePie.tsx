import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import variablePie from "highcharts/modules/variable-pie.js"
import { useState } from 'react'

variablePie(Highcharts)

const optionsAssetsStatus = {
    chart: {
        type: 'variablepie',
        width: 460,
        height: 300
    }, title: {
        text: 'Estado das Máquinas:'
    }, tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            '<b>{point.y}</b> Máquinas com status:<br/>' +
            '{point.name}<br/>'
    }, plotOptions: {
        series: {
            size: 200
        }
    }, series: [{
        minPointSize: 10,
        innerSize: '55%',
        zMin: 0,
        name: 'stateAssets',
        shadow: {
            color: 'grey',
            width: 5,
            offsetX: 2,
            offsetY: 2
        }, data: [{
            name: 'Em Alerta',
            y: 1,
            z: 1,
            color: '#fa8c16'
        }, {
            name: 'Em Parada',
            y: 1,
            z: 1,
            color: '#595959'
        }, {
            name: 'Em Operação',
            y: 1,
            z: 1,
            color: '#1e3a8b'
        }]
    }]
}

function VariablePie() {

    const [assetsStatus, setAssetsStatus] = useState(optionsAssetsStatus)

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={assetsStatus}
            />
        </>
    )
}

export default VariablePie;