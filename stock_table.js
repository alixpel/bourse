'use strict';

class StockTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr className="cac40">
              <td class="index">CAC40</td>
              {this.props.stock_data.map((data) => {
                return (
                  <td key={"CAC40-" + data.index}>
                    <input value={data.stocks.CAC40} data-stock="CAC40" data-index={data.index} onChange={(event) => this.props.valueDidChange(event)}/>
                  </td>
                );
              })}
            </tr>
            <tr className="nasdaq">
              <td class="index">Nasdaq</td>
              {this.props.stock_data.map((data) => {
                return (
                  <td key={"NASDAQ-" + data.index} >
                    <input value={data.stocks.NASDAQ} data-stock="NASDAQ" data-index={data.index} onChange={(event) => this.props.valueDidChange(event)}/>
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
