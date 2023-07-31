export function formatTime(time) {

    let hours = Math.floor(time / 60 / 60 % 24);
    let min = Math.floor(time / 60 % 60);
    let sec = Math.floor(time % 60);

    hours = hours < 10 ? '0' + hours : hours;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    return `${hours}:${min}:${sec}`;
}