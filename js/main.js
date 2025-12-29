let prog = document.querySelectorAll(".the-progress span");
const section = document.querySelector(".our-skills");
let started = false;
window.addEventListener("scroll", function () {
    if (window.scrollY >= section.offsetTop - 300 && !started) {
        prog.forEach((span) => {
        span.style.width = span.dataset.width;
    });
    started = true;
    }
});


const events = document.querySelector(".events");
let spanEvents = document.querySelectorAll(".events .unit .number");
let texsed = false;
window.addEventListener("scroll", function () {
    if (window.scrollY >= events.offsetTop - 100) {
        if (!texsed) {
            spanEvents.forEach((n) => getNumber(n));
            texsed = true;
        }
    }
})
function getNumber(ele) {
    let number = ele.dataset.number;
    let countNumber = setInterval(() => {
        ele.textContent++
        if (ele.textContent == number) {
            clearInterval(countNumber);
        }
    }, 1000 / number);
}


const sectionStats = document.querySelector(".stats");
let spanNumber = document.querySelectorAll(".stats .box .number");
let test = false;
window.addEventListener("scroll", function () {
    if (window.scrollY >= sectionStats.offsetTop - 500) {
        if (!test) {
            spanNumber.forEach(num => getGoal(num));
            test = true;
        }
    }
});
function getGoal(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
