class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchased: false
        };
    }

    onListItemClick() {
        this.setState({
            purchased: !this.state.purchased
        });
    }

    onItemHover() {
        this.setState({
            mouseOver: !this.state.mouseOver
        });
    }

    render() {
        var style = {
            // textDecoration: this.state.purchased ? 'line-through' : 'none'
            fontWeight: this.state.mouseOver ? 'bold' : 'normal'
        };

        return (
            <li style={style} onMouseOver={this.onItemHover.bind(this)}>{this.props.groceries}</li>
        );        
    }
}

var GroceryList = (props) => (
    <ul>
    {props.grocery.map(grocery =>
    <GroceryListItem grocery={grocery} />
    )}
    </ul>
);


var App = () => (
    <div class="container">
        <h2>A-Aron's Groceries</h2>
        <GroceryListItem groceries={['Coffee']}  />
        <GroceryListItem groceries={['Eggs']}  />
        </div>
);

ReactDOM.render(<App />, document.getElementById("app"));