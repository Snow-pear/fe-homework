// var menus = document.querySelectorAll('.menu');

// initMenu(menus[0]);
// initMenu(menus[1]);
// initMenu(menus[2]);

// function initMenu(menu,) {
//     // var menu = document.querySelector('.menu');
//     var li = menu.querySelector('li'); //选一个
//     var lis = menu.querySelectorAll('li'); //全选

//     console.log(li); //输出一个
//     console.log(lis); //输出全部

//     console.log(lis[0]); //输出第一个
//     console.log(lis[4]); //输出第五个

//     console.log(lis.length); //length属性，li的个数

//     //不能直接在循环语句内部绑定事件，要通过一个函数来绑定事件
//     for (var i = 0; i < lis.length; i++) {
//         console.log(lis[i].innerHTML);
//         // lis[i].innerHTML = lis[i].innerHTML + '' + i;
//         lis[i].innerHTML = lis[i].innerHTML;
//         addEvent(i);

//     }

//     //在循环语句后面定义一个函数来绑定事件，参数是循环变量，为保证循环语句单一，参数另外命令
//     function addEvent(index) {
//         lis[index].addEventListener('click', function () {
//             console.log(index, lis[index]);
//             // 下面的循环次数，写错了，不能是lis[i]，而是lis.length
//             for (var i = 0; i < lis.length; i++) {
//                 lis[i].classList.remove('active');
//             }
//             lis[index].classList.add('active');
//         });
//     }
//     var event = new Event('click',);
//     menu.querySelector('.menu li.active').dispatchEvent(event);
// }

var menu = document.querySelectorAll('.menu');
var mymenu = document.querySelector('.mymenu');
initMenu();

function initMenu() {
    for (var i = 0; i < menu.length; i++) {
        addMenu(menu[i]);
    }
    addMenu(mymenu);

    function addMenu(menuSelector) {
        var lis = menuSelector.querySelectorAll('li');
        for (var i = 0; i < lis.length; i++) {
            lis[i].innerHTML = lis[i].innerHTML + ' ' + i;
            addEvent(i);
        }

        function addEvent(index) {
            lis[index].addEventListener('click', function() {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].classList.remove('active');
                }
                lis[index].classList.add('active');
            })
        };
        var event = new Event('click');
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains('active')) {
                lis[i].dispatchEvent(event);
                break;
            }
        }
    }
}