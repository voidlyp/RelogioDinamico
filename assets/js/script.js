const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
// const m_seconds = document.getElementById('m-seconds');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let scd = dateToday.getSeconds();
    // let msc = dateToday.getMilliseconds();

    if (hrs < 10) hrs = `0${hrs}`;
    if (min < 10) min = `0${min}`;
    if (scd < 10) scd = `0${scd}`;
    // if (msc < 10) msc = `0${msc}`;

    hours.textContent = hrs
    minutes.textContent = min
    seconds.textContent = scd
    // m_seconds.textContent = msc
})