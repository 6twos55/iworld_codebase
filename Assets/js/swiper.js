// Blog Logic

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var newsData = getNewsData();

    var newsSwiperWrapper = document.getElementById('newsSwiperWrapper');
    newsData.forEach(function (news) {
      var slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.style.backgroundImage = 'url(' + news.image + ')';
      slide.innerHTML = '<h2>' + news.title + '</h2><p>' + news.description + '</p>';
      newsSwiperWrapper.appendChild(slide);
    });

    function getNewsData() {
      return [
        { title: 'I-world Networks', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam', image: '../img/rectangle162.png' },
        { title:'I-world Networks', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam', image: '../img/rectangle162.png'  },
        { title: 'I-world Networks', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam', image: '../img/rectangle162.png' },
      ];
    }
  });