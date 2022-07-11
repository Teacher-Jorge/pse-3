let btn1Am = document.getElementById('btn1Am')
let btn1Is = document.getElementById('btn1Is')
let btn1Are = document.getElementById('btn1Are')

let word1 = document.getElementById('word1')
let check1 = document.getElementById('check1')
let score = document.getElementById('score')
let value = 0



btn1Am.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word1.textContent = 'Am'
    word1.style.color = 'red'
    btn1Am.style.backgroundColor = 'red'
    btn1Am.style.color = 'yellow'
    check1.style.visibility = 'hidden'
    btn1Am.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn1Is.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word1.textContent = 'Is'
    word1.style.color = 'red'
    btn1Is.style.backgroundColor = 'red'
    btn1Is.style.color = 'yellow'
    check1.style.visibility = 'hidden'
    btn1Is.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn1Are.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word1.textContent = 'Are'
    word1.style.color = 'dodgerblue'
    btn1Are.style.backgroundColor = 'lime'
    btn1Are.style.color = 'white'
    check1.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }

    btn1Is.disabled = 'true'
    btn1Am.disabled = 'true'
    btn1Are.disabled = 'true'
})

//Line 2
let btn2Am = document.getElementById('btn2Am')
let btn2Is = document.getElementById('btn2Is')
let btn2Are = document.getElementById('btn2Are')

let word2 = document.getElementById('word2')
let check2 = document.getElementById('check2')

btn2Is.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word2.textContent = 'is'
    word2.style.color = 'red'
    btn2Is.style.backgroundColor = 'red'
    btn2Is.style.color = 'yellow'
    check2.style.visibility = 'hidden'
    btn2Is.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn2Are.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word2.textContent = 'are'
    word2.style.color = 'red'
    btn2Are.style.backgroundColor = 'red'
    btn2Are.style.color = 'yellow'
    check2.style.visibility = 'hidden'
    btn2Are.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn2Am.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word2.textContent = 'am'
    word2.style.color = 'dodgerblue'
    btn2Am.style.backgroundColor = 'lime'
    btn2Am.style.color = 'white'
    check2.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }

    btn2Is.disabled = 'true'
    btn2Am.disabled = 'true'
    btn2Are.disabled = 'true'
})

//Line 3
let btn3Am = document.getElementById('btn3Am')
let btn3Is = document.getElementById('btn3Is')
let btn3Are = document.getElementById('btn3Are')

let word3 = document.getElementById('word3')
let check3 = document.getElementById('check3')

btn3Is.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word3.textContent = 'Is'
    word3.style.color = 'red'
    btn3Is.style.backgroundColor = 'red'
    btn3Is.style.color = 'yellow'
    check3.style.visibility = 'hidden'
    btn3Is.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn3Am.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word3.textContent = 'Am'
    word3.style.color = 'red'
    btn3Am.style.backgroundColor = 'red'
    btn3Am.style.color = 'yellow'
    check3.style.visibility = 'hidden'
    btn3Am.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn3Are.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word3.textContent = 'Are'
    word3.style.color = 'dodgerblue'
    btn3Are.style.backgroundColor = 'lime'
    btn3Are.style.color = 'white'
    check3.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }

    btn3Is.disabled = 'true'
    btn3Am.disabled = 'true'
    btn3Are.disabled = 'true'
})


//Line 4
let btn4Am = document.getElementById('btn4Am')
let btn4Is = document.getElementById('btn4Is')
let btn4Are = document.getElementById('btn4Are')

let word4 = document.getElementById('word4')
let check4 = document.getElementById('check4')

btn4Is.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word4.textContent = 'is'
    word4.style.color = 'red'
    btn4Is.style.backgroundColor = 'red'
    btn4Is.style.color = 'yellow'
    check4.style.visibility = 'hidden'
    btn4Is.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn4Are.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word4.textContent = 'are'
    word4.style.color = 'red'
    btn4Are.style.backgroundColor = 'red'
    btn4Are.style.color = 'yellow'
    check4.style.visibility = 'hidden'
    btn4Are.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn4Am.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word4.textContent = 'am'
    word4.style.color = 'dodgerblue'
    btn4Am.style.backgroundColor = 'lime'
    btn4Am.style.color = 'white'
    check4.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }

    btn4Is.disabled = 'true'
    btn4Am.disabled = 'true'
    btn4Are.disabled = 'true'
})

//Line 5
let btn5Am = document.getElementById('btn5Am')
let btn5Is = document.getElementById('btn5Is')
let btn5Are = document.getElementById('btn5Are')

let word5 = document.getElementById('word5')
let check5 = document.getElementById('check5')

btn5Am.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word5.textContent = 'Am'
    word5.style.color = 'red'
    btn5Am.style.backgroundColor = 'red'
    btn5Am.style.color = 'yellow'
    check5.style.visibility = 'hidden'
    btn5Am.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn5Are.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word5.textContent = 'Are'
    word5.style.color = 'red'
    btn5Are.style.backgroundColor = 'red'
    btn5Are.style.color = 'yellow'
    check5.style.visibility = 'hidden'
    btn5Are.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
})

btn5Is.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word5.textContent = 'Is'
    word5.style.color = 'dodgerblue'
    btn5Is.style.backgroundColor = 'lime'
    btn5Is.style.color = 'white'
    check5.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }

    btn5Is.disabled = 'true'
    btn5Am.disabled = 'true'
    btn5Are.disabled = 'true'
})

let btnDeal = document.getElementById('btnDeal')
let btnMood = document.getElementById('btnMood')
let btnPick = document.getElementById('btnPick')
let btnItsADeal = document.getElementById('btnItsADeal')

btnDeal.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnDeal').innerHTML = 'O que vai ser'
        document.getElementById('btnDeal').setAttribute("style", "box-shadow: 0 0 0")
        btnDeal.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnDeal').innerHTML = "What's the deal"
            document.getElementById('btnDeal').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnDeal.style.backgroundColor = 'white'
        }, 1500)
    }
)

btnMood.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnMood').innerHTML = 'Afim de'
        document.getElementById('btnMood').setAttribute("style", "box-shadow: 0 0 0")
        btnMood.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnMood').innerHTML = "in the mood for"
            document.getElementById('btnMood').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnMood.style.backgroundColor = 'white'
        }, 1500)
    }
)

btnPick.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnPick').innerHTML = 'me apanhar'
        document.getElementById('btnPick').setAttribute("style", "box-shadow: 0 0 0")
        btnPick.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnPick').innerHTML = "pick me up"
            document.getElementById('btnPick').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnPick.style.backgroundColor = 'white'
        }, 1500)
    }
)

btnItsADeal.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    
        document.getElementById('btnItsADeal').innerHTML = 'Combinado'
        document.getElementById('btnItsADeal').setAttribute("style", "box-shadow: 0 0 0")
        btnItsADeal.style.backgroundColor = 'lime'
        setTimeout(function() {
            document.getElementById('btnItsADeal').innerHTML = "It's a deal"
            document.getElementById('btnItsADeal').setAttribute("style", "box-shadow: 1px 1px 2px")
            btnItsADeal.style.backgroundColor = 'white'
        }, 1500)
    }
)






