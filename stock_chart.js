'use strict';

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

        <LineChart width={500} height={300} data={this.props.stock_data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="stocks.CAC40" stroke="#8884d8" />
          <Line type="monotone" dataKey="stocks.NASDAQ" stroke="#82ca9d" />
          <Legend/>
        </LineChart>

    );
  }
}
