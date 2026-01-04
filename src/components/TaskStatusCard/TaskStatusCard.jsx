import React from 'react';
import { toast } from 'react-toastify';
import checkMarkIcon from '../../assets/check-mark2.png'

const TaskStatusCard = ({ ticket, completeTask, setCompleteTask, removeTicket }) => {

    const handleResolvedBtn = (ticket) => {
        setCompleteTask([...completeTask, ticket])
        removeTicket(ticket)
        toast(`Completed!`)
    }
    return (
        <div>
            <div className="card card-xs shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] rounded bg-[#fafafc] mt-6 p-4">
                <h4 className='font-bold text-xl mb-3'>{ticket.title}</h4>
                <button onClick={() => handleResolvedBtn(ticket)} className='btn bg-[#02A53B] text-white'>Complete</button>
            </div>
        </div>
    );
};

export default TaskStatusCard;