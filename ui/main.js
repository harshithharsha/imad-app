var button=document.getelement("counter");

var counter = 0;
button.oneclick=function(){
    
    
    
    counter =counter +1;
    var spam = document.getElementbyID("count");
    spam.innerHTML = counter.tostring();
}
