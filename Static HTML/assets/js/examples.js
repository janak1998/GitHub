const categories = document.querySelectorAll(".examples-category")
const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("input", ()=>{
    categories.forEach(cat=>{
        const currOnes = cat.querySelectorAll(".example")
        const currTitles = cat.querySelectorAll(".example-title")
        let stays = false
        currOnes.forEach((c, id)=>{
            if(currTitles[id].innerText.toLowerCase().includes(searchInput.value.toLowerCase())){
                c.style.display = "flex"
                stays = true
            }
            else{
                c.style.display = "none"
            }
        })
        if(!stays){
            cat.style.display = "none"
        }
        else{
            cat.style.display = "flex"
        }
    })
})

isibleTitles[id].innerText.toLowerCase().includes(document.querySelector("input#search-input").value.toLowerCase())