#pragma strict
var SToggle : UnityEngine.UI.Toggle;
var BToggle : UnityEngine.UI.Toggle;

function Update () {
	Assigner();
}

function Start () {
	ToggleSet();
	while (1 > 0) {
		yield WaitForSeconds (1);
		Recorder();
	}
}

function Recorder() {
	PlayerPrefs.SetInt(PlayerPrefs.GetString("Color"), PlayerPrefs.GetInt(PlayerPrefs.GetString("Color"))+1);
	Debug.Log(PlayerPrefs.GetInt("red"));
	Debug.Log(PlayerPrefs.GetInt("yellow"));
}
//Toggle Shit
function ToggleSet () {
	if (PlayerPrefs.GetInt("SToggle") == 1) {
		SToggle.isOn = true;
		AudioListener.volume = 100;
	}else if (PlayerPrefs.GetInt("SToggle") == 2) {
		SToggle.isOn = false;
		AudioListener.volume = 0;
	}else if (PlayerPrefs.GetInt("SToggle") == 0){
		PlayerPrefs.SetInt("SToggle", 1);
	}
	if (PlayerPrefs.GetInt("BToggle") == 1) {
		BToggle.isOn = true;
	}else if (PlayerPrefs.GetInt("BToggle") == 2) {
		BToggle.isOn = false;
	}
}

function SToggler () {
	if (SToggle.isOn == true) {
		PlayerPrefs.SetInt("SToggle", 1);
		AudioListener.volume = 100;
		Debug.Log("Sound is on bro");
	}else if (SToggle.isOn == false) {
		PlayerPrefs.SetInt("SToggle", 2);
		AudioListener.volume = 0;
		Debug.Log("Sound is off bro");
	}
}

function BToggler () {
	if (BToggle.isOn == true) {
		PlayerPrefs.SetInt("BToggle", 1);
		Debug.Log("Sound is broken");
	}else if (BToggle.isOn == false) {
		PlayerPrefs.SetInt("BToggle", 2);
		Debug.Log("Sound isnt broken");
	}
}

//Color changing Shit
function Assigner () {
	if (PlayerPrefs.GetString("Color") == "white") {
		Camera.main.backgroundColor = Color.white;
	}else if (PlayerPrefs.GetString("Color") == "red") {
		Camera.main.backgroundColor = Color.red;
	}else if (PlayerPrefs.GetString("Color") == "yellow") {
		Camera.main.backgroundColor = Color(254, 141, 0, 1);
	}else if (PlayerPrefs.GetString("Color") == "green") {
		Camera.main.backgroundColor = Color.green;
	}else if (PlayerPrefs.GetString("Color") == "blue") {
		Camera.main.backgroundColor = Color.blue;
	}else if (PlayerPrefs.GetString("Color") == "purple") {
		Camera.main.backgroundColor = Color(199, 0, 255);
	}else if (PlayerPrefs.GetString("Color") == "gray") {
		Camera.main.backgroundColor = Color.gray;
	}
}

function Randoms () {
	var number = Random.Range(1, 8);
	if (number == 1) {
		PlayerPrefs.SetString("Color", "white");
	}else if (number == 2) {
		PlayerPrefs.SetString("Color", "gray");
	}else if (number == 3) {
		PlayerPrefs.SetString("Color", "red");
	}else if (number == 4) {
		PlayerPrefs.SetString("Color", "purple");
	}else if (number == 5) {
		PlayerPrefs.SetString("Color", "blue");
	}else if (number == 6) {
		PlayerPrefs.SetString("Color", "green");
	}else if (number == 7) {
		PlayerPrefs.SetString("Color", "yellow");
	}
} 

function White() {
	PlayerPrefs.SetString("Color", "white");
}

function Red() {
	PlayerPrefs.SetString("Color", "red");
}

function Yellow() {
	PlayerPrefs.SetString("Color", "yellow");
}

function Green() {
	PlayerPrefs.SetString("Color", "green");
}

function Blue() {
	PlayerPrefs.SetString("Color", "blue");
}

function Purple() {
	PlayerPrefs.SetString("Color", "purple");
}

function Gray() {
	PlayerPrefs.SetString("Color", "gray");
}