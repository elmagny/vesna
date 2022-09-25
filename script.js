$(document).ready(function() {
	$.getJSON
	('https://opensheet.vercel.app/11MKk-naN3BMlpU23_8gCBVHZY6alRCABer8ZgEsWAcY/Лист1', 
	function(data) {
		data.forEach(function(itemLi) {
			let item = document.createElement('li');
			item.innerText = (itemLi['PLU'] + ' ' + itemLi['Наименование товар']).toLowerCase();
			
			//document.body.append(item);
			$('.elastic').append(item);
		})
		
	});
});


document.querySelector('#elastic').oninput = function() {
	let val = this.value.trim().toLowerCase();
	let elastcItems = document.querySelectorAll('.elastic li');
	if (val != '') {
		setTimeout(() => {
			elastcItems.forEach(function(elem) {
				if (elem.innerText.search(val) == -1) {
					elem.classList.add('hide');
					elem.innerHTML = elem.innerText.toLowerCase();
				} else {
					elem.classList.remove('hide');
					let str = elem.innerText;
					elem.innerHTML = innerMark(str, elem.innerText.search(val), val.length);
				}
			});
		}, 1500);
			
	} else {
		setTimeout(() => {
			elastcItems.forEach(function(elem) {
				elem.classList.remove('hide');
				elem.innerHTML = elem.innerText.toLowerCase();
	
			});
		}, 1500);
		
	}
}

function innerMark(string, pos, len) {

	return string.slice(0, pos)+'<mark>'+string.slice(pos, pos + len)+'</mark>'+string.slice(pos + len);
}
