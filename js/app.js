
$(function(){
  const html = `
    <!-- 검색 UI -->



		<nav id="k-menuContainer">
	
		<button class="k-closeBtn">
			<i class="bi bi-chevron-left"></i>
		</button>
	
		<div id="k-form">
			<form class="k-searchBox">  
				<input 
					type="search"
					class="k-input"
					placeholder="검색"
					required
					style="color: #fff;"
					>
					
				<button>
					<i class="bi bi-search"></i>
				</button>
			</form>
		</div>
		
	
		<ul class="k-gnb">
			<li><a href="about.html">회사소개</a></li>
			<li><a href="products.html">노트북</a></li>
			<li><a href="pc.html">PC</a></li>
			<li><a href="pad.html">태블릿 PC / 패드</a></li>
			<li><a href="watch.html">웨어러블</a></li>
			<li><a href="#">커뮤니티</a></li>
		</ul>
	
		</nav>`;

  $('body').append(html); 

}); // $

$(function(){

  /*** #gnb toggle ***/
  // 1. 열기: #toggle-btn 클릭시 #gnb on
  $('.toggle-btn').click(function(){
    $('#k-menuContainer').addClass('on');
  });
  // 2. 닫기: #btn-close 클릭시 #gnb 닫음
  $('.k-closeBtn').click(function(){
    $('#k-menuContainer').removeClass('on');
  });

}); // $






// 제품 데이터 가져오기
function getData() {
	// 여기에 여러분 깃허브 JSON 파일 경로(서버 데이터 주소)
	const DataURL = 'https://raw.githubusercontent.com/jun-isaac/refurb-market/main/json/notebookimg.json'
	fetch(DataURL)
		.then(function (res) {
			return res.json(); // JSON 객체 변환
		})
		.then(function (obj) {
			// 최종 데이터 출력(object)
			showProducts(obj);
			console.log(obj);
		});
		
}

function showProducts(obj) {
	// 현재 페이지의 URL query 파라미터(매개변수)
	const query = location.search;
	console.log(query);
	// ? URL query문을 object(변수)로 변경
	let params = new URLSearchParams(query).get('category');

		// params == null이면 ( 시작 페이지 모든 제품 출력 )
		if (params == null || params == 'all') {
			params = null
		}
		console.log(params);

	// 상품 데이터 출력
	obj.forEach(function (product, i) {
		// 카테고리 구분 wireless | 무선헤드폰 | 유선헤드폰
		// 요청한 params와 동물 카테고리명이 일치하는 데이터만 출력
		let category = product.brand;
		let sale = product.sale;
		let price = product.price;
		let refurb = product.refurb;
		let imgUrl1 = product.image[0];
		let imgUrl2 = product.image[1];
		let imgUrl3 = product.image[2];
		let text = product.text;
		console.log(category);	
		let html = `
		<div class="product" data-id=${i}>
		<div class="swiper mySwiper">
			<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="${imgUrl1}" alt=${name}></div>
			<div class="swiper-slide"><img src="${imgUrl2}" alt=${name}></div>
			<div class="swiper-slide"><img src="${imgUrl3}" alt=${name}></div>
		</div>
	<div class="swiper-pagination"></div>
</div>
			<div class="info">
			<div class="product-name">
					<span class="category">${category}</span>
					<span class="refurb">${refurb}</span>
				</div>
				<p class="title">${name}</p>
				<div class="all-price">
					<p class="price"><span>₩</span>${price}</p>
					<p class="sale"><del><span>₩</span>${sale}</del></p>
				<div>
			</div>
	</div>
	`

		// 카테고리 별로 보기
		if (params == product.category) {
	
			$('.main .container .products').append(html);
		}

		// 상품 전체보기
		if (params == null) {
			let html = `
<a href="detail.html"><diva  class="product" data-id=${i}>
	<div class="swiper mySwiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="${imgUrl1}" alt=${name}></div>
				<div class="swiper-slide"><img src="${imgUrl2}" alt=${name}></div>
				<div class="swiper-slide"><img src="${imgUrl3}" alt=${name}></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
			<div class="info">
				<div class="product-name">
					<span class="category">${category}</span>
					<span class="refurb">${refurb}</span>
				</div>
				<p class="title">${name}</p>
				<p class="price"><span>₩</span>${price}</p>
				<p class="sale"><del><span>₩</span>${sale}</del></p>
			</div>
	</div></a>
	`
			$('.main .container .products').append(html);
			console.log(`i = `, i)
		}
	});


}

$(function () {
	getData();
})