//your JS code here. If required.
function myFunc() {
	const firstName = document.getElementById('fname').value;
	const LastName = document.getElementById('lname').value;
	const phone = document.getElementById('phone').value;
	const email = document.getElementById('email').value;
	const ans = `First Name: ${firstName} Last Name: ${LastName} Phone Number: ${phone} Email ID: ${email}`
	console.log(ans)
	alert(ans);
}