// script отправки формы №1 без перезагрузки страницы

async function sendForm1(form) {
	let response = await fetch("form1.php", {
		method: "POST",
		body: new FormData(form),
	});
	let data = await response.json();
	if (data == "ok") {
		$("#modal").modal("show"); //вызываем modal window с ответа от сервера т.е. по отправке формы
		form.reset(); // очищаем поля формы
	}
}
// script отправки формы №2 без перезагрузки страницы

async function sendForm2(form) {
	let response = await fetch("form2.php", {
		method: "POST",
		body: new FormData(form),
	});
	let data = await response.json();
	if (data == "ok") {
		$("#modalGet").modal("hide"); //вызываем modal window с ответа от сервера т.е. по отправке формы
		form.reset(); // очищаем поля формы
	}
}
