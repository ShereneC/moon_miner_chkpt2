let clickcount = 0
let cheese = 0
let totalAutoUpgrades = 0

let clickUpgrades = {
  toothpick: {
    price: 1,
    multiplier: 1,
    quantity: 0,
    max: 10
  },
  cheeseSlicer: {
    price: 2,
    multiplier: 5,
    quantity: 0,
    max: 8
  },
  cheeseKnife: {
    price: 3,
    multiplier: 2,
    quantity: 0,
    max: 5
  }
}

let automaticUpgrades = {
  cheeseCave: {
    price: 50,
    multiplier: 2,
    quantity: 0,
    max: 2
  },
  buy1000: {
    price: 1000,
    multiplier: 1,
    quantity: 0
  }
}

function mine() {
  clickcount += 1
  if (clickUpgrades.cheeseKnife.quantity > 0) {
    cheese += clickUpgrades.cheeseKnife.quantity + 1
    //   if (clickUpgrades.cheeseKnife.quantity == 1) {
    //     cheese += 2
    //   }
    //   else { cheese += 1 * clickUpgrades.cheeseKnife.quantity }
  }
  else { cheese += 1 }
  update()
}

function update() {
  document.getElementById("displayCheese").innerText = cheese.toString()
  document.getElementById("displaytoothpick").innerText = clickUpgrades.toothpick.quantity.toString()
  document.getElementById("displayCheeseSlicer").innerText = clickUpgrades.cheeseSlicer.quantity.toString()
  document.getElementById("displayCheeseKnife").innerText = clickUpgrades.cheeseKnife.quantity.toString()
  document.getElementById("displayCheeseCave").innerText = automaticUpgrades.cheeseCave.quantity.toString()
  document.getElementById("cheeseKnifeMods").innerText = (clickUpgrades.cheeseKnife.quantity + 1).toString()
  document.getElementById("autoMods").innerText = totalAutoUpgrades.toString()

}

function buytoothpick() {
  if (cheese > clickUpgrades.toothpick.price && clickUpgrades.toothpick.quantity < clickUpgrades.toothpick.max) {
    clickUpgrades.toothpick.quantity += 1
    cheese -= clickUpgrades.toothpick.price
    clickUpgrades.toothpick.price += 1
  }
  document.getElementById("toothpickbtn").innerText = '-' + clickUpgrades.toothpick.price + ' Buy Toothpick'
  update()
}

function buyCheeseSlicer() {
  if (cheese > clickUpgrades.cheeseSlicer.price && clickUpgrades.cheeseSlicer.quantity < clickUpgrades.cheeseSlicer.max) {
    clickUpgrades.cheeseSlicer.quantity += 1
    cheese -= clickUpgrades.cheeseSlicer.price
    clickUpgrades.cheeseSlicer.price += 2
  }
  document.getElementById("cheeseSlicerbtn").innerText = '-' + clickUpgrades.cheeseSlicer.price + ' Buy Cheese Slicer'
  update()
}

function buyCheeseKnife() {
  if (cheese > clickUpgrades.cheeseKnife.price && clickUpgrades.cheeseKnife.quantity < clickUpgrades.cheeseKnife.max) {
    clickUpgrades.cheeseKnife.quantity += 1
    cheese -= clickUpgrades.cheeseKnife.price
    clickUpgrades.cheeseKnife.price += 3
  }
  document.getElementById("cheeseKnifebtn").innerText = '-' + clickUpgrades.cheeseKnife.price + ' Buy Cheese Knife'
  update()
}

function buyCheeseCave() {
  if (cheese > automaticUpgrades.cheeseCave.price && automaticUpgrades.cheeseCave.quantity < automaticUpgrades.cheeseCave.max) {
    automaticUpgrades.cheeseCave.quantity += 1
    cheese -= automaticUpgrades.cheeseCave.price
    automaticUpgrades.cheeseCave.price += 50
    if (automaticUpgrades.cheeseCave.quantity == 1) {
      startInterval()
    }
  }
  document.getElementById("cheeseCavebtn").innerText = '-' + automaticUpgrades.cheeseCave.price + ' Buy Key to Cheese Cave'
  update()
}

function collectAutoUpgrades() {
  for (let key in automaticUpgrades)
    if (automaticUpgrades[key].quantity > 0) {
      totalAutoUpgrades = automaticUpgrades[key].quantity * automaticUpgrades[key].multiplier
    }
  cheese += totalAutoUpgrades
  // console.log(totalAutoUpgrades)
  update()
}

function startInterval() {
  setInterval(collectAutoUpgrades, 3000);
}
