/* 按钮控制背景音乐 */
var isplaying = false;

function control() {
	if (isplaying) {
		document.getElementById("bgm").pause();
		document.getElementById("bgmbutton").innerHTML = "播放背景音乐";
	} else {
		document.getElementById("bgm").play();
		document.getElementById("bgmbutton").innerHTML = "停止背景音乐";
	}
	isplaying = !isplaying;
}

/* 在线计算器*/
function addToResult(value) {
	document.getElementById("result").value += value;
}

function clearResult() {
	document.getElementById("result").value = "";
}

function calculate() {
	var result = eval(document.getElementById("result").value);
	document.getElementById("result").value = result;
}


function play() {
	var fixedUrl = "http://www.wmxz.wang/video.php?url="; // 固定网址
	var userUrl = document.getElementById("url").value; // 用户输入的网址
	var newUrl = fixedUrl + userUrl; // 合并后的网址

	window.location.href = newUrl; // 跳转到新网址
}