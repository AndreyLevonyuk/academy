document.getElementById('myFunction').onclick = function() {

	var name = document.getElementById('user-name').value;
	var age = document.getElementById('user-age').value;
	var subscr = document.getElementById('subscr');

	if (age >= 18) {
		if (subscr.checked) {
			alert(name + ", вам разрешён доступ!\nПодписка на рассылку оформлена.");
			console.log(name + ", вам разрешён доступ!\nПодписка на рассылку оформлена.")
		} else {
			alert(name + ", вам разрешён доступ!\nПодписка на рассылку не оформлена.");
			console.log(name + ", вам разрешён доступ!\nПодписка на рассылку не оформлена.")
		}
	} else {
			alert(name + ", вам запрещён доступ!");
	}
}