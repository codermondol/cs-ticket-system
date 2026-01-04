import React from 'react';
import Ticket from '../Ticket/Ticket';
import CompleteTaskCard from '../CompleteTaskCard/CompleteTaskCard';

const ResolvedTicketCard = ({ completeTask }) => {
    // console.log(completeTask)

    return (
        <div className='bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] p-3 mt-6'>
            <h2 className='font-bold text-2xl mt-5'>Resolved</h2>

            {
                completeTask.length === 0 ? (
                    <p className='px-3 py-10'>No Resoled Task yet.</p>
                ) : (
                    <div>
                        {
                            completeTask.map(ticket => <CompleteTaskCard
                                key={ticket.id}
                                ticket={ticket}
                            ></CompleteTaskCard>)
                        }
                    </div>
                )
            }
        </div>
    );
};

export default ResolvedTicketCard;