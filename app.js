let cheese = 0

let clickUpgrades = {
  buy1: {
    price: 1,
    multiplier: 1,
    quantity: 0
  },
  buy2: {
    price: 2,
    multiplier: 5,
    quantity: 0
  },
  buy3: {
    price: 3,
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
  if (clickUpgrades.buy3.quantity > 0) {
    cheese += clickUpgrades.buy3.quantity * 2
  }
  else { cheese += 1 }
  update()
}

function update() {
  document.getElementById("displayCheese").innerText = cheese.toString()
  document.getElementById("displayBuy1").innerText = clickUpgrades.buy1.quantity.toString()
  document.getElementById("displayBuy2").innerText = clickUpgrades.buy2.quantity.toString()
  document.getElementById("displayBuy3").innerText = clickUpgrades.buy3.quantity.toString()
}

function buyBuy1() {
  if (cheese > 0) {
    clickUpgrades.buy1.quantity += 1
    cheese -= 1
  }
  update()
}

function buyBuy2() {
  if (cheese > 1) {
    clickUpgrades.buy2.quantity += 1
    cheese -= 2
  }
  update()
}

function buyBuy3() {
  if (cheese > 2) {
    clickUpgrades.buy3.quantity += 1
    cheese -= 3
  }
  update()
}

function buyBuy5() {
  if (cheese > 49) {
    // let purchased = clickUpgrades.buy1.quantity
    clickUpgrades.buy2.quantity += 1
    cheese -= 5
  }
  update()
}


