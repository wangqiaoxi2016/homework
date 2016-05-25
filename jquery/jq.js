function accordion() {
    var $acc=$('.accordion'),
        $h1=$acc.find('h1');

    $h1.on('click',function() {
        var $this=$(this);
        // $ul=$this.siblings();
        $ul=$this.parent().find('ul');
        $this.parent().siblings().find('ul').hide();
        $ul.toggle();
        console.log($ul);
        })
}
accordion();