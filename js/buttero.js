$(function(){

	orgImgPath = $("#detailphotobloc .photo img").attr("src");
console.log(orgImgPath);

	$('#thumbnails .pic a').click(function(event){
		event.preventDefault();

		imgPath = $(this).attr("href");
		$("#detailphotobloc .photo img").attr("src", imgPath);
console.log(orgImgPath);

		return false;
	})
});