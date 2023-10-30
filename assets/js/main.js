const size = document.getElementById('size')
const age = document.getElementById('age')
const big = document.getElementById('big')
const thin = document.getElementById('thin')
const p =document.getElementById('p')

function funcOne() {
    
    const formThin = [(Number(size.value)- 100) + (Number(age.value)/10)]*0.9*0.9
    const formBig = [(Number(size.value)- 100) + (Number(age.value)/10)]*0.9*1.1
    if(thin.checked){
        p.innerHTML = "Dein Idealgewicht ist " + formThin.toFixed(2) + " kg"
    } else if (big.checked){
        p.innerHTML = "Dein Idealgewicht ist " + formBig.toFixed(2) + " kg"
    } else {
        p.style.color = "red"
        p.innerHTML = "ERROR"
    }

    
}