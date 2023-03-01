const loadMeal = () => {
    const inputfield = document.getElementById('search-field')
    const inputfieldValue = inputfield.value
    inputfield.value = ''

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputfieldValue}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    // console.log(meals);

    //step-1:Get conatainer 
    const mealsConatiner = document.getElementById('mealsContainer')
    mealsConatiner.innerHTML = ''
    //this is array thats why forEach loop
    meals.forEach(meal => {
        console.log(meal);
        //step-2: create child element 

        const mealdiv = document.createElement('div')
        mealdiv.classList.add("col")

        //step-3 :set content of the child
        mealdiv.innerHTML = `
        <div class="card">
                  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">meal ID: ${meal.idMeal}</p>
                 <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsdetails">
                 Details
               </button>
             </div>
        </div>
        `
        //step-4: append child to the container 
        mealsConatiner.appendChild(mealdiv)
    });
}


const loadMealDetails = (mealId) => {
    console.log(mealId);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = (mealdetails) => {
    console.log(mealdetails);
    document.getElementById('mealsdetailsLabel').innerText = mealdetails.strMeal
    const mealdetailsBody = document.getElementById('mealdetailsBody')
    mealdetailsBody.innerHTML = `
    <img class="w-100" src="${mealdetails.strMealThumb}">
    <h1>Area:${mealdetails.strArea}</h1 >
        `
}

//enter button handler
document.getElementById("search-field").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // the code you want to run
        loadMeal()
    }
})
// loadMeal()

