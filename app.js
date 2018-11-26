var GroceryList = (props) => (
    <div class="container">
      <h2>A-Aron's Groceries</h2>
      <GroceryListItem groceries={['Coffee', "Eggs"]}  />    
    </div>
);

var GroceryListItem = (props) => (
    <ul>
        <li>{props.groceries[0]}</li>
        <li>{props.groceries[1]}</li>
    </ul>
)

// var Coffee = () => (
//     <div>Coffee</div>
// );
// var Eggs = () => (
//     <div>Eggs</div>
// );

ReactDOM.render(<GroceryList />, document.getElementById("app"));



// TODO
