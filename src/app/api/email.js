import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'


export async function POST(request) {
    try {
        const { fname, lname, email, website, phone, message } = await request.json()
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'shamail130silverhawk@gmail.com',
                pass: 'flnpdqrmosnklpfk'
            }
        })
        const mailOptions = {
            from: email,
            to: 'shamail130silverhawk@gmail.com',
            subject: "Please Contact me for more details about my order",
            html: `
            <h3>Hello! I am ${fname} ${lname}</h3>
            <p>Contact Details - ${phone}, ${website}</p>
            <li>Message - ${message}</li>
            `
        }
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Failed to send Email' }, { status: 500 })

    }
}