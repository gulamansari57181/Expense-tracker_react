import "./ExpenseItems.css"


// Creating a expense item components
function ExpenseItems(props) {
    // To create date object
// const expenseDate = new Date("2023-01-14");
// const expenseTitle="Car Insurance"
// const expenseAmount="$250.60"

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
// Exporting by default metjod so that it can be used in another components by importing

export default ExpenseItems;
