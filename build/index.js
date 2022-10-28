"use strict";
function isBigObject(el) {
    //   if (typeof el === 'CValueType')
    return true;
}
function summ(a) {
    var x = Object.keys(a).map(function (k) {
        var elem = a[k];
        if (typeof elem === undefined) {
            console.log('typeof elem undef: ' + typeof elem);
            return 2021;
        }
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'string') {
            console.log('typeof elem str: ' + typeof elem);
            return +elem.cvalue || 2021;
        }
        console.log('typeof elem: ' + typeof elem);
        // if (elem.cvalue.isBigObject !== undefined) return summ(elem);
        return elem === null || elem === void 0 ? void 0 : elem.cvalue;
    });
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += i;
    }
    return sum;
}
var inpObj = {
    world: { cvalue: { yay: { cvalue: '2' } } },
};
var obj = {
    mobo: undefined,
    hello: { cvalue: 1 },
    world: {
        cvalue: {
            yay: { cvalue: '2' },
            grgr: { cvalue: undefined },
            grr: { cvalue: '1q' },
            qq: undefined,
        },
    },
    grgr: { cvalue: undefined },
};
console.log('summ: ' + summ(obj));
