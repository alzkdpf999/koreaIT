import { StudentManager } from "./StudentManager.js";
function StudentApp() {

}
const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" |a-z|A-Z |ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
const regNum = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" |0-9]/g;
const regLimit = /[^0-9]/g;
const regZero = /^0[0-9]+$/g;

let kr, ssn, name, en, ma;
let studentManager = new StudentManager();
document.querySelector("#register").addEventListener("click", function(event) {
	let h4 = document.createElement('h4');
	let option;
	let txt;

	//학번
	document.querySelector(".ok").value = '';
	ssn = document.querySelector('#ssn').value;
	//이름
	name = document.querySelector('#name').value;
	//국어
	kr = document.querySelector('#kr').value;
	//영어
	en = document.querySelector('#en').value;
	//수학
	ma = document.querySelector('#ma').value;

	if (!ssn || !name || !kr || !en || !ma) { // 둘 중 하나 입력 안할때 
		option = "#errcase";
		document.querySelector(option).setAttribute("style", "display: flex;");
		txt = document.createTextNode("정보를 전부 입력해주세요.");
	} else {
		option = "#case";
		document.querySelector(option).setAttribute("style", "display: flex;");
		let btn1 = document.createElement('button');
		txt = document.createTextNode(`${ssn}학번 ${name}님을 등록하시겠습니까?`);
		let txt1 = document.createTextNode(`등록`);
		btn1.className = 'btn btn-dark del';
		btn1.setAttribute("type", "button");
		btn1.setAttribute("id", "reg");
		btn1.appendChild(txt1);
		document.querySelector(".Allbtn").prepend(btn1);
	}
	h4.className = 'h4';
	h4.appendChild(txt);
	document.querySelector(option).appendChild(h4);
})

document.querySelector("#removeall").addEventListener("click", function(event) {
	let h4 = document.createElement('h4');
	let option;
	let txt;
	document.querySelector("#removeall").setAttribute("disabled", "disabled");
	document.querySelector(".ok").value = "#removeall"

	option = "#case";
	document.querySelector(option).setAttribute("style", "display: flex;");
	let btn1 = document.createElement('button');
	txt = document.createTextNode(`전체 삭제하시겠습니까?`);
	let txt1 = document.createTextNode(`삭제`);
	btn1.className = 'btn btn-dark del';
	btn1.setAttribute("type", "button");
	btn1.setAttribute("id", "delAll");
	btn1.appendChild(txt1);
	document.querySelector(".Allbtn").prepend(btn1);

	h4.className = 'h4';
	h4.appendChild(txt);
	document.querySelector(option).appendChild(h4);
})

document.querySelector("#remove").addEventListener("click", function(event) {
	let h4 = document.createElement('h4');
	let option;
	let txt;
	//학번 
	ssn = document.querySelector('#ssn').value;
	//이름
	name = document.querySelector('#name').value;
	document.querySelector("#remove").setAttribute("disabled", "disabled");
	document.querySelector(".ok").value = "#remove"

	if (!ssn || !name) { // 둘 중 하나 입력 안할때 
		option = "#errcase";
		document.querySelector(option).setAttribute("style", "display: flex;");
		txt = document.createTextNode("학번과 이름을 입력해주세요.");
	} else { //이름 학번 둘다 입력
		option = "#case";
		document.querySelector(option).setAttribute("style", "display: flex;");
		let btn1 = document.createElement('button');
		txt = document.createTextNode(`${ssn}학번 ${name}님을 삭제하시겠습니까?`);
		let txt1 = document.createTextNode(`삭제`);
		btn1.className = 'btn btn-dark del';
		btn1.setAttribute("type", "button");
		btn1.setAttribute("id", "del");
		btn1.appendChild(txt1);
		document.querySelector(".Allbtn").prepend(btn1);
	}
	h4.className = 'h4';
	h4.appendChild(txt);
	document.querySelector(option).appendChild(h4);
})

document.querySelector(".cancle").addEventListener("click", function(event) {
	let result = document.querySelector(".ok").value;
	document.querySelector("#case").removeAttribute("style");
	let h4 = document.querySelector(".h4");
	document.querySelector("#case").removeChild(h4);
	let btn = document.querySelector(".del");
	document.querySelector(".Allbtn").removeChild(btn);
	if (result != '') document.querySelector(result).removeAttribute("disabled");
})

