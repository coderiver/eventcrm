$(document).ready(function() {
	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});

//form input mask for phone
	$('.phone').inputmask("(999) 999-99-99",{placeholder:"x"});

//form type change
	$('.choice__bl').click(function(event) {
		$('.forform > .form1').hide();
		$('.forform > .'+ $(this).data('form')).show();
	});

//form checkbox show/hide
	$('.checkbox_title').on('change', function(event) {
		if(this.checked) {
			$('.form1__title').show();
			$('.form3__title').show();
		}
		else {
			$('.form1__title').hide();
			$('.form3__title').hide();
		}
	});

	$('.checkbox_date').on('change', function(event) {
		if(this.checked) {
			$('.form1__when').show();
			$('.form2__when').show();
			$('.form3__when').show();
		}
		else {
			$('.form1__when').hide();
			$('.form2__when').hide();
			$('.form3__when').hide();
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

	//form button text change
	$('.fwrap__bl').find('.edited.forbtn').keyup(function(event) {
		var value = $(this).val();
		$('.form1').find('.btn-reg').text(value);
		$('.form1').find('.btn-change').text(value);
	});

	//form title change
	$('.fwrap__bl').find('.edited.ttl').keyup(function(event) {
		var value = $(this).val();
		$('.form1').find('.form1__title').text(value);
		$('.form1').find('.form3__title').text(value);
	});

	//ted change
	$('.payment__left').find('.edited.pay').keyup(function(event) {
		var value = $(this).val();
	$('.bottom__pay').find('button').text(value);
	});

	$('.payment__left').find('.eres').keyup(function(event) {
		var value = $(this).val();
		$('.payment__right').find('.form__title').text(value);
	});

	$('.payment__left').find('.message').keyup(function(event) {
		var value = $(this).val();
		$('.payment__right').find('.center__text').text(value);
	});

//button text change
	$('.insert__bl.another').find('.edited').keyup(function(event) {
		var value = $(this).val();
	$('.insert__bl').find('.btn-change').text(value);
	});

//show tickets
	$('.checkbox_tickets').on('click', function(event) {
		if(this.checked) {
			$('.insert').slideDown();
			$('.ticket').slideDown();
		}
		else {
			//$('.insert').slideUp();
			//$('.ticket').slideUp();
			alert('wut');
		}
	});


});
