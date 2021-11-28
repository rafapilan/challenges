import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState } from 'react'

const optionsAssetsStatus = {
    chart: {
        type: 'column',
        width: 460,
        height: 300
    }, title: {
        text: 'Saúde das máquinas:'
    }, xAxis: {
        categories: [
            'Empresa Teste (Unidade Jaguar)',
            'Empresa Teste (Unidade Tobias)'
        ],
        crosshair: true
    },
    yAxis: {
        min: 1,
        title: {
            text: 'Health Score (%)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Asset 1',
        data: [98, 45]
    }, {
        name: 'Asset 2',
        data: [60, 100]
    }, {
        name: 'Asset 3',
        data: [50, 50]
    }, {
        name: 'Asset 4',
        data: [100, 100]
    }, {
        name: 'Asset 5',
        data: [82, 70]
    }, {
        name: 'Asset 6',
        data: [30, 95]
    }, {
        name: 'Asset 7',
        data: [3, 80]
    }, {
        name: 'Asset 8',
        data: [100, 45]
    }, {
        name: 'Asset 9',
        data: [45, 57]
    }, {
        name: 'Asset 10',
        data: [90, 100]
    }]
}

function ColumnChart() {

    const [assetsStatus, setAssetsStatus] = useState(optionsAssetsStatus)

    return (
            <HighchartsReact
                highcharts={Highcharts}
                options={assetsStatus}
            />
    )
}

export default ColumnChart;