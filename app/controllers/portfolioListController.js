  portfolioApp.controller("PortfolioListController", function($scope, PortService, FIREBASE_URL, $firebaseArray, $firebaseObject){

    $scope.portfolios = [];

    var ref = new Firebase(FIREBASE_URL);
    var postRef = ref.child('portfolios');
    $scope.portfolios = $firebaseArray(postRef);

    // console.log(postRef.key());

    var portSnapshot;
    var date;

postRef.once('value', function(dataSnapshot){
  portSnapshot = dataSnapshot;
  var portDate = portSnapshot.child('-JoBpco9MboOJKlK_31R').child('creationDate')
  // console.log("Portdate is " + portDate.val());
  var portdateVal = portDate.val()  
  date = new Date(portdateVal) 
  // console.log("JS date is " + date)
  $scope.creationDate = PortService.formatDate(date);
  console.log($scope.creationDate)
  // console.log(portSnapshot.val());
}, function (errorObject) {
  console.log("The read operation failed: " + errorObject.code);
});



// API Key: Ao2AL3xLQ9GAam03ar2oyz
//{"url":"https://www.filepicker.io/api/file/bo79ExERKmz6gv8kOPNU",
//"filename":"Pierre_LeGrand.jpg",
//"mimetype":"image/jpeg",
//"size":168177,
//"isWriteable":true}

var imageUpped;

$scope.addImage = function( new_image ){

filepicker.setKey("AOyREerJIT8iQwL6JX9cWz");

filepicker.pick(
  {
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
    services:['COMPUTER'],
  },
  function(Blob){
    imageUpped = Blob.url;
    console.log(imageUpped);
  },
  function(FPError){
    console.log(FPError.toString());
  }
);
}



    $scope.addPortfolio = function( new_portfolio ) {

      var pushRef = new Firebase(FIREBASE_URL + '/portfolios');

      pushRef.push({
        name: new_portfolio.name,
        date: Firebase.ServerValue.TIMESTAMP,
        title: new_portfolio.title,
        description: new_portfolio.description,
        imageurl: imageUpped 
      });

    };



    // postRef.set({
    //   'vessel1309': {
    //     name: 'vessel1309', 
    //     title: 'Call of Booty', 
    //     date: '2013-09-01', 
    //     description: 'Arrrgh mateys! This be the finest vessel sailing these seas that yer eyes ever laid sight on. Arrrgh.', 
    //     imageurl: 'images/drunkenPirate_thumb3.png' 
    //   },

    //   'innocents1404': {
    //     name: 'innocents1404', 
    //     title: 'The Sack of the Innocents', 
    //     date: '2014-04-15', 
    //     description: 'This be a detail of the sacking of the innocents where I played an important role as business analyst and in implementation.', 
    //     imageurl: 'images/drunkenPirate_thumb2.png' 
    //   },

    //   'firstmate1210': {
    //     name: 'firstmate1210', 
    //     title: 'Pipe and First Mate', 
    //     date: '2012-10-01', 
    //     description: 'After a hard day of lootin\' and shootin\' I like to relax with my best mates and tally up the days booty.', 
    //     imageurl: 'images/drunkenPirate_thumb1.png' }

    //   });

    // $scope.addPortfolio = function( new_portfolio ) {
    //   $scope.portfolios.push( new_portfolio );
    //   $scope.add_portfolio = {};
    // };

  });

























