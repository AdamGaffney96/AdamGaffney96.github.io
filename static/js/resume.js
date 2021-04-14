let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      setTimeout(function(){
        content.style.border = 'none'
      }, 500)
    } else {
      console.log(content)
      console.log(content.scrollHeight)
      content.style.maxHeight = content.scrollHeight + "px";
        content.style.border = '#0e387d solid 1px'
    }
  });
}

var words = ["This website is a WIP for Adam Gaffney. This is not definitive and will regularly change.", "Use the contact form if you have any questions."];
    var k = 0;
    var text = "This text changes";
    function _getChangedText() {
      k = (k + 1) % words.length;
      return text.replace(/This text changes/, words[k]);
    }
    function _changeText() {
      var txt = _getChangedText();
        var d = document.getElementById("changer")
        d.className = "fadeOut";
        setTimeout(function(){
        document.getElementById("changer").innerHTML = txt;
        d.className = "fadeIn"
    }, 1000);
    }
    setInterval("_changeText()", 5000);

let hamburger = document.getElementById('hamburger')
let ham_nav = document.getElementById('hamburger-nav')

hamburger.addEventListener('click', (e) => {
    let content = document.getElementById('hamburger-nav');
    content.style.width = document.getElementsByTagName('main')[0].offsetWidth + "px"
    console.log(content.style.width)
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
})

function getWidth() {
  return document.documentElement.clientWidth
}

window.addEventListener('resize', (e) => {
  if (getWidth() > 804) {
    ham_nav.style.maxHeight = null;
  } else {
    ham_nav.style.maxHeight = null;
  }
})