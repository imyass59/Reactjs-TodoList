import React from 'react'
import Task from './Task'

export default function ListTask() {
  return (
    <>
    <div className="border-2 rounded-md border-[#e3e3e3] p-5">
        <h1 className="text-7xl font-black flex text-[#4F98CA] mb-8">My Tasks</h1>
        <div id="tasks" className='flex flex-col overflow-hidden gap-2'>
                <Task index="1" title="Learn react js" context="best method to learn react js"/>
                <Task index="2" title="Learn react js" context="best method to learn react js"/>
                <Task index="3" title="Learn react js" context="best method to learn react js"/>
        </div>
    </div>
    <div className="flex flex-row gap-4 items-center justify-center mt-5">
        <button type="button" className="flex flex-row gap-4 items-center justify-center bg-[#4F98CA] hover:bg-[#3c80ae] transition-all rounded-md w-full p-2">
            <svg className="text-[#efefef] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"/></svg>
            <span className="text-[#efefef] text-4xl">New Task</span>
        </button>
    </div>
    </>
  )
}
