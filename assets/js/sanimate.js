//Animasi Klik Navbar
$('.pscroll').on('click',function(e){

	// console.log('yoi');
	//ambil isi href
	var href = $(this).attr('href');
	//tangkep elemen
	var elemen7an = $(href);
	//pindah scroll
	// console.log(elemen7an.offset().top);
	// console.log($('html,body').scrollTop());
	$('body, html').animate({
		scrollTop: elemen7an.offset().top -60
	}, 700);

	e.preventDefault();

});


$(window).scroll(function(){

	var wScroll = $(this).scrollTop();
	//Animasi Jumbotron	

	//Animasi Portofolio	
	if(wScroll > $('.portofolio').offset().top - 250){ //jika discroll mencapai jarak tertentu dari atas

		$('.portofolio .img-thumbnail').each(function(i){      //each menampilkan per elemen satu persatu
			setTimeout(function(){							  // timeout untuk memberikan jeda waktu pada tiap elemen
				$('.portofolio .img-thumbnail').eq(i).addClass('timbul'); //ngeadd class pada tiap elemen berdasarkan waktu yang ditentukan eq(i)
			}, 200 * (i));
		});
		//$('.portofolio .img-thumbnail').addClass('timbul');
	}

});

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 72) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 700);
			return false;
		});
});