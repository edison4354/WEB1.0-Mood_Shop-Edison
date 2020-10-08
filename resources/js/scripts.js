import data from './data.js' //importing the json file

const itemsContainer = document.getElementById('items')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')

// Displaying all the JSON data into the html file
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

const cart = []

//----------------------------------------------------------
// Add Items
function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            return
        }
    }
    const item = { name, price, qty: 1}
    cart.push(item)
}

//----------------------------------------------------------
// Show Items
function showItems() {
    const qty = getQty()
    const total = getTotal()
    // console.log(`You have ${qty} items in your cart`)
    cartQty.innerHTML = `You have ${qty} items in your cart`

    let itemStr = ''
    for (let i = 0; i < cart.length; i+= 1) {
        // console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        const { name, price, qty } = cart[i]

        itemStr += `<li> ${cart[i].name} $${cart[i].price} x ${cart[i].qty} </li>`
    }
    itemList.innerHTML = itemStr

    // console.log(`Total in cart: $${total}`)
    cartTotal.innerHTML = `Total in cart: $${total}`
}

//----------------------------------------------------------
// Get Qty
function getQty() {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}

//----------------------------------------------------------
// Get total
function getTotal() {
    let total = 0 
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}

//----------------------------------------------------------
// Remove Itmes
function removeItem(name) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty
            }
            if (cart[i.qty < 1 || qty === 0]) {
                cart.splice(i, 1)
            }
            return
        }
    }
}

const all_items_button = Array.from(document.querySelectorAll("button"))

all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
}))

showItems()