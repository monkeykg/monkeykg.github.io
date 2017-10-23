/**
 * Created by monkeykg on 2017/10/17.
 */
require.config({
    paths:{
        "jquery":["https://cdn.bootcss.com/jquery/2.1.0/jquery"],
        "define":"define",
        "scrollReveal":"scrollReveal"
    }

});
require(['jquery', "scrollReveal",'define'],function($){
    $(function(){
        //alert('load finished');

    })
})