
// 너비 조절 버튼
function widthBtn(self) {
	var boxs = document.querySelectorAll(".box");
	var i = 0;
	if (self.value === "◀ ▶") {
		while (i < boxs.length) {
			boxs[i].style.width = "300px";
			i = i + 1;
		}
		self.value = "▶ ◀";
	} else {
		while (i < boxs.length) {
			boxs[i].style.width = "100px";
			i = i + 1;
		}
		self.value = "◀ ▶";
	}
}

// 높이 조절 버튼
function heightBtn(self) {
	var boxs = document.querySelectorAll(".box");
	var i = 0;
	if (self.value === "▼") {
		while (i < boxs.length) {
			boxs[i].style.height = "600px";
			i = i + 1;
		}
		self.value = "▲";
	} else {
		while (i < boxs.length) {
			boxs[i].style.height = "200px";
			i = i + 1;
		}
		self.value = "▼";
	}
}
// 텍스트 박스 높이조절 버튼
function textBoxHeightToggle(self){
	var textBox = document.querySelector('.whatNeumorphismBox')
	if(self.value === "What is Neumorphism? ▼"){
		textBox.style.height = "2500px";
		self.value = "What is Neumorphism? ▲"
	} else {
		textBox.style.height = "200px";
		self.value = "What is Neumorphism? ▼"
	}
}

// 텍스트 커스터마이징 박스 너비 조절 버튼
function clickHereBtn (self){
	var hereBox = document.querySelector('.neumorphismText')
	if(self.value === "Click here to customize the text"){
		hereBox.style.width = "90%";
		self.value = ""
	} 
}

// 배경 그리드 턴오프 버튼
function turnGridBtn (self){
	var textBox = document.querySelector('.grid')
	if(self.value === "Turn off grid background"){
		textBox.style.opacity = "0";
		self.value = "Turn on grid background"
	} else {
		textBox.style.opacity = "1";
		self.value = "Turn off grid background"
	}
}