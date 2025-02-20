document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("mousemove", function (event) {
        let eyes = document.querySelectorAll(".eye");
        eyes.forEach(eye => {
            let x = (eye.offsetLeft + eye.clientWidth / 2) - event.pageX;
            let y = (eye.offsetTop + eye.clientHeight / 2) - event.pageY;
            let angle = Math.atan2(y, x) * (180 / Math.PI);
            eye.style.transform = `rotate(${angle}deg)`;
        });
    });
});
