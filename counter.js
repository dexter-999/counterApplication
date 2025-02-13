var plusBtn = document.getElementById('btnp');
var count = document.getElementById('count');
var minsBtn= document.getElementById('btn-');

var countName = 0;
count.innerHTML = countName;

minsBtn.addEventListener('click', function(){
    countName -= 1
    count.innerHTML = countName;
});

plusBtn.addEventListener('click', function(){
    countName += 1
    count.innerHTML = countName;
}); 