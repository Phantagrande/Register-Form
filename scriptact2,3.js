const form = document.getElementById('form');
const memecode = document.getElementById('memecode');
const dob = document.getElementById('dob');
const finame = document.getElementById('finame');
const laname = document.getElementById('laname');
const address = document.getElementById('address');
const city = document.getElementById('city');
const mobile = document.getElementById('mobile');
const usname = document.getElementById('usname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const bisex = document.getElementById('bisex');



form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});
function checkInputs() {
	
	const memecodeVal = memecode.value.trim();
	const finameVal = finame.value.trim();
	const lanameVal = laname.value.trim();
	const addressVal = address.value.trim();
	const cityVal = city.value.trim();
	const mobileVal = mobile.value.trim();
	const usnameVal = usname.value.trim();
	const emailVal = email.value.trim();
	const passwordVal = password.value.trim();
	const bisexVal = bisex.value.trim();
	const allInputsValid = memecodeVal && finameVal && lanameVal && addressVal && cityVal 
    && mobileVal && usnameVal && emailVal && passwordVal && bisexVal;


	if (memecodeVal === '') {
		setErrorFor(memecode, 'Member Code is required');
	} else {
		setSuccessFor(memecode);
	}

	if (dob.value === '') {
		setErrorFor(dob, 'Date of Birth is required');
	} else {
		setSuccessFor(dob);
	}

	if (finameVal === '') {
		setErrorFor(finame, 'First name  is required');
	} else {
		setSuccessFor(finame);
	}

	if (lanameVal === '') {
		setErrorFor(laname, 'Last name  is required');
	} else {
		setSuccessFor(laname);
	}

	if (addressVal === '') {
		setErrorFor(address, 'Address  is required');
	} else {
		setSuccessFor(address);
	}

	if (cityVal === '') {
		setErrorFor(city, 'City  is required');
	} else {
		setSuccessFor(city);
	}

	if (mobileVal === '') {
		setErrorFor(mobile, 'Mobile phone  is required');
	} else {
		setSuccessFor(mobile);
	}

	if (usnameVal === '') {
		setErrorFor(usname, 'Username  is required');
	} else {
		setSuccessFor(usname);
	}

	if (emailVal === '') {
		setErrorFor(email, 'Email  is required');
	} else if (!isEmail(emailVal)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if (passwordVal === '') {
		setErrorFor(password, 'Password  is required');
	} else {
		setSuccessFor(password);
	}

	if (bisexVal === '') {
		setErrorFor(bisex, 'Birth sex  is required');

	} else {
		setSuccessFor(bisex);
	}

	if (allInputsValid) {
		alert('You are registered');
	}
	else {
		alert('Please fill up all required field');
	}


}
function setErrorFor(input, message) {
	const formContain = input.rootElement;
	const mini = formContain.querySelector('small');
	formContain.classTag = 'form-control error';
	mini.innerText = message;
}
function setSuccessFor(input) {
	const formContain = input.rootElement;
	formContain.classTag = 'form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

let power = document.getElementById('power-point');
let pwrmsg = document.getElementById('pwrmsg');

password.oninput = function () {
	let point = 0;
	let value = password.value;
	let GaugePower = ['1%', '25%', '50%', '75%', '100%'];
	let PasswordText = ['Weak', 'Good', 'Moderate', 'Strong', 'Very Strong'];
	let HueEngergy = ['#F71704', '#F37F0B', '#F3E50B', '#BEF30B', '#32F30B'];

	if (value.length >= 6) {
		let arrayTest = [
			/[0-9]/,
			/[a-z]/,
			/[A-Z]/,
			/[^0-9a-zA-Z]/
		];
		arrayTest.forEach(item => {
			if (item.test(value)) {
				point += 1;
			}
		});
	}
	power.style.width = GaugePower[point];
	power.style.backgroundColor = HueEngergy[point];
	pwrmsg.innerText = 'Password strength : ' + PasswordText[point];
	if (value.trim().length > 0) {
		pwrmsg.style.fontSize = '11px';
		pwrmsg.innerText = 'Password strength : ' + PasswordText[point];
	} else {
		pwrmsg.innerText = '';
	}
}

function showPassword() {
	var passwordLoad = document.getElementById("password");
	if (passwordLoad.type === "password") {
		passwordLoad.type = "text";
	} else {
		passwordLoad.type = "password";
	}
}

function cancelmember() {

	const formZone = [
		'company','dob', 'finame', 'mname', 'laname', 'address','address2', 'brgy',
		'city', 'country', 'province', 'zip', 'mobile',
		'usname', 'email', 'password', 'bisex', 'mstatus'
	];

	formZone.forEach(fieldId => {
		const field = document.getElementById(fieldId);
		field.value = '';
		field.style.backgroundColor = '#FA0606';
		field.disabled = true;
	});
}

function verifyMember() {

    var memberZone = document.getElementById("memecode").value;
    var memberRow = [
        {codeInput: "0069", firstName: "Fate",  mname: "Alco", lastname: "Hol", Address: "Phantagrande ", City: "Skydom1", Mobile: "09123456789",},
        {codeInput: "0096", firstName: "Jan", mname: "Safe", lastname: "Tylex", Address: "Nahalegrande", City: "Skydom4", Mobile: "09098967451",},
		{codeInput: "0042", firstName: "Razer", mname: "Core", lastname: "Intel", Address: "Kahlesgrande", City: "Skydom6", Mobile: "0956237451",},
		{codeInput: "0099", firstName: "Vika", mname: "Solu", lastname: "Tion", Address: "Oryalegrande", City: "Skydom2", Mobile: "09781245736",}
    ];

    for (var i = 0; i < memberRow.length; i++) {
        if (memberRow[i].codeInput === memberZone) {

            if (memberRow[i].firstName) {
                document.getElementById("finame").disabled = true;
            }
            if (memberRow[i].mname) {
                document.getElementById("mname").disabled = true;
            }
            if (memberRow[i].lastname) {
                document.getElementById("laname").disabled = true;
            }
            if (memberRow[i].Address) {
                document.getElementById("address").disabled = true;
            }
            if (memberRow[i].City) {
                document.getElementById("city").disabled = true;
            }
            if (memberRow[i].Mobile) {
                document.getElementById("mobile").disabled = true;
            }

            document.getElementById("finame").value = memberRow[i].firstName;
            document.getElementById("dob").value = memberRow[i].bdays;
            document.getElementById("mname").value = memberRow[i].mname;
            document.getElementById("laname").value = memberRow[i].lastname;
            document.getElementById("address").value = memberRow[i].Address;
            document.getElementById("city").value = memberRow[i].City;
            document.getElementById("mobile").value = memberRow[i].Mobile;
            return;
        }
    }

    alert("No records found");
}
