portfolioApp.service("PortService", [function($scope){

	//service running all the time
	console.log("made it inside the port service")
	
	var myObject = {
		formatDate: function(serverdate){

			var monthNames = [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December"
			]

		var date = new Date()
		var day = serverdate.getDate()
		var month = monthNames[serverdate.getMonth()]
		var year = serverdate.getFullYear()

		
		return month + "-" + day + "-" + year

	}}//myObj

	return myObject


}])