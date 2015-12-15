
/**
 * This function will use the Nilakantha Series to calculate pi
 */
function nilakPi(itr) {
	var pi = math.bignumber(3);
	var factor = 2;

	for(var i=0; i<itr; ++i) {
		var t1 = createNilakanthaTerm(factor);
		factor += 2;
		var t2 = createNilakanthaTerm(factor);
        factor += 2;

        console.log("t1 is " + t1.toString() + ", t2 is " + t2.toString());

        pi = math.chain(pi)
            .add(t1)
            .subtract(t1)
            .done();
	}
	return pi;
}

function createNilakanthaTerm(initialFactor) {
    var dem = math.chain(initialFactor)
        .multiply(++initialFactor)
        .multiply(++initialFactor)
        .bignumber()
        .done();

	return math.divide(4, dem);
}

function fftPi(itr) {
    var k1 = math.number(545140134);
    var k2 = math.number(13591409);
    var k3 = math.number(640320);
    var k4 = math.number(100100025);
    var k5 = math.number(327843840);
    var k6 = math.number(53360);

    var s = math.bignumber(0);
    for(var i=0; i<itr; ++i) {
        var coef = math.pow(-1, i);
        var num = math.factorial(6 * i) * (k2 + (i * k1));
        var den = math.pow(math.factorial(i), 3)
            * math.factorial(3 * i)
            * math.pow(8 * k4 * k5, i);

        var val = math.multiply(coef, math.divide(num, den));
        val = math.add(s, math.bignumber(val));

        if(val.isNaN()) break;
        s = math.bignumber(val);
    }

    //return k6 * math.sqrt(k3) / s;
    return math.chain(k6)
        .multiply(math.sqrt(k3)).bignumber()
        .divide(s)
        .done();
    //return math.divide(math.bignumber(math.multiply(k6, math.sqrt(k3))), s);
}
