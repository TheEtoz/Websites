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

document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav_link').forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('scroll', () => {
    const homeContent = document.querySelector('.home_content');
    const exploreSection = document.querySelector('.explore_section');
    const scrollThresholdHome = window.innerHeight * 0.30; 
    const scrollThresholdExplore = window.innerHeight * 0.35; 

    if (window.scrollY > scrollThresholdHome) {
        homeContent.classList.add('visible');
    } else {
        homeContent.classList.remove('visible');
    }

    if (window.scrollY > scrollThresholdExplore) {
        exploreSection.classList.add('visible');
    } else {
        exploreSection.classList.remove('visible');
    }
});
