'use client'
import Image from "next/image"

export default function PaymentInfo() {
    return (
        <div className="payment-info col-span-12 md:col-span-4">
            <div className="checkout">
                <span className="blu"></span>
                <div className="credit-card">
                    <div className="credit-card__head">
                        <Image src="/chip.png" alt="" className="chip" height={20} width={40} />
                        <Image src="/wifi.png" alt="" className="wifi" height={20} width={30} />
                    </div>
                    <div className="credit-card__body">
                        <span className="holder">jonathan micheal</span>
                        <div className="card-digits">
                            <div className="hidden-digits">
                                <span className="circle"></span>
                                <span className="circle"></span>
                                <span className="circle"></span>
                                <span className="circle"></span>
                            </div>
                            <span className="visible-digits">3456</span>
                        </div>
                    </div>
                    <div className="credit-card__footer">
                        <span className="expiry">09/22</span>
                        <Image src="/mastercard-2.svg" alt="" className="logo" height={20} width={40} />
                    </div>
                    <div className="card__design">
                        <span className="inner"></span>
                    </div>
                </div>
                <div className="checkout-details">
                    <div className="purchase-data">
                        <div className="data">
                            <span className="title">company</span>
                            <span className="value">
                                <Image src="/apple-13.svg" alt="" height={20} width={20} />
                                <span className="inner-text">apple</span>
                            </span>
                        </div>
                        <div className="data">
                            <span className="title">order number</span>
                            <span className="value">
                                <span className="inner-text">1266201</span>
                            </span>
                        </div>
                        <div className="data">
                            <span className="title">product</span>
                            <span className="value">
                                <span className="inner-text">macbook air</span>
                            </span>
                        </div>
                        <div className="data">
                            <span className="title">VAT (20%)</span>
                            <span className="value">
                                <span className="inner-text">$100.00</span>
                            </span>
                        </div>
                    </div>
                    <div className="divider">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                    <div className="purchase-total">
                        <div className="total">
                            <span className="desc">You have to Pay</span>
                            <div className="t-amount">
                                <h1 className="amount">549<sub>.99</sub></h1>
                                <span className="symbol">USD</span>
                            </div>
                        </div>
                        <Image src="/docket.png" alt="" height={20} width={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}