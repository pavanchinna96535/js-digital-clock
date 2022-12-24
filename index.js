// Your code here
function displaytime(){

    var date=new Date();
    
    if(getHours()>12){
        displaytime=(date.getHours()-12)+":"+date.getMinutes()+":"+date.getSeconds();
    }

    if(getHours()>12){
        document.getElementById("ip2").innerHTML="PM";
    }
    else{
        document.getElementById("ip2").innerHTML="AM";
    }
    
    
    document.getElementById("ip1").innerHTML=displaytime;
    
    }
    setInterval(displaytime,10);
