
/**
 * ±Û·Î¹ú º¯¼ö
 */

var str="";// ÄÚµù³»¿ëÀ» ´ã´Â ¹®ÀÚ¿­
var total = -1;
var isView = -1;
var pop_img; // ÆË¾÷¿¡ Ç¥½ÃµÇ´Â ÀÌ¹ÌÁö ÀúÀå
var pop_link; // ÆË¾÷¿¡ Ç¥½ÃµÇ´Â ÀÌ¹ÌÁö ¸µÅ© ÀúÀå
var isBtnNum = 0;
var input_state = false;
var ptemp = -1;
var isWeb = "desktop"; //desktop or mobile
var coding_souce_message = "no";  //¼Ò½ºº¸±â Å¬¸¯ À¯¹«





function ui_update() {
	coding_souce_message = "no";
	console.log('ï¿½ë¾½ï¿½ëœ²ï¿½ì” ï¿½ë“ƒ')
	/*console.log('pop_img : ' , pop_img)
	console.log('pop_link : ' , pop_link)*/

	str = "";

//»èÁ¦ 
	$("#p_wrapper_slide").empty();
	$("#p_wrapper_slide").append(`<div class="slider_wrap">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					
					

				</div>
			</div>			

			<!-- Add Arrows -->
			<div class="swiper-button-next swiper-button-black"></div>
			<div class="swiper-button-prev swiper-button-black"></div>

			<div class="swiper-pagination"></div>
		</div>
			<script>
				setTimeout(function(){
					var swiper01 = new Swiper('#p_wrapper_slide .slider_wrap .swiper-container', {				
						autoplay : false,
						nextButton: '#p_wrapper_slide  .swiper-button-next',
						prevButton: '#p_wrapper_slide  .swiper-button-prev',
						pagination: '#p_wrapper_slide .swiper-pagination',
						paginationClickable: true,
						loop: true,
						autoHeight: true,
						spaceBetween: 0
					});
				},10)
			</script>`)

	//¹İº¹ »ı¼º
	$('#sortable li').each(function (index) {
		var $this = $(this);
		var linkA = $this.find('img').attr('link')
		var imgA = $this.find('img').attr('src')
		//console.log(index + " : lnkurl "  +$this.find('img').attr('link'))
		//console.log(index + " : imgurl "  +$this.find('img').attr('src'))

		$(".swiper-wrapper").append('' +
			'<div class="swiper-slide">' +
			'<a href="' + linkA + '" target="_blank"><img src="' + imgA + '" alt=""></a>' +
			'</div>');

			


	});

	//ÇÏ´Ü ¾ÆÀÌÄÜ x ¹öÆ° Á¦¾î
	var $this;
	$(".thum_img").on("mouseenter", function () {
		$this = $(this);
		$this.parent().parent().find(".closeBtn").css("display", "block")

	});
	$(".thum_img").on("mouseleave", function () {
		$this = $(this);
		$this.parent().parent().find(".closeBtn").css("display", "none")
	});
	$(".closeBtn").on("mouseenter", function () {
		$this.parent().parent().find(".closeBtn").css("display", "block")

	});
	$(".closeBtn").on("mouseleave", function () {
		$this.parent().parent().find(".closeBtn").css("display", "none")
	});


	

};



/*»óÅÂ ¼³Á¤°ª ¸ğµÎ ÃÊ±âÈ­*/
function allClear() {
	total = -1;
	isView = -1;
	pop_img; // ÆË¾÷¿¡ Ç¥½ÃµÇ´Â ÀÌ¹ÌÁö ÀúÀå
	pop_link; // ÆË¾÷¿¡ Ç¥½ÃµÇ´Â ÀÌ¹ÌÁö ¸µÅ© ÀúÀå
	isBtnNum = 0;
	input_state = false;
	ptemp = -1;

	$('#sortable').empty();
	$("#p_wrapper_slide").empty();
	$('#resultArea textarea').val(""); //¼Ò½ºº¸±âÃ¢ ÃÊ±âÈ­
	popup_clear();
	coding_souce_message = "no";
}

