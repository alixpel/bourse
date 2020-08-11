'use strict';

// utilisation de Recharts pour le component chart.

const {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Legend
} = Recharts;

class StockChart extends React.Component {
  render() {
    return (

        <LineChart width={1200} height={300} data={this.props.stock_data}
        margin={{top: 5, right: 30, left: 10, bottom: 5,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis yAxisId="left"/>
        <YAxis yAxisId="right" orientation="right" />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line yAxisId="right" type="monotone" dataKey="stocks.CAC40" name="CAC40" stroke="#8884d8" />
        <Line yAxisId="left" type="monotone" dataKey="stocks.NASDAQ" name="NASDAQ" stroke="#82ca9d" />
        <Legend  />
        </LineChart>

    );
  }
}
