let blogListings = document.querySelectorAll(".blog-listing")

let newDiv = document.createElement("div")
newDiv.classList.add(`bl1`)
newDiv.classList.add(`bl`)

let pagesCounter = 1

for (let i = 0; i < blogListings.length; i++) {
    if (i < (8 * pagesCounter)) {
        const clone = blogListings[i].cloneNode(true);
        newDiv.appendChild(clone)
    }
    if (i == (8 * pagesCounter)) {
        document.querySelector(".blog-listings").appendChild(newDiv)
        pagesCounter++
        newDiv = document.createElement("div")
        newDiv.classList.add(`bl${pagesCounter}`)
        newDiv.classList.add(`bl`)
        const clone = blogListings[i].cloneNode(true);
        newDiv.appendChild(clone)
    }
    if (i == blogListings.length - 1) {
        document.querySelector(".blog-listings").appendChild(newDiv)
        pagesCounter++
        blogListings.forEach(bll => {
            bll.remove()
        })
        blogListings = document.querySelectorAll(".blog-listing")
    }
}

const numbersDiv = document.querySelector(".selection-numbers")
numbersDiv.innerHTML = ""

for (let i = 0; i < pagesCounter - 1; i++) {
    if (i == 0) {
        numbersDiv.innerHTML += `<div class="selected-number">${i + 1}</div>`

    }
    else {
        numbersDiv.innerHTML += `<div>${i + 1}</div>`
    }
}

function selectedNumberMakeRight() {
    document.querySelectorAll(".bl").forEach(bb => {
        bb.style.display = "none"
    })
    numberClickables.forEach(nc => {
        nc.classList.remove("selected-number")
    })
    numberClickables[selectedNumber - 1].classList.add("selected-number")
    document.querySelectorAll(".bl")[selectedNumber - 1].style.display = "flex"
}

let selectedNumber = 1

const numberClickables = document.querySelectorAll(".selection-numbers>div")

numberClickables.forEach((nc, id) => {
    nc.addEventListener("click", () => {
        selectedNumber = id + 1
        selectedNumberMakeRight()
    })
})

document.querySelector(".left-arrow-blog").addEventListener("click", () => {
    if (selectedNumber > 1) {
        selectedNumber--
        selectedNumberMakeRight()
    }
})

document.querySelector(".right-arrow-blog").addEventListener("click", () => {
    if (selectedNumber < pagesCounter - 1) {
        selectedNumber++
        selectedNumberMakeRight()
    }
})

blogListings.forEach(b=>{
    b.classList.add("visible")
})

let shownPosts = 0

function refilter(){
    shownPosts=0
    document.querySelectorAll(".bl").forEach(bb=>{
        bb.style.display = "flex"
    })
    document.querySelector(".blog-page-selection").style.display = "none"
    blogListings.forEach(b=>{
        b.classList.remove("invisible")
        b.classList.remove("visible")
    })
    blogListings.forEach((bl, id)=>{
        for(let i = 0; i<currFilters.length; i++){
            if(!bl.classList.contains(currFilters[i])){
                bl.classList.add("invisible")
                break
            }
            if(i == currFilters.length-1){
                bl.classList.add("visible")
                shownPosts++
            }
        }
    })
    if(currFilters.length==0){
        shownPosts = blogListings.length
    }
    document.querySelector(".found").innerText = `Found ${shownPosts} blogs`
    blogListings.forEach(bl=>{
        bl.classList.remove("really-invisible")
        bl.classList.remove("really-visible")
    })
    afterSearchFunc()
}

let clickedFilters = []

let currFilters = []

const filters = document.querySelectorAll(".filters>div")
const filtersTexts = document.querySelectorAll(".filters>div>div:nth-child(1)")

filters.forEach((fl, id) => {
    clickedFilters.push(false)
    fl.addEventListener("click", () => {
        if (clickedFilters[id] == false) {
            currFilters.push(filtersTexts[id].innerHTML.slice(1, filtersTexts[id].innerHTML.length))
            clickedFilters[id] = true
            filters[id].classList.add("clicked-filter")
        }
        else {
            clickedFilters[id] = false
            filters[id].classList.remove("clicked-filter")
            for (let i = 0; i < currFilters.length; i++) {
                if (currFilters[i] == filtersTexts[id].innerHTML.slice(1, filtersTexts[id].innerHTML.length)) {
                    currFilters.splice(i, 1)
                    break
                }
            }
        }
        refilter()
    })
})

document.querySelector("input#search-input").addEventListener("input", ()=>{
    afterSearchFunc()
})

function afterSearchFunc(){
    if(document.querySelector("input#search-input").value.toLowerCase().length == 0){
        blogListings.forEach(bl=>{
            bl.classList.remove("really-invisible")
            bl.classList.remove("really-visible")
        })
        return
    }
    shownPosts=0
    document.querySelectorAll(".bl").forEach(bb=>{
        bb.style.display = "flex"
    })
    document.querySelector(".blog-page-selection").style.display = "none"
    const visibles = document.querySelectorAll(".visible")
    const visibleTitles = document.querySelectorAll(".visible .blog-title")

    visibles.forEach((v, id)=>{
        if(visibleTitles[id].innerText.toLowerCase().includes(document.querySelector("input#search-input").value.toLowerCase())){
            v.classList.remove("really-invisible")
            v.classList.add("really-visible")
            shownPosts++
        }
        else{
            v.classList.remove("really-visible")
            v.classList.add("really-invisible")
        }
    })

    document.querySelector(".found").innerText = `Found ${shownPosts} blogs`
}