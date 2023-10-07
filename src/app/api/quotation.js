import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'


export async function POST(request) {
    try {
        const { name, email, phone, collectionPostcode, dileveryPostcode, parcelDetail, code } = await request.json()
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
            subject: "Quick Quote Request",
            html: `
            <h3>Hello! I am ${name}</h3>
            <p>Contact Details - ${phone}</p>
            <p>Please reply me with a quick quotation for courier as per details provided</p>
            <li>Parcel Details - ${collectionPostcode}</li>
            <li>Delivery PostCode - ${dileveryPostcode}</li>
            <li>Collection PostCode - ${parcelDetail}</li>
            <li>Confirmation Code - ${code}</li>
            `
        }
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Failed to send Email' }, { status: 500 })

    }
}