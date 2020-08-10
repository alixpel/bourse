'use strict';

class StockViz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock_data: props.stock_data,
    };
  }

  handleChange(event) {
    console.log("handleChange");
    console.log(event.target.dataset.stock);
    console.log(event.target.dataset.index);
    const stock_data = this.state.stock_data.slice();
    stock_data
      .find((item) => {return item.index == event.target.dataset.index})
      .stocks[event.target.dataset.stock] = parseFloat(event.target.value);
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
