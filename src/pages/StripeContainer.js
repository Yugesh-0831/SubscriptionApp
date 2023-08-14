import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51NdoYdSF7LF4t6AidPgxHEBf90T9cwcBe5ATXBD4a5TAHz94nDnpcDePU8TQ52micpPpJU0bP6Mz4ufvEn5esx0E00t76f40tB"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}