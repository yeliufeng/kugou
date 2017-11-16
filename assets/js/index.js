/*轮播图*/
carsel();

function carsel() {
    var imgLi = document.querySelectorAll('.img li');
    var carsel = document.querySelector('.carsel');
    var left = document.querySelector('.index-left');
    var right = document.querySelector('.index-right');
    var indexLi = document.querySelectorAll('.index ul li');
    var index = 0;
    var timer = 0;

    run();

    function run() {

        timer = setInterval(function() {
            imgLi[index].style.display = 'none';
            indexLi[index].style.backgroundPosition = '0 -10px';
            index++;
            if (index > imgLi.length - 2) {
                index = 0;
            }
            imgLi[index].style.display = 'block';
            indexLi[index].style.backgroundPosition = '0 -37px';
        }, 1000)
    }

    carsel.onmouseover = function() {
        clearInterval(timer);
        left.style.display = 'block';
        right.style.display = 'block';

    }
    carsel.onmouseout = function() {
        run();
        left.style.display = 'none';
        right.style.display = 'none';

    }
    left.onmouseover = function() {
        left.style.backgroundPosition = '0 -880px';

    }
    left.onmouseout = function() {
        left.style.backgroundPosition = '0 -755px';

    }
    right.onmouseover = function() {
        right.style.backgroundPosition = '0 -1005px';

    }
    right.onmouseout = function() {
        right.style.backgroundPosition = '0 -1130px';

    }
}