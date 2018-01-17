#pragma strict

function Update () {
	Check();
}

function Check () {
	if (PlayerPrefs.GetString("Active") == "false" || PlayerPrefs.GetString("Active") == "falso" || PlayerPrefs.GetString("Active") == "true") { //Animation is active
		Destroy (gameObject);
	}
}