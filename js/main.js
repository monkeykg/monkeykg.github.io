/**
 * Created by monkeykg on 2017/10/17.
 */
require.config({
    paths:{
        "jquery":["https://cdn.bootcss.com/jquery/2.1.0/jquery"],
        "a":"a",
        "scrollReveal":"scrollReveal"
    }

});
require(['jquery', "scrollReveal",'a'],function($){
    $(function(){
        alert('load finished');

    })
})