const element = document.getElementById("b");
element.innerHTML = "New Heading";
        function ahh() {
            alert("You");
        }

        function show() {
            const s = document.getElementById('inputId').value;
            window.location.replace("https://www.google.com/search?q=" + s);
        }
        var deadline = new Date("Jan 5, 2018 15:37:25").getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var t = deadline - now;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("demo").innerHTML = days + "d " +
                hours + "h " + minutes + "m " + seconds + "s ";
            if (t < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
function update() {
        document.getElementById("brodcast").innerHTML = "It works";
}
