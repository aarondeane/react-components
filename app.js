class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.groceries}</li>
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