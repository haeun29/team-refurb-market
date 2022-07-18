
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