document.querySelector(".ok").addEventListener("click", function(event) {
	let result = document.querySelector(".ok").value;
	document.querySelector("#errcase").removeAttribute("style");
	let h4 = document.querySelector(".h4");
	document.querySelector("#errcase").removeChild(h4);
	if (result != '') document.querySelector(result).removeAttribute("disabled");
	let index;
	if (result == "") {

		index = studentManager.empty(ssn, name, kr, en, ma);
		let select = studentManager.emptyfocus(index);
		studentManager.movefocus(select);
	} else {
		if (result != "#sort" || result != "#removall") {
			index = studentManager.empty(ssn, name);
			if (index <= 2) {

				let select = studentManager.emptyfocus(index);
				studentManager.movefocus(select);
			}
		}
	}
})

document.querySelector("#ssn").addEventListener("input", function(event) {

	ssn = document.querySelector("#ssn").value;
	if (regExp.test(ssn)) {
		document.querySelector("#ssn").value = ssn.replace(regExp, "");
	}
})

document.querySelector("#name").addEventListener("input", function(event) {
	name = document.querySelector("#name").value;
	if (regNum.test(name)) {
		document.querySelector("#name").value = name.replace(regNum, "");
	}
})

document.querySelector("#kr").addEventListener("input", function(event) {
	kr = document.querySelector("#kr").value;

	if (regLimit.test(kr)) {
		document.querySelector("#kr").value = kr.replace(regLimit, '');
	}
	if (regZero.test(kr)) {
		document.querySelector("#kr").value = kr.replace(regZero, '0');
	}
	if (kr >= 100) document.querySelector("#kr").value = 100;
})
document.querySelector("#en").addEventListener("input", function(event) {
	en = document.querySelector("#en").value;
	if (regLimit.test(en)) {
		document.querySelector("#en").value = en.replace(regLimit, '');
	}
	if (regZero.test(en)) {
		document.querySelector("#en").value = en.replace(regZero, '0');
	}
	if (en >= 100) document.querySelector("#en").value = 100;
})
document.querySelector("#ma").addEventListener("input", function(event) {
	ma = document.querySelector("#ma").value;
	if (regLimit.test(ma)) {
		document.querySelector("#ma").value = ma.replace(regLimit, '');
	}
	if (regZero.test(ma)) {
		document.querySelector("#ma").value = ma.replace(regZero, '0');
	}
	if (ma >= 100) document.querySelector("#ma").value = 100;
})

document.querySelector("#sort").addEventListener("click", function(event) {
	let h4 = document.createElement('h4');
	document.querySelector(".ok").value = "#sort"
	document.querySelector("#sort").setAttribute("disabled", "disabled");
	let option;
	let txt;
	option = "#sortcase"
	document.querySelector(option).setAttribute("style", "display: flex;");
	txt = document.createTextNode("정렬 방법을 선택주세요.");
	h4.className = 'h4';
	h4.appendChild(txt);
	document.querySelector(option).appendChild(h4);
})


