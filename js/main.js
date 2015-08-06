var app = angular.module('twitch', []);

names = ["kingagnostic", "freecodecamp", "summit1g", "GoldGlove", "LIRIK", "Giantwaffle", "GamesDoneQuick", "Voyboy", "2mgovercsquared", "RiotGames", "Shortyyguy", "Sinqnew", "Halo", "unitytech", "PhantomL0rd"];

app.controller('body', function ($scope, $http) {

  $scope.allUsers = [];
  $scope.onlineUsers = [];
  $scope.offlineUsers = [];

  angular.forEach(names, function (item) {
    $.getJSON('https://api.twitch.tv/kraken/users/' + item + '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?').success(function (data) {

      console.log(data);

      var obj = {};

      obj.name = data.display_name;

      if (data.logo === null) {

        obj.logo = "http://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg";
      } else {
        obj.logo = data.logo;
      }

      $scope.allUsers.push(obj);
      $scope.$apply();

    });

  });

}); //end
