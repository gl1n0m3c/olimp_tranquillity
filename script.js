document.getElementById("CHART").style.display = "block"
document.getElementById("BAR").style.display = "none"
document.getElementById("PIE").style.display = "none"
document.getElementById("GREEN_HOUSE").style.display = "none"


RESOURCE_SAVE.onclick = function() {
    document.getElementById("PIE").style.display = "none"
    document.getElementById("BAR").style.display = "none"
    document.getElementById("GREEN_HOUSE").style.display = "none"
    document.getElementById("CHART").style.display = "block"
}

RESOURCE_OUT.onclick = function() {
    document.getElementById("PIE").style.display = "none"
    document.getElementById("CHART").style.display = "none"
    document.getElementById("GREEN_HOUSE").style.display = "none"
    document.getElementById("BAR").style.display = "block"
}

POWER.onclick = function() {
    document.getElementById("CHART").style.display = "none"
    document.getElementById("BAR").style.display = "none"
    document.getElementById("GREEN_HOUSE").style.display = "none"
    document.getElementById("PIE").style.display = "block"
}

SHOW_INFO.onclick = function() {
    document.getElementById("CHART").style.display = "none"
    document.getElementById("BAR").style.display = "none"
    document.getElementById("PIE").style.display = "none"
    document.getElementById("GREEN_HOUSE").style.display = "block"
    
}
    


const name = 27
const temp = 30
const elect = 40
const oxi = 30
const pop = 50
const k = 78


async function DataFetch(){
var days = document.getElementById("count_days")
days.innerHTML = `Количество дней: ${name}`

var temperature = document.getElementById("temp")
temperature.innerHTML = `Температура в автоклаве: ${temp}`

var electrical = document.getElementById("elect")
electrical.innerHTML = `Электроэнергия, необходимая для поддержания температуры: ${elect}`

var oxygen = document.getElementById("oxi")
oxygen.innerHTML = `Количество кислорода: ${oxi}`

var population = document.getElementById("pop")
population.innerHTML = `Популяция SH: ${pop}`

var coeffcient = document.getElementById("k")
coeffcient.innerHTML = `Коэффициент прироста: ${k}`


сhart1 = new Chart('chart', {			
    type: 'line',
    data: {
        labels: [10, 15, 20, 25, 30, 35],
        datasets: [
    {
        label: 'Первый',
        data: [12, 13, 14, 120, 16, 17, 12],
        //yAxisID: 'y',
        //parsing: {xAxisKey: "dt", yAxisKey: "t1"},	
        showLine: true,
        lineTension: 0.3,
        color: "#FF0000"}]}})

bar = new Chart("bar", {
    type: "bar",
    data: {
        labels: ["КРЕДИТЫ", "ТОПЛИВО", "КИСЛОРОД"], 
        datasets: [
            {
                label: "Количество ресурсов",
                data: [65, 59, 80],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)'],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)'],
                borderWidth: 5
            }
        ]
    }})

power = new Chart("pie", {
    type: "pie", 
    data: {
        labels: ["Двигатель", "Выработка энергии"],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                ],
            }
        ]
    }})

}

DataFetch()