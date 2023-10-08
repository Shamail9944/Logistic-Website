'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AiOutlinePlusSquare } from 'react-icons/ai'

const letters = [
    {
        ltr: "A",
        objects: [
            { title: 'Aerosol' },
            { title: 'Aftershave' },
            { title: 'Airbag' },
            { title: 'Alcohol' },
            { title: 'Ammunition/Ammo' },
            { title: 'Animals of any form (alive or dead)' },
            { title: 'Antique/Antiques' },
            { title: 'Any Hazardous, Combustible, Or Explosive Materials (Any Item That Displays A UN Number)' },
            { title: 'Any Item Containing Petrol (Liquid, Gas Or Fumes)' },
            { title: 'Aromatherapy Oil' },
            { title: 'Ashes' }
        ]
    },
    {
        ltr: "B",
        objects: [
            { title: 'Basin' },
            { title: 'Battery' },
            { title: 'Bed / Bed Frame' },
            { title: 'Biological Samples' },
        ]
    },
    {
        ltr: "C",
        objects: [
            { title: 'Canoe' },
            { title: 'Carpet' },
            { title: 'Cash/Credit Cards/Debit Cards' },
            { title: 'Chainsaw' },
            { title: 'Cheque Books' },
            { title: 'Cheques' },
            { title: 'Christmas Crackers' },
            { title: 'Cistern' },
            { title: 'Combust' },
            { title: 'Counterfeit Currency' },
            { title: 'Counterfeit Goods' },
            { title: 'Crackers' },
            { title: 'Cream' },
            { title: 'Currency' },
        ]
    },
    {
        ltr: "D",
        objects: [

            { title: 'Dangerous Goods' },
            { title: 'Documents (Outside The EU)' },
            { title: 'Driving Licence' },
            { title: 'Drugs (including prescription)' },
        ]
    },
    {
        ltr: "E",
        objects: [
            { title: 'Engines' },
            { title: 'Explosive' },
        ]
    },
    {
        ltr: "F",
        objects: [

            { title: 'Fence' },
            { title: 'Filth' },
            { title: 'Fine Art' },
            { title: 'Fire Extinguisher' },
            { title: 'Fire Works/Fire Work' },
            { title: 'Firearm' },
            { title: 'Firearms' },
            { title: 'Firearms (Or Parts Thereof) This Includes Replicas, Toys, Antiques, Decommissioned Firearms' },
            { title: 'Fish (live or dead)' },
            { title: 'Flat Screen Television' },
            { title: 'Food Items (Perishable Goods)' },
            { title: 'Fragile Goods' },
            { title: 'Fragrance' },
        ]
    },
    {
        ltr: "G",
        objects: [

            { title: 'Gas' },
            { title: 'Gearbox' },
            { title: 'Gem' },
            { title: 'Gun' },
        ]
    },
    {
        ltr: "H",
        objects: [

            { title: 'Hazardous Goods' },
            { title: 'Herbal Steroids' },
            { title: 'High Value Goods' },
            { title: 'Household Furnishings' },
            { title: 'Human' },
            { title: 'Human Organs' },
            { title: 'Human Remains' },
        ]
    },
    {
        ltr: "I",
        objects: [
            { title: 'Infectious Substances' },
            { title: 'Insects' },
            { title: 'Item Described As “Unknown”' },
        ]
    },
    {
        ltr: "J",
        objects: [
            { title: 'Juice' },
        ]
    },
    {
        ltr: "K",
        objects: [
            { title: 'Kayak' },
            { title: 'Knife' },
        ]
    },
    {
        ltr: "L",
        objects: [

            { title: 'Ladder/Step-Ladder' },
            { title: 'Lighter' },
            { title: 'Liquid/Cream/Oil' },
            { title: 'Live Animals/Insects' },
            { title: 'Lottery Ticket' },
        ]
    },
    {
        ltr: "M",
        objects: [

            { title: 'Macbook' },
            { title: 'Matches (including safety matches and windproof matches)' },
            { title: 'Magnetised material' },
            { title: 'Mattress' },
            { title: 'Mattress (Either Vacuum Packed / Boxed Or Flat)' },
            { title: 'Meat' },
            { title: 'Medication' },
            { title: 'Milk Powder' },
            { title: 'Mobile Phone with or without Sim to any Residential address in Turkey/Pakistan' },
            { title: 'Munition' },
            { title: 'Munitions Of War' },
        ]
    },
    {
        ltr: "N",
        objects: [

            { title: 'Nail Varnish' },
            { title: 'Narcotic Drugs' },
        ]
    },
    {
        ltr: "O",
        objects: [


            { title: 'Obscene publications and unlawful indecent images' },
            { title: 'Oxidising materials or organic peroxides (including disinfectants, nitrates and hair dyes or colourants containing peroxide)' },
        ]
    },
    {
        ltr: "P",
        objects: [

            { title: 'Paints, wood varnishes and enamels' },
            { title: 'Paper Currency/Coins' },
            { title: 'Party Popper' },
            { title: 'Passport' },
            { title: 'Perfumes and aftershaves (including eau de parfum and eau de toilette and alcohol-free perfumes, but excluding non-flammable perfumed creams, gels, oils or lotions.)' },
            { title: 'Perishable items (including flowers, fresh fruit, vegetables and frozen or chilled foodstuffs)' },
            { title: 'Petrol' },
            { title: 'Pesticides (e.g. weed killer and any chemical used to kill pests and insects including fly sprays)' },
            { title: 'Plant/Tree' },
            { title: 'Poisons, toxic liquids, solids and gases (including substances that are liable to cause death or injury if swallowed or inhaled or by skin contact, including arsenic, cyanide, fluorine, rat poison)' },
            { title: 'Porn' },
            { title: 'Precious Metals And Gemstones' },
            { title: 'Printer Toner (International Parcels Only)' },
        ]
    },
    {
        ltr: "Q",
        objects: [
            { title: '' },

        ]
    },
    {
        ltr: "R",
        objects: [

            { title: 'Radioactive materials and samples' },
            { title: 'Remains' },
            { title: 'Replica Weapon' },
        ]
    },
    {
        ltr: "S",
        objects: [

            { title: 'Screen' },
            { title: 'Seatbelt Tensioner' },
            { title: 'Seeds/Plant' },
            { title: 'Segway/Swegway' },
            { title: 'Settee' },
            { title: 'Sharp objects (including knives, kitchen utensils and gardening tools)' },
            { title: 'Shed' },
            { title: 'Sink' },
            { title: 'Slush Syrups' },
            { title: 'Sofa' },
            { title: 'Stamps (Unless Franked)' },
            { title: 'Steering Wheel' },
            { title: 'Steroids' },
            { title: 'Suitcase' },
            { title: 'Surf Board' },
        ]
    },
    {
        ltr: "T",
        objects: [

            { title: 'Television' },
            { title: 'Tickets and related advertisements for illegal lotteries' },
            { title: 'Tobacco/Tobacco Products' },
            { title: 'Toilet' },
            { title: 'Toner' },
            { title: 'Tyre' },
        ]
    },
    {
        ltr: "U",
        objects: [

            { title: 'Unknown' },
            { title: 'Un-Wrapped Metal' },
        ]
    },
    {
        ltr: "V",
        objects: [

            { title: 'Vaccines' },
            { title: 'Vehicle Bonnet' },
            { title: 'Vehicle Bumper' },

        ]
    },
    {
        ltr: "W",
        objects: [

            { title: 'Waste, dirt, filth or refuse (including household waste)' },
            { title: 'Water' },
            { title: 'Weapon' },
            { title: 'Wheels' },
            { title: 'Windscreen' },
        ]
    },
    {
        ltr: "X",
        objects: [
            { title: '' },
        ]
    },
    {
        ltr: "Y",
        objects: [
            { title: '' },
        ]
    },
    {
        ltr: "Z",
        objects: [
            { title: '' },
        ]
    },

]

export default function Dropdowns() {

    const [index, setIndex] = useState(0);
    console.log(index);

    return (
        <div className="flex flex-wrap justify-center">
            {letters.map((item, index) => {
                return (
                    <Menu as="div" key={index} className="relative inline-block text-left my-2 px-1 md:my-5 md:px-8">
                        <div className=''>
                            <Menu.Button className="inline-flex w-full justify-center px-2 py-2 text-sm font-2xl gap-x-1 relative">
                                <AiOutlinePlusSquare
                                    className="text-3xl text-black hover:text-[#6C0287]"
                                    onClick={() => setIndex(index)}
                                    aria-hidden="true"
                                />
                                <span className="text-2xl">{item.ltr}</span>
                            </Menu.Button>
                        </div>
                        <Menu.Items className="z-10 absolute left-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-5 py-3 ">
                                <Menu.Item>
                                    <div className='flex-1'>
                                        <ul className="list-disc">
                                            {letters[index].objects.map((item, index) => {
                                                return <li key={index}>{item.title}</li>
                                            })}
                                        </ul>
                                    </div>
                                </Menu.Item>

                            </div>

                        </Menu.Items>
                    </Menu>
                )
            })}
        </div>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}