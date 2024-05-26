document.getElementById('navbar_toggle').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('active');
});

document.getElementById('close_btn').addEventListener('click', function () {
    document.getElementById('nav').classList.remove('active');
});

document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('nav').classList.remove('active');
    });
});
