(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-red'); // Change this line
    let equal = document.querySelector('.btn-green'); // Change this line

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function(e) {
        try {
            let answer = new Function('return ' + screen.value)();
            screen.value = answer;
        } catch (error) {
            screen.value = 'Error';
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = '';
    });
})();
