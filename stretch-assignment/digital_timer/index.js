let hundreds = document.querySelector("#msHundreds")
let hundredsDigit = 0
let tens = document.querySelector("#msTens")
let tensDigit = 0
let secondOnes = document.querySelector("#secondOnes")
let secondOnesDigit = 0
let secondTens = document.querySelector("#secondTens")
let secondTensDigit = 0

setInterval(() => {

  if (hundredsDigit == 9){
    hundredsDigit = 0
    if (tensDigit == 9){
      tensDigit = 0
      if (secondOnesDigit == 9){
        secondOnesDigit = 0
        secondTensDigit++
        if (secondTensDigit == 1){
          end
        }
      } else {
        secondOnesDigit++
      }
    } else  {
      tensDigit++ 
    }
  } else {
    hundredsDigit++
  }
  hundreds.textContent = hundredsDigit
  tens.textContent = tensDigit
  secondOnes.textContent = secondOnesDigit
  secondTens.textContent = secondTensDigit
}, 10)