const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

const apiData = require("./bank_branches.json")

app.get("/", (req, res) => {
    res.send("This api works at adress /api/banks")
})

app.get(`/api/banks`, (req, res) => {
    const { id, ifsc, branch, city, district, state } = req.query
    let arr = [...apiData]
    let narr = arr.filter((item) => {
        return (
            (id ? id == item.bank_id : true) &&
            (ifsc ? ifsc == item.ifsc : true) &&
            (branch ? branch == item.branch : true) &&
            (city ? city == item.city : true) &&
            (district ? district == item.district : true) &&
            (state ? state == item.state : true)
        )
    })

    res.send(narr)
})

// app.get(`/bankId/:id`, (req, res) => {
//     let a = [...apiData]
//     let b = a.filter((k) => k.bank_id == req.params.id)
//     res.send(b)
// })

// app.get(`/bankId/:id/city/:city`, (req, res) => {
//     let a = [...apiData]
//     let b = a.filter(
//         (k) => k.bank_id == req.params.id && k.city == req.params.city
//     )
//     res.send(b)
// })

// app.get(`/ifsc/:id`, (req, res) => {
//     let a = [...apiData]
//     let b = a.filter((k) => k.ifsc == req.params.id)
//     res.send(b)
// })

app.listen(port, () => {
    console.log("I am live again" + port)
})