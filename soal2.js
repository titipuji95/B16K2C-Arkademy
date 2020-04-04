function validasi_username(username){
	var Regex = /^[A-Z]{7}$/;
	return Regex.test(username);
}

function validasi_password(password){
	var Regex = /^[a-zA-Z0-9#]{9,15}$/;
	return Regex.test(password);
}
console.log(validasi_username("SABRINA"));
console.log(validasi_username("KEVIN"));
console.log(validasi_password("#DiRuMah4j4"));
console.log(validasi_password("CuciT*ngan"));