"use client"

import Image from "next/image"
import { ValidateEmail } from "../types/emailValidation"
import { useState } from 'react'
import ArrowIcon from '../../public/icon-arrow.svg'
import ErrorIcon from '../../public/icon-error.svg'
import formStyle from '../styles/form.module.scss'

export default function Form() {
    const [emailValue, setEmailValue] = useState('');
    const [error, setError] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const sendEmail = () => {
        if (!emailValue) {
            setError(true)
            setErrorMessage('Oh, you have to write your email here!')
        }

        if (emailValue) {
            let Valid = ValidateEmail(emailValue)
            if (Valid) {
                setErrorMessage('')
                setError(false)
                setEmailSent(true)
                setTimeout(() => {
                    setEmailSent(false)
                }, 2000)
            } else {
                setErrorMessage('Please provide a valid email!')
                setError(true)
            }
        }
    }

    return (
        <form onSubmit={e => e.preventDefault()} className={formStyle.formSection}>
            <input type="text" value={emailValue} autoComplete="none" onChange={e => setEmailValue(e.target.value)} placeholder="Email Address" />
            <button type='submit' onClick={sendEmail}>
                <Image
                    src={ArrowIcon}
                    alt=''
                />
            </button>
            <Image
                src={ErrorIcon}
                alt=''
                className={formStyle.ErrorIcon}
                style={{ scale: error ? 1 : 0 }}
            />
            <small style={{ scale: error ? 1 : 0 }}>{errorMessage}</small>
            
            <dialog style={{scale: emailSent ? 1 : 0}} open>Email sent ✅!</dialog>
        </form>
    )
} 