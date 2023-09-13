const currDate=document.getElementById("date");

//current Day
const getCurrentDay=()=>{
     var weekDay=new Array(7);
     weekDay[0]="SUN";
     weekDay[1]="MON";
     weekDay[2]="TUE";
     weekDay[3]="WED";
     weekDay[4]="THU";
     weekDay[5]="FRI";
     weekDay[6]="SAT";

     let currentDay=new Date();//creating a date object
     let day=weekDay[currentDay.getDay()];//weekDay[3]=>WED
     return day;

};

//date and time
 const getCurrDateTime=()=>{
    var months=["JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
];

var now=new Date();
var month=months[now.getMonth()];
var date=now.getDate();

let hours=now.getHours();
let min=now.getMinutes();
if(min<10){
    min="0"+min;
}

let periods="AM";
if(hours>11){
    periods="PM";
    if(hours>12) hours-=12;
}
return `${month} ${date} | ${hours}:${min} ${periods}`;
 }

 currDate.innerHTML=getCurrentDay()+" | "+getCurrDateTime();

 