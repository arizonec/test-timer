import { useEffect, useRef, useState } from 'react'
import { FormatTimer } from '../FormatTimer';
import '../Timer/Timer.scss'


export function Timer () {
    const [time, setTime] = useState(0);
    const [run, setRun] = useState(true);

    const timer = useRef();

    useEffect(() => {
        if(run) {
            timer.current = setInterval(() => {
                setTime(prevNum => prevNum + 1);
            }, 1000);
        }
        return () => clearInterval(timer.current)
    }, [run]);

    return (
        <div className='stopwatch'>
            <FormatTimer time={time}/>
            <div className='buttons'>
                <button onClick={() => setTime(0)}>Restart</button>
                <button onClick={() => {
                    if (run) clearInterval(timer.current);
                    setRun(!run);
                }}>{run ? 'Stop' : 'Play'}</button>
            </div>
        </div>
    );
}