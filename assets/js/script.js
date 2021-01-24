jQuery(document).ready(function($) { 'use strict'; $('.imageGallery1 a').simpleLightbox(); var owl = $("#owl-portfolio"); owl.owlCarousel({ pagination : true, paginationNumbers: false, autoPlay: 6000, items : 4, itemsDesktop : [1000,4], itemsDesktopSmall : [900,3], itemsTablet: [600,2], itemsMobile : false }); $('.tabgroup > div').hide(); $('.tabgroup > div:first-of-type').show(); $('.tabs a').click(function(e){ e.preventDefault(); var $this = $(this), tabgroup = '#'+$this.parents('.tabs').data('tabgroup'), others = $this.closest('li').siblings().children('a'), target = $this.attr('href'); others.removeClass('active'); $this.addClass('active'); $(tabgroup).children('div').hide(); $(target).show(); }) var lastId, topMenu = $(".menu-first"), topMenuHeight = 80, menuItems = topMenu.find("a"), scrollItems = menuItems.map(function(){ if($(this).hasClass('external')) { return; } var item = $($(this).attr("href")); if (item.length) { return item; } }); menuItems.click(function(e){ var href = $(this).attr("href"), offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1; $('html, body').stop().animate({ scrollTop: offsetTop }, 750); e.preventDefault(); }); $(window).scroll(function(){ var fromTop = $(this).scrollTop()+topMenuHeight; var cur = scrollItems.map(function(){ if ($(this).offset().top < fromTop) return this; }); cur = cur[cur.length-1]; var id = cur && cur.length ? cur[0].id : ""; if (lastId !== id) { lastId = id; menuItems .parent().removeClass("active") .end().filter("[href=#"+id+"]").parent().addClass("active"); } }); $(window).scroll(function(){ $('.main-header').toggleClass('scrolled', $(this).scrollTop() > 1); }); $('a[href="#top"]').click(function(){ $('html, body').animate({scrollTop: 0}, 'slow'); return false; }); $('.toggle-menu').click(function(){ $('.menu-first').toggleClass('show');  $('.menu-first').slideToggle(); }); $('.menu-first li a').click(function(){ $('.menu-first').removeClass('show'); }); $('a[href*=#]').on('click', function(e) { e.preventDefault(); $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -79 }, 500, 'linear'); }); });