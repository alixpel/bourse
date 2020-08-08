'use strict';

class StockTable extends React.Component {
  render() {
    return (
      <div>
        <h2>25 premières valeurs</h2>

        <table>
          <tbody>
            <tr>
              <td>CAC40</td>
              {this.props.stock_data.map((data) => {
                return (<td key={"CAC40-" + data.index}>{data.stocks.CAC40.toFixed(2)}</td>);
              })}
            </tr>
            <tr>
              <td>Nasdaq</td>
              {this.props.stock_data.map((data) => {
                return (<td key={"NASDAQ-" + data.index}>{data.stocks.NASDAQ.toFixed(2)}</td>);
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
