<script type='text/javascript'>
if (typeof(Storage) != "undefined") {
	
	
	

	 
	 getColour3 = localStorage.getItem("fonttypeZ");
	 $("body").css({"font-family":getColour3});
	 
	 
	
	 



getAchievement1 = localStorage.getItem("lazy") || '0';
	if (getAchievement1 == 1) {
	document.getElementById("getAchievement1").innerHTML = "<img title='Lazy College Senior&#13;Type 300 Characters' src=\"../ASSETS/achievements/progress/lazy/" + getAchievement1 + ".png\">";};
getAchievement2 = localStorage.getItem("shakespeare") || '0';
	if (getAchievement2 == 1) {
	document.getElementById("getAchievement2").innerHTML = "<img title='Shakespeare?&#13;Type 3000 Characters' src=\"../ASSETS/achievements/progress/shakespeare/" + getAchievement2 + ".png\">";};
getAchievement3 = localStorage.getItem("dostoyevsky") || '0';
	if (getAchievement3 == 1) {
	document.getElementById("getAchievement3").innerHTML = "<img title='Dostoyevsky, surely&#13;Type 8000 Characters' src=\"../ASSETS/achievements/progress/dostoyevsky/" + getAchievement3 + ".png\">";};
getAchievement4 = localStorage.getItem("aynrand") || '0';
	if (getAchievement4 == 1) {
	document.getElementById("getAchievement4").innerHTML = "<img title='Are you Ayn Rand?&#13;Type 14000 Characters' src=\"../ASSETS/achievements/progress/aynrand/" + getAchievement4 + ".png\">";};
getAchievement5 = localStorage.getItem("monkeys") || '0';
	if (getAchievement5 == 1) {
	document.getElementById("getAchievement5").innerHTML = "<img title='1000 Monkeys, 1000 Typewriters&#13;Type 20000 Characters' src=\"../ASSETS/achievements/progress/monkeys/" + getAchievement5 + ".png\">";};
getAchievement6 = localStorage.getItem("watson") || '0';
	if (getAchievement6 == 1) {
	document.getElementById("getAchievement6").innerHTML = "<img title='You are IBM Watson&#13;Type 50000 Characters' src=\"../ASSETS/achievements/progress/watson/" + getAchievement6 + ".png\">";};
getAchievement7 = localStorage.getItem("celestia") || '0';
	if (getAchievement7 == 1) {
	document.getElementById("getAchievement7").innerHTML = "<img title='You are Princess Celestia&#13;Type 100.000 Characters' src=\"../ASSETS/achievements/progress/celestia/" + getAchievement7 + ".png\">";};
getAchievement8 = localStorage.getItem("impossibru") || '0';
	if (getAchievement8 == 1) {
	document.getElementById("getAchievement8").innerHTML = "<img title='IMPOSSIBRU&#13;CANNOT BE REAL (1 Million Characters)' src=\"../ASSETS/achievements/progress/impossibru/" + getAchievement8 + ".png\">";};
getAchievement9 = localStorage.getItem("hax") || '0';
	if (getAchievement9 == 1) {
	document.getElementById("getAchievement9").innerHTML = "<img title='HAAAAAAAX&#13;HAAAAAAAAAAAX (10 Million Characters)' src=\"../ASSETS/achievements/progress/hax/" + getAchievement9 + ".gif\">";};
	

getFolders = localStorage.getItem("foldersZ") || 'block';
$("#folders").css("display", getFolders);
				  

			

	 
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
</script>