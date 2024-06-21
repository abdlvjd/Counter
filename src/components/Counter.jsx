import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.count)
    return (
        <div className='border rounded p-5'>
            <h1 className='text-light fw-bold'>{count}</h1>
            <div className="mt-4">
                <button onClick={() => dispatch(increment())} className='btn btn-outline-success me-2'>Add</button>
                <button onClick={() => dispatch(decrement())} className='btn btn-outline-warning me-2'>Less</button>
                <button onClick={() => dispatch(reset())} className='btn btn-outline-danger me-2'>Reset</button>
                <button onClick={() => dispatch(add(5))} className='btn  btn-outline-info'>Add by a Amount</button>
            </div>
        </div>
    )
}

export default Counter