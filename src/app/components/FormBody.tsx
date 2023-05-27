'use client'
import React, { useRef } from "react";
import Image from "next/image"

export default function FormBody() {
    const cvvRef = useRef<HTMLInputElement>(null);
    const monthRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleCardNumberInput = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        let value = input.value.replace(/\D/g, ""); // Remove non-digit characters
        value = value.replace(/(.{4})/g, "$1 - "); // Insert dashes after every four digits
        value = value.trim(); // Remove leading/trailing spaces
        input.value = value;
    
        if (value.length >= 25) {
          cvvRef.current?.focus();
        }
    };

    const handleCvvInput = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        let value = input.value.replace(/\D/g, "");
        input.value = value;
    
        if (value.length >= 3) {
          monthRef.current?.focus();
        }
    };

    const handleMonthInput = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        let value = input.value.replace(/\D/g, "");
        input.value = value;
    
        if (value.length >= 2) {
          yearRef.current?.focus();
        }
    };

    const handleYearInput = (event: React.FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        let value = input.value.replace(/\D/g, "");
        input.value = value;
    
        if (value.length >= 2) {
          passwordRef.current?.focus();
        }
    };

    return (
        <section className="form-body">
            <form action="">
                <div className="input-group">
                    <div className="header">
                        <div className="description">
                            <h2 className="title">card number</h2>
                            <p className="desc">Enter the 15-digit card number on the card</p>
                        </div>
                        <button className="edit">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                            viewBox="0 0 512 512" xmlSpace="preserve">
                                <g>
                                    <g>
                                        <path d="M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
                                        c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
                                        L40.877,471.123z" />
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
                                        C515.134,119.679,515.134,99.354,502.598,86.818z" />
                                    </g>
                                </g>
                            </svg>
                            <span className="btn-desc">Edit</span>
                        </button>
                    </div>
                    <div className="main">
                        <Image src="/mc_symbol.svg" alt="" className="leading-icon" height={20} width={35} />
                        <input
                            type="text"
                            placeholder="2412 - 7512 - 3412 - 3456"
                            maxLength={25}
                            onInput={handleCardNumberInput}
                        />
                        <Image src="/verified-badge.svg" alt="" className="trailing-icon"  height={20} width={20} />
                    </div>
                </div>
                <div className="input-group __col">
                    <div className="header">
                        <div className="description">
                            <h2 className="title">CVV number</h2>
                            <p className="desc">Enter the 3 or 4 digit number on the card</p>
                        </div>
                    </div>
                    <div className="main">
                        <input
                            type="text"
                            placeholder="327"
                            maxLength={3}
                            onInput={handleCvvInput}
                            ref={cvvRef}
                        />
                        <Image src="/dots.svg" alt="" className="trailing-icon"  height={20} width={20} />
                    </div>
                </div>
                <div className="input-group __col">
                    <div className="header">
                        <div className="description">
                            <h2 className="title">expiry date</h2>
                            <p className="desc">Enter the expiration date of the card</p>
                        </div>
                    </div>
                    <div className="grp">
                        <div className="main __date">
                        <input
                            type="text"
                            placeholder="09"
                            maxLength={2}
                            onInput={handleMonthInput}
                            ref={monthRef}
                        />
                        </div>
                        <span className="divider">/</span>
                        <div className="main __date">
                        <input
                            type="text"
                            placeholder="09"
                            maxLength={2}
                            onInput={handleYearInput}
                            ref={yearRef}
                        />
                        </div>
                    </div>
                </div>
                <div className="input-group __col">
                    <div className="header">
                        <div className="description">
                            <h2 className="title">password</h2>
                            <p className="desc">Enter your Dynamic password</p>
                        </div>
                    </div>
                    <div className="main">
                        <input 
                            type="password" 
                            placeholder="******"
                            ref={passwordRef}
                        />
                        <Image src="/dots.svg" alt="" className="trailing-icon" height={20} width={20} />
                    </div>
                </div>
                <button type="submit" className="btn-submit">pay now</button>
            </form>
        </section>
    )
}