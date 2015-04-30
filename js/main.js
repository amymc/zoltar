(function() {

    $(".intro-msg").typed({
        strings: ["Clubhouse, I've been expecting you.^1000 <br/> <br/> Press the button and let Zoltar tell you your fortune."],
        typeSpeed: 0,
        callback: showBtn
    });

    $('.btn-enlighten').click(showFortune);

    function showFortune(){
        $(".fade").toggleClass("transparent");
    }

    function showBtn(){
        $(".btn-enlighten").removeClass("transparent");
    }

})();
