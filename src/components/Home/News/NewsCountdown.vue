<template>
  <div id="flip_timer"></div>
</template>

<script>
function CountdownTracker(label, value) {
  var el = document.createElement("span");

  el.className = "flip-clock__piece";
  el.innerHTML =
    '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
    '<span class="flip-clock__slot">' +
    label +
    "</span>";

  this.el = el;

  var top = el.querySelector(".card__top"),
    bottom = el.querySelector(".card__bottom"),
    back = el.querySelector(".card__back"),
    backBottom = el.querySelector(".card__back .card__bottom");

  this.update = function(val) {
    val = ("0" + val).slice(-2);
    if (val !== this.currentValue) {
      if (this.currentValue >= 0) {
        back.setAttribute("data-value", this.currentValue);
        bottom.setAttribute("data-value", this.currentValue);
      }
      this.currentValue = val;
      top.innerText = this.currentValue;
      backBottom.setAttribute("data-value", this.currentValue);

      this.el.classList.remove("flip");
      void this.el.offsetWidth;
      this.el.classList.add("flip");
    }
  };

  this.update(value);
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  return {
    Total: t,
    天: Math.floor(t / (1000 * 60 * 60 * 24)),
    小时: Math.floor((t / (1000 * 60 * 60)) % 24),
    分钟: Math.floor((t / 1000 / 60) % 60),
    秒数: Math.floor((t / 1000) % 60)
  };
}

function Clock(countdown, callback) {
  countdown = countdown ? new Date(Date.parse(countdown)) : false;
  callback = callback || function() {};

  var updateFn = getTimeRemaining;

  this.el = document.createElement("div");
  this.el.className = "flip-clock";

  var trackers = {},
    t = updateFn(countdown),
    key,
    timeinterval;

  for (key in t) {
    if (key === "Total") {
      continue;
    }
    trackers[key] = new CountdownTracker(key, t[key]);
    this.el.appendChild(trackers[key].el);
  }

  var i = 0;

  function updateClock() {
    timeinterval = requestAnimationFrame(updateClock);

    // throttle so it's not constantly updating the time.
    if (i++ % 10) {
      return;
    }

    var t = updateFn(countdown);
    if (t.Total < 0) {
      cancelAnimationFrame(timeinterval);
      for (key in trackers) {
        trackers[key].update(0);
      }
      callback();
      return;
    }

    for (key in trackers) {
      trackers[key].update(t[key]);
    }
  }

  setTimeout(updateClock, 500);
}

//var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
var deadline = new Date(Date.parse(new Date("2022/08/25")));
var c = new Clock(deadline, function() {
  /* Do something when countdouwn is complete */
});
var page_timer = document.getElementById("flip_timer");
page_timer.appendChild(c.el);

/*
	var clock = new Clock();
	document.body.appendChild(clock.el);
	*/
export default {
  name: "NewsCountdown"
};
</script>

<style scoped>
html {
  height: 100%;
}

body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
}

.flip-clock {
  text-align: center;
  perspective: 400px;
  margin: 20px auto;
}

.flip-clock *,
.flip-clock *:before,
.flip-clock *:after {
  box-sizing: border-box;
}

.flip-clock__piece {
  display: inline-block;
  margin: 0 5px;
}

.flip-clock__slot {
  font-size: 0.8vw;
}

.card {
  display: block;
  position: relative;
  padding-bottom: 0.72em;
  font-size: 10vw;
  line-height: 0.95;
}

.card__top,
.card__bottom,
.card__back::before,
.card__back::after {
  display: block;
  height: 0.72em;
  color: #ccc;
  background: #222;
  padding: 0.25em 0.25em;
  border-radius: 0.15em 0.15em 0 0;
  backface-visiblity: hidden;
  transform-style: preserve-3d;
  width: 1.8em;
}

.card__bottom {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939;
  border-radius: 0 0 0.15em 0.15em;
  pointer-events: none;
  overflow: hidden;
}

.card__bottom::after {
  display: block;
  margin-top: -0.72em;
}

.card__back::before,
.card__bottom::after {
  content: attr(data-value);
}

.card__back {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;
}

.card__back::before {
  position: relative;
  z-index: -1;
  overflow: hidden;
}

.flip .card__back::before {
  animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
  animation-fill-mode: both;
  transform-origin: center bottom;
}

.flip .card__back .card__bottom {
  transform-origin: center top;
  animation-fill-mode: both;
  animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
}

@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
    z-index: 2;
  }

  0%,
  99% {
    opacity: 1;
  }

  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes flipBottom {
  0%,
  50% {
    z-index: -1;
    transform: rotateX(90deg);
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
    z-index: 5;
  }
}
</style>
