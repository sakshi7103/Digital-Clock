function updateClock()
{
    let now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let ampm=hours>=12?"PM":"AM";
    
    // convert time into 12 hour
    hours = hours % 12 || 12; 

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString=`${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("time").innerText = timeString;
}
        // update time every second
        updateClock();
        setInterval(updateClock,1000);    
    

   