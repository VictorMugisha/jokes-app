// Using XMLHttpRequest Object


const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political&type=twopart&amount="
const fetchBtn = document.querySelector(".fetch")
const jokesSection = document.querySelector(".jokes")

let jokesAvailable = 3

function getJokes() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url + jokesAvailable)
    xhr.send()

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status <= 300) {
                let res = JSON.parse(xhr.responseText)
                console.log(res.jokes)
                paintDom(res.jokes)
            } else {
                console.log("error")
            }
        }
    })
}

function paintDom(data) {
    data.forEach(d => {
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let h3 = document.createElement("h3")

        div.classList.add("joke")
        h2.id = "setup"
        h3.id = "delivery"

        h2.innerHTML = d.setup
        h3.innerHTML = d.delivery

        div.append(h2, h3)
        jokesSection.appendChild(div)
    })
}

getJokes()

fetchBtn.addEventListener("click", (e) => {
    if (jokesAvailable < 4) {
        jokesAvailable++
        getJokes()
    }
    else {
        e.target.innerText = "Start Again!"
        e.target.onclick = () => {
            // jokesAvailable = 3
            // getJokes()
            window.location.reload()
        }
    }
})



// USING MODERN FETCH API
// function getJokes() {

// }