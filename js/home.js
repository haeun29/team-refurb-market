const swiper = new Swiper('.swiper', {
    // 옵션
    spaceBetween: 30,
    centeredSlides: true,
    // 자동재생
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    direction: 'horizontal', // 효과
    loop: true, // loop 재생 - true 계속 다음으로 무한 연결 false는 안됨

    // 하단 pager(옵션)
    
     pagination: {
        // class명 지정
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });