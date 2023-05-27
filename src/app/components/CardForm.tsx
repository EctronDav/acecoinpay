'use client'
import FormHeader from "./FormHeader"
import FormBody from "./FormBody"

export default function CardForm() {
    return (
        <div className="col-span-12 md:col-span-8">
            <div className="form">
                <FormHeader />
                <FormBody />
            </div>
        </div>
    )
}