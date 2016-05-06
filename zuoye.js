// var add = document.getElementById('add');

add.onclick = function() {
   
    var ul = document.getElementById('ul');
    var len = document.getElementsByTagName("li").length;
    var llll;
    if (len < 4) {
        llll = '<li><input><button>删除</button></li>';
        ul.innerHTML += llll;
    }
    var Btn = document.getElementsByTagName('button');

    var len = document.getElementsByTagName("li").length;
    for(var i=0; i<len; i++) {
        Btn[i].onclick = function() {
        this.parentNode.parentNode.removeChild(this.parentNode);       
        }
    }
};

var define = document.getElementById('define');

define.onclick = function() {
console.log(main.innerHTML);

    // alert('所有爱好');
    var  Ipt = document.getElementsByTagName('input');
    var len = Ipt.length;
    var p = document.getElementById('p');
    var arr = [];

    for(var a=0; a<len; a++) {
    arr.push(Ipt[a].value);
    console.log(arr.join('-'));
        p.innerHTML = '个人爱好：' + arr.join('-');
    }
    
}