document.querySelector("#case").addEventListener('click', function(event) {
	let h4 = document.querySelector(".h4");
	let btn;
	let txt;

	//삭제
	if (event.target && event.target.id == 'del') {
		if(document.querySelector("#seqBtn").classList.contains("active")){
			document.querySelector("#seqBtn").classList.remove("active")
		}
		ssn = document.querySelector('#ssn').value;
		//이름
		name = document.querySelector('#name').value;
		btn = document.querySelector("#del");
		document.querySelector(".Allbtn").removeChild(btn);
		document.querySelector("#case").removeAttribute("style");
		document.querySelector("#case").removeChild(h4);
		let student = {
			//학번 
			ssn: ssn,
			//이름
			name: name
		};
		const option = {
			method: "delete",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(student),
		}
		fetch(`students/ssn/${ssn}/name/${name}?page=1`, option)
			.then(response => response.json())
			.then(response => {
				if (!response.check) {

					document.querySelector("#errcase").setAttribute("style", "display: flex;");
					txt = document.createTextNode("학생이 존재하지 않습니다.");
					h4 = document.createElement('h4');;
					h4.setAttribute("id", "h4");
					h4.className = 'h4';
					h4.appendChild(txt);

					document.querySelector("#errcase").appendChild(h4);
					printList(response);
					printPagination(response)
				} else {
					printList(response);
					printPagination(response)
				}
			})
			.catch(error => console.error(error));
		document.querySelector("#remove").removeAttribute("disabled");
		studentManager.resigsterAfterInit();
	} else if (event.target && event.target.id == 'reg') {
		if(document.querySelector("#seqBtn").classList.contains("active")){
			document.querySelector("#seqBtn").classList.remove("active")
		}
		ssn = document.querySelector('#ssn').value;
		//이름
		name = document.querySelector('#name').value;
		//국어
		kr = parseInt(document.querySelector('#kr').value);
		//영어
		en = parseInt(document.querySelector('#en').value);
		//수학
		ma = parseInt(document.querySelector('#ma').value);
		btn = document.querySelector("#reg");
		document.querySelector(".Allbtn").removeChild(btn);
		document.querySelector("#case").removeAttribute("style");
		document.querySelector("#case").removeChild(h4);


		let student = {
			//학번 
			ssn: ssn,
			//이름
			name: name,
			//국어
			korean: kr,
			//영어
			english: en,
			//수학
			math: ma
		};
		const option = {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(student),
		}
		fetch("students?page=1", option)
			.then(response => response.json())
			.then(response => {
				if (response.check) {
					printList(response);
					printPagination(response)
				}
				else {
					document.querySelector("#errcase").setAttribute("style", "display: flex;");
					txt = document.createTextNode("이미 존재하는 학번입니다.");
					h4 = document.createElement('h4');;
					h4.setAttribute("id", "h4");
					h4.className = 'h4';
					h4.appendChild(txt);

					document.querySelector("#errcase").appendChild(h4);
					printList(response);
					printPagination(response)
				}
			})
			.catch(error => console.error(error));
		//학번 


		if (ssn && name && kr && en && ma) studentManager.resigsterAfterInit();

	} else if (event.target && event.target.id == 'delAll') {
		btn = document.querySelector("#delAll")
		document.querySelector(".Allbtn").removeChild(btn);
		document.querySelector("#case").removeAttribute("style");
		document.querySelector("#case").removeChild(h4);
		if(document.querySelector("#seqBtn").classList.contains("active")){
			document.querySelector("#seqBtn").classList.remove("active")
		}
		const option = {
			method: "delete",
			headers: {
				"Content-Type": "application/json",
			}
		}
		fetch(`students?page=1`, option)
			.then(response => response.json())
			.then(response => {
				if (!response.check) {

					document.querySelector("#errcase").setAttribute("style", "display: flex;");
					txt = document.createTextNode("학생이 존재하지 않습니다.");
					h4 = document.createElement('h4');;
					h4.setAttribute("id", "h4");
					h4.className = 'h4';
					h4.appendChild(txt);
					document.querySelector("#errcase").appendChild(h4);
					printList(response);
				} else {
					printList(response);
				}
			})
			.catch(error => console.error(error));
		document.querySelector("#removeall").removeAttribute("disabled");
	}
})
//이름 검색
document.querySelector("#search").addEventListener("click", function(event) {
	const findname = document.querySelector('#name').value;
	if(document.querySelector("#seqBtn").classList.contains("active")){
			document.querySelector("#seqBtn").classList.remove("active")
		}
	fetch(`students/name/${findname}?page=1&sort=ssn`)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response)
		})
		.catch(error => console.error(error));
})
//학번검색
document.querySelector("#smsearch").addEventListener("click", function(event) {
	const findssn = document.querySelector('#ssn').value;
	if(document.querySelector("#seqBtn").classList.contains("active")){
			document.querySelector("#seqBtn").classList.remove("active")
		}
	fetch(`students/ssn/${findssn}?page=1&sort=ssn`)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response)
		})
		.catch(error => console.error(error));
})
//전체검색
document.querySelector("#allSearch").addEventListener("click", function(event) {
	if(document.querySelector("#seqBtn").classList.contains("active")){
			document.querySelector("#seqBtn").classList.remove("active")
		}
	fetch(`students?page=1&sort=ssn`)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);
		})
		.catch(error => console.error(error));
})

