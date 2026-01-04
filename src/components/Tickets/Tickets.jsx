import React, { use, useEffect, useState } from 'react';
import Ticket from '../Ticket/Ticket';
import leftImg from '../../assets/vector1.png'
import rightImg from '../../assets/Group 1.png'
import TaskStatus from '../TaskStatus/TaskStatus';

const Tickets = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise)
    // console.log(ticketsData)

    const [tickets, setTickets] = useState([])
    const [selectedTicket, setSelectedTicket] = useState([])
    const [completeTask, setCompleteTask] = useState([])

    useEffect( () => {
        setTickets(ticketsData)
    }, [ticketsData])

    const removeTicket = (ticket) => {
         setTickets(newTicket => 
            newTicket.filter(t => t.id !== ticket.id)
        );

        setSelectedTicket(newTicket =>
            newTicket.filter(t => t.id !== ticket.id)
        );
    }



    return (
        <div className='max-w-[1260px] mx-auto bg=[#f5f5f5] mt-6'>

            <div className='flex flex-col sm:flex-row px-2 xl:px-0 justify-between items-center  gap-10 text-center font-bold text-3xl text-white'>
                <div className=' py-[80px] w-full bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] relative overflow-hidden rounded-xl'>
                    <img src={leftImg} alt="" className='absolute left-0 top-0 h-full' />
                    <img src={rightImg} alt="" className='absolute right-0 top-0 h-full ' />
                    <h4>In-Progress</h4>
                    <p>{selectedTicket.length}</p>
                </div>
                <div className=' py-[80px] w-full bg-[linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1)_100%)] relative overflow-hidden rounded-xl'>
                    <img src={leftImg} alt="" className='absolute left-0 top-0 h-full' />
                    <img src={rightImg} alt="" className='absolute right-0 top-0 h-full ' />
                    <h4>Resolved</h4>
                    <p>{completeTask.length}</p>
                </div>


            </div>
            <div className='flex flex-col xl:flex-row px-2 xl:px-0 justify-between mt-6'>

                <div>
                    <h2 className='font-bold text-2xl'>Customer Tickets</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mr-10 mt-5'>
                        {
                            tickets.map(ticket => <Ticket
                                key={ticket.id}
                                ticket={ticket}
                                selectedTicket={selectedTicket}
                                setSelectedTicket={setSelectedTicket}
                            ></Ticket>)
                        }
                    </div>
                </div>

                {/* Task Status */}
                <TaskStatus
                    selectedTicket={selectedTicket}
                    completeTask={completeTask}
                    setCompleteTask={setCompleteTask}
                    removeTicket={removeTicket}
                ></TaskStatus>

            </div>
        </div>
    );
};

export default Tickets;