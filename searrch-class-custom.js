import $ from "jquery";

class Search {

	//1. describe and create and initiate our object
	constructor() {
		this.addSearchHtml();
		this.resultsDiv = $(".search-overlay__results");
		this.openButton = $(".js-search-trigger");
		this.closeButton = $(".search-overlay__close");
		this.searchOverlay = $(".search-overlay");
		this.searchField = $("#search-term");
		this.events();
		this.isOverlayOpen = false;
		this.isSpinnerVisible = false;
		this.previuosValue;
		this.typingTimer;
	}

	//2.events  connects object and methods
	//on this.heads feels cold wearh hat
	events() {
		this.openButton.on("click",this.openOverlay.bind(this));
		this.closeButton.on("click",this.closeOverlay.bind(this));
		$(document).on('keydown',this.keyDispatcher.bind(this));  //keyup event lowercase,当js 召唤keyDispatcher作为响应的时候会传递一些信息关于当前键盘的event到这个函数当中。也就是下面传递的参数e。
		this.searchField.on('keyup',this.typingLogic.bind(this));  //设置keyup来使得服务器有足够的时间来反应和typingLogic函数匹配。 当设置为keydown动作时 移动光标依然会运行函数。 
	}
	
	


	/**
	 * ============================
	 * 3.methods(functions,actions)
	 * ============================
	 */
	
