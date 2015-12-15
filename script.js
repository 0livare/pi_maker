window.onload = function() {
	
};


function displayPi() {
	var itrs = document.getElementById("iterations").value;
    itrs = parseInt(itrs);

    document.getElementById("display_nilak").innerText = nilakPi(itrs).toString();
    document.getElementById("display_fft").innerText = fftPi(itrs).toString();
}