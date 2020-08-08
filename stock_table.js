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

    return (
      <table>
        <tbody>
          <tr>
            <td>CAC40</td>
            <td>12</td>
            <td>43</td>
            <td>23</td>
          </tr>
          <tr>
            <td>Nasdaq</td>
            <td>12</td>
            <td>43</td>
            <td>23</td>
          </tr>
        </tbody>
      </table>

    );
  }
}

fetch('http://localhost:8000?count=10')
.then(function(body) { // body est la réponse de la requête effectuée
  return body.json(); // Evalue la réponse de l'objet
})
.then(function(json) {
  const domContainer = document.querySelector('#stock_table_container');
  ReactDOM.render(e(StockTable), domContainer);
  console.log(json);
});
