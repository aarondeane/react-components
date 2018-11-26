var GroceryList = () => (
    <div class="container">
      <h2>A-Aron's Groceries</h2>
      <ul>
        <Coffee />
        <Eggs />
      </ul>
      
    </div>
);

var Coffee = () => (
    <div>Coffee</div>
);
var Eggs = () => (
    <div>Eggs</div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));



// TODO
