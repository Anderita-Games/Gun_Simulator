#pragma strict
var sBit:AudioClip;
var sASCII:AudioClip;
var sClassic:AudioClip;
var sNerf:AudioClip;
var sReal:AudioClip;
var sRevolver:AudioClip;
var sShotgun:AudioClip;
var sSniper:AudioClip;
var sSubMachine:AudioClip;
var sXRay:AudioClip;

var Bit : GameObject;
var ASCII : GameObject;
var Classic : GameObject;
var Nerf : GameObject;
var Real : GameObject;
var Revolver : GameObject;
var Shotgun : GameObject;
var Sniper : GameObject;
var SubMachine : GameObject;
var XRay : GameObject;

function Update () {	
	if (Input.GetMouseButtonDown(0)) {
		if(!EventSystems.EventSystem.current.IsPointerOverGameObject()) {
			Fire();
		}
	}
}

function Fire () {
	if(PlayerPrefs.GetString("Active") == "falso") {
		
	}else {
		yield WaitForSeconds (.0001);
		if (PlayerPrefs.GetString("Gun") == "8-bit") {
			Instantiate(Bit, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				GetComponent.<AudioSource>().PlayOneShot(sBit);
			}
		}else if (PlayerPrefs.GetString("Gun") == "ascii") {
			Instantiate(ASCII, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				yield WaitForSeconds (.73);
				GetComponent.<AudioSource>().PlayOneShot(sASCII);
			}
		}else if (PlayerPrefs.GetString("Gun") == "classic") {
			Instantiate(Classic, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				GetComponent.<AudioSource>().PlayOneShot(sClassic);
			}
		}else if (PlayerPrefs.GetString("Gun") == "nerf") {
			Instantiate(Nerf, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				yield WaitForSeconds (.48);
				GetComponent.<AudioSource>().PlayOneShot(sNerf);
			}
		}else if (PlayerPrefs.GetString("Gun") == "real") {
			Instantiate(Real, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				yield WaitForSeconds (.35);
				GetComponent.<AudioSource>().PlayOneShot(sReal);
			}
		}else if (PlayerPrefs.GetString("Gun") == "revolver") {
			Instantiate(Revolver, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				yield WaitForSeconds (.33);
				GetComponent.<AudioSource>().PlayOneShot(sRevolver);
			}
		}else if (PlayerPrefs.GetString("Gun") == "shotgun") {
			Instantiate(Shotgun, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				GetComponent.<AudioSource>().PlayOneShot(sShotgun);
			}
		}else if (PlayerPrefs.GetString("Gun") == "sniper") {
			Instantiate(Sniper, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				GetComponent.<AudioSource>().PlayOneShot(sSniper);
			}
		}else if (PlayerPrefs.GetString("Gun") == "sub-machine") {
			Instantiate(SubMachine, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				GetComponent.<AudioSource>().PlayOneShot(sSubMachine);
			}
		}else if (PlayerPrefs.GetString("Gun") == "x-ray") {
			Instantiate(XRay, new Vector3(1, 0, 0), Quaternion.identity);
			if (PlayerPrefs.GetInt("BToggle") == 1) {
				Broken();
			}else {
				yield WaitForSeconds (.9471);
				GetComponent.<AudioSource>().PlayOneShot(sXRay);
			}
		}
	}
}

function Broken () {
	var number = Random.Range(1, 11);
	if (number == 1) {
		GetComponent.<AudioSource>().PlayOneShot(sBit);
	}else if (number == 2) {
		GetComponent.<AudioSource>().PlayOneShot(sASCII);
	}else if (number == 3) {
		GetComponent.<AudioSource>().PlayOneShot(sClassic);
	}else if (number == 4) {
		GetComponent.<AudioSource>().PlayOneShot(sNerf);
	}else if (number == 5) {
		GetComponent.<AudioSource>().PlayOneShot(sReal);
	}else if (number == 6) {
		GetComponent.<AudioSource>().PlayOneShot(sRevolver);
	}else if (number == 7) {
		GetComponent.<AudioSource>().PlayOneShot(sShotgun);
	}else if (number == 8) {
		GetComponent.<AudioSource>().PlayOneShot(sSniper);
	}else if (number == 9) {
		GetComponent.<AudioSource>().PlayOneShot(sSubMachine);
	}else if (number == 10) {
		GetComponent.<AudioSource>().PlayOneShot(sXRay);
	}else {
		Debug.Log("Something is broken for broken audio");
	}
}