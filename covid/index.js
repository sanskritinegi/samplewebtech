//hamburger

$(window).ready(function(){
  $('.menu-toggle').click(function(){
    console.log(2);
    $('.main-nav').toggleClass('main-nav-open',500);
    $(this).toggleClass('open');
  });
});

// chatbot

var questions = [
    'Whats your name ?',
    'Do you have fever?(answer in Y/N)',
    'Do you have dry cough (answer in Y/N)?',
    'Any difficulty in breathing (answer in Y/N)?',

    'If symptoms prevail please refer to the hospitals'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {
    output.innerHTML = `Hii ${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 1) {
    if(inputBox.value=="y" || inputBox.vlaue=="Y"){
    output.innerHTML = "okay,then";
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);}

    else if(inputBox.value=="n" || inputBox.vlaue=="N"){
    output.innerHTML = "great";
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);


 
  }
  } else if(num == 2) {
    if(inputBox.value=="y" || inputBox.vlaue=="Y"){
    output.innerHTML = "okay,then";
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);}

    else if(inputBox.value=="n" || inputBox.vlaue=="N"){
    output.innerHTML = "great";
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);


 
  }
  } else if(num == 3) {
    output.innerHTML = "okay let me guide you";
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  }
  }
}

function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num == 4) {
    inputBox.style.display = "none";
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})

$( "#ans" ).focus();


  




//tracker

$(document).ready(function () {
  // Get JSON data from url
  $.getJSON("https://api.covid19india.org/data.json", function (data) {
    var states = [];
    var confirmed = [];
    var recovered = [];
    var deaths = [];

    var total_active;
    var total_confirmed;
    var total_recovered;
    var total_deaths;

    // Take the first element in statewise array and add the objects values into the above variables
    total_active = data.statewise[0].active;
    total_confirmed = data.statewise[0].confirmed;
    total_recovered = data.statewise[0].recovered;
    total_deaths = data.statewise[0].deaths;

    // The each loop select a single statewise array element
    // Take the data in that array and add it to variables
    $.each(data.statewise, function (id, obj) {
      states.push(obj.state);
      confirmed.push(obj.confirmed);
      recovered.push(obj.recovered);
      deaths.push(obj.deaths);
    });

    // Remove the first element in the states, confirmed, recovered, and deaths as that is the total value
    states.shift();
    confirmed.shift();
    recovered.shift();
    deaths.shift();

    // console.log(confirmed);
    $("#confirmed").append(total_confirmed);
    $("#active").append(total_active);
    $("#recovered").append(total_recovered);
    $("#deaths").append(total_deaths);

    // Chart initialization
    var myChart = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(myChart, {
      type: "line",
      data: {
        labels: states,
        datasets: [
          {
            label: "Confirmed Cases",
            data: confirmed,
            backgroundColor: "#f1c40f",
            minBarLength: 100,
          },
          {
            label: "Recovered",
            data: recovered,
            backgroundColor: "#2ecc71",
            minBarLength: 100,
          },
          {
            label: "Deceased",
            data: deaths,
            backgroundColor: "#e74c3c",
            minBarLength: 100,
          },
        ],
      },
      option: {},
    });
  });
});


 //graph

 const api = 'https://disease.sh/v3/covid-19/historical/all?lastdays=90';

const getData = async () => {
  const response = await fetch(`${api}`);
  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(response.status);
  }
};

const result = getData();
result
  .then((data) => {
    let date = Object.keys(data.cases);
    let total = Object.values(data.cases);
    let deaths = Object.values(data.deaths);
    let recovered = Object.values(data.recovered);
    var ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label: 'Total Cases',
            data: total,
            borderColor: 'rgba(255, 99, 132)',
            fill: false,
          },
          {
            label: 'Recovered Cases',
            data: recovered,
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: false,
          },
          {
            label: 'Deaths',
            data: deaths,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Number of Cases',
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Date(DD/MM/YYYY)',
              },
            },
          ],
        },
        title: {
          display: true,
          text: `Coronavirus Cases in the World for 90 Days`,
        },
      },
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  });


  $( document ).ready(function() {
  $(window).scroll(function() {   
    if($(document).scrollTop() > 100) {    
      $('.footer').addClass("show");
    }
    else {
      $('.footer').removeClass("show");
    }
  });
});


 //angularjs

 var app=angular.module('myApp',['ngTouch']);
    app.directive('ngCarousel', function() {
      return function(scope, element, attrs) {
        var el = element[0];
        var containerEl = el.querySelector("ul");
        var slidesEl = containerEl.querySelectorAll("li");
        scope.numSlides = slidesEl.length;
        scope.curSlide = 1;   
        scope.$watch('curSlide', function(num) {
          num = (num % scope.numSlides) + 1;
          containerEl.style.left = (-1*100*(num-1)) + '%';
        });
        
        el.style.position = 'relative';
        el.style.overflow = 'hidden';

        containerEl.style.position = 'absolute';
        containerEl.style.width = (scope.numSlides*100)+'%';
        containerEl.style.listStyleType = 'none';
        containerEl.style.margin =0;
        containerEl.style.padding=0;
        containerEl.style.transition = '1s';
        
        for(var i=0; i<slidesEl.length; i++) {
          var slideEl = slidesEl[i];
          slideEl.style.display = 'inline-block';
          slideEl.style.width = (100/scope.numSlides) + '%';
        }
      };
    });
