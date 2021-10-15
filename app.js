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
  clickcount++
  update()
  if (cheese >= clickUpgrades.cheeseSlicer.price) {
    document.getElementById("cheeseSlicerbtn").style.display = "block"
  }
  if (cheese >= clickUpgrades.cheeseKnife.price) {
    document.getElementById("cheeseKnifebtn").style.display = "block"
  }
  if (cheese >= clickUpgrades.toothpick.price) {
    document.getElementById("toothpickbtn").style.display = "block"
  }
  if (cheese >= automaticUpgrades.cheeseCave.price) {
    document.getElementById("cheeseCavebtn").style.display = "block"
  }
  if (clickUpgrades.cheeseKnife.quantity > 0) {
    cheese += clickUpgrades.cheeseKnife.quantity + 1
  }
  else { cheese++ }
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
  let pickBtn = document.getElementById("toothpickbtn")
  if (cheese >= pick.price && pick.quantity < pick.max -1) {
    pick.quantity++
    cheese -= pick.price
    pick.price++
    pickBtn.innerText = '-' + pick.price + ' Buy Toothpick'
    update()
  } else if (cheese >= pick.price && pick.quantity == pick.max -1) {
    pick.quantity++
    cheese -= pick.price
    pickBtn.innerText = "Toothpick SOLD OUT!"
    update()
  } else {
    pickBtn.innerText = "Toothpick SOLD OUT!"
  } 
}

function buyCheeseSlicer() {
  let slicer = clickUpgrades.cheeseSlicer
  let slicerBtn = document.getElementById("cheeseSlicerbtn")
  if (cheese >= slicer.price && slicer.quantity < slicer.max -1) {
    slicer.quantity++
    cheese -= slicer.price
    slicer.price *= 2
    slicerBtn.innerText = '-' + slicer.price + ' Buy Cheese Slicer'
    update()
  } else if (cheese >= slicer.price && slicer.quantity == slicer.max -1) {
    slicer.quantity++
    cheese -= slicer.price
    slicerBtn.innerText = "Cheese Slicer SOLD OUT!"
    update()
  } else {
    slicerBtn.innerText = "Cheese Slicer SOLD OUT!"
  } 
}

function buyCheeseKnife() {
  let knife = clickUpgrades.cheeseKnife
  let knifeBtn = document.getElementById("cheeseKnifebtn")
  if (cheese >= knife.price && knife.quantity < knife.max -1) {
    knife.quantity++
    cheese -= knife.price
    knife.price += 3
    knifeBtn.innerText = '-' + knife.price + ' Buy Cheese Knife'
    update()
  } else if (cheese >= knife.price && knife.quantity == knife.max -1) {
    knife.quantity++
    cheese -= knife.price
    knifeBtn.innerText = "Cheese Knife SOLD OUT!"
    update()
  } else {
    knifeBtn.innerText = "Cheese Knife SOLD OUT!"
  }
}

function buyCheeseCave() {
  let cave = automaticUpgrades.cheeseCave
  let caveBtn = document.getElementById("cheeseCavebtn")
  if (cheese >= cave.price && cave.quantity < cave.max -1) {
    cave.quantity++
    cheese -= cave.price
    cave.price += 50
    if (cave.quantity == 1) {
      startInterval()
    }
    caveBtn.innerText = '-' + cave.price + ' Buy Cave Key'
    update()
  } else if (cheese >= cave.price && cave.quantity == cave.max -1) {
    cave.quantity++
    cheese -= cave.price
    caveBtn.innerText = "Cave Keys SOLD OUT!"
    update()
  } else {
    caveBtn.innerText = "Cave Keys SOLD OUT!"
  }
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
