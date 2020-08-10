'use strict';

// component : data

class StockViz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock_data: props.stock_data,
    };
  }

  handleChange(event) {
    const input = event.target;
    const stockIndex = input.dataset.index;
    const stockName = input.dataset.stock;
    let stockValue = parseFloat(input.value);
    if (isNaN(stockValue)) {
      stockValue = "";
    }

    const stock_data = this.state.stock_data.slice();
    const item = stock_data.find(item => item.index == stockIndex);
    item.stocks[stockName] = stockValue;
    this.setState({stock_data: stock_data});
  }

  render() {
    return (
      <div>
        <StockChart stock_data={this.state.stock_data} />
        <StockTable stock_data={this.state.stock_data} valueDidChange={(event) => this.handleChange(event)} />
      </div>
    )
  }
}
