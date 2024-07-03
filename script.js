var specialContainer = document.getElementById('special_bcontainer');
function adjustHeightBasedOnWidth() {
    if (window.innerWidth <= 800) { 
        specialContainer.style.height = '155vh';
    }
    else{
        specialContainer.style.height = '85vh';
    }
}

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

window.addEventListener('load', adjustHeightBasedOnWidth);

window.addEventListener('resize', adjustHeightBasedOnWidth);