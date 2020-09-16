function scrollToFeatures() {
    features = document.getElementById('featuresHeader')
    features.scrollIntoView()
}

function scrollToFeedback() {
    features = document.getElementById('feedbackHeader')
    features.scrollIntoView()
}

function scrollToVerify() {
    features = document.getElementById('verifyHeader')
    features.scrollIntoView()
}

function scrollToLinks() {
    features = document.getElementById('linksHeader')
    features.scrollIntoView()
}

function darkmodeOnClick() {
    let e = document.body;
    let e2 = document.getElementById('light')
    let selects = document.getElementsByClassName('featureStyleTitle');
    let more = document.getElementsByTagName('h1');
    let desc = document.getElementsByClassName('featureStyleDesc')
    let para = document.getElementsByTagName('p')

    if (e2.innerHTML === 'Light Mode') {

        let navigation = document.getElementsByClassName('navigation')

        e2.innerHTML = 'Light Mode On'
        e.style.background = 'white'
        for (i = 0; i < more.length; i++) {
            more[i].style.color = 'black'
        }
        for (i = 0; i < desc.length; i++) {
            desc[i].style.color = 'black'
        }
        for (i = 0; i < selects.length; i++) {
            selects[i].style.color = 'black'
        }
        for (i = navigation.length - 1; i >= 0; i--) {
            navigation[i].className = 'navigationDark'
        }
        for (i = 0; i < para.length; i++) {
            para[i].style.color = 'black'
        }
    
    } else if (e2.innerHTML === 'Light Mode On') {

        e2.innerHTML = 'Light Mode'
        e.style.background = '#131B21'
        
        let navigation = document.getElementsByClassName('navigationDark')
        
        for (i = 0; i < more.length; i++) {
            more[i].style.color = 'white'
        }
        for (i = 0; i < desc.length; i++) {
            desc[i].style.color = '#aeaeb0'
        }
        for (i = 0; i < selects.length; i++) {
            selects[i].style.color = 'white'
        }
        for (i = navigation.length - 1; i >= 0; i--) {
            navigation[i].className = 'navigation'
        }
        for (i = 0; i < para.length; i++) {
            para[i].style.color = '#BDBDBF'
        }
    
    }
}



function hover() {
    var container = document.getElementById("container"),
        inner = document.getElementById("inner");
  
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    mouse.setOrigin(container);
  
  
    var counter = 0;
    var refreshRate = 2;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };
  
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
  
    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
};

window.onload = hover

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let btn = document.getElementById('scrolltotop')
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 1000) {
        btn.style.display = 'inline'
    } else {
        btn.style.display = 'none'
    }
}
