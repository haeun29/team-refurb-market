// 제품 데이터 가져오기
function getData() {
	// 여기에 여러분 깃허브 JSON 파일 경로(서버 데이터 주소)
	var DataURL = 'https://raw.githubusercontent.com/jun-isaac/refurb-market/main/json/notebookimg.json'
	fetch(DataURL)
		.then(function (res) {
			return res.json(); // JSON 객체 변환
		})
		.then(function (obj) {
			// 최종 데이터 출력(object)
			showDestail(obj);
			console.log(obj);
		});
}

function showDestail(obj) {
	// 현재 페이지의 URL query 파라미터(매개변수)
	var query = location.search;
	console.log(query);
	// ? URL query문을 object(변수)로 변경
	var params = new URLSearchParams(query).get('category');

	console.log(params);

	obj.forEach(function (product, i) {
		// 해당 id 제품 출력
		var category = product.brand;
		var name = product.product;
		var sale = product.sale;
		var price = product.price;
		var refurb = product.refurb;
		var imgUrl1 = product.image[0];
		var imgUrl2 = product.image[1];
		var imgUrl3 = product.image[2];
		var text = product.text;
		console.log('name = ', name);

		// product-detail.html에 각 변수값 주입
		$('.product-name .category').text(category);
		$('.product-name .refurb').text(refurb);
		$('.info .title').text(name);
		$('.price span').text(price);
		$('.sale span').text(sale);
		$('.swiper-wrapper img:nth-child(1)').attr('src', imgUrl1);
		$('.swiper-wrapper img:nth-child(2)').attr('src', imgUrl2);
		$('.swiper-wrapper img:nth-child(3)').attr('src', imgUrl3);
		$('.swiper-wrapper img:nth-child(1)').attr('alt', name);
		$('.swiper-wrapper img:nth-child(2)').attr('alt', name);
		$('.swiper-wrapper img:nth-child(3)').attr('alt', name);
		$('#product-detail main .text').text(text);




		var swiper = new Swiper(".mySwiper", {
			pagination: {
				el: ".swiper-pagination",
				dynamicBullets: true,
			},


		});

	obj.forEach(function (product, i) {
		// 해당 id 제품 출력
		var cpu = product.cpu;
		var ram = product.ram;
		var ssd = product.ssd;
		var gpu = product.gpu;
		var display = product.display;
		var os = product.os;
		var as = product.as;
		// console.log('name = ', name);
		console.log("image", imgUrl1);

		// product-detail.html에 각 변수값 주입
		$('.c-glay .spec1').text(cpu);
		$('.c-white .spec2').text(ram);
		$('.c-glay .spec3').text(ssd);
		$('.c-white .spec4').text(gpu);
		$('.c-glay .spec5').text(display);
		$('.c-white .spec6').text(os);
		$('.c-glay .spec7').text(as);

	});
	});
}

$(function () {
	getData();
})

$(function(){
  /*** #gnb toggle ***/
  // 1. 열기: #toggle-btn 클릭시 #gnb on
  $('.toggle-btn').click(function(){
    $('#gnb').addClass('on');
  });
  // 2. 닫기: #btn-close 클릭시 #gnb 닫음
  $('#btn-close').click(function(){
    $('#gnb').removeClass('on');
	});

	// 1. 열기: #toggle-btn 클릭시 modal on
		$('.c-cart').click(function(){
			$('.k-modal').addClass('on');
		});

	// 3. 닫기: #btn-close 클릭시 modal 닫음
		$('.k-modal-closeBtn').click(function(){
			$('.k-modal').removeClass('on');
  });

		// 1. 열기: #toggle-btn 클릭시 modal on
		$('.c-buy').click(function(){
			$('.c-modal').addClass('on');
		});
	
	// 3. 닫기: #btn-close 클릭시 modal 닫음
		$('.c-closeBtn').click(function(){
			$('.c-modal').removeClass('on');
	});

  /*** 검색창 열고, 닫기 */
  // 1. #icon-menu .bi-search 누르면 열기
  $('#icon-menu .bi-search').click(function(){
    $(".search-box").addClass('on');
  });
  // 2. .search-box .btn-close 누르면 닫기
  $('.search-box .btn-close').click(function(){
    $(".search-box").removeClass('on');
  })
});