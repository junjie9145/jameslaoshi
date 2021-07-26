const navSlide = (() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                console.log(index /7);
            }
        })
        burger.classList.toggle('toggle');  
    })
  
})();

const slider = (() => {
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const auto = true;
    const intervalTime = 5000;

    let slideInterval;

    const timeOut = () => {
        setTimeout((()=> current.classList.remove('current')), 200);
    }

    const autoSlide = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime)
    };

    const nextSlide = () => {
        const current = document.querySelector('.current')
        current.classList.remove('current');
        if(current.nextElementSibling) {
            current.nextElementSibling.classList.add('current')
        } else {
            slides[0].classList.add('current');
        }
        timeOut()
        }

    const prevSlide = () => {
        const current = document.querySelector('.current')
        current.classList.remove('current');
        if(current.previousElementSibling) {
            current.previousElementSibling.classList.add('current')
        } else {
            slides[slides.length -1].classList.add('current');
        }
        timeOut()
    }

    window.addEventListener('load', e=> {
        autoSlide()
    })

    prev.addEventListener('click', e=> {
        prevSlide();
        if(auto) {
            autoSlide()
        }
    })
    next.addEventListener('click', e=> {
        nextSlide()
        if(auto) {
            autoSlide()
        }
    })
})();

//video list

const videoList = (() => {
    const currentVideo = document.querySelector('#current-video');
    const videoListContainer = document.querySelector('#video-list');
    const videoTitle = document.querySelector('#video-title');
    const videoDiscrption = document.querySelector('#video-discription');
    const videoList = document.querySelectorAll('#video-list options')

    const videoArray = [
       {
            title: 'Modern Bilingual Education Act',
            discripttion: "Presentation on the current for of the Bilingual Education Act in the USA. Created for Moreland University's Teach-Now program.",
            video: '<iframe width="718" height="404" src="https://www.youtube.com/embed/eQ7QBaD_37A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },

    ]

    videoArray.forEach(video => {
        const videoButton = document.createElement('option');
        videoButton.classList.add('videoselect');
        videoButton.textContent = video.title;
        videoListContainer.appendChild(videoButton)
    })

    const clear = () => {
        currentVideo.innerHTML = "";;
        videoTitle.textContent = "";
        videoDiscrption.textContent ="";
    }

    const loadVideo = (vid) =>{
        clear();
        currentVideo.innerHTML = vid.video;
        videoTitle.textContent = vid.title;
        videoDiscrption.textContent = vid.discripttion;
    }

    videoList.forEach((video) => {
        video.addEventListener('click', loadVideo(video))
    })

    loadVideo(videoArray[0]);

})()

const clearField =  (() => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const clearButton = document.querySelector('#clearbutton')

    const clear = () => {
        name.value = "";
        email.value = "";
        message.value = "";
    }

    clearButton.addEventListener("click", clear)
})()