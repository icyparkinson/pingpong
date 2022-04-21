import React from "react"
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
  return <div style = {{padding: "20px"}}>
    <form style = {{width: "80%"}}>
      <input type = "text" placeholder = "Date"></input>
      <input type = "text" placeholder = "Income"></input>
      <input type = "text" placeholder = "Expense"></input>
      <input type = "text" placeholder = "Balance"></input>
      <input type = "text" placeholder = "Description"></input>
      <button type = "button">Submit</button>
    </form>
  </div>
}

const Table = () => {
  return <div>
    <table style = {{borderCollapse: "collapse"}}>
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
    </table>
  </div>
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