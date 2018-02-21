function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst){
        return symbol + ' ' + result;
    } else{
        return result + ' ' + symbol;
    }
}
function result(func) {
    return function (value) {
        return func(",","$",true,value);
    }
}
let dollarFormatter=result(formatCurrency);
console.log(dollarFormatter(4567.0987));



