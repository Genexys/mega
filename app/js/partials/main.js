(function() {
  AOS.init();
  BYYD.init();

  var loadMore = document.querySelector('.special-offers__other-company');
  var listCompany = document.querySelector('.special-offers__list-company');
  var itemCompany = document.querySelectorAll('.special-offers__item-company');
  var socBtn = document.querySelectorAll('.soc-wrapper a');
  var apple = document.querySelector('.apple-btn');
  var android = document.querySelector('.google-btn');
  var bonusBtn = document.querySelector('.bonus__btn');
  var mainHeaderBtn = document.querySelector('.main-header__btn');
  var tel = document.querySelector('.main-footer__tel');
  var maxItems = 16;
  var hiddenClass = 'visually-hidden';
  var vid = document.getElementsByTagName('video')[0];
  var vidBlock = document.querySelector('.bonus');
  window.onload = function() {
    //animateScroll(document.scrollingElement || document.documentElement, "scrollTop", "", 0, vidBlock.offsetTop, 2000, true);
    // var playVid = function () {
    //   vid.play();
    // }
    //setTimeout(playVid, 2200);

    var logged1;
    var logged2;
    var logged3;
    var logged4;

    vid.volume = 0.5;
    vid.addEventListener("timeupdate", function() {
      if (!logged1 && Math.floor(vid.currentTime) === 3 ) {
        console.log('3');
        ga('send', 'event', '25%', 'watched');
        logged1 = true;
      }
      if (!logged2 && Math.floor(vid.currentTime) === 6 ) {
        console.log('6');
        ga('send', 'event', '50%', 'watched');
        logged2 = true;
      }
      if (!logged3 && Math.floor(vid.currentTime) === 9 ) {
        console.log('9');
        ga('send', 'event', '75%', 'watched');
        logged3 = true;
      }
      if (!logged4 && Math.floor(vid.currentTime) === 12 ) {
        console.log('12');
        ga('send', 'event', '100%', 'watched');
        logged4 = true;
      }
    }, true);
  };

  vid.addEventListener("playing", function() {
    console.log('playing');
    ga('send', 'event', 'playing', 'watched');
  });

  [].forEach.call(socBtn, function(item, idx) {
    item.addEventListener('click', function(evt) {
      console.log(item, 'social');
      ga('send', 'event', 'social', 'click');
    });
  });

  [].forEach.call(itemCompany, function(item, idx) {
    if (idx > maxItems - 1) {
      item.classList.add(hiddenClass);
    }
    item.addEventListener('click', function(evt) {
      console.log(item, 'spec');
      ga('send', 'event', 'spec', 'click');
    });
  });

  loadMore.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log('more');
    ga('send', 'event', 'more', 'click');
    [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx) {
      //console.log(item);
      if (idx < maxItems) {
        item.classList.remove(hiddenClass);
      }

      if (document.querySelectorAll('.' + hiddenClass).length === 0) {
        loadMore.style.display = 'none';
      }
    });
  });
  mainHeaderBtn.addEventListener('click', function(evt) {
    console.log('main1');
    ga('send', 'event', 'main1', 'click');
  });
  apple.addEventListener('click', function(evt) {
    console.log('apple');
    ga('send', 'event', 'apple', 'click');
  });
  android.addEventListener('click', function(evt) {
    console.log('android');
    ga('send', 'event', 'android', 'click');
  });
  tel.addEventListener('click', function(evt) {
    console.log('phone');
    ga('send', 'event', 'phone', 'click');
  });
  bonusBtn.addEventListener('click', function(evt) {
    console.log('main2');
    ga('send', 'event', 'main2', 'click');
  });
var animateScroll = function (elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
    	  elem[style] = from+unit;
    } else {
    	  elem.style[style] = from+unit;
    }
}
})();
