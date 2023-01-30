function isEven() {
    let para = document.querySelector('p')
    let num = prompt('Hello, give your score')
    if (!isNaN(num) || num === '' || num === null) {
        if (num > 100) {
            return para.textContent = `This cannot be!`
        }
        else if (num >= 70) {
            return para.textContent = `That's an awesome score`
        }
        else if (num >= 60) {
            return para.textContent = `Quite a good score`
        }
        else if (num >= 50) {
            return para.textContent = `You can do better`
        }
        else {
            return para.textContent = `come back again next year`
        }
    }

    return para.textContent = `that is not a number`
}

let btn = document.querySelector('button')
btn.addEventListener('dblclick', isEven)

function score() {
    let para = document.getElementById('pp')
    let num = prompt('Hello, give your score')
    let grade = num >= 70 ? `Wow, you are brilliant student your score is A`
        : num >= 60 ? `Wow, you are doing well your score is B`
            : num >= 50 ? `Well, this is still manageable your score is C`
                : `Hmm... Improve next time your score is F`;
    para.innerHTML = grade;
}

let btn2 = document.getElementById('tt')
btn2.addEventListener('dblclick', score)

btn.style.backgroundColor = '#ff6347';



// let isEven = () => {
//     let para = document.querySelector('p')
//     let num = prompt('Hello, give your score')
//     if (!isNaN(num) || num === '' || num === null) {
//         if (num > 100) {
//             return para.textContent = `This cannot be!`
//         }
//         else if (num >= 70) {
//             return para.textContent = `That's an awesome score`
//         }
//         else if (num >= 60) {
//             return para.textContent = `Quite a good score`
//         }
//         else if (num >= 50) {
//             return para.textContent = `You can do better`
//         }
//         else {
//             return para.textContent = `come back again next year`
//         }
//     }

//     return para.textContent = `that is not a number`
// }

// let btn = document.querySelector('button')
// btn.addEventListener('dblclick', isEven)
