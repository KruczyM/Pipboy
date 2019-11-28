
let wepons = [
    {"name" : "44-pistol",
    "damage" : 48,
    "fire_rate" : 6,
    "range" : 119,
    "accuracy" : 66,
    "weight" : 4.2,
    "value" : 99
    },
    {"name" : "gauss-rifle",
    "damage" : 110,
    "fire_rate" : 66,
    "range" : 191,
    "accuracy" : 69,
    "weight" : 15.8,
    "value" : 228
    },
    {"name" : "reba",
    "damage" : 37,
    "fire_rate" : 3,
    "range" : 131,
    "accuracy" : 71,
    "weight" : 9.6,
    "value" : 55
    }
]

let mouseTarget = document.getElementsByClassName("item-list")
listOfEq = mouseTarget[0].getElementsByTagName('a')
console.log(mouseTarget[0],listOfEq)

mouseTarget[0].addEventListener('mouseover', e => {
        for(item in wepons){
             if(wepons[item].name == e.target.className)
             {
                 let weponItem = wepons[item]
                 let container = document.getElementsByClassName('item-stats')
                 container[0].getElementsByClassName('damage')[0].textContent = weponItem.damage
                 container[0].getElementsByClassName('fire_rate')[0].textContent = weponItem.fire_rate
                 container[0].getElementsByClassName('range')[0].textContent = weponItem.range
                 container[0].getElementsByClassName('accuracy')[0].textContent = weponItem.accuracy
                 container[0].getElementsByClassName('weight')[0].textContent = weponItem.weight
                 container[0].getElementsByClassName('value')[0].textContent = weponItem.value
             }
        }
})