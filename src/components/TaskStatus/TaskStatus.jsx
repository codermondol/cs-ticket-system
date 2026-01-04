import React from 'react';
import Ticket from '../Ticket/Ticket';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';
import ResolvedTicketCard from '../ResolvedTicketCard/ResolvedTicketCard';

const TaskStatus = ({ selectedTicket, completeTask, setCompleteTask, removeTicket }) => {
    // console.log(selectedTicket)

    return (
        <div>
            <div className='w-full sm:w-[350px] mt-6 xl:mt-0'>
                <div className='bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] p-3'>
                    <h2 className='font-bold text-2xl'>Task Status</h2>
                    {
                        selectedTicket.length === 0 ? (<p className='px-3 py-10'>Select a Ticket to ad to Task Status</p>) : (
                            <div>
                                {
                                    selectedTicket.map(ticket => <TaskStatusCard
                                        key={ticket.id}
                                        ticket={ticket}
                                        completeTask={completeTask}
                                        setCompleteTask={setCompleteTask}
                                        removeTicket={removeTicket}
                                    ></TaskStatusCard>)
                                }
                            </div>
                        )
                    }

                </div>
                <ResolvedTicketCard
                    completeTask={completeTask}
                ></ResolvedTicketCard>
            </div>
        </div>
    );
};

export default TaskStatus;