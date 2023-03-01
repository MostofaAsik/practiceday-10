const loadPhone = () => {
    //toggle start
    toggleSpninner(true)
    const inputField = document.getElementById('search-field')
    const inputFieldValue = inputField.value
    //Empty everytime inputField 
    inputField.value = ''
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputFieldValue}`)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
const displayPhone = (phones) => {

    const phoneConatiner = document.getElementById('phoneContainer');
    //Empty Everytime  Container  
    phoneConatiner.innerHTML = ''
    //display all phones
    const showAll = document.getElementById('Show-All')
    if (phones.length > 10) {
        phones = phones.slice(0, 10)
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add("d-none")
    }

    //no-Phone -messege
    const noPhoneMsg = document.getElementById('No-Phone-Msg')
    if (phones.length === 0) {
        noPhoneMsg.classList.remove('d-none')
    }
    else {
        noPhoneMsg.classList.add('d-none')
    }

    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        <div class="card p-4">
                  <img src="${phone.image}" class="card-img-top" alt="...">
             <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                 <p class="card-text">Brand:${phone.brand}</p>
             </div>
        </div>
        
        `
        phoneConatiner.appendChild(phoneDiv)

    });

    //toggle stop
    toggleSpninner(false)
}

const toggleSpninner = isLoading => {
    const loader = document.getElementById('loader')
    if (isLoading) {
        loader.classList.remove('d-none')
    }
    else {
        loader.classList.add('d-none')
    }
}

const loadPhone10 = (dataLimit) = {
    loadPhone(10)
}
