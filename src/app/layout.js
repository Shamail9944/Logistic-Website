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
import Script from 'next/script';

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
        {/* <FacebookChat/> */}
        <ToastContainer />
        <FooterPri />

        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <Script id="fb-chat" strategy="lazyOnload">
          {`
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page\_id", "YOUR\_PAGE\_ID");
          chatbox.setAttribute("attribution", "biz\_inbox");

          window.fbAsyncInit = function() {
            FB.init({
              xfbml: true,
              version: 'v12.0'
            });  
          };

          (function(d, s, id) {  
          var js, fjs = d.getElementsByTagName(s)\[0\];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en\_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);  
          }(document, 'script', 'facebook-jssdk'));  
          `}
        </Script>
        {/* alpha */}
      </body>
    </html>
  )
}