	typingLogic() {
		//if the current value is not equal will run all other codes
		if (this.searchField.val() != this.previuosValue) {
			//this key word is what's allowing us to referrence this variable that lives within our constructor or the property lives in our constructor. 
		clearTimeout(this.typingTimer);  //
		//每次按键盘的时候都会重置时间。比方说原来按下一次键盘时间有2000毫秒时间来触发动作，再按下去别的键盘的时候前一个按键盘时候的2000毫秒时间会重置。 就是typingLogic() 首先执行的时 cleartimeoout() 这个函数。 然后再执行下面的函数。 每次按键盘的时候 都会重置时间。 
		//reset timeout or timer, everytime you press key in that search field, typinglogic will run, first thing we do is clear or reset timer, for example, maybe it had been 1.5 seconds since last time we had pressed down, so that mead there was only 500 millseconds left on this countdown of 2000, this way we are reseting that ,we are getting rid of that timer that was going to expire or excute in 500 milliseconds we are saying. no gorget about it. Right after that we are just re establishing a timeout that will excute this code in 2000 millieseconds. 
		if (this.searchField.val()) {  // 如果serchiFiled 值不为空白则运行下面函数

		if (!this.isSpinnerVisible) {		
			this.resultsDiv.html('<div class="spinner-loader"></div>');
			this.isSpinnerVisible = true;
}
		//匿名函数也可以运行 如 function() { }  就是不加函数名字 
		this.typingTimer = setTimeout(this.getResults.bind(this),1000);  //内置函数，第一个是要运行的函数，第二个是运行的时间。 这个函数可以设置多久运行某个函数。

		} else {  //如果为空白则清空
			this.resultsDiv.html('');
			//设置spinner不显示
			this.isSpinnerVisible = false;

		}

		} 
		this.previuosValue = this.searchField.val();  // 这样可以预防 方向键在input移动导致这个函数继续运行的情况。 
	}
	getResults() {
		//熟练使用js  when().then( ) methods. 
		$.getJSON(universityData.root_url + '/wp-json/university/v1/search?term=' + this.searchField.val(),(results) => {
			this.resultsDiv.html(`
			 <div class="row">
				 <div class="one-third">
				 	<h2 class="search-overlay__section-title">General Information</h2>

				 	${results.generalInfo.length ? '<ul class="link-list min-list">' : '<p>There are no posts found.</p>'}
				 

					${results.generalInfo.map( item => `<li><a href="${item.link}	">${item.title}</a> ${item.type == 'post' ? ` by ${item.author}` : ''}</li>` ).join('')}

					${results.generalInfo.lengtyh ? '</ul>' : ''}
				 </div>
				 <div class="one-third">
				 	<h2 class="search-overlay__section-title">Porgrams</h2>

				 	${results.programs.length ? '<ul class="link-list min-list">' : `<p>There are no programs found. <a href="${universityData.root_url}/programs">View all programs.</a> </p>`}

					${results.programs.map( item => `<li><a href="${item.link}	">${item.title}</a> </li>` ).join('')}

					${results.programs.lengtyh ? '</ul>' : ''}

				 	<h2 class="search-overlay__section-title">Professors</h2>

				 	${results.professors.length ? '<ul class="professor-cards">' : `<p>There are no professors found.<a href="${universityData.root_url}/professors">View all professors.</a></p>`}

					${results.professors.map( item => `
						<li class="professor-card__list-item">
          <a class="professor-card" href="${item.link}">
            <img class="professor-card__image" src="${item.image}" >
            <span class="professor-card__name">${item.title}</span>
            </a>
        </li>` ).join('')}

					${results.professors.lengtyh ? '</ul>' : ''}

				 </div>
				 <div class="one-third">
				 	<h2 class="search-overlay__section-title">Campuses</h2>

				 	${results.campuses.length ? '<ul class="link-list min-list">' : `<p>There are no campuses found.<a href="${universityData.root_url}/campuses">View all campuses.</a></p>`}

					${results.campuses.map( item => `<li><a href="${item.link}	">${item.title}</a> </li>` ).join('')}

					${results.campuses.length ? '</ul>' : ''}

				 	<h2 class="search-overlay__section-title">Events</h2>
				 	${results.events.length ? '' : `<p>There are no Events found.<a href="${universityData.root_url}/events">View All Events</a></p>` }
				 	${results.events.map(item => ` 
				 		<div class="event-summary">
						  <a class="event-summary__date t-center" href="${item.link}">
						    <span class="event-summary__month">${item.month}</span>
						    <span class="event-summary__day">${item.day}</span>
						  </a>
						  <div class="event-summary__content">
						    <h5 class="event-summary__title headline headline--tiny"><a href="${item.link}">${item.title}</a></h5>
						    <p>${item.excerpt} <a href="${item.link}" class="nu gray">Learn more</a></p>
						  </div>
						</div>
				 		`).join('')}


				 </div>

			 </div>
				`);
			this.isSpinnerVisible = false;
		});

		/*$.when(
			$.getJSON(universityData.root_url + '/wp-json/wp/v2/posts?search=' + this.searchField.val()),
			$.getJSON(universityData.root_url + '/wp-json/wp/v2/pages?search=' + this.searchField.val())
			).then( (posts,pages) => {
				// = function(posts){    } getjson函数传递第一个url参数的数据到第二个函数
			//用es6 箭头函数 可以使this 仍然指向主要的object也就是class
			//array.map() js 方法 跟forEach 方法类似，  原数组被映射成对应新数组，来获得对象数组中的调用函数处理后的特定属性值们。 array.map 可以设置匿名函数来实现。map()不会改变原始数组。 用的时候原数组会传递一个item参数到map方法
			//JS join( )方法 把数组中所有元素放入一个字符串， 元素通过指定的分隔符进行分隔。
			//用法 arrayObject.join(separator)  如下面testArray.map( )生成了arrayObejct，然后通过join（）方法来将array.map() 数组 放入字符串 然后通过空的连接符
			//In javascript every array has accessed map() method, the function will run once for each item .
			//testArray.map( item => `<li>${item}</li>` ) 这个意思就是 每个testArray的item都应用map() 里面function的内容。也就是每个item 都以<li>${item}</li> 这种形式， 有多少个item 就有多少个li， 然后 传递参数到这个function 函数里， 但是仍然会包含  数组里面的逗号。  所以要用 join( )方法 函数来重新定义分隔符
			//join() 把array 转换成 字符串。  
			//var testArray = ['red','yellow','pink'];
			//ternary oprator ${condition ? yay : nay}
			//posts.length 每个array都有一个属性叫做length, length 会告诉你会有多少item在array里。如果length是0 就是没有item . 所以是false 
			//如果posts.length为0说明查询的结果没有item也就是没有帖子
			//
			var combinedResults = posts[0].concat(pages[0]);  //IN javascript all arrays accessed a concat method to concat multiple arrays.  // 用when.then方法的时候返回的是json的数据 包括是否成功的状态所以要用到[0]

				this.resultsDiv.html(`
				<h2 class="search-overlay__section-title">General Information</h2>
				${combinedResults.length ? '<ul class="link-list min-list">' : '<p>There are no posts found.</p>'}
				 

					${combinedResults.map( item => `<li><a href="${item.link}	">${item.title.rendered}</a> ${item.type == 'post' ? ` by ${item.authorName}` : ''}</li>` ).join('')}

					${combinedResults.lengtyh ? '</ul>' : ''}
				`);
			this.isSpinnerVisible = false;
		},() => {
			this.resultsDiv.html('<p>Unexpected error,pls try again.</p>')
		}); */ 

	}
	keyDispatcher(e) {

		if (e.keyCode == 83 && !this.isOverlayOpen && !$("input,textarea").is(':focus')) {
			this.openOverlay();
		}

		if (e.keyCode  == 27 && this.isOverlayOpen) {
			this.closeOverlay();
		}
	}
	openOverlay() {
		this.searchOverlay.addClass("search-overlay--active");
		$("body").addClass("body-no-scroll");
		this.searchField.val('');
		setTimeout(() => this.searchField.focus(),301);
		this.isOverlayOpen = true;
		return false; //this will prevent the default behavior of a or link elements

	}
	closeOverlay() {
		this.searchOverlay.removeClass("search-overlay--active");
		$("body").removeClass("body-no-scroll");
		this.isOverlayOpen = false;
	}

	addSearchHtml() {
		$("body").append(` 
			<div class="search-overlay">
      <div class="search-overlay__top">
        <div class="container">
          <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
          <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">
          <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
        </div>
      </div>
      <div class="container">
      <div class="search-overlay__results"></div>
    </div>`);
	}
	

}

export default Search;
