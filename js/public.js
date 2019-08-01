var b = ""
		$('.nav-dropdown li a').mouseenter(function () {
			$(this).css({
				color: "rgb(160, 226, 60)",
			}).mouseleave(function () {
				$(this).css({
					color: b
				})
			})
		})

		

		$(".list_dt").click(function () {
			$('.list_dd').stop();
			$(this).siblings("dt").removeAttr("id");
			if ($(this).attr("id") == "open") {
				$(this).removeAttr("id").siblings("dd").slideUp();
				/* $('.icon-zelvxuanzefeiyongdaosanjiaoxingfandui').css('transform', 'rotate(0deg)') */
			} else {
				$(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
				/*  $('.icon-zelvxuanzefeiyongdaosanjiaoxingfandui').css('transform', 'rotate(180deg)') */
			}
		});
	
	
	
	
		var a = ""
	
		$('.newsletter-input').click(function () {
			$('.newsletter-input').css({
				borderColor:"#4fc08d"
			}).blur(function(){
				$('.newsletter-input').css({
					borderColor:a
				})
			})
		  })


<<<<<<< HEAD
		  
=======
		  $('.hide').click(function(){
			('.left').css({
			display:"block",
			})
		  })
>>>>>>> vue-2
