function randomSample(array, size){
    const numbers = [...array]
    const sample = []
    for (var i = 0; i < size; i++){
        var index = Math.floor(Math.random() * numbers.length)
        var n = numbers[index]
        sample.push(n)
        numbers.splice(index,1)
    }
    return sample
}

export function IntegerSequence(n, length){
    var numbers = [];
    for (var i = 0; i < length; i++) {
        numbers.push(i);
    } 

    const sample = randomSample(numbers, n)

    return sample

}

export function Integer(start, end){
    var number = Math.floor(Math.random() * end) + start
    return number 

}

export function Shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}