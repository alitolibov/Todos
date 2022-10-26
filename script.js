import array from "./modules/info.js"
let today = document.querySelector('.box-today')
let tomorrow = document.querySelector('.box-tomorrow')
let later = document.querySelector('.box-later')
let btn2 = document.querySelector('.header-text2')
let btn = document.querySelector('.header-text')
let none = document.querySelector('.none')
let none2 = document.querySelector('.none2')
let text = document.querySelector('.text7')
let date = new Date()
for (let item of array) {
    let dats = date.setDate(date.getDay() + item.left)
        console.log(date);
        let items = document.createElement('div')
        let wrap = document.createElement('div')
        let checkbox = document.createElement('div')
        let title = document.createElement('p')
        let info = document.createElement('p')
        let data = document.createElement('p')
        
        items.classList.add('item')
        wrap.classList.add('wrap')
        checkbox.classList.add('checkbox')
        title.classList.add('buy')
        title.innerHTML = 'Buy S Plaid!'
        info.classList.add('item-text')
        info.innerHTML = item.title
        data.classList.add('data')
        if(item.left === 0) {
            today.append(items)
            items.append(wrap,info,data)
            wrap.append(checkbox,title)
            data.innerHTML = 'Today'
        } else if(item.left === 1) {
            tomorrow.append(items)
            items.append(wrap,info,data)
            wrap.append(checkbox,title)
            data.innerHTML = 'Tomorrow'
        } else if(item.left > 1) {
            later.append(items)
            items.append(wrap,info,data)
            wrap.append(checkbox,title)
            data.innerHTML = date
        }

        if(item.completed === true) {
            checkbox.classList.add('checkboxon')
        }
        checkbox.onclick = () => {
            checkbox.classList.toggle('checkboxon')
        }
    }
    btn2.onclick = () => {
        btn.classList.remove('header-text')
        btn2.classList.remove('header-text2')
        btn.classList.add('header-text2')
        btn2.classList.add('header-text')
        none.style.display = 'none'
        none2.style.display = 'none'
        text.style.display = 'block'
    }
    btn.onclick = () => {
        btn.classList.remove('header-text2')
        btn2.classList.remove('header-text')
        btn.classList.add('header-text')
        btn2.classList.add('header-text2')
        none.style.display = 'block'
        none2.style.display = 'block'
        text.style.display = 'none'
    }