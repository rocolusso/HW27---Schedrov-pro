'use strict';

/*

Создайте функцию counter, которая будет создавать счетчик и иметь один необязательный
параметр типа number. Вызов функции должен возвращать объект (счетчик) с тремя методами: increase, decrease, value.

Вызов метода value должен возвращать текущее значение счетчика,
increse – увеличивать его на 1, а decrease – уменьшать на 1.


Вызов функции counter должен создавать независимый счетчик – это значит,
что вызов методов одного счетчика никак не должен влиять на любой другой счетчик.


Дополнительно

Необходимо подсчитывать сколько раз были вызваны функции (increase, decrease, get)
Добавить метод getStatistic который вернет нам объект с данными которые мы подсчитывали в пункте выше
Добавить метод который будет обнулять наш счетчик

 */

const counter = () => {

    let i = 0;

    let increseCount = 0;
    let decreseCount = 0;

    let increseResult = {};
    let decreseResult = {};

    const increse = () => {
        i += 1;
        increseCount += 1;

        increseResult = {
            i,
            increseCount,
        }

        return increseResult;
    }

    const decrese = () => {

        i -= 1;
        decreseCount += 1;

        decreseResult = {
            i,
            decreseCount,
        }

        return decreseResult;
    }

    const value = () => {
        return `Value ${i}`;
    }

    const getStatistic = () => {

       return {'**** Calls Statistic ****':'',
          'Increse Calls' : increseResult.increseCount,
           'Decrese Calls' : decreseResult.decreseCount,
           'Current Value' : i
       }

    }

    const reset = () => {

        i = 0;
        increseCount = 0;
        decreseCount = 0;
        increseResult.increseCount = 0;
        decreseResult.decreseCount = 0;

        return '**** Reset was Done';

    }

    return {increse,
            decrese,
            value,
            getStatistic,
            reset}
}

const counter1 = counter();

console.log(counter1.increse());
console.log(counter1.increse());
console.log(counter1.increse());
console.log(counter1.decrese());
console.log(counter1.value());
console.log(counter1.getStatistic());
console.log(counter1.reset());
console.log(counter1.getStatistic());
console.log(counter1.increse());
console.log(counter1.increse());
console.log(counter1.decrese());
console.log(counter1.getStatistic());
console.log(counter1.reset());
console.log(counter1.getStatistic());