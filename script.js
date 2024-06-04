window.onload = function(){
    var tens =0,
    second = 0,
    minute = 0,
    viewTens = document.getElementById('tens'),
    viewSecond = document.getElementById('second'),
    viewMinute = document.getElementById('minute'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    reset = document.getElementById('reset'),
    lap = document.getElementById('lap'),
    lapList = document.getElementById('laps'),
    interval;


    start.onclick = function(){
        clearInterval(interval);
        interval = setInterval(stopWatchTimer,10)
    }
    stop.onclick = function(){
        clearInterval(interval);
    }
    reset.onclick = function(){
        clearInterval(interval);
        second="00";
        tens="00";
        minute="00";
        viewTens.innerHTML = tens;
        viewSecond.innerHTML = second;
        viewMinute.innerHTML = minute;
        
    }
    lap.onclick = function(){
        if(interval){
           var li = document.createElement("li");
           li.innerHTML = stopWatchTimer()
           lapList.appendChild(li)
        }

    }

    function stopWatchTimer(){
        tens++;
        if(tens<=9){
            viewTens.innerHTML = "0"+tens
        }
        if(tens>9){
            viewTens.innerHTML = tens
        }
        if(tens>99){
            second++;
            viewSecond.innerHTML= "0"+second;
            tens = 0;
            viewTens.innerHTML="0" +0;
        }
        if(second > 9){
            viewSecond.innerHTML=second;
        }
        if(second>59){
            minute++;
            viewMinute.innerHTML= "0"+minute;
            second = 0;
            viewSecond.innerHTML="0" +0;
        }
        if(minute > 9){
            viewMinute.innerHTML=minute;
        }
        return minute + ":" + second + ":" + tens
    }


}