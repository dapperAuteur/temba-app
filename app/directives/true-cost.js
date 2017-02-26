function myFunction() {
    var a = document.getElementById("myGrossSal").value;
    var b = a * (document.getElementById("myFedPercent").value / 100);
    var c = a * (document.getElementById("myStLocRate").value / 100);
    var d = a * (.0145 * 10000 / 10000);
    var e = ' ';
    if (a < 127200) {
        e = .062;
    } else {
        e = 0;
    }
    var f = a * (e * 10000 / 10000);
    var g = a - (b + c + d + f);
    var h = +document.getElementById("myWorkHrs").value +
    +document.getElementById("myCommuteHrs").value ;
    var i = g / h ;
    var j = document.getElementById("myExpenditure").value;
    var k = j / i;
    document.getElementById("finalAnswer").innerHTML = k.toFixed(2) + " hours of labor" ;
}
