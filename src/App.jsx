import { Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Tickets from './components/Tickets/Tickets'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';

const fetchCustomerTicket = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
}

const ticketsPromise = fetchCustomerTicket()

function App() {



  return (
    <>
      <div>
        <NavBar></NavBar>

        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <Tickets ticketsPromise={ticketsPromise}></Tickets>
        </Suspense>

        {/* Footer */}
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
