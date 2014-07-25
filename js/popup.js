$(document).ready(function() {
	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});

	$('.phone').inputmask("(999) 999-99-99",{placeholder:"x"});

	$('.code__right .edited').keyup(function(event) {
		var value = $(this).val();
    	$('.insert__bl').find('.btn-change').text(value);
	});


//form checkbox show/hide
	$('.checkbox_title').on('change', function(event) {
		if(this.checked) {
			$('.form1__title').show();
		}
		else {
			$('.form1__title').hide();
		}
	});

	$('.checkbox_date').on('change', function(event) {
		if(this.checked) {
			$('.form1__when').show();
		}
		else {
			$('.form1__when').hide();
		}
	});

	$('.checkbox_surname').on('change', function(event) {
		if(this.checked) {
			$('.surname').show();
		}
		else {
			$('.surname').hide();
		}
	});

	$('.checkbox_call').on('change', function(event) {
		if(this.checked) {
			$('.call').show();
		}
		else {
			$('.call').hide();
		}
	});

	$('.checkbox_shadow').on('change', function(event) {
		if(this.checked) {
			$('.form1').css('box-shadow', '0 0 16px 2px rgba(0,0,0,.47)');
		}
		else {
			$('.form1').css('box-shadow', 'none');
		}
	});

});
