let form=document.querySelector("form");
let subContainer=document.querySelector(".sub-container")
let output=""
const apiId="4ebd1282";
const apiKey="7cfcbb3cbbee94d1e4c869fc4b1f50fc";

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    output=e.target.querySelector("input").value
    console.log(output)
    fetchApi()
})

async function fetchApi(){
    const baseUrl=`https://api.edamam.com/search?q=q=${output}&app_id=${apiId}&app_key=${apiKey}`
    const response=await fetch(baseUrl)
    
    let data=await response.json()
    displayData(data.hits)
    console.log(data)
}

function displayData(results){
    let newHtml="";
    results.map(result=>{
        newHtml+=
        `
        <div class="search-box">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title1">${result.recipe.label}</h1>
                <a class="btn" href="${result.recipe.url}" target="_blank">see recipe</a>
            </div>
                <p class="calorie-data">calorie:${result.recipe.calories}</p>
        </div>
        `
        
    })
    subContainer.innerHTML=newHtml;
}