$(document).ready(function () {

	$("#sortable").sortable({
		revert: false,
		placeholder: "ui-state-highlight",
		update: function (evt) {
			//start , change
			ui_update();
		}
	});

	$("#draggable").click(function () {
		//console.log('ï¿½ê¸½ï¿½ë?¹ç•°ë¶½ï¿½ï¿½è¸°ê¾ªë“‰ ï¿½ê²¢?”±ï¿?')
		menuMake()
	});



	//ï¿½ë™˜ï¿½ë¾½?„¿ï¿½ï¿½? ´
	$("#popup .imgUrl").on("change", function (e) {
		//popup_clear()

		var $this = $(this);
		var imgUrl = $this.val();

		//alert($this.val())


		if (input_state == true) {
			$("#holder").empty()
		};

		if (imgUrl.indexOf(".jpg") != -1 || imgUrl.indexOf(".JPG") != -1 || imgUrl.indexOf(".PNG") != -1 || imgUrl.indexOf(".png") != -1) {


			//alert("ï¿½ì” èª˜ëª„ï¿½ï¿½ å¯ƒìˆì¤ˆåª›ï¿? ï¿½ì ™ï¿½ê¸½ï¿½ì‘æ¿¡ï¿½ è¹‚ëŒ?—«")
			$("#popup").animate({}, 5,
				function () {

					$this.parents("#popup").find("#holder").append('' +
						'<img class="popup_in_img" src="' + imgUrl + '"/>')
					pop_img = imgUrl;


					$('.popup_in_img').error(function () {
						//æ¿¡ì’•ë±¶ï¿½ë§? ï¿½ë™˜ï¿½ë¾½ï¿½ì” èª˜ëª„ï¿½ï¿½åª›ï¿½ 404 error ï¿½ì” ï§ï¿½ ï¿½ë–ï¿½ë»¾
						//alert("ï¿½ì” èª˜ëª„ï¿½ï¿½ å¯ƒìˆì¤ˆåª›ï¿? ï¿½ì—¯ï¿½ì °ï¿½ë¦ºï¿½ë??ï¿½ì‘ï¿½êµ¹, ï¿½ì˜’ï§ì‚³ë¦ºï¿½ë¿?ï¿½ë’¿ï¿½ë•²ï¿½ë–.");
						$('.popup_in_img').css("display", "none");

						$this.parents("#popup").find("#holder").append('' +
							'<div class="not_img_message" style="display:block;">ï¿½ë¹ï¿½ë–¦ ï§ê³¹ê²•ï¿½?“½ ï¿½ì ™è¹‚ë??ï¿½ï¿½ ?º?ˆ?œ­ï¿½ì‚±ï¿½ë‹” ï¿½ë¾¾ï¿½ë’¿ï¿½ë•²ï¿½ë–<br>ï§ê³¹ê²•ç‘œï¿? ï¿½ë–ï¿½ë–† ï¿½ì†—ï¿½ì”¤ ï¿½ë¹ äºŒì‡±ê½?ï¿½ìŠ‚</div>');

						$(".imgUrl").val("");
						popup_resize(1); //ï¿½ë™˜ï¿½ë¾½ï§¡ï¿½ ?”±?Šê¶—ï¿½ì” ï§ï¿½ ï¿½ï¿½ï¿½ï¿½?—¯1è¸°ï¿½
						//}).attr( "src", imgUrl);
					}).load(function () {

						console.log('------------------------------------');
						console.log('ï¿½ì ™ï¿½ê¸½ï¿½ìŸ»ï¿½ì”¤ ï¿½ì” èª˜ëª„ï¿½ï¿½ æ¿¡ì’•ë±?');
						console.log('------------------------------------');
						$('.popup_in_img').css("display", "block");
						popup_resize(2); //ï¿½ë™˜ï¿½ë¾½ï§¡ï¿½ ?”±?Šê¶—ï¿½ì” ï§ï¿½ ï¿½ï¿½ï¿½ï¿½?—¯2è¸°ï¿½
					});

					input_state = true;

				})

		} else {
			popup_clear();
			alert("ï¿½ì ™ï¿½ê¸½ï¿½ìŸ»ï¿½ì”¤ ï¿½ì” èª˜ëª„ï¿½ï¿½ å¯ƒìˆì¤ˆåª›ï¿? ï¿½ë¸˜ï¿½ë–ƒï¿½ë•²ï¿½ë–.")
		}
	});

	$("#popup .linkUrl").on("change", function (e) {
		var $this = $(this);
		var linkUrl = $this.val();
		pop_link = linkUrl;
		//console.log(pop_link)
	});



	$(".new_btn .addBtn").on("click", function (e) {
		e.preventDefault()
		//var $this = $(this);
		//total = $this.parents("#sortable").find("li").length;
		//isView = $this.parent().index();
		//console.log("total  : " , total)
		popup_open()
	});


	


	top_event()

	//menuMake();//ï¿½ì” è¸°ã…½?“ƒ ï¿½ë–†ï¿½ì˜‰
});

