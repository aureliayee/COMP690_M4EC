//Variables
let futureValue
let investment
let rate
let years
let i

//Collect Values from User
do {
    investment = parseFloat(prompt('How much do you want to invest? (xxxx.xx)'))
} while (isNaN(investment))
do {
    rate  = parseFloat(prompt('Enter interest rate as xx.x (0-6%)'))
} while (isNaN(rate) || rate<0 || rate>6)
do {
    years      = parseInt(prompt('Enter the number of years you want to invest for (0-30)'))
} while (isNaN(years) || years<0 || years>30)

//Calculate Future Value
futureValue = investment
for (i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

//Display the result
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest Rate: ${rate.toFixed(2)}%<br>`)
document.write(`Years : ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}`)