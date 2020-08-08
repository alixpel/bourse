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

fetch('http://localhost:8000?count=25')
.then(function(body) { // body est la réponse de la requête effectuée
  return body.json(); // Evalue la réponse de l'objet
})
.then(function(json) {
  const domContainer = document.querySelector('#stock_table_container');
  ReactDOM.render(<StockTable stock_data={json} />, domContainer);
});
