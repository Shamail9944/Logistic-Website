"use client";
import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";

export default function NewsLetterSubPri() {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [run, setRun] = useState(false);
  const [totalCounts, setTotalCounts] = useState(400);
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({ width, height, });
  }, []);

  const subscribeEmail = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);

    try {
      const response = await fetch("api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await response.json();
      if (data.error) {
        console.log(data.error)
        setMessage("You are already subscribed.");
        setTimeout(() => { setMessage(""); setButtonDisabled(false); }, 2000);
        return;
      }
      console.log(data)
      setStatus(201);
      setMessage("Subscribed Successfully."); setShowConfetti(true); setRun(true);
      setTimeout(() => { setTotalCounts(0); setMessage(""); setButtonDisabled(false); }, 500); setTotalCounts(800);
    } catch (error) {
      setStatus(500);
      setMessage("Unable to Subscribe. Please reach us out through other contacts provided.");
      setTimeout(() => { setMessage(""); setButtonDisabled(false); }, 6000);
    }
  }

  return (
    <>

      <div className='bg-[#FDAF17]'>
        <div className=' text-black mx-auto max-w-6xl flex flex-col items-center px-6 lg:px-4 py-4 lg:py-8 justify-between'>

          <h2 className='font-bold text-lg md:text-2xl mb-2 md:mb-8'>JOIN OUR NEWS LETTER</h2>
          <p className='text-center text-xs md:text-base'>Enter your Email & be the first to know about our company updates!</p>

          {showConfetti && (<Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={totalCounts} run={run} onConfettiComplete={() => setShowConfetti(false)} />)}
          <div className='max-w-5xl'>
            <form className="flex flex-col max-w-4xl md:flex-row justify-center py-4 gap-x-2" onSubmit={subscribeEmail}>
              <input
                name='email'
                id='email'
                type="email"
                placeholder='Email'
                className='input p-2 my-4 md:my-0 rounded-lg w-full h-[40px]'
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); }} />

              <button className='btn rounded-md border border-white/50 max-w-xl h-[40px] px-8 flex items-center justify-center bg-[#6C0287] font-bold text-xs md:text-sm text-white' type="submit" disabled={buttonDisabled}>
                {submitting ? "Submitting" : "SUBSCRIBE"}
              </button>
            </form>
          </div>
          <div className="">
            {message && (<p className={`${status !== 201 ? "text-red-500" : "text-green-500"} font-black bg-gray-700 p-4 rounded-lg `}>{message}</p>)}
          </div>

        </div>
      </div>
    </>
  )
}