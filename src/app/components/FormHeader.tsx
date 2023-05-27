'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FormHeader() {
    const [countdown, setCountdown] = useState({
        minutes: 1,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
          if (countdown.seconds > 0) {
            setCountdown(prevCountdown => ({
              ...prevCountdown,
              seconds: prevCountdown.seconds - 1
            }));
          } else if (countdown.minutes > 0) {
            setCountdown(prevCountdown => ({
              minutes: prevCountdown.minutes - 1,
              seconds: 59
            }));
          } else {
            clearInterval(timer);
            window.location.reload()
          }
        }, 1000);
    
        return () => clearInterval(timer);
    }, [countdown.minutes, countdown.seconds]);

    return (
        <>
            <header className="form-header">
                <div className="logo">
                    {/* <span className="logo-circle"></span> */}
                    <Image src='/logo.png' alt='logo' width={40} height={40} />
                    <h1>AceCoin<span className="lean">Pay</span></h1>
                </div>
                <div className="timer">
                    <span className="timer-box">{countdown.minutes.toString().padStart(2, '0').charAt(0)}</span>
                    <span className="timer-box">{countdown.minutes.toString().padStart(2, '0').charAt(1)}</span>
                    <span className="timer-divider">:</span>
                    <span className="timer-box">{countdown.seconds.toString().padStart(2, '0').charAt(0)}</span>
                    <span className="timer-box">{countdown.seconds.toString().padStart(2, '0').charAt(1)}</span>
                </div>
            </header>
        </>
    )
}