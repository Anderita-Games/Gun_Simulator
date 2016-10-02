#pragma strict

function Start () {
	Check();
}

function Update () {
	if(PlayerPrefs.GetString("Active") == "falso") {
		Destroy (gameObject);
	}
}

function Check () {
	PlayerPrefs.SetString("Active", "true"); //Animation is alive
	yield WaitForSeconds (.001);
	if (this.name == "Bit(Clone)"){
		yield WaitForSeconds (.667); //How long the animation is
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "ASCII(Clone)"){
		yield WaitForSeconds (1.917);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "Classic(Clone)"){
		yield WaitForSeconds (.417);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "Nerf(Clone)"){
		yield WaitForSeconds (2.083);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "Real(Clone)"){
		yield WaitForSeconds (1.5);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "Revolver(Clone)"){
		yield WaitForSeconds (.417);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "Shotgun(Clone)"){
		yield WaitForSeconds (1);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "Sniper(Clone)"){
		yield WaitForSeconds (2.333);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "SubMachine(Clone)"){
		yield WaitForSeconds (2.5);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+49);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else if (this.name == "Xray(Clone)"){
		yield WaitForSeconds (2.583);
		PlayerPrefs.SetInt("Bullets", PlayerPrefs.GetInt("Bullets")+1);
		PlayerPrefs.SetInt(this.name, PlayerPrefs.GetInt(this.name)+1);
	}else {
		Debug.Log("Unknown object created"); //tells u that u are a failure
		Debug.Log("Object name:" + this.name);
	}
	Destroy (gameObject);
	PlayerPrefs.SetString("Active", "false"); //Triggers Placeholder's Birth
}