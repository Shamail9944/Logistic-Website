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
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) { console.log(error); }
            else { console.log('Email sent: ' + info.response); }
        })
        return NextResponse.json({ message: 'Quotation Request sent successfully. We will reach back shortly.' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Failed to send Quotation. Please Call on contact numbers provided.' }, { status: 500 })

    }
}