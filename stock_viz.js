'use strict';

class StockViz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock_data: props.stock_data,
    };
  }

  render() {
    return (
      <div>
        <StockChart stock_data={this.props.stock_data} />
        <StockTable stock_data={this.props.stock_data} />
      </div>
    )
  }
}
