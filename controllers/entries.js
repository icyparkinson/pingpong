const Entry = require ("../models/Entry")

module.exports = {
getEntry: async(req,res) => {
    Entry.find().sort({date: -1})
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json(`"Error: ` + err))
},

addEntry: async(req, res) =>{
    try{
        await Entry.create({
            date : req.body.date,
            income : req.body.income,
            expense : req.body.expense,
            balance : req.body.balance,
            description : req.body.description,
        })
        res.json("Entry added!")
    }catch(err){
        console.log(err)
    }
},

deleteEntry: async(req, res)=> {
    try{
        await Entry.findOneAndDelete({_id:req.body.dbID})
        console.log("Deleted entry")
        res.json("Deleted it")
    }catch(err){
        console.log(err)
    }
},

// updateEntry: async(req,res)=>{

// }

}
