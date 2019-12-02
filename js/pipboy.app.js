let mouseTargetList = document.querySelector(".item-list")
mouseTargetList.addEventListener('click', function (e) {
    for (item in weapons) {
        if (weapons[item].name == e.target.innerText) // className
        {
            let weaponItem = weapons[item]
            let container = document.querySelector('.item-stats')
            container.querySelector('.damage').textContent = weaponItem.damage
            container.querySelector('.fire_rate').textContent = weaponItem.fire_rate
            container.querySelector('.range').textContent = weaponItem.range
            container.querySelector('.accuracy').textContent = weaponItem.accuracy
            container.querySelector('.weight').textContent = weaponItem.weight
            container.querySelector('.value').textContent = weaponItem.value

            if (document.querySelector('.weapon-img img')) {
                let weponImg = document.querySelector('.weapon-img img')
                weponImg.src = '../img/weapons/' + weapons[item].name + '.png';
            } else {
                let weaponImg = new Image();
                weaponImg.src = '../img/weapons/' + weapons[item].name + '.png';
                weaponImg.classList = 'img-responsive weapon'
                document.querySelector('.weapon-img').appendChild(weaponImg)
            }
        }
    }

    (this.querySelector('.active')) ? this.querySelector('.active').classList.remove('active') : null
    e.target.classList.add('active')
})

const weponList = document.querySelector('.item-list')
for(item in weapons){
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.innerText = weapons[item].name
    li.appendChild(a)
    weponList.appendChild(li)
}