function menuMake() {
	var data_index = 1;
	$("#sortable .btn>a").off(); //ï¿½ì” è¸°ã…¼ï¼? ä»¥ë¬’êº½è«›?‘¹ï¿½ï¿½?‘œï¿? ï¿½ìï¿½ë¸³ ?¥?‡ë¦°ï¿½?†•
	$('#sortable').append('' +
		'<li class="ui-state-default btn" data-src=' + data_index + '>' +
		'<a class="closeBtn" href="#" onclick="menuRemove(this);"><img src="images/close_btn.png" /></a>' +
		'<a href="javascript:;"><img src="images/plus_btn.jpg" />' +
		'</a></li>');
	//ï¿½ë¸¯ï¿½ë–’ ï¿½ê¹®ï¿½ê½¦ è¸°ê¾ª?“‰?„¿ï¿½ï¿½? ´
	$(".new_btn .btn>a").on("click", function (e) {
		e.preventDefault()
		var $this = $(this);
		total = $this.parents("#sortable").find("li").length;
		isView = $this.parent().index();
		//console.log("ï¿½ê²¢?”±ï¿?  : " , isView)
		popup_open()
	});
};

function menuRemove(e) {
	var mc = $(e)
	mc.parent().remove();
	//console.log(e)
	ui_update();
}

//ï¿½ë™˜ï¿½ë¾½ : è¹‚ëŒ?” æ¹²ï¿½ 
function popup_open() {
	popup_resize(0) //ï¿½ë™˜ï¿½ë¾½ï§¡ï¿½ ?”±?Šê¶—ï¿½ì” ï§ï¿½ ï¿½ï¿½ï¿½ï¿½?—¯0è¸°ï¿½

	// pop_img = "";
	// pop_link="";
	//  $( "#popup" ).animate({
	// 	 top:"30%",
	// 	 marginTop:"-155"

	// },200,function(){})
};

//ï¿½ë™˜ï¿½ë¾½ : åª›ë¨¯?…›æ¹²ï¿½
function popup_close() {
	$("#popup").animate({
		top: "-500"

	}, 300, function () {})
	popup_clear()
}
//ï¿½ë™˜ï¿½ë¾½ : ?†«?‚…ìªŸè¹‚ï¿? ï¿½ì˜„ï¿½ë£ ?”±?Šê¶—ï¿½ì” ï§ï¿½
function popup_resize(n) {
	var pos_margin_y = ['-160px', '-247px', '-342px'];
	var heightY = ['215px', '295px', '480px'];
	var spd = [300, 100, 100]

	$("#popup").animate({
		'top': '50%',
		'marginTop': pos_margin_y[n],
		'height': heightY[n]

	}, spd[n], function () {})

}

//ï¿½ë™˜ï¿½ë¾½ : ï¿½ê¶¡ï¿½ìŠœ ï¿½ê²¢?”±?Šë¼±
function popup_clear() {
	$(".imgUrl").val(""); //ï¿½ì—¯ï¿½ì °ï§¡ï¿½ ï¿½ì” èª˜ëª„ï¿½ï¿½ å¯ƒìˆì¤?
	$(".linkUrl").val(""); //ï¿½ì—¯ï¿½ì °ï§¡ï¿½ ï§ê³¹ê²? å¯ƒìˆì¤?
	$(".popup_in_img").remove();
	imgUrl = ""; //ï¿½ì—¯ï¿½ì °ï§¡ï¿½ ï¿½ì” èª˜ëª„ï¿½ï¿½ ï¿½ì??ï¿½ìŠšï¿½ë–† ï¿½ï¿½ï¿½ï¿½?˜£ï¿½ë¦ºï¿½ë’— è¹‚ï¿½ï¿½ë‹” 
	$("#popup").css({
		height: "260px"
	});
	input_state = false;
	$('.not_img_message').css("display", "none");
}


//ï¿½ë™˜ï¿½ë¾½ - ï¿½ì†—ï¿½ì”¤ ï¿½ê²¢?”±ï¿? - ï¿½ë¸¯ï¿½ë–’ï¿½ëœ½ï¿½ê½•ï¿½ì”ª ï¿½ê¹®ï¿½ê½¦( ui-update )
function popup_info_check() {
	if (input_state == false) {
		alert("ï¿½ì” èª˜ëª„ï¿½ï¿½ å¯ƒìˆì¤ˆç‘œï¿? ï¿½ì—¯ï¿½ì °ï¿½ë¹äºŒì‡±ê½?ï¿½ìŠ‚")
		return;
	}
	var img_str = $(".imgUrl").val()
	var link_str = $(".lineUrl").val()
	if (img_str == null || img_str == undefined || img_str == "") {
		//alert("ï¿½ì” èª˜ëª„ï¿½ï¿½ å¯ƒìˆì¤ˆç‘œï¿? ï¿½ì—¯ï¿½ì °ï¿½ë¹äºŒì‡±ê½?ï¿½ìŠ‚")
	} else {
		menuMake();
		popup_close();
		//ï§ë‰ï¿½ï¿½ï§ï¿½ ï¿½ëª¢è¸°ë‰? ï¿½ìŠ‚ï¿½ëƒ¼ï¿½ë¿‰ ï¿½ì” èª˜ëª„ï¿½ï¿½ ï¿½ê¶«ï¿½ì—¯
		$(".btn:nth-last-child(1)").prepend('' +
			'<a href="javascript:;" ><img class="thum_img" link="' + pop_link + '" src="' + pop_img + '"/></a>');

		ui_update();
	}
}

