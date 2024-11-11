function diplayDate(){
    let londonTime = moment().tz("Europe/London").format("h:m:ss[<small>]A[</small>]");
    let londonDate = moment().tz("Europe/London").format("MMMM D YYYY");
    let showLondonTime = document.querySelector("#time");
    let showLondonDate = document.querySelector("#date")
    showLondonDate.innerHTML = londonDate;
    showLondonTime.innerHTML = londonTime;

    let samoaTime = moment().tz("Pacific/Samoa").format("h:m:ss[<small>]A[</small>]");
    let samoaDate = moment().tz("Pacific/Samoa").format("MMMM D YYYY");
    let showSamoaTime = document.querySelector(".saTime");
    let showSamoaDate = document.querySelector(".saDate");
    showSamoaDate.innerHTML = samoaDate;
    showSamoaTime.innerHTML = samoaTime;

    let pretoriaTime = moment().tz("Africa/Pretoria").format("h:m:ss[<small>]A[</small>]");
    let pretoriaDate = moment().tz("Africa/Pretoria").format("MMMM D YYYY");
    let showPretoriaTime = document.querySelector(".paTime");
    let showPretoriaDate = document.querySelector(".paDate");
    showPretoriaDate.innerHTML = pretoriaDate;
    showPretoriaTime.innerHTML = `${pretoriaTime}`;
    

}
diplayDate();
setInterval(diplayDate,1)


function chooseCity(event){
    let timeZone = event.target.value;
    if (timeZone === "current") {
        timeZone = moment.tz.guess();
    }
    let cityName=timeZone.replace("_"," ").split("/")[1];
    let showDate = moment().tz(timeZone).format("MMMM D YYYY");
    let showTime = moment().tz(timeZone).format("h:m:ssA");
    let changeCity=document.querySelector("#change");
    changeCity.innerHTML =
    `
        <div id="change" style="padding:40px" >
        <div  >
        <div id="cities">${cityName}</div>
        <div id="date">${showDate}</div>
        </div>
        <div id="time">${showTime}</div>
    </div>
   <div>
        `;
}

let cityChange = document.querySelector("#city");
cityChange.addEventListener("change", chooseCity)
setInterval(chooseCity, 1);
