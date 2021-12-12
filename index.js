function mul(a) {
    a = document.getElementById("val1").value;
    return function (b) {
        b = document.getElementById("val2").value;
        return function (c) {
            c = document.getElementById("val3").value;
            product = a * b * c;
            alert(`The product of ${a}, ${b} and ${c} is ${product}`);
            
        }
    }
}
mul(a)(b)(c); 