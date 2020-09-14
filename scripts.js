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
