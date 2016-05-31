(function(){

    function timer() {
        document.getElementById("image").src = "image.jpg?" + new Date().getTime();
        console.log('image.jpg updated.')
    }

    window.onload = function () {
        var timeout = 900000; // 15 minutes
        setInterval(timer, timeout);
    };

})();
