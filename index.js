document.addEventListener("DOMContentLoaded", function () {


  document.getElementById("submit").addEventListener("click", function () {
    const Titles = document.getElementById("title-input").value;
    const axis1 = document.getElementById("x-axis-input").value;
    const axis2 = document.getElementById("y-axis-input").value;
    const colour = document.getElementById("color").value;
    const x_axis = axis1.split(",");
    const y_axis = axis2.split(",");
    const y_axisNumber = y_axis.map(Number);
    const layout = { title: Titles };
    const orientation = document.getElementById("orientation").value;
    let orien;
    const type = document.getElementById("types").value;

    switch (type) {
      case '0':
        if (orientation === "Horizontal") {
          orien = "h"
        }
        else {
          orien = "v"
        }

        const Bar_data = [{
          x: (orien === "h") ? y_axisNumber : x_axis,
          y: (orien === "h") ? x_axis : y_axisNumber,
          type: "bar",
          orientation: orien,
          marker: { color: colour }
        }]


        Plotly.newPlot("charts", Bar_data, layout);
        break;

      case '1':
        const Pie_data = [{
          labels: x_axis,
          values: y_axisNumber,
          type: "pie"
        }];
        console.log(Pie_data)
        Plotly.newPlot("charts", Pie_data, layout);
        break;

    }

  })

  document.getElementById("remove").addEventListener("click", function () {
    document.getElementById("title-input").value = "";
    document.getElementById("x-axis-input").value = "";
    document.getElementById("y-axis-input").value = "";
    document.getElementById("color").value = "";
    Plotly.purge("charts");

  })
  document.getElementById("color").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {

      let color = document.getElementById("color").value;
      document.getElementById("colorShower").style.backgroundColor = color;

    }
  })

  document.getElementById("show-trigger").addEventListener("click", function () {
    let colorValue = document.getElementById("color-maker").value;
    document.getElementById("color-displayer").innerText = colorValue;
  })



});

document.getElementById("x-axis-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const axis1 = document.getElementById("x-axis-input").value;
    const x_axis = axis1.split(",");
    const num_x = x_axis.length;
    document.getElementById("x-elements").innerHTML = `<h5 class="mt-1">${num_x}</h5>`;


  }
})

document.getElementById("y-axis-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
     
    const axis2 = document.getElementById("y-axis-input").value;
    const y_axis = axis2.split(",");
    const y_axisNumber = (y_axis.map(Number)).length;
    document.getElementById("y-elements").innerHTML = `<h5 class="mt-1">${y_axisNumber}</h5>`;


  }
})


document.getElementById("x-info").addEventListener("click",function(){
  document.getElementById("x-axis-info").classList.toggle('hidden');
})

document.getElementById("y-info").addEventListener("click",function(){
  document.getElementById("y-axis-info").classList.toggle('hidden');
})

document.getElementById("color-info").addEventListener("click",function(){
  document.getElementById("color-main-info").classList.toggle('hidden');
})
document.getElementById("color-Shower-info").addEventListener("click",function(){
  document.getElementById("colorShower-info").classList.toggle('hidden');
})


document.getElementById("submit").addEventListener("click", function () {
  document.querySelector("h1").innerText="";
})