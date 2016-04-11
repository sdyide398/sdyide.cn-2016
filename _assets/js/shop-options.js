/* 
				SHOP COLOR/SIZE/QTY SELECTOR EXAMPLE 
				If you use this script, keep it here, under jQuery.
				Or move it to your custom.js (after scripts.js)
			*/

			/**
				@COLOR SELECTOR
			**/
			jQuery('section.product-view-colors a').bind("click", function(e) {
				e.preventDefault();

				/** Reset the selected thumbnail **/
				jQuery('.product-view-colors a').removeClass('active');  
				jQuery(this).addClass('active');

				/** add the color (value) to the hidden input, inside the form **/
				jQuery("input#color").val(jQuery(this).attr('data-color').trim());


				/** CHANGE BIG IMAGE **/
				jQuery("#product-main-image").attr('src', jQuery(this).attr('data-src'));


				/**
					@CHANGE STOCK INFO 
				**/
				/* stock color */
				var data_stock = jQuery(this).attr('data-stock').trim();
				jQuery("#product-view-stock-info").removeClass('stock-yes stock-no');
				jQuery("#product-view-stock-info").addClass('stock-' + data_stock);

				/* stock icon */
				jQuery("#product-view-stock-info i").removeClass('fa-check fa-times');
				if(data_stock == 'yes') {
					jQuery("#product-view-stock-info i").addClass('fa-check');
				} else {
					jQuery("#product-view-stock-info i").addClass('fa-times');
				}

			});


			/**
				@SIZE SELECTOR 
			**/
			jQuery("#product-size-dd li a").bind("click", function(e) {
				e.preventDefault();

				var data_val = jQuery(this).attr('data-val').trim();

				/* change visual value and hidden input */
				jQuery("#product-selected-size>span").empty().append(data_val);
				jQuery("#size").val(data_val);

				/* change visual selected */
				jQuery("#product-size-dd li").removeClass('active');
				jQuery(this).parent().addClass('active');
			});


			/**
				@QTY SELECTOR 
			**/
			jQuery("#product-qty-dd li a").bind("click", function(e) {
				e.preventDefault();
				
				var data_val = jQuery(this).attr('data-val').trim();

				/* change visual value and hidden input */
				jQuery("#product-selected-qty>span").empty().append(data_val);
				jQuery("#qty").val(data_val);

				/* change visual selected */
				jQuery("#product-qty-dd li").removeClass('active');
				jQuery(this).parent().addClass('active');
			});
			