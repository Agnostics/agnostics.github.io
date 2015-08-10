var app = angular.module('twitch', []);

names = ["kingagnostic", "freecodecamp", "summit1g", "GoldGlove", "LIRIK", "Giantwaffle", "GamesDoneQuick", "Voyboy", "2mgovercsquared", "RiotGames", "Shortyyguy", "Sinqnew", "Halo", "unitytech", "PhantomL0rd"];

app.controller('body', function($scope, $http) {

  $scope.allUsers = [];
  $scope.onlineUsers = [];
  $scope.offlineUsers = [];

  angular.forEach(names, function(item) {
    $.getJSON('https://api.twitch.tv/kraken/channels/' + item + '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?').success(function(data) {
      var obj = {};

      obj.name = data.name;
      obj.bio = data.bio;
      obj.followers = data.followers;
      obj.views = data.views;

      if (data.logo === null) {
        obj.logo = "http://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg";
      } else {
        obj.logo = data.logo;
      }

      $.getJSON('https://api.twitch.tv/kraken/streams/' + item + '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?').success(function(data) {
        if (data.stream == null) {
          obj.online = false;
        } else {
          obj.online = true;
        }

        $scope.$apply();


      });

      $scope.allUsers.push(obj);
      $scope.$apply();

    });



  });

}); //end