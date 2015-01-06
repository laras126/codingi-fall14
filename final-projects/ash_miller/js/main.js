//FAQ
$(document).ready(function() {
            $('#faq-list dt').click(function() {
                
                $(this).next('.answer').slideToggle(500);
                $(this).toggleClass('close');
                
            });
        }); 

$(document).ready(function() {
            $('#sub-list h2').click(function() {
                
                $(this).next('.answer').slideToggle(500);
                $(this).toggleClass('close');
                
            });
        }); 




//Dropdown
$(document).ready(function () {
        $('#nav li').hover(
        function () {
            //show submenu
            $('ul', this).show();
        }, function () {
            //hide submenu
            $('ul', this).hide();
        });
    });

