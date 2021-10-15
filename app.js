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
    multiplier: 2,
    quantity: 0,
    max: 5
  },
  cheeseKnife: {
    price: 3,
    multiplier: 3,
    quantity: 0,
    max: 4
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
  let pick = clickUpgrades.toothpick
  if (cheese > pick.price && pick.quantity < pick.max) {
    pick.quantity += 1
    cheese -= pick.price
    pick.price += 1
  }
  document.getElementById("toothpickbtn").innerText = '-' + clickUpgrades.toothpick.price + ' Buy Toothpick'
  update()
}

function buyCheeseSlicer() {
  let slicer = clickUpgrades.cheeseSlicer
  let slicerBtn = document.getElementById("cheeseSlicerbtn")
  if (cheese >= slicer.price && slicer.quantity <= slicer.max) {
    slicer.quantity++
    cheese -= slicer.price
    slicer.price *= 2
    slicerBtn.innerText = '-' + slicer.price + ' Buy Cheese Slicer'
    update()
  } else if (slicer.quantity >= slicer.max -1) {
    slicerBtn.innerText = "Cheese Slicer SOLD OUT!"
  } else {
    slicerBtn.style.display = "none"
  }
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
  let cave = automaticUpgrades.cheeseCave
  if (cheese > cave.price && cave.quantity < cave.max) {
    cave.quantity += 1
    cheese -= cave.price
    cave.price += 50
    if (cave.quantity == 1) {
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
