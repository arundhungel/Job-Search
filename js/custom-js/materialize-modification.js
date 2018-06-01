            $(document).ready(function(){
                $('.dropdown-button').dropdown({
                    hover: true,
                    constrainWidth: false,
                    stopPropagation:true,
                    belowOrigin: true
                });
                $(".button-collapse").sideNav();

                // Slider Starts

                $('.slider').slider();
                $('i.prev').click(function() {
                    $('.slider').slider('prev');
                });

                $('i.next').click(function() {
                    $('.slider').slider('next');
                });

                // Slider Ends

                $('ul.tabs').tabs({
                    swipeable: true
                });

                $('select').material_select();


            });
            
