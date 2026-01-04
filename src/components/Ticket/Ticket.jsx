import React from 'react';
import btnImg from '../../assets/Ellipse 22.png'
import calendarImg from '../../assets/Vector.png'
import { toast } from 'react-toastify';

const Ticket = ({ ticket, selectedTicket, setSelectedTicket }) => {

    const handleTicket = ticket => {
        setSelectedTicket([...selectedTicket, ticket])
        toast('In Progress!')
    }

    return (
        <div onClick={() => handleTicket(ticket)} className="card card-xs shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] rounded bg-white">
            <div className="card-body text-[16px] space-y-4 p-4">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title text-xl">{ticket.title}</h2>

                    <button className={`flex justify-between gap-2 border-0 bg-[#B9F8CF] py-1.5 px-3 rounded-2xl items-center ${
                        ticket.status === 'Open' ? 'bg-[#B9F8CF]' : 'bg-[#F8F3B9]'
                    }`}>
                        <span><img src={btnImg} alt="" /></span>
                        <span>{ticket.status}</span>
                    </button>

                </div>
                <div>
                    <p>{ticket.description}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <span className='mr-2'>{ticket.id}</span>
                        <span>{ticket.priority}</span>
                    </div>
                    <div className='flex justify-between items-center gap-3'>
                        <p>{ticket.customer}</p>
                        <div className='flex gap-2 items-center'>
                            <span><img src={calendarImg} alt="" /></span>
                            <span>{ticket.created_at}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;