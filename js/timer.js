(function(){

    function timer() {
        document.getElementById("image").src = "image.jpg?" + new Date().getTime();
    }

    window.onload = function () {
        var timeout = 900000; // 15 minutes
        setInterval(timer, timeout);
    };

})();
