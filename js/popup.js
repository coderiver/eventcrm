$(document).ready(function() {
	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});

	$('.phone').inputmask("(999) 999-99-99",{placeholder:"x"});

	$('.code__right .edited').keyup(function(event) {
		var value = $(this).val();    	
    	$('.insert__bl').find('.btn-change').text(value);
	});
});