import data from './data.js' //importing the json file

const itemsContainer = document.getElementById('items')

// the length of our data determines how many times this loop goes around
data.forEach((mood => {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = mood.image
    img.width = 300
    img.height = 300

    // create and text description, price, and button element
    let text_desc = document.createElement('p');
    text_desc.innerText = mood.desc

    let price = document.createElement('p');
    price.innerText = mood.price

    let button = document.createElement('button')
    button.id = mood.name
    // creates a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = mood.price
    button.innerHTML = "Add to Cart"

    // Add the image, descreiption, and price to the div
    newDiv.appendChild(img)
    newDiv.appendChild(text_desc)
    newDiv.appendChild(price)
    newDiv.appendChild(button)
    // put new div inside items container
    itemsContainer.appendChild(newDiv)
})) 