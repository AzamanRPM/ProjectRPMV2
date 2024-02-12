const toggleBtn = document.querySelector('#environment_us_btn');
const divList = document.querySelector('#all_us_environment');
const eu_toggleBtn = document.querySelector('#environment_eu_btn');
const eu_divList = document.querySelector('#all_eu_environment');
const cursor = document.querySelector('.cursor');
const USbuttton = document.querySelector('#environment_us_btn');
const EUbuttton = document.querySelector('#environment_eu_btn');
const btn = document.querySelector('.btn')

divList.style.display = 'none';
toggleBtn.addEventListener('click', () => {
    if (divList.style.display === 'none') {
        divList.style.display = 'block';
        eu_divList.style.display = 'none';
    } else {
        divList.style.display = 'none';
        //eu_divList.style.display = 'block';
    }
});

eu_divList.style.display = "none";
eu_toggleBtn.addEventListener('click', () => {
    if (eu_divList.style.display === 'none') {
        eu_divList.style.display = 'block';
        divList.style.display = 'none';
    } else {
        eu_divList.style.display = 'none';
        //divList.style.display = 'block';
    }
});


btn.onmousemove = function(e){
    const x= e.pageX - btn.offsetLeft;
    const y= e.pageY - btn.offsetTop;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}
