var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");

var Myname = document.querySelector(".name");
var temp = document.querySelector(".temp");
var Mywind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");

//var apikey = "71e68481eedaa31ab4919e4a8a5397bd"
var icon1 = document.querySelector('.icon1');
var TempMin1 = document.querySelector(".tempMin1");
var TempMax1 = document.querySelector(".tempMax1");
var WindSpeed1 = document.querySelector('.windSpeed1');
var Humid1 = document.querySelector('.Humid1');
var day1 = document.querySelector('.day1');

var icon2 = document.querySelector('.icon2');
var TempMin2 = document.querySelector(".tempMin2");
var TempMax2 = document.querySelector(".tempMax2");
var WindSpeed2 = document.querySelector('.windSpeed2');
var Humid2 = document.querySelector('.Humid2');
var day2 = document.querySelector('.day2');

var icon3 = document.querySelector('.icon3');
var TempMin3 = document.querySelector(".tempMin3");
var TempMax3 = document.querySelector(".tempMax3");
var WindSpeed3 = document.querySelector('.windSpeed3');
var Humid3 = document.querySelector('.Humid3');
var day3 = document.querySelector('.day3');

var icon4 = document.querySelector('.icon4');
var TempMin4 = document.querySelector(".tempMin4");
var TempMax4 = document.querySelector(".tempMax4");
var WindSpeed4 = document.querySelector('.windSpeed4');
var Humid4 = document.querySelector('.Humid4');
var day4 = document.querySelector('.day4');

var icon5 = document.querySelector('.icon5');
var tempMin5 = document.querySelector(".tempMin5");
var TempMax5 = document.querySelector(".tempMax5");
var WindSpeed5 = document.querySelector('.windSpeed5');
var Humid5 = document.querySelector('.Humid5');
var day5 = document.querySelector('.day5');







button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=71e68481eedaa31ab4919e4a8a5397bd&units=imperial')
.then(response => response.json())
.then(Data => {
    var onename = Data['name'];
    var tempValue = Data['main']['temp'];
    var wind = Data['wind']['speed'];
    var Humid = Data['main']['humidity'];
    

    temp.innerHTML = tempValue;
    Mywind.innerHTML = wind;
    Myname.innerHTML = onename;
    humidity.innerHTML = Humid;


    var LAT = Data['coord']['lat']
    var LON = Data['coord']['lon']

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+LAT+'&lon='+LON+'&exclude=&appid=71e68481eedaa31ab4919e4a8a5397bd&units=imperial')
    .then(response => response.json())
    .then(Data => {
        var oneMin = Data['daily']["0"]["temp"]['min']
        var oneMax =Data['daily']["0"]['temp']['max']
        var oneWind = Data['daily']['0']['wind_speed']
        var oneHumid = Data['daily']['0']['humidity']
        var oneIcon =  'http://openweathermap.org/img/wn/' + Data['daily']['0']['weather']['0']['icon'] + '.png'
        var unixTime = Data['daily']['0']['dt']
        var Newunix = moment.unix(unixTime).format('MMM Do'); 
        console.log(Newunix);

        TempMin1.innerHTML = oneMin;
        TempMax1.innerHTML = oneMax;
        WindSpeed1.innerHTML = oneWind;
        Humid1.innerHTML = oneHumid;
        day1.innerHTML = Newunix;
        icon1.src = oneIcon;



        var twoMin = Data['daily']["1"]["temp"]['min']
        var twoMax =Data['daily']["1"]['temp']['max']
        var twoWind = Data['daily']['1']['wind_speed']
        var twoHumid = Data['daily']['1']['humidity']
        var twoIcon =  'http://openweathermap.org/img/wn/' + Data['daily']['1']['weather']['0']['icon'] + '.png'
        var twounixTime = Data['daily']['1']['dt']
        var twoNewunix = moment.unix(twounixTime).format('MMM Do'); 
        console.log(twoNewunix);

        TempMin2.innerHTML = twoMin;
        TempMax2.innerHTML = twoMax;
        WindSpeed2.innerHTML = twoWind;
        Humid2.innerHTML = twoHumid;
        day2.innerHTML = twoNewunix;
        icon2.src = twoIcon;


        var threeMin = Data['daily']["2"]["temp"]['min']
        var threeMax =Data['daily']["2"]['temp']['max']
        var threeWind = Data['daily']['2']['wind_speed']
        var threeHumid = Data['daily']['2']['humidity']
        var threeIcon =  'http://openweathermap.org/img/wn/' + Data['daily']['2']['weather']['0']['icon'] + '.png'
        var threeunixTime = Data['daily']['2']['dt']
        var threeNewunix = moment.unix(threeunixTime).format('MMM Do'); 
        console.log(threeNewunix);

        TempMin3.innerHTML = threeMin;
        TempMax3.innerHTML = threeMax;
        WindSpeed3.innerHTML = threeWind;
        Humid3.innerHTML = threeHumid;
        day3.innerHTML = threeNewunix
        icon3.src = threeIcon;

        var fourMin = Data['daily']["3"]["temp"]['min']
        var fourMax =Data['daily']["3"]['temp']['max']
        var fourWind = Data['daily']['3']['wind_speed']
        var fourHumid = Data['daily']['3']['humidity']
        var fourIcon =  'http://openweathermap.org/img/wn/' + Data['daily']['3']['weather']['0']['icon'] + '.png'
        var fourunixTime = Data['daily']['3']['dt']
        var fourNewunix = moment.unix(fourunixTime).format('MMM Do'); 
        console.log(fourNewunix);

        TempMin4.innerHTML = fourMin;
        TempMax4.innerHTML = fourMax;
        WindSpeed4.innerHTML = fourWind;
        Humid4.innerHTML = fourHumid;
        day4.innerHTML = fourNewunix;
        icon4.src = fourIcon;

        var fiveMin = Data['daily']["4"]["temp"]['min']
        var fiveMax =Data['daily']["4"]['temp']['max']
        var fiveWind = Data['daily']['4']['wind_speed']
        var fiveHumid = Data['daily']['4']['humidity']
        var fiveIcon =  'http://openweathermap.org/img/wn/' + Data['daily']['4']['weather']['0']['icon'] + '.png'
        var fiveunixTime = Data['daily']['4']['dt']
        var fiveNewunix = moment.unix(fiveunixTime).format('MMM Do'); 
        console.log(fiveNewunix);

        tempMin5.innerHTML = fiveMin;
        TempMax5.innerHTML = fiveMax;
        WindSpeed5.innerHTML = fiveWind;
        Humid5.innerHTML = fiveHumid;
        day5.innerHTML = fiveNewunix;
        icon5.src = fiveIcon;
    
        
        
        
        

        
    })


})


})














//button.addEventListener('click',function(){
   // fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')
 //   .then(response => response.json())
   // .then(Data => console.log(Data))
//})