/**
	ï¿½ì’ & ï§â‘¤ì»?ï¿½ì”ª è¸°ê¾ª?“‰ 
**/
function top_event() {
	var isView = 0;


	$(".icon li>a").each(function(index){
		var $this = $(this)
		$this.click(function(){
			isView = index;
			if(isView == 0){
				isWeb = "desktop"
			}else{
				isWeb = "mobile"
			}
			selectMenu(isView)
			//allClear()
		});
	});

	selectMenu = function (n) {
		$(".icon li").removeClass("select");
		$(".icon li").eq(n).addClass("select");

		if(isWeb == "desktop"){
			browse_window(980)
		}else{
			browse_window(375)
		};
	};

	$(".downBtn").on('click', function () {
		if (coding_souce_message == "yes") {
			download('noName.html' , str)
		}else{
			alert("ï¿½ëƒ¼ï¿½ë’ªè¹‚ë‹¿ë¦? è¸°ê¾ª?“‰ï¿½ì“£ ï¿½ê²¢?”±ï¿½ï¿½ë¸?ï¿½ë¿¬ ?‚„ë¶¾ë±¶?‘œï¿? ï¿½ê¹®ï¿½ê½¦ or åª›ê¹†?–Š ï¿½ë¹äºŒì‡±ê½?ï¿½ìŠ‚!")
		}
	});

	$('.viewBtn').on("click", function (e) {
		e.preventDefault()
		copyHtml()
	});

};

//è¹‚ëŒë¿¬ï§ï¿½ï¿½?’— ï§¡ï¿½ ï¿½ê½•ï¿½ì ™
function browse_window(getWidth){
	$("#mobileViewArea").stop(true,true).animate({
		width: getWidth
	}, 200, function () {
		ui_update();
	});
}





