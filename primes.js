
/**
 * This function will use the Nilakantha Series to calculate pi
 */
function nilakPi(itr) {
	var pi = 3;
	var factor = 2;

	for(var i=0; i<itr; ++i) {
		pi += createNilakanthaTerm(factor);
		factor += 2;
		pi -= createNilakanthaTerm(factor);
        factor += 2;
	}
	return pi;
}

function createNilakanthaTerm(initialFactor) {
	var num = 4;
	var dem = initialFactor * ++initialFactor * ++initialFactor;

	var term = num / dem;
	return term;
}

function fftPi(itr) {
    var k1 = math.bignumber(545140134);
    var k2 = math.bignumber(13591409);
    var k3 = math.bignumber(640320);
    var k4 = math.bignumber(100100025);
    var k5 = math.bignumber(327843840);
    var k6 = math.bignumber(53360);

    var s = math.bignumber(0);
    for(var i=0; i<itr; ++i) {
        var n = math.bignumber(i);

        var coef = math.pow(math.bignumber(-1), n);
        var num = math.multiply(
            math.factorial(math.multiply(math.bignumber(6), n)),
            math.add(k2, math.multiply(n, k1))
        );


        var den = math.chain(math.pow(math.factorial(i), 3))
                .multiply(math.factorial(math.multiply(math.bignumber(3), i)))
                .multiply(math.pow(8 * k4 * k5, i));

        s = math.chain(coef).multiply(num).divide(den).add(s);
    }

    return math.chain(k6).multiply(math.sqrt(k3)).divide(s);
}
