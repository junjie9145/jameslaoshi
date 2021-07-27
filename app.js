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
        setTimeout((()=> current.classList.remove('current')));
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
    const loadVideoButton = document.querySelector('#loadvideo')
    

    const videoArray = [
       {
            title: 'Modern Bilingual Education Act',
            discription: "Presentation on the current for of the Bilingual Education Act in the USA. Created for Moreland University's Teach-Now program.",
            video: '<iframe width="718" height="404" src="https://www.youtube.com/embed/eQ7QBaD_37A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            title: 'Class Randomizer Video',
            discription: 'Class randomizer I built using HTML CSS and vanilla Javacript',
            video: '<iframe width="808" height="404" src="https://www.youtube.com/embed/py5RpycRyyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }

    ]

    let arrayIndex = 0

    videoArray.forEach(video => {
        const videoButton = document.createElement('option');
        videoButton.classList.add('videoselect');
        videoButton.textContent = video.title;
        videoButton.setAttribute('value', arrayIndex);
        arrayIndex++;
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
        videoDiscrption.textContent = vid.discription;
    }

    const changeVideo = () => {
        videoListContainer.addEventListener('change', function() {
            console.log(this.value)
            loadVideo(videoArray[this.value])
        }
        )
    }
        // videoList.forEach((video, index) => {
        //     video.addEventListener('click', () => {
        //         loadVideo(videoArray[index])})
        // })


    loadVideo(videoArray[0]);
    changeVideo();

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