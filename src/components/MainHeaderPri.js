'use client'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollPosition } from '@/hooks/useScrollPosition.js'


export default function MainHeaderPri() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  // console.log(scrollPosition)
  return (
    <header className="bg-[#6C0287] text-white sticky top-0 z-50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between py-2 px-4 lg:px-0 " aria-label="Global">

        <div className="flex lg:flex-1 pl-2">
          <Link href="/" className="-m-3 p-1 flex flex-row gap-x-3">
            <Image className="w-full py-3" src="/logo.png" height={100} width={100} alt="logo" />
          </Link>
        </div>


        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-20 text-white" aria-hidden="true" />
          </button>
        </div>


        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-8">
          <Link href="/" className="text-sm font-semibold leading-6 text-white hover:text-[#FDAF17] active:text-[#FDAF17] transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 hover:text-[#FDAF17] active:text-[#FDAF17] transition-all duration-300 text-white">
            About
          </Link>
          <Link href="/services" className="text-sm font-semibold leading-6 hover:text-[#FDAF17] active:text-[#FDAF17] transition-all duration-300 text-white">
            Services
          </Link>
          <Link href="/fleet" className="text-sm font-semibold leading-6 hover:text-[#FDAF17] active:text-[#FDAF17] transition-all duration-300 text-white">
            Fleet
          </Link>
          <Link href="/network" className="text-sm font-semibold leading-6 hover:text-[#FDAF17] active:text-[#FDAF17] transition-all duration-300 text-white">
            Network
          </Link>
          <Link href="/quotation" className="text-sm font-semibold leading-6 hover:text-[#FDAF17] active:text-[#FDAF17] transition-all duration-300 text-white">
            Quotation
          </Link>
          <Link href="/news" className="text-sm font-semibold leading-6 hover:text-[#FDAF17] active:text-[#FDAF17] transition-all duration-300 text-white">
            News
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 hover:text-[#FDAF17]  transition-all duration-300 text-white">
            Contact
          </Link>
        </div>
      </nav>
      <div className='bg-[#FDAF17] h-[10px]'></div>
      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between bg-[#6C0287] px-6 py-6">
            <Link href="/" className="-m-1.5 p-1.5 flex flex-row gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-auto h-16 ">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
              </svg>
              <p className="self-center font-bold text-white"><span className='text-[#FDAF17] '>XXX <br /></span> Courier</p>

            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-10 w-20 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className='bg-[#FDAF17] h-[10px]'></div>
          <div className="flow-root px-6 py-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link
                  href="/fleet"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Fleet
                </Link>
                <Link
                  href="/network"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Network
                </Link>
                <Link
                  href="/quotation"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Quotation
                </Link>
                <Link
                  href="/news"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  News
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