//정렬
document.querySelector("#ss").addEventListener("click", function(event) {
	document.querySelector("#sort").removeAttribute("disabled");
	console.log(document.querySelector("#type").value);
	let type = document.querySelector("#type").value;
	let val = document.querySelector("#value").value;
	let seq = document.querySelector("#seq").value;
	let url;
	if (type != "all") {
		url = `students/${type}/${val}/?page=1&sort=ssn&seq=${seq}`
	} else {
		url = `students?page=1&sort=ssn&seq=${seq}`
	}
	fetch(url)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);

		})
		.catch(error => console.error(error));
	document.querySelector("#sortcase").removeAttribute("style");
})
document.querySelector("#ns").addEventListener("click", function(event) {
	document.querySelector("#sort").removeAttribute("disabled");
	let seq = document.querySelector("#seq").value;
	let type = document.querySelector("#type").value;
	let val = document.querySelector("#value").value;
	let url;
	if (type != "all") {
		url = `students/${type}/${val}/?page=1&sort=name&seq=${seq}`
	} else {
		url = `students?page=1&sort=name&seq=${seq}`
	}
	fetch(url)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);

		})
		.catch(error => console.error(error));
	document.querySelector("#sortcase").removeAttribute("style");

})
document.querySelector("#ks").addEventListener("click", function(event) {
	document.querySelector("#sort").removeAttribute("disabled");
	let type = document.querySelector("#type").value;
	let seq = document.querySelector("#seq").value;
	let val = document.querySelector("#value").value;
	let url;
	if (type != "all") {
		url = `students/${type}/${val}/?page=1&sort=korean&seq=${seq}`
	} else {
		url = `students?page=1&sort=korean&seq=${seq}`
	}
	fetch(url)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);

		})
		.catch(error => console.error(error));
	document.querySelector("#sortcase").removeAttribute("style");

})
document.querySelector("#es").addEventListener("click", function(event) {
	document.querySelector("#sortcase").removeAttribute("style");
	let type = document.querySelector("#type").value;
	let val = document.querySelector("#value").value;
	let seq = document.querySelector("#seq").value;
	let url;
	if (type != "all") {
		url = `students/${type}/${val}/?page=1&sort=english&seq=${seq}`
	} else {
		url = `students?page=1&sort=english&seq=${seq}`
	}
	fetch(url)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);

		})
		.catch(error => console.error(error));
	document.querySelector("#sort").removeAttribute("disabled");

})
document.querySelector("#ms").addEventListener("click", function(event) {
	document.querySelector("#sort").removeAttribute("disabled");
	let type = document.querySelector("#type").value;
	let seq = document.querySelector("#seq").value;
	let val = document.querySelector("#value").value;
	let url;
	if (type != "all") {
		url = `students/${type}/${val}/?page=1&sort=math&seq=${seq}`
	} else {
		url = `students?page=1&sort=math&seq=${seq}`
	}
	fetch(url)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);

		})
		.catch(error => console.error(error));
	document.querySelector("#sortcase").removeAttribute("style");

})
document.querySelector("#as").addEventListener("click", function(event) {
	document.querySelector("#sort").removeAttribute("disabled");
	let type = document.querySelector("#type").value;
	let val = document.querySelector("#value").value;
	let seq = document.querySelector("#seq").value;
	let url;
	if (type != "all") {
		url = `students/${type}/${val}/?page=1&sort=avg&seq=${seq}`
	} else {
		url = `students?page=1&sort=avg&seq=${seq}`
	}
	fetch(url)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);

		})
		.catch(error => console.error(error));
	document.querySelector("#sortcase").removeAttribute("style");

})

window.onload = function() {


	fetch("students?page=1&sort=ssn")
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);

		})
		.catch(error => console.error(error));
}

function printList(response) {
	let table = `<ul>
  <li>학번</li><li>이름</li><li>국어</li><li>영어</li><li>수학</li><li>평균</li>
</ul>`;

	for (let i = 0; i < response.student.length; i++) {
		table += `<ul>`;
		let student = response.student[i];
		let avg = ((student.korean + student.english + student.math) / 3).toFixed(2);
		table += `<li>${student.ssn}</li><li>${student.name}</li><li>${student.korean}</li><li>${student.english}</li><li>${student.math}</li><li>${avg}</li>`;
		table += `</ul>`;

	}
	document.querySelector("#list").innerHTML = table;
}


