$(function(){
    //mode setting
    if(window.location.href.indexOf("big") > -1){
        $('body').addClass('big');
    }
    if(window.location.href.indexOf("list") > -1){
        $('body').addClass('list');
    }
    if(window.location.href.indexOf("horizontal") > -1){
        $('body').addClass('horizontal');
    }
    if(window.location.href.indexOf("dark") > -1){
        $('body').addClass('dark');
    }

    //parameter
});
//quick button action
function modeAction(mode){
    let currentUrl = window.location.href;
    let separator = currentUrl.includes('?') ? '&' : '?';

    if(mode === "big"){
        window.location.href= currentUrl + separator + "big";
    }
    if(mode === "list" || mode === "horizontal"){

    }
    if(mode === "list"){
        let win_url = window.location;

        let win_url_list = win_url.href.replaceAll('&list', '');
        let win_url_list2 = win_url.href.replaceAll('?list', '');

        window.location.href = window.location.href.replaceAll('&list','');
        window.location.href = window.location.href.replaceAll('?list','');
        //window.location.href = win_url_list2;

        setTimeout(function(){
            win_url.href= currentUrl + separator + "list";
        },50)


    }

    if(mode === "horizontal"){
        window.location.href = window.location.href.replaceAll('list', '');
        window.location.href = window.location.href.replaceAll('horizontal', '');
        window.location.href = currentUrl + separator + "horizontal";
    }

    if(mode === "dark"){
        window.location.href= currentUrl + separator + "dark";
    }

    if(mode === "reset"){
        window.location.href = window.location.origin + window.location.pathname;
    }
}