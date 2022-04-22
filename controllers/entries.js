const Entry = require('../models/Entry')

module.exports = {
    getEntry: async (req,res)=>{
        try{
            const entryDate = await Entry.find({userId:req.user.id}).sort({date: -1})
            res.render('index.js', {date: date, user: req.user})
        }catch(err){
            console.log(err)
        }
    },


    addEntry: async (req, res)=>{
        try{
            await Entry.create({
                date: req.body.date,
                income: req.body.income,
                expense: req.body.expense,
                balance: req.body.balance,
                description: req.body.balance,
                userId: req.user.id})
            console.log('Entry has been added!')
            res.redirect('/entries')
        }catch(err){
            console.log(err)
        }
    },


    deleteEntry: async (req, res)=>{
        console.log(`${req.body.dbID}`)
        try{
            await Anime.findOneAndDelete({_id:req.body.dbID})
            console.log("Deleted entry")
            console.log(`${req.body.dbID}`)
            res.json(`Deleted It`)
        }catch(err){
            console.log(err)
        }
    },
}    