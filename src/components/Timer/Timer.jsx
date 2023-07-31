import { useEffect, useState, useRef } from 'react';
import { formatTime } from '../../utils/formatTime.js';
import './Timer.scss';

export function Timer () {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const timerId = useRef();
    const inputRef = useRef(null);

    

    useEffect(() => {
        if(start) {
            timerId.current = setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000)
        }

        if (time <= 0) {
            clearInterval(timerId.current)
        }

        return () => clearInterval(timerId.current)
    }, [start, time])


    function inputChange(e) {
        setTime(e.target.value)
        setStart(false);
    }

    return (
        <div>
            <input className='input' placeholder='Seconds' type='text' onChange={inputChange} ref={inputRef}/>
            <button type='submit' className='btn' onClick={() => {
                setStart(true);
                inputRef.current.value = '';
            }}>
                Start
            </button>
            <br/>
            <br/>
            <label className='timer'>
                {(start) ? formatTime(time) : 'hh:mm:ss'}
            </label>
        </div>
    )
}