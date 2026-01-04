import React from 'react';
import checkImg from '../../assets/check.webp'

const CompleteTaskCard = ({ ticket }) => {
    // console.log(ticket)
    return (
        <div>


            <div className="card card-xs shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] rounded bg-[#efffef] mt-6 p-4">
                <h4 className='font-bold text-xl mb-3'>{ticket.title}</h4>
                <div className='flex justify-between items-center mt-2'>
                    <div className='text-[#02A53B] font-bold w-[20px] h-[20px] flex gap-1 items-center'>
                        <img src={checkImg} alt="" />
                        <span>Completed</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteTaskCard;