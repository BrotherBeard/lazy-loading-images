/**!
 * lazy-load.js:    lazy loading imges
 * author: Otobelikethee  
 * email address: Otobelikethee@bebrother.com
 * 
 */
 
 (function(){
	traversal_imgs();
	 $(window).scroll(function(){
	traversal_imgs();
	 });
 })();
 
 function traversal_imgs(){
	 $("img").each(function(){
		 console.log("a");
		 if(($(this).offset().top + $(window).height()/3) < ($(window).height() + $(window).scrollTop())){
			 $(this).attr("src", $(this).data("src"));
			
		 }
	 });
 }