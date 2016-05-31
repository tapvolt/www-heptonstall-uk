(function(){

    function timer() {
        document.getElementById("image").src = "image.jpg?" + new Date().getTime();
        console.log('image.jpg updated.')
    }

    window.onload = function () {
        var timeout = 90000;
        setTimeout( function () {
            setInterval(timer, timeout);
        }, timeout)
    };

})();



