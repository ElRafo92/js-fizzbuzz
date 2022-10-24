
const numberContainer = document.querySelector(`.number_container`);
const genera = document.getElementById(`genera`);

genera.addEventListener(`click`, function() {

    for (let i = 1; i <= 100; i++) {
        let element = i;

        
        let fizz = `Fizz`;
        let buzz = `Buzz`;
        let fizzbuzz = `FizzBuzz`;

        if (element % 15 == 0) {
            element = `${fizzbuzz}`;
        } else if (element % 5 == 0) {
            element = `${buzz}`;
        } else if (element % 3 == 0) {
            element = `${fizz}`;
        }

        console.log(element);
    }
    
});
