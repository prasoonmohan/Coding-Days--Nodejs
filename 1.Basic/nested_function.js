var num = 20;

function hello() {
    num = 40;

    function hey() {
        num = 100;
    }

    hey();
}

hello();

console.log(num);
