#pragma strict
var UI : GameObject;
var Guns : GameObject;
var Custom : GameObject;
var Stats : GameObject;
var Abouts : GameObject;
var Helper : GameObject;

var pBit : GameObject;
var pASCII : GameObject;
var pClassic : GameObject;
var pNerf : GameObject;
var pReal : GameObject;
var pRevolver : GameObject;
var pShotgun : GameObject;
var pSniper : GameObject;
var pSubMachine : GameObject;
var pXRay : GameObject;

function Update () {
	if (Input.GetMouseButtonDown(0) && (PlayerPrefs.GetString("Active") == "true" || PlayerPrefs.GetString("Active") == "false" || PlayerPrefs.GetString("Active") == "false2")) {
		if(!EventSystems.EventSystem.current.IsPointerOverGameObject()) {
			Check();
		}
	}
	if (PlayerPrefs.GetString("Active") == "false") { //Animation just Died 
		PlayerPrefs.SetString("Active", "false2");	  //Set as nontrigger for everything
		Check();									  //Placeholder is 
	}
}

function Toggle () {
	if (UI.active == true) {
		UI.SetActive (false);
		Guns.SetActive (false);
	}else if (UI.active == false) {
		UI.SetActive (true);
		Helper.SetActive (false);
	}
}

function ToggleGun () {
	if (Guns.active == true) {
		Guns.SetActive (false);
	}else if (Guns.active == false) {
		Guns.SetActive (true);
		Stats.SetActive (false);
		Custom.SetActive (false);
		Abouts.SetActive (false);
		PlayerPrefs.SetString("Active", "true");
	}
}

function Statss() {
	PlayerPrefs.SetString("Active", "falso");
	if (Stats.active == true) {
		Stats.SetActive (false);
	}else if (Stats.active == false) {
		Stats.SetActive (true);
		Guns.SetActive (false);
		Custom.SetActive (false);
		Abouts.SetActive (false);
	}
}

function Settings() {
	PlayerPrefs.SetString("Active", "falso");
	if (Custom.active == true) {
		Custom.SetActive (false);
	}else if (Custom.active == false) {
		Custom.SetActive (true);
		Guns.SetActive (false);
		Stats.SetActive (false);
		Abouts.SetActive (false);
	}
}

function About() {
	PlayerPrefs.SetString("Active", "falso");
	if (Abouts.active == true) {
		Abouts.SetActive (false);
	}else if (Abouts.active == false) {
		Abouts.SetActive (true);
		Guns.SetActive (false);
		Stats.SetActive (false);
		Custom.SetActive (false);
	}
}

function EXIT () {
	Application.Quit();
}

//GUNS
function Bit () {
	PlayerPrefs.SetString("Gun", "8-bit");
	Killer();
}

function ASCII () {
	PlayerPrefs.SetString("Gun", "ascii");
	Killer();
}

function Classic () {
	PlayerPrefs.SetString("Gun", "classic");
	Killer();
}

function Nerf () {
	PlayerPrefs.SetString("Gun", "nerf");
	Killer();
}

function Real () {
	PlayerPrefs.SetString("Gun", "real");
	Killer();
}

function Revolver () {
	PlayerPrefs.SetString("Gun", "revolver");
	Killer();
}

function Shotgun () {
	PlayerPrefs.SetString("Gun", "shotgun");
	Killer();
}

function Sniper () {
	PlayerPrefs.SetString("Gun", "sniper");
	Killer();
}

function SubMachine () {
	PlayerPrefs.SetString("Gun", "sub-machine");
	Killer();
}

function XRays () {
	PlayerPrefs.SetString("Gun", "x-ray");
	Killer();
}

function Killer () {
	PlayerPrefs.SetString("Active", "falso");
	yield WaitForSeconds (.0001);
	PlayerPrefs.SetString("Active", "false");
}


function Check () {
	if (PlayerPrefs.GetString("Gun") == "8-bit") {
		Instantiate(pBit, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "ascii") {
		Instantiate(pASCII, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "classic") {
		Instantiate(pClassic, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "nerf") {
		Instantiate(pNerf, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "real") {
		Instantiate(pReal, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "revolver") {
		Instantiate(pRevolver, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "shotgun") {
		Instantiate(pShotgun, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "sniper") {
		Instantiate(pSniper, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "sub-machine") {
		Instantiate(pSubMachine, new Vector3(1, 0, 0), Quaternion.identity);
	}else if (PlayerPrefs.GetString("Gun") == "x-ray") {
		Instantiate(pXRay, new Vector3(1, 0, 0), Quaternion.identity);
	}
}