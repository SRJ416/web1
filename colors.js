var Body = {
    setColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setMenuColor: function (color) {
        /*
        var menu = document.querySelectorAll('a');
        var i = 0;
        while (i < menu.length) {
            menu[i].style.color = color;
            i++;
        }
        */
        $('a').css('color', color);
    },
    setBackgroundColor: function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);    
    }
};

function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Body.setMenuColor('white');
        self.value = 'day';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Body.setMenuColor('black');
        self.value = 'night';
    }
}