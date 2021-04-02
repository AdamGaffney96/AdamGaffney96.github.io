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

// var frmvalidator = new Validator("contactform");
// frmvalidator.addValidation("name","req","Please provide your name");
// frmvalidator.addValidation("email","req","Please provide your email");
// frmvalidator.addValidation("email","email", "Please enter a valid email address");