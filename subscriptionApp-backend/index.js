const express = require('express');
const mongoose = require('mongoose');
const userRoute = require("./routes/auth")
const bodyParser = require("body-parser")
const cors = require("cors")
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
const auth = require('./middleware/auth');
const stripe = require("stripe")("sk_test_51NdoYdSF7LF4t6AicnUiRY14izc2Pq2GjJRvOM8ZuTnUYoKUJwECNf75EXjh7mLVUWFFL8A6uu3zhbpXYcBFBm7d0044s4QIrv")

const app = express();

require('dotenv').config();


const mongoString = "mongodb+srv://yugesh:yugesh123@cluster0.ghv5pwk.mongodb.net/"
// process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());


app.use(cors({
    origin: '*'
}))
app.use("/api/auth", userRoute);


// -------------------------------------------------
app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		// const payment = await stripe.paymentIntents.create({
		// 	amount,
		// 	currency: "USD",
		// 	description: "Spatula company",
		// 	payment_method: id,
		// 	confirm: true
		// })
		// console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

//----------------------------------------------------------
app.listen(8800, () => {
    console.log(`Server Started at ${8800}`)
})
