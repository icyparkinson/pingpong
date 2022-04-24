import React, { useState } from "react"
const TableContainer = (props) => {
  return <div>
    <Heading />
    <InputEntry />
    <Table />
  </div>

}

const Heading = () => {
  return <h1>Ping Pong</h1>
}

const InputEntry = () => {
  const [date, setDate] = useState("")
  const [income, setIncome] = useState("")
  const [expense, setExpense] = useState("")
  const [balance, setBalance] = useState("")
  const [description, setDescr] = useState("")

  const handleChange = e => {
    setDate(e.target.value)
}

  return <div style = {{padding: "20px"}}>
    <form style = {{width: "80%"}}>
      <input id = "new-Date" onChange = "this.handleChange" value = {date} type = "text" placeholder = "Date"></input>
      <input id = "new-Income" onChange = "this.handleChange" value = {income} type = "text" placeholder = "Income"></input>
      <input id = "new-Expense" onChange = "this.handleChange" value = {expense} type = "text" placeholder = "Expense"></input>
      <input id = "new-Balance" onChange = "this.handleChange" value = {balance} type = "text" placeholder = "Balance"></input>
      <input id = "new-Description" onChange = "this.handleChange" value = {description} type = "text" placeholder = "Description"></input>
      <button type = "button">Submit</button>
    </form>
  </div>
}
const Table = () => {

// class Table extends Component{
//   constructor(props){
//     super(props)
//     this.state = { date: "", income: "", expense: "", balance: "", description: "" }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

  return (<div>
    <table style = {{borderCollapse: "collapse"}}>
      <tbody>
      <tr>
        < TableHead name="Date" />
        < TableHead name="Income" />
        < TableHead name="Expense" />
        < TableHead name="Balance" />
        < TableHead name="Description" />
      </tr>
      <tr>
        < TableList entry = "21/4" />
        < TableList entry = "$10" className = "income" />
        < TableList entry = "" />
        < TableList entry = "" />
        < TableList entry = "Membership" />
        < TableList entry = {< DeleteButton />} />
      </tr>
      {/* <tr>
        < TableList entry = {this.state.date} />
        < TableList entry = {this.state.income} />
        < TableList entry = {this.state.expense} />
        < TableList entry = {this.state.balance} />
        < TableList entry = {this.state.description} />
      </tr> */}
      </tbody>
    </table>
  </div>
  )
}


const TableHead = (props) => {
  
  return <th style = {headStyle}>
    {props.name}
    </th>
}


const headStyle = {
  borderLeft: "1px solid white",
  background: "gray",
  color: "white",
}

const TableList = ({entry}) => {
  return <td style = {listStyle}>
    {entry}
  </td>
}

const listStyle = {
  border: "1px solid blue",
  paddingLeft: "20px",
  width: "5%"
}

const DeleteButton = () => {
  return <button type = "button">Delete</button>
}



export default TableContainer