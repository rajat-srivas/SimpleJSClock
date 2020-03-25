function calculateTheTime() {
    const seconds = document.querySelector('.second');
    var minute = document.querySelector('.min');
    var hour = document.querySelector('.hour');
    const now = new Date();

    const timeSeconds = now.getSeconds(); // get current second
    const secondsDegrees = ((timeSeconds / 60) * 360); //conver the current second into degree on clock
    seconds.style.transform = `rotate(${secondsDegrees}deg)`;

    const timeMins = now.getMinutes();
    const minsDegrees = ((timeMins / 60) * 360) + ((timeSeconds / 60) * 6);
    console.log(minsDegrees);
    minute.style.transform = `rotate(${minsDegrees}deg)`;

    const timeHour = now.getHours();
    const hourDegrees = ((timeHour / 12) * 360) + ((timeMins / 60) * 30);
    hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(calculateTheTime, 1000);

calculateTheTime();