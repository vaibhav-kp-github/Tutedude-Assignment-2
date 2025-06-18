var starttime = new Date().getTime();

      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      function move() {
        var position;
        var wdtnht;
        wdtnht = Math.random() * 500 + 100;
        position = Math.random() * 300;

        document.getElementById("box").style.left = `${position}px`;
        document.getElementById("box").style.top = `${position - 10}px`;
        document.getElementById("box").style.height = `${wdtnht}px`;
        document.getElementById("box").style.width = `${wdtnht}px`;
        document.getElementById("box").style.display = "block";
        document.getElementById("box").style.backgroundColor = getRandomColor();
        starttime = new Date().getTime();
      }

      move();
      document.getElementById("box").onclick = function timecalculation() {
        document.getElementById("box").style.display = "none";

        var endtime = new Date().getTime();

        var timetaken = (endtime - starttime) / 1000;

        var printtimetaken;
        if (timetaken <= 60) {
          printtimetaken = `${timetaken.toFixed(2)} seconds`;
        } else {
          printtimetaken = `${(timetaken / 60).toFixed(2)} minutes`;
        }

        alert(printtimetaken);
        move();
      };