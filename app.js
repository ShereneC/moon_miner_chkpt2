let cheese = 0

let clickUpgrades = {
  buy1: {
    price: 1,
    multiplier: 1,
    quantity: 0
  },
  buy5: {
    price: 5,
    multiplier: 5,
    quantity: 0
  },
  buy20: {
    price: 20,
    multiplier: 2,
    quantity: 0
  }
}

let automaticUpgrades = {
  buy50: {
    price: 50,
    multiplier: 50,
    quantity: 0
  }
}

function mine() {
  cheese += 1
  update(cheese)
}

function update(cheese) {
  document.getElementById("displayCheese").innerText = cheese.toString()
}

function buyBuy1() {
  if (cheese > 0) {
    // let purchased = clickUpgrades.buy1.quantity
    clickUpgrades.buy1.quantity += 1
    cheese -= 1
    update(cheese)
  }
  console.log(clickUpgrades.buy1.quantity)
}

