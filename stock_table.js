'use strict';

// component : table

class StockTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th className="index" scope="row">Time</th>
              {this.props.stock_data.map((data) => {
                return (
                  <td key={"timestamp-" + data.index}>
                    <input value={data.stocks.timestamp} data-stock={"timestamp"} data-index={data.index} />
                  </td>
                );
              })}
            </tr>
            <tr className="cac40">
              <th className="index" scope="row">CAC40</th>
              {this.props.stock_data.map((data) => {
                return (
                  <td key={"CAC40-" + data.index}>
                    <input value={data.stocks.CAC40.toFixed(2)} data-stock="CAC40" data-index={data.index} onChange={(event) => this.props.valueDidChange(event)}/>
                  </td>
                );
              })}
            </tr>
            <tr className="nasdaq">
              <th className="index" scope="row">Nasdaq</th>
              {this.props.stock_data.map((data) => {
                return (
                  <td key={"NASDAQ-" + data.index} >
                    <input value={data.stocks.NASDAQ.toFixed(2)} data-stock="NASDAQ" data-index={data.index} onChange={(event) => this.props.valueDidChange(event)}/>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
