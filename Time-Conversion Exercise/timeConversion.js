/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

function timeConversion(s) {
    s.split('');
    let hours= parseInt(s[0] + s[1]);
    let ap= s[8];
    let min=s[3] + s[4];
    let sec=s[6] + s[7];
    
    if(ap==="A" && hours>=12){
        hours-=12;
    } else if(ap==="P" && hours<12){
        hours+=12;
    }
    
    if(hours<10){
        return(`0${hours}:${min}:${sec}`);
    } else{
        return(`${hours}:${min}:${sec}`);
    }
}