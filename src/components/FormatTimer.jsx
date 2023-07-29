import { formatTime } from '../utils/formatTime.js'

export function FormatTimer({time}) {

    return (
        <p className='timer'>{formatTime(time)}</p>
    )
}