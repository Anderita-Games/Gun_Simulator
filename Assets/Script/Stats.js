#pragma strict
var Bullets : UnityEngine.UI.Text;
var BestGun : UnityEngine.UI.Text;
var BestBullets : UnityEngine.UI.Text;
var WorstGun : UnityEngine.UI.Text;
var WorstBullets : UnityEngine.UI.Text;
var BestColor : UnityEngine.UI.Text;
var WorstColor : UnityEngine.UI.Text;
var time : UnityEngine.UI.Text;
//array shit
var Stats : GameObject;
var highest : int = -999;
var lowest : int = 9999999;
var highest2 : int = -999;
var lowest2 : int = 9999999;
var array = new Array (); //Shots Fired
var array2 = new Array (); //Seconds for Color
var i = 1;
var i2 = 1;

function Start () {
	array.length = 11;
	array2.length = 8;
	while (1 > 0) {
		yield WaitForSeconds (1);
		PlayerPrefs.SetInt("Time", PlayerPrefs.GetInt("Time")+1);
	}
}

function Update () {
	array[1] = PlayerPrefs.GetInt("Bit(Clone)");
	array[2] = PlayerPrefs.GetInt("ASCII(Clone)");
	array[3] = PlayerPrefs.GetInt("Classic(Clone)");
	array[4] = PlayerPrefs.GetInt("Nerf(Clone)");
	array[5] = PlayerPrefs.GetInt("Real(Clone)");
	array[6] = PlayerPrefs.GetInt("Revolver(Clone)");
	array[7] = PlayerPrefs.GetInt("Shotgun(Clone)");
	array[8] = PlayerPrefs.GetInt("Sniper(Clone)");
	array[9] = PlayerPrefs.GetInt("SubMachine(Clone)");
	array[10] = PlayerPrefs.GetInt("Xray(Clone)");
	
	array2[1] = PlayerPrefs.GetInt("white");
	array2[2] = PlayerPrefs.GetInt("red");
	array2[3] = PlayerPrefs.GetInt("yellow");
	array2[4] = PlayerPrefs.GetInt("green");
	array2[5] = PlayerPrefs.GetInt("blue");
	array2[6] = PlayerPrefs.GetInt("purple");
	array2[7] = PlayerPrefs.GetInt("gray");
	
	Bullets.text = "Shots fired: " + PlayerPrefs.GetInt("Bullets");
	BestGun.text = "Favorite gun: " + PlayerPrefs.GetString("BestGun");
	BestBullets.text = "Shots fired with favorite gun: " + PlayerPrefs.GetInt("BestBullets");
	WorstGun.text = "Least Favorite gun: " + PlayerPrefs.GetString("WorstGun");
	WorstBullets.text = "Shots fired with least favorite gun: " + PlayerPrefs.GetInt("WorstBullets");
	BestColor.text = "Favorite color: " + PlayerPrefs.GetString("BestColor");
	WorstColor.text = "Least favourite color: " + PlayerPrefs.GetString("WorstColor");
	time.text = "Time wasted: " + (PlayerPrefs.GetInt("Time") / 60) + " Minutes";
	Check();
	Check2();
}
 
//populate array
function Check (){
	var current : int;
	current = array[i];
	if (current > highest) {
		highest = array[i];
		Setter(); //Sets name for most used for gun
	}
	if (current < lowest) {
		lowest = array[i];
		Setter2(); //Sets name for least used for gun
	}else if (current == lowest && Stats.activeInHierarchy == false) {
		lowest = 9999999;
	}
	
	if (i == 10) {
		i = 1;
	}else {
		i++;
	} 
	    
}

function Setter () { //Sets most used gun and amount
	if (i == 1) {
		PlayerPrefs.SetString("BestGun", "Bit Gun");
	}else if (i == 2) {
		PlayerPrefs.SetString("BestGun", "ASCII Gun");
	}else if (i == 3) {
		PlayerPrefs.SetString("BestGun", "Classic Gun");
	}else if (i == 4) {
		PlayerPrefs.SetString("BestGun", "Nerf Gun");
	}else if (i == 5) {
		PlayerPrefs.SetString("BestGun", "Real Gun");
	}else if (i == 6) {
		PlayerPrefs.SetString("BestGun", "Revolver Gun");
	}else if (i == 7) {
		PlayerPrefs.SetString("BestGun", "Shotgun Gun");
	}else if (i == 8) {
		PlayerPrefs.SetString("BestGun", "Sniper Gun");
	}else if (i == 9) {
		PlayerPrefs.SetString("BestGun", "Sub Machine Gun");
	}else if (i == 10) {
		PlayerPrefs.SetString("BestGun", "X Ray Gun");
	}
	PlayerPrefs.SetInt("BestBullets", highest);
}

function Setter2 () { //Sets least used gun and amount
	if (i == 1) {
		PlayerPrefs.SetString("WorstGun", "Bit Gun");
	}else if (i == 2) {
		PlayerPrefs.SetString("WorstGun", "ASCII Gun");
	}else if (i == 3) {
		PlayerPrefs.SetString("WorstGun", "Classic Gun");
	}else if (i == 4) {
		PlayerPrefs.SetString("WorstGun", "Nerf Gun");
	}else if (i == 5) {
		PlayerPrefs.SetString("WorstGun", "Real Gun");
	}else if (i == 6) {
		PlayerPrefs.SetString("WorstGun", "Revolver Gun");
	}else if (i == 7) {
		PlayerPrefs.SetString("WorstGun", "Shotgun Gun");
	}else if (i == 8) {
		PlayerPrefs.SetString("WorstGun", "Sniper Gun");
	}else if (i == 9) {
		PlayerPrefs.SetString("WorstGun", "Sub Machine Gun");
	}else if (i == 10) {
		PlayerPrefs.SetString("WorstGun", "X Ray Gun");
	}
	PlayerPrefs.SetInt("WorstBullets", lowest);
}

//Colors
function Check2 (){
	var current2 : int;
	current2 = array2[i];
	if (current2 > highest2 && Stats.activeInHierarchy == false) {
		highest2 = array2[i2];
		Setter3(); //Sets name for most used for gun
	}
	if (current2 < lowest2) {
		lowest2 = array2[i2];
		Setter4(); //Sets name for least used for gun
	}else if (current2 == lowest2 && Stats.activeInHierarchy == false) {
		lowest2 = 9999999;
	}
	
	if (i2 == 7) {
		i2 = 1;
	}else {
		i2++;
	}    
}

function Setter3 () { //Sets most used color
	if (i2 == 1) {
		PlayerPrefs.SetString("BestColor", "White");
	}else if (i2 == 2) {
		PlayerPrefs.SetString("BestColor", "Red");
	}else if (i2 == 3) {
		PlayerPrefs.SetString("BestColor", "Yellow");
	}else if (i2 == 4) {
		PlayerPrefs.SetString("BestColor", "Green");
	}else if (i2 == 5) {
		PlayerPrefs.SetString("BestColor", "Blue");
	}else if (i2 == 6) {
		PlayerPrefs.SetString("BestColor", "Purple");
	}else if (i2 == 7) {
		PlayerPrefs.SetString("BestColor", "Gray");
	}
}

function Setter4 () { //Sets least used color
	if (i2 == 1) {
		PlayerPrefs.SetString("WorstColor", "White");
	}else if (i2 == 2) {
		PlayerPrefs.SetString("WorstColor", "Red");
	}else if (i2 == 3) {
		PlayerPrefs.SetString("WorstColor", "Yellow");
	}else if (i2 == 4) {
		PlayerPrefs.SetString("WorstColor", "Green");
	}else if (i2 == 5) {
		PlayerPrefs.SetString("WorstColor", "Blue");
	}else if (i2 == 6) {
		PlayerPrefs.SetString("WorstColor", "Purple");
	}else if (i2 == 7) {
		PlayerPrefs.SetString("WorstColor", "Gray");
	}
}