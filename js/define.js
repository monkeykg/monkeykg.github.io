/**
 * Created by monkeykg on 2017/10/17.
 */
define(function(){
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        (function(){
            window.scrollReveal = new scrollReveal({reset: true});

        })();

    };


});