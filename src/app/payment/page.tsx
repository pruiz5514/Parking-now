"use client"
import './payment.css'
import StripePricingTable from "app/components/StripePricingTable/StripePricingTable"

const Payment = () => {
    return(
        <main className="payment-main">
            <StripePricingTable/>
        </main>
    )
}

export default Payment;