var $owlCarousel =$('.owl-carousel.two').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    lazyLoad: true,
    lazyContent: true,
  
    navText: [
      "<img src='assets/images/angle-left.png'>",
      "<img src='assets/images/angle-right.png'>"
    ],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    },
  
    
    
  })
  var $owlCarousel =$('.owl-carousel.one').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    lazyLoad: true,
    lazyContent: true,
  
    navText: [
      "<img src='assets/images/angle-left.png'>",
      "<img src='assets/images/angle-right.png'>"
    ],
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
  
    
    
  })

  
  
  
  
  var barChartData = {
    labels : ["8","6","4","10","4","10"],
    datasets : [
      {
        fillColor : "#FFBE3F",
        strokeColor : "rgba(220,220,220,1)",
        data : [8,6,4,10,4,10]
      }],
      options: {
        display:true,
        text:'Time Used In A Day Chart (Shown in %)',
        responsive: true,
        maintainAspectRatio:false,
        showScale: false,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
    }
      
    
    
  }

var myLine = new Chart(document.getElementById("canvas21").getContext("2d")).Bar(barChartData);


var lineChartData2 = {
  labels : ["5th","4th","3th","2th","1th"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "#00C8AE",
      pointColor : "#00C8AE",
      pointStrokeColor : "#fff",
      data : [10,8,10,7,2]
    }
  ]
  
}

var myLine2 = new Chart(document.getElementById("canvas11").getContext("2d")).Line(lineChartData2);




var barChartData2 = {
  labels : ["8","6","4","10","4","10"],
  datasets : [
    {
      fillColor : "#FFBE3F",
      strokeColor : "rgba(220,220,220,1)",
      data : [8,6,4,10,4,10]
    }],
    options: {
      display:true,
      text:'Time Used In A Day Chart (Shown in %)',
      responsive: true,
      maintainAspectRatio:false,
      showScale: false,
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
  }
    
  
  
}

var myLine4 = new Chart(document.getElementById("canvas22").getContext("2d")).Bar(barChartData2);


var lineChartData1 = {
labels : ["5th","4th","3th","2th","1th"],
datasets : [
  {
    fillColor : "rgba(220,220,220,0.5)",
    strokeColor : "#00C8AE",
    pointColor : "#00C8AE",
    pointStrokeColor : "#fff",
    data : [10,8,10,7,2]
  }
]

}

var myLine3 = new Chart(document.getElementById("canvas12").getContext("2d")).Line(lineChartData1);