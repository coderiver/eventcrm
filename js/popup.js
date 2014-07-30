$(document).ready(function() {
	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});

//textarea autosize
	$(document).on('input.textarea', '.autoExpand', function(){
		var minRows = this.getAttribute('data-min-rows')|0,
		rows = this.value.split("\n").length;
		this.rows = rows < minRows ? minRows : rows;
});

//form input mask for phone
	$('.radio-key.blue').find('input').change(function(event) {
		if($(this).val() === 'rus') {
			$('.phone').inputmask("+7 (999) 999-99-99",{placeholder:"x"});
			$('.phone').attr('placeholder', '+7 (xxx) xxx-xx-xx');
		}
		if ($(this).val() === 'ukr') {
			$('.phone').inputmask("+38 (999) 999-99-99",{placeholder:"x"});
			$('.phone').attr('placeholder', '+38 (xxx) xxx-xx-xx');
		}
	});

//form type change
	$('.choice__bl').click(function(event) {
		$('.forform > .form1').hide();
		$('.forform > .'+ $(this).data('form')).show();
		$('.choice__bl').removeClass('is-active')
		$(this).addClass('is-active');
		$('.code__left').find('button').hide();
		$('.code__left > .'+ $(this).data('form')).show();
	});

	$('.code__left').find('.btn').hide();
	$('.code__left').find('.is-active').show();

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
	$('.insert__bl').find('.btn-reg').text(value);
	});

//show tickets
	$('.payment__left').find('input').on('change', function(event) {
		if($(this).val() === '2') {
			$('.insert').slideDown();
			$('.ticket').slideDown();
		}
		if ($(this).val() === '1') {
			$('.insert').slideUp();
			$('.ticket').slideUp();
		}
	});

});
