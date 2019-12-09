const mouseTargetList = document.querySelector(".item-list")
if(mouseTargetList)mouseTargetList.addEventListener('click',e=>{
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
                document.querySelector('.col.weapon-img').removeChild(weponImg)
                weponImg.style.opacity = 0
                document.querySelector('.preloader').style.opacity = 1
                weponImg.src = '../img/weapons/' + weapons[item].name + '.png'
                document.querySelector('.col.weapon-img').appendChild(weponImg)
            } else {
                let weaponImg = new Image();
                weaponImg.addEventListener('load', function () {
                    let node = document.querySelector('.preloader')
                    node.style.opacity = 0
                    this.style.opacity = 1
                });
                weaponImg.src = '../img/weapons/' + weapons[item].name + '.png'
                weaponImg.classList = 'img-responsive weapon'
                weaponImg.alt = weapons[item].name
                weaponImg.style.opacity = 0;
                document.querySelector('.weapon-img').appendChild(weaponImg)
            }
        }
    }

    (mouseTargetList.querySelector('.active')) ? mouseTargetList.querySelector('.active').classList.remove('active') : null
    e.target.classList.add('active')
})

const weponList = document.querySelector('.item-list')
if(weponList)for (item in weapons) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.innerText = weapons[item].name
    li.appendChild(a)
    weponList.appendChild(li)
}

const heroStat = document.querySelector('.hero-stats')
if(heroStat){
    heroStat.addEventListener('click',e=>{
        if(document.querySelector('.stat-active')) document.querySelector('.stat-active').classList = ''
        if( event.target.tagName.toUpperCase() == 'LI'){
            let statImg = new Image();
            let oldImg = document.querySelector('.stat-img img')
            let srcImg = e.target.innerText.replace(/[0-9]/g,'')
            e.target.classList += 'stat-active'
            statImg.src = './img/stats/' + srcImg + '.png'
            statImg.alt = srcImg
            document.querySelector('.stat-img').replaceChild(statImg,oldImg)
            stats.forEach(el=>{
                el.name == srcImg.trim()? document.querySelector('.stat-description').innerText = el.description:null
            })
        }
    })
}

const perkList = document.querySelector('.perks')
if(perkList){
    for (perk in perks){
        const li = document.createElement('li')
        li.innerText = perks[perk].name
        perkList.appendChild(li)
    }

    perkList.addEventListener('click',e=>{
        if(document.querySelector('.perk-active')) document.querySelector('.perk-active').classList = ''
        if( event.target.tagName.toUpperCase() == 'LI'){
            let perkImg = new Image();
            let oldImg = document.querySelector('.perk-img img')
            e.target.classList += 'perk-active'
            perkImg.src = './img/perks/' + e.target.innerText + '.png'
            perkImg.alt = e.target.innerText
            document.querySelector('.perk-img').replaceChild(perkImg,oldImg)
            perks.forEach(el=>{
                el.name == e.target.innerText.trim()? document.querySelector('.perk-description').innerText = el.perkDescription:null
            })
        }
    })
}



