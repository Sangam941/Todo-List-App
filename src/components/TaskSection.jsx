import React, { useEffect, useState } from 'react'

import { FaEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';

const TaskSection = () => {
    const [input, setinput] = useState("")
    const [todos, settodos] = useState([])
    const [showFinished, setshowFinished] = useState(false)

    useEffect(() => {
        let data = localStorage.getItem("todos")
        if (data) {
            let todo = JSON.parse(localStorage.getItem("todos"))
            settodos(todo)
        }
    }, [])


    const saveTodosLS = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const change = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    const handleAdd = () => {
        settodos([...todos, { input, isComplete: false }])
        setinput("")
        saveTodosLS()
    }
    const toggleComplete = (index) => {
        let updateTodos = [...todos]
        updateTodos[index].isComplete = !updateTodos[index].isComplete
        settodos(updateTodos)
        saveTodosLS()
    }

    const handleDelete = (index) => {
        let updateTodos = [...todos]
        updateTodos.splice(index, 1)
        settodos(updateTodos)
        saveTodosLS()
    }

    const handleEdit = (index) => {
        let editTodos = [...todos]
        setinput(editTodos[index].input)

        editTodos.splice(index, 1)
        settodos(editTodos)
        saveTodosLS()
    }

    const toggleFinished = () => {
        setshowFinished(!showFinished)
    }
    return (
        <>
            <div className='w-2/5 bg-purple-100 h-4/5 mt-5 rounded-lg m-auto px-3 py-2 max-md:w-4/5 max-md:m-auto max-md:mt-5 max-sm:w-full max-xl:w-3/6 max-lg:w-4/6'>
                <h1 className='text-2xl font-semibold text-center'>iTask - Manage your todos at one place</h1>
                <form onSubmit={handleSubmit}>
                    <div className='py-3'>
                        <h2 className='text-lg font-semibold'>Add a Todo</h2>
                        <div className='flex items-center justify-center gap-2 py-3 max-sm:block max-sm:px-3'>
                            <input
                                onChange={change}
                                value={input} className='rounded-full w-4/5 px-3 py-2 max-sm:w-full max-sm:mb-3' type="text" name='todo' placeholder='Enter your task' />
                            <button onClick={handleAdd} disabled={input.length <= 0} className='bg-purple-900 text-white font-semibold rounded-full px-3 py-2 active:scale-95 max-sm:w-full'>Add Task</button>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input onChange={toggleFinished} className='cursor-pointer' type="checkbox" name='checkbox' />
                            <label className='text-sm text-zinc-500 font-normal'>Show Finished</label>
                        </div>
                    </div>

                    <hr className='border-zinc-400 w-[90%] m-auto border-[1px]' />

                    <div className='mt-2'>
                        <h2 className='text-lg font-semibold'>Your Todos</h2>
                        {todos.length === 0 &&
                            <div className='px-3 py-2'>No Todos are available</div>
                        }
                        <div className='h-72 overflow-auto'>
                        {todos.map((data, index) => {
                            return ((showFinished || !data.isComplete) && <div className="card flex items-center justify-between w-full py-2 px-3">
                                <div className='flex items-center gap-5 w-4/5'>
                                    <input onChange={() => {
                                        toggleComplete(index)
                                    }} type="checkbox" name="" id="" className='cursor-pointer' />
                                    <label className={data.isComplete ? "line-through w-[90%] break-words" : "w-[90%] break-words"}>{data.input}</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <button onClick={() => {
                                        handleEdit(index)
                                    }} className='bg-purple-900 text-white rounded-md active:scale-95 p-1 flex items-center justify-center'><FaEdit /></button>
                                    <button onClick={() => {
                                        handleDelete(index)
                                    }} className='bg-purple-900 text-white rounded-md active:scale-95 p-1'><MdDelete /></button>
                                </div>
                            </div>)
                        })}
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TaskSection
