import './globals.css'
import { Inter } from 'next/font/google'
import MiniHeaderPri from './../components/MiniHeaderPri';
import MainHeaderPri from '@/components/MainHeaderPri';
import FooterPri from '@/components/FooterPri';
import NewsLetterSubPri from '@/components/NewsLetterSubPri';
import GetaQuotePri from '@/components/GetaQuotePri';
import { ToastContainer } from './nextToast.js';
import 'react-toastify/dist/ReactToastify.css';
import FacebookChat from '@/components/FacebookChat';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XXX Couriers',
  description: 'Get delivery services at door steps',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <MiniHeaderPri />
        <MainHeaderPri />
        {children}
        <GetaQuotePri />
        <NewsLetterSubPri />
        <FacebookChat/>
        <ToastContainer />
        <FooterPri />
      </body>
    </html>
  )
}
