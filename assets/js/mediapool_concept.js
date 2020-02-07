$(document).ready(function(){
	
	$('.button-widget-show').click(function(){
		$('.rex-widget').addClass('is-visible');
	});
	$('.button-media-upload').click(function(){
		$('.widget-upload').toggleClass('is-visible');
	});
	$('.widget-close').click(function(){
		$('.rex-widget').removeClass('is-visible');
	});
	$('.widget-media').click(function(){
		$('.widget-aside').toggleClass('is-visible');
	});
	$('#filter-tag').keyup(function(){
		
		var searchTag = $(this).val().toLowerCase();
		
		$('.widget-media').each(function(){
			if( $(this).data('tag').toLowerCase().indexOf(searchTag) !== -1 ){
				$(this).removeClass('is-hidden');
			}
			else{
				$(this).addClass('is-hidden');
			}
		});
	});
	
	$('.button-upload-select').click(function(){
		$('#fileInput').click();
	});
	$("#fileInput").change(function(){
		if($(this).val() != null ){
			
			$('.widget-medias').prepend('<div class="widget-media is-uploading" data-tag="Kategorie 4"></div>');
			
			$('.widget-media').click(function(){
				$('.widget-aside').toggleClass('is-visible');
			});
			
			$('.dialog-close').click();
			
			setTimeout(function(){
				$('.widget-media.is-uploading').removeClass('is-uploading');
			}, 300);
		}
	});
	
	$('.button-media-add').click(function(){
		$('.rex-dialog').addClass('is-visible');
	});
	$('.dialog-close').click(function(){
		$('.rex-dialog').removeClass('is-visible');
	});
});