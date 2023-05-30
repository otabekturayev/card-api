let btn = document.querySelector('button')
let advice = document.querySelector('p')
let id = document.querySelector('.id')

// let req = new XMLHttpRequest()

// btn.addEventListener('click', () => {
    
//     req.open("GET", 'https://api.adviceslip.com/advice')

//     req.send()
    
//     req.addEventListener('readystatechange', () => {
//         if(req.status === 200 && req.readyState === 4){
//             let a = JSON.parse(req.response)
//             advice.innerText = `"${a.slip.advice}"`
//             id.innerText = `#${a.slip.id}`
//         }
//     })
// })


btn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice').then((data) => {
        return data.json()
    }).then((data) => {
        let a = data
        advice.innerText = `"${a.slip.advice}"`
        id.innerText = `#${a.slip.id}`
    })
    
})

    



