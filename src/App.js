import React, { useState } from "react"
import { nanoid } from "nanoid"
import "./App.css"

const App = () => {

let data = [
    {
        "id" : 1,
        "date" : "21/4",
        "income" : 10,
        "expense" : 2,
        "balance" : 8,
        "description" : "Membership"
    }
]

    const [entries, setEntries] = useState(data)
    const [addFormData, setAddFormData] = useState({
        date: "",
        income: "",
        expense: "",
        balance: "",
        description: ""
    })

    const handleAddFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value

        const newFormData = { ...addFormData}
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault()

        const newEntry = {
            id: nanoid(),
            date: addFormData.date,
            income: addFormData.income,
            expense: addFormData.expense,
            balance: addFormData.balance,
            description: addFormData.description
        }

        const newEntries = [...entries, newEntry]
        setEntries(newEntries)


    // const handleDeleteClick = (entryId) => {
    //     const newEntries = [...entries]

    //     const index = entries.findIndex((entry) => entry.id === entryId)

    //     newEntries.splice(index, 1)

    //     setEntries(newEntries)
    // }
}

    return <div className = "app-container">
        <table style = {{borderCollapse: "collapse"}}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Income</th>
                    <th>Expense</th>
                    <th>Balance</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry)=> (
                    <tr>
                        <td>{entry.date}</td>
                        <td>{entry.income}</td>
                        <td>{entry.expense}</td>
                        <td>{entry.balance}</td>
                        <td>{entry.description}</td>
                        <td>
                            <button type = "button">Delete</button>
                            {/* <button type = "button" onClick = {() => handleDeleteClick(entry.id)}>Delete</button> */}

                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        <h2>Add an entry</h2>
        <form onSubmit={handleAddFormSubmit}>
            <input type = "text" name = "date" required = "required" placeholder = "date" onChange = {handleAddFormChange}/> 
            <input type = "text" name = "income" required = "required" placeholder = "income" onChange = {handleAddFormChange} /> 
            <input type = "text" name = "expense" required = "required" placeholder = "expense" onChange = {handleAddFormChange} /> 
            <input type = "text" name = "balance" required = "required" placeholder = "balance" onChange = {handleAddFormChange} /> 
            <input type = "text" name = "description" required = "required" placeholder = "description" onChange = {handleAddFormChange} /> 
            <button type="submit">Add</button>
        </form>
    </div>
}

export default App