'use strict';

// component : table

class StockTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            // ligne du tableau CAC40
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
            // ligne du tableau NASDAQ
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
