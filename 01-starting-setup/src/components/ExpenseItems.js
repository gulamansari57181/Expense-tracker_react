import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css"


// Creating a expense item components and props
function ExpenseItems(props) {
   

  return (
   
    <div className="expense-item">
        {/* Here we are passing props data from one compnent 
        to another componet thus props.date is used */}
         <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
// Exporting by default metjod so that it can be used in another components by importing

export default ExpenseItems;