function copyHtml() {	
	/**
	 * isWeb ï¿½ì’  || ï§â‘¤ì»?ï¿½ì”ª ï§£ëŒ„ê²•ï¿½ë¹ï¿½ê½? ï¿½ë¹ï¿½ë–¦ï¿½ëƒ¼ï¿½ë’ª ?º?ˆˆ?” æ¹²ï¿½
	 */
	var option="";
	str="";

	if(isWeb == "desktop"){

		str = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
				<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html">
				<head>
					<title>web swiper</title>
					<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<link rel="stylesheet" href="http://eventimg.auction.co.kr/md/auction/08405BF42E/idangerous.swiper.css">
					<style type="text/css">
						*{margin:0;padding:0}
						img{border:0;vertical-align:top}
						li{list-style:none}

						
						#p_wrapper_slide{width:980px; height:460px; margin:0 auto;position:relative;display: blcok; }		
						#p_wrapper_slide .swiper-wrapper{position:relative}
						#p_wrapper_slide .swiper-slide{position:relative; text-align: center; width:100%;}
						#p_wrapper_slide .swiper-slide img{width:100% !important;}
						#p_wrapper_slide .swiper-pagination{width:100%;left:0}
						#p_wrapper_slide .swiper-pagination .swiper-pagination-switch{width:12px;height:12px;display:inline-block;*display:inline;*zoom:1;padding:0 8px;background:url(images/w_ico_blit_off.png) no-repeat 0 0;border-radius:0}
						#p_wrapper_slide .swiper-pagination .swiper-active-switch{background:url(images/w_ico_blit_on.png) no-repeat 0 0}
						#p_wrapper_slide .swiper-button-prev{width:68px;height:68px;position:absolute;top:50%;margin-top:-34px;left:0;background:url(images/w_btn_prev.png) no-repeat 0 0;z-index:100;cursor:pointer}
						#p_wrapper_slide .swiper-button-next{width:68px;height:68px;position:absolute;top:50%;margin-top:-34px;right:0;background:url(images/w_btn_next.png) no-repeat 0 0;z-index:100;cursor:pointer}


					</style>
					<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>
					<script src="http://eventimg.auction.co.kr/md/auction/08405BF42E/idangerous.swiper.js"></script>
				</head>
				<body>`;
	
		option = `<script>
							var mySwiper = new Swiper('#p_wrapper_slide .swiper-container', {			
								pagination:'#p_wrapper_slide .swiper-pagination',
								paginationClickable:true,
								simulateTouch:true,
								loop:true,
								autoplay:3000,
								calculateHeight:true,
								slidesPerView:1
							});
							$('#p_wrapper_slide .swiper-button-prev').bind('click', function(e){
								e.preventDefault();
								mySwiper.stopAutoplay();
								mySwiper.swipePrev();
								mySwiper.startAutoplay();
							});
							$('#p_wrapper_slide .swiper-button-next').bind('click', function(e){
								e.preventDefault();
								mySwiper.stopAutoplay();
								mySwiper.swipeNext();
								mySwiper.startAutoplay();
							});
					</script>`;

	}else{
		
		str = `<!DOCTYPE html>
					<html lang="ko">
					<head>
						<meta charset="euc-kr">
						<title>mobile swiper</title>
						<meta id="viewport" name="viewport" content="width=device-width,initial-scale=1, user-scalable=no" />
						<meta http-equiv="cleartype" content="on"/>
						<link rel="stylesheet" href="http://eventimg.auction.co.kr/md/auction/0868D4BD4A/swiper.min.css">	
						<style type="text/css">
							*{margin:0;padding:0}
							img{border:0;vertical-align:top}
							li{list-style:none}
							
								#p_wrapper_slide{margin:0 auto;position:relative}
								#p_wrapper_slide img{width:100%}
								#p_wrapper_slide .slider_wrap{position:relative;overflow:hidden;background:#fff;}
								#p_wrapper_slide .swiper-container {overflow:hidden;position:relative}
								#p_wrapper_slide .swiper-wrapper {width:100%;height:100%}
								#p_wrapper_slide .swiper-slide {overflow:hidden;position:relative}		
								#p_wrapper_slide .swiper-pagination{width:100%;text-align:center;position:absolute;left:0;bottom:3%;}
								#p_wrapper_slide .swiper-pagination-bullet{width:6px;height:6px;margin:0 5px;background:#000;border:2px #000 solid;border-radius:100%;opacity:1}
								#p_wrapper_slide .swiper-pagination-bullet-active{border:2px #000 solid;opacity:1;background:transparent}
								#p_wrapper_slide .swiper-button-prev{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;left:0}
								#p_wrapper_slide .swiper-button-next{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;right:0}



						</style>
						<script type="text/javascript" src="http://eventimg.auction.co.kr/md/auction/086A428A1C/jquery-1.11.3.min.js"></script>
						<script src="http://eventimg.auction.co.kr/md/auction/0868D4BD4A/swiper.min.js"></script>
					</head>
					<body>`;

		option = `<script>
								var swiper01 = new Swiper('#p_wrapper_slide .slider_wrap .swiper-container', {				
									autoplay : 4500,
									nextButton: '#p_wrapper_slide .slider_wrap .swiper-button-next',
									prevButton: '#p_wrapper_slide .slider_wrap .swiper-button-prev',
									pagination: '#p_wrapper_slide .swiper-pagination',
									paginationClickable: true,
									loop: true,
									autoHeight: true,
									spaceBetween: 0
								});
						</script>`;


	}


	

	str = str + '<div id="p_wrapper_slide">' + changeTarget($("#p_wrapper_slide").html().split('<script>')[0]) + option + '</div></body>';


	

	//window.prompt("Copy to clipboard: Ctrl+C, Enter", str);
	//console.log(str)
	console.log($("#p_wrapper_slide").html().split('<script>')[0]) // target="_blank"

	//console.log($("#p_wrapper_slide").html().split('<script>')[0])


	$('#resultArea textarea').val(str)

	$("#resultArea").animate({
		right: "0"
	}, 200, function () {

	});

	coding_souce_message = "yes";

};
function changeTarget(str){
	var _str = str;

	if(isWeb == "desktop"){
		return _str.replace(/target="_blank"/g,'target="_blank"');//ï¿½ëœ²ï¿½ë’ªï¿½ë“ƒï¿½ê¹™
	}else{
		return _str.replace(/target="_blank"/g,'target="_self"');//ï§â‘¤ì»?ï¿½ì”ª
	}
}

//ï¿½ë™†ï¿½ì”ª ï¿½ë–ï¿½ìŠ« æ¿¡ì’•ë±? ?„¿ï¿½ï¿½? ´
function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=euc-kr,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}