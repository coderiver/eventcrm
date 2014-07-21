$(document).ready(function() {
	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});

	$('.phone').inputmask("(999) 999-99-99",{placeholder:"x"});
});