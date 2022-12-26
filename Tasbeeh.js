let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function count(e)
{
    e.target.value = 6;
    counter++;
    if (counter < 10)
    {
        document.querySelector('#val').innerHTML = '0' + counter;
    }
    else
    {
        document.querySelector('#val').innerHTML = counter;
    }

    if (counter <=33)
    {
        counter1++
        if (counter1 < 10)
        {
            document.querySelector('#subh').innerHTML = '0' + counter1;
        }else
        document.querySelector('#subh').innerHTML = counter1;
    }
    if (counter > 33 && counter <= 66)
    {
        document.querySelector('#subh').innerHTML = '33';
        counter2++;
        if (counter2 < 10)
        {
            document.querySelector('#wal').innerHTML = '0' + counter2;
        }else
        document.querySelector('#wal').innerHTML = counter2;
    }

    if (counter > 66 && counter <= 99)
    {
        document.querySelector('#wal').innerHTML = '33';
        counter3++;
        if (counter3 < 10)
        {
         document.querySelector('#akbr').innerHTML = '0' + counter3;
        }else
            document.querySelector('#akbr').innerHTML = counter3;
    }
    if (counter > 99)
    {
        document.querySelector('#val').innerHTML = 100;
        document.querySelector('#akbr').innerHTML = '33';
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#myRange').onchange = count;
})

function resetCount(e){

    e.target.value = 6;
    counter = 0;
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    document.querySelector('#val').innerHTML = '0' + counter;
    document.querySelector('#subh').innerHTML = '0' + counter1;
    document.querySelector('#wal').innerHTML = '0' + counter2;
    document.querySelector('#akbr').innerHTML = '0' + counter3;
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#myRange2').onchange = resetCount;
})