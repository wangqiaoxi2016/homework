
var add = document.getElementById('add');

add.onclick = function() {
    var ul = document.getElementById('ul');
    var li = document.createElement('li');
    var input = document.createElement('input');
    var Btn = document.createElement('button');
    var text = document.createTextNode('删除');

    var len = document.getElementsByTagName("li").length;
    if(len < 4) {
      Btn.appendChild(text);
      li.appendChild(input);
      li.appendChild(Btn)
      ul.appendChild(li);
    }else{
      add.disabled='disabled';
    } ;

    Btn.onclick = function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }

    console.log(len);
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
