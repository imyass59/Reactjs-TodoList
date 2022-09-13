import React from 'react'
import { useState } from 'react'
import Task from './Task';
import { TaskModel } from '../Model/TaskModel'

export default function ListTask() {
    const [showModal, setShowModal] = React.useState(false);
    const [listTasks,setListTasks] = useState([]);
    const [title,setTitle] = useState("");
    const [context,setContext] = useState("");
    
    const AddToList = () =>
    {
        const task = new TaskModel("1","zrfg","sdsfsf",false);
        setListTasks(listTasks => listTasks.concat(task));
    }
  return (
    <>
    <div className="border-2 rounded-md border-[#e3e3e3] p-5">
        <h1 className="text-7xl font-black flex text-[#4F98CA] mb-8">My Tasks</h1>
        <div id="tasks" className='flex flex-col overflow-hidden gap-2'>
                <Task index="1" title="Learn react js" context="best method to learn react js"/>
                <Task index="2" title="Learn react js" context="best method to learn react js"/>
                <Task index="3" title="Learn react js" context="best method to learn react js"/>
                <Task index="4" title="Learn react js" context="best method to learn react js" completed='false'/>
        </div>
    </div>
    <div className="flex flex-row gap-4 items-center justify-center mt-5">
        <button type="button" className="flex flex-row gap-4 items-center justify-center bg-[#4F98CA] hover:bg-[#3c80ae] transition-all rounded-md w-full p-2"
            onClick={() => setShowModal(true)}    
        >
            <svg className="text-[#efefef] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"/></svg>
            <span className="text-[#efefef] text-4xl">New Task</span>
        </button>
    </div>

    <div className='modal'>
            <>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Add Task
                        </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto flex flex-col gap-5">
                            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title Task" required autoComplete='off' />
                            <input type="text" id="context" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description Task" required autoComplete='off' />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-[#50D890] text-white hover:bg-[#46c380] active:bg-[#46c380] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false) && AddToList()}
                        >
                            Add
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            </>
    </div>
    </>
  )
}
