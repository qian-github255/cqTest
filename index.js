let come = document.getElementsByClassName('come');
let top1 = document.getElementsByClassName('top')[0]
let bottom = document.getElementsByClassName('bottom')[0]
let left = document.getElementsByClassName('left')[0]
let right = document.getElementsByClassName('right')[0];
let theme = document.querySelector('h1')
let photos = ['./asset/1.gif', './asset/2.jpg', './asset/3.gif', './asset/4.jpg', './asset/5.jpg', './asset/6.gif', './asset/7.gif', './asset/8.jpg']
let wrapper = document.querySelector('.wrapper')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let change = document.querySelector('.change')


function reset(){
    setTimeout(()=>{
        img2.src = photos[4]
    },500)
    setTimeout(()=>{
        img3.src = photos[4]
    },1000)
    setTimeout(() =>{
        img1.src = photos[4];
    },1500)
}

function getRandom() {
    return Math.floor(Math.random() * 8)
}

change.onclick = function () {
    setTimeout(()=>{
        img2.src = photos[getRandom()]
    },500)
    setTimeout(()=>{
        img3.src = photos[getRandom()]
    },1000)
    setTimeout(() =>{
        img1.src = photos[getRandom()];
    },1500)
}





function changeText(dom) {
    // dom.innerText = "zhanshi "
    setTimeout(() => {
        dom.innerText = "准备好了吗？？？"
    }, 1000);

    setTimeout(() => {
        dom.innerText = "真的准备好了吗？？？"
    }, 2000);

    setTimeout(() => {
        dom.innerText = "开始了哈"
    }, 3000);

    setTimeout(() => {
        dom.innerText = "车门焊死，都别下车";
        top1.style.color = "red"
        left.style.color = "yellow"
        bottom.style.color = "green"
        right.style.color = "blue"
        // top1.style.trans
        top1.classList.add('add')
        bottom.classList.add('add')
        left.classList.add('add')
        right.classList.add('add')
        setTimeout(() => {
            theme.style.opacity = 1
            
        }, 500)
        setTimeout(() => {
            reset();
            change.style.opacity = 1;
        },3000)
    }, 5000);
}
for (let i = 0; i < come.length; i++) {
    changeText(come[i])
}