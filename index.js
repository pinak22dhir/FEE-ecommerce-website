// -----Copy Menu For Mobile----
function copyMenu(){
	//copy inside .dpt.cat to departments
	var dptCategory = document.querySelector('.dpt-cat');
	var dptPlace = document.querySelector('.departments');
	dptPlace.innerHTML = dptCategory.innerHTML;

	//copy inside nav to nav 
	var mainNav = document.querySelector('.header-nav nav');
	var navPlace = document.querySelector('.off-canvas nav');
	navPlace.innerHTML = mainNav.innerHTML;

	//copy .header-top .wrapper to .thetop-nav
	var topNav = document.querySelector('.header-top .wrapper');
	var topPlace = document.querySelector('.off-canvas .thetop-nav');
	topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();
// show  mobile menu
const menuButton = document.querySelector('.trigger'),
	 closeButton = document.querySelector('.t-close'),
	 addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
	addclass.classList.toggle('showmenu');

})
closeButton.addEventListener('click', function() {
	addclass.classList.remove('showmenu');
})




//-----show sub menu on mobile----
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
	e.preventDefault();
	submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
	if (this.closest('.has-child').classList != 'expand');
	this.closest('.has-child').classList.toggle('expand')
}

//slider

const swiper = new Swiper('.swiper', {
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  });

  // show search 
  const searchButton = document.querySelector('.t-search'),
  		tClose = document.querySelector('.search-close'),
	  	showClass = document.querySelector('.site');
searchButton.addEventListener('click',function(){
	showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click',function(){
	showClass.classList.remove('showsearch')
})

//show dpt menu 
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
	  dptClass = document.querySelector('.site')
dptButton.addEventListener('click', function(){
	dptClass.classList.toggle('showdpt')
})


//product image slider 
var productThumb = new Swiper ('.small-image', {
	loop: true,
	spaceBetween: 10,
	sliderPerView: 3,
	freeMode: true,
	watchSliderProgress: true,
	breakpoints: {
		481: {
			spaceBetween: 32,
		}
	}
});
var productBig = new Swiper ('.big-image',{
	loop: true,
	autoHeight: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: productThumb,
	}
})


// implementation of products
const limit = 8;
const url = `https://fakestoreapi.com/products/?limit=${limit}`;

const productContainer = document.querySelector('#productsapi');
// productContainer.innerHTML = '';

async function fetchData() {
  try {
    const response = await fetch(url); 
    const products = await response.json();

    products.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <div class="media">
          <div class="thumbnail object-cover">
            <a href="#">
              <img src="${item.image}" alt="${item.title}">
            </a>
          </div>
          <div class="hoverable">
            <ul>
              <li class="active"><a href="#"><i class="ri-heart-line"></i></a></li>
              <li><a href="#"><i class="ri-eye-line"></i></a></li>
              <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
            </ul>
          </div>
          <div class="discount circle flexcenter"><span>0%</span></div> <!-- No discount information provided -->
        </div>
        <div class="content">
          <div class="rating">
            <div class="stars"></div>
            <span class="mini-text">(${item.rating.count})</span>
          </div>
          <h3><a href="#">${item.title}</a></h3>
          <div class="price">
            <span class="current">$${item.price}</span>
            <span class="normal mini-text"></span> <!-- No normal price information provided -->
          </div>
        </div>
      `;
      productContainer.appendChild(itemElement);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();