'use strict';

const e = React.createElement;

class StockTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    console.log(this.props.stock_data)
    return (
      <div>
        <h2>{this.props.title}</h2>
        <table>
          <tbody>
            <tr>
              <td>CAC40</td>
              <td>{this.props.stock_data[0].stocks.CAC40}</td>
            </tr>
            <tr>
              <td>Nasdaq</td>
              <td>{this.props.stock_data[0].stocks.NASDAQ}</td>
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
  ReactDOM.render(<StockTable title="25 premières valeurs" stock_data={json} />, domContainer);

  console.log(json);
});