function printPagination(response) {

	let paging = "";
	let pageBulid = response.page;
	let params = pageBulid.params;
	if (params.page <= 1) {
		paging += `<a>&laquo;</a> <a>&lt;</a>`
	} else {
		paging += `<a id="start" data-value="${1}">&laquo;</a> <a id="prior" data-value="${params.page - 1}">&lt;</a>`
	}
	for (let k = pageBulid.startPage; k <= pageBulid.endPage; k++) {
		if (k == params.page) {
			paging += `<a class="active">${k}</a>`
		} else {
			paging += `<a id="pageNum" data-value="${k}" name="${k}">${k}</a>`
		}
	}
	if (params.page == pageBulid.endPage) {
		console.log("params.page == pageBulid.endPage")
		if (!(params.page == pageBulid.pageCount)) {
			paging += `<a id="nextstart" data-value="${pageBulid.nextStartpage}" >&gt;</a>`
			paging += `<a id="nextend" data-value="${pageBulid.pageCount}">&raquo;</a>`
		} else {
			paging += `<a>&gt;</a> <a>&raquo;</a>`
		}
	} else {
		paging += `<a id="next" data-value="${params.page + 1}">&gt;</a>`
		paging += `<a id="end" data-value="${pageBulid.pageCount}">&raquo;</a>`
	}
	paging += `<input id="type" type="hidden" value=${response.page.params.searchType}>`
	paging += `<input id="value" type="hidden" value=${response.page.params.searchValue}>`
	paging += `<input id="sortType" type="hidden" value=${response.page.params.sortType}>`
	paging += `<input id="seq" type="hidden" value=${response.page.params.seq}>`
	document.querySelector(".pagination").innerHTML = paging;

}

document.querySelector(".pagination").addEventListener("click", function(event) {
	let type = document.querySelector("#type").value;
	let val = document.querySelector("#value").value;
	let sort = document.querySelector("#sortType").value;
	let seq = document.querySelector("#seq").value;
	let url;
	let bool = (type != "all") ? true : false;
	if (event.target.id) {
		if (event.target && event.target.id == "start") {
			if (bool) {
				url = `students/${type}/${val}/?page=1&sort=${sort}&seq=${seq}`
			} else {
				url = `students?page=1&sort=${sort}&seq=${seq}`
			}
		} else if (event.target && event.target.id == "prior") {
			if (bool) {
				url = `students/${type}/${val}/?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			} else {
				url = `students?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			}
		} else if (event.target && event.target.id == "nextstart") {
			if (bool) {
				url = `students/${type}/${val}/?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			} else {
				url = `students?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			}
		} else if (event.target && event.target.id == "nextend") {
			if (bool) {
				url = `students/${type}/${val}/?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			} else {
				url = `students?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			}
		} else if (event.target && event.target.id == "next") {
			if (bool) {
				url = `students/${type}/${val}/?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			} else {
				url = `students?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			}
		} else if (event.target && event.target.id == "end") {
			if (bool) {
				url = `students/${type}/${val}/?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			} else {
				url = `students?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			}
		} else if (event.target && event.target.id == "pageNum") {
			if (bool) {
				url = `students/${type}/${val}/?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			} else {
				url = `students?page=${event.target.dataset.value}&sort=${sort}&seq=${seq}`
			}
		}
			fetch(`${url}`)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);
		})
		.catch(error => console.error(error));
	}

})

document.querySelector("#seqBtn").addEventListener("click",function(event){
	let type = document.querySelector("#type").value;
	let val = document.querySelector("#value").value;
	let sort = document.querySelector("#sortType").value;
	let url;
	let bool = (type != "all") ? true : false;
	if(document.querySelector("#seqBtn").classList.contains("active")){
		document.querySelector("#seqBtn").classList.remove("active");
		if (bool) {
				url = `students/${type}/${val}/?page=1&sort=${sort}&seq=order`
			} else {
				url = `students?page=1&sort=${sort}&seq=order`
			}
	}else{
		document.querySelector("#seqBtn").classList.add("active");
			if (bool) {
				url = `students/${type}/${val}/?page=1&sort=${sort}&seq=inverse`
			} else {
				url = `students?page=1&sort=${sort}&seq=inverse`
			}
	}
	console.log(url);
	fetch(`${url}`)
		.then(response => response.json())
		.then(response => {
			printList(response);
			printPagination(response);
		})
		.catch(error => console.error(error));
})
