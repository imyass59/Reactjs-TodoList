import React from 'react'
import { TaskModel } from '../Model/TaskModel'

export default function Task(props) {
  return (
    <>
        <div className="flex flex-row items-center justify-between">
            <div id="info" className='flex flex-row items-center justify-between gap-4 text-3xl'>
                <div id='uid' className="font-bold">#{props.index}</div>
                <div className='flex flex-col text-lg leading-none '>
                    <h1>{props.title}</h1>
                    <p className="text-sm text-gray-400">{props.context}</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2" id='action'>
                <button type='button' className="">
                    <svg className="text-[#50D890] fill-current hover:text-[#45ba7c] transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"/></svg>
                </button>
                <button type='button'>
                    <svg className="text-[#F33535] fill-current hover:text-[#d12e2e] transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"/></svg>
                </button>
            </div>
        </div>
    </>
  )
}
