var app = angular.module('twitch', []);

names = ["kingagnostic", "freecodecamp", "summit1g", "GoldGlove", "LIRIK", "Giantwaffle", "GamesDoneQuick", "Voyboy", "2mgovercsquared", "RiotGames", "Shortyyguy", "C9Sneaky", "Halo", "unitytech", "PhantomL0rd"];

app.controller('body', function ($scope, $http) {

  $scope.allUsers = [];
  $scope.onlineUsers = [];
  $scope.offlineUsers = [];

  $scope.data = {
    availableOptions: [{
      id: '1',
      name: 'All Users',
      array: $scope.allUsers
    }, {
      id: '2',
      name: 'Online Users',
      array: $scope.onlineUsers
    }, {
      id: '3',
      name: 'Offline Users',
      array: $scope.offlineUsers

    }],
    selectedOption: {
      id: '1',
      name: 'All Users',
      array: $scope.allUsers
    }
  };

  angular.forEach(names, function (item) {
    $.getJSON('https://api.twitch.tv/kraken/channels/' + item + '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?').success(function (data) {
      var obj = {};

      obj.name = data.name;
      obj.bio = data.bio;
      obj.followers = data.followers;
      obj.views = data.views;

      if (data.logo === null) {
        obj.logo = "img/profile-img.jpg";
      } else {
        obj.logo = data.logo;
      }

      $.getJSON('https://api.twitch.tv/kraken/streams/' + item + '?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm&callback=?').success(function (data) {

        if (data.stream == null) {
          obj.online = false;
          $scope.offlineUsers.push(obj);
        } else {
          obj.online = true;
          obj.viwers = data.stream.viewers;
          obj.previewImg = data.stream.preview.large;
          obj.gameName = data.stream.channel.game;
          obj.gameStatus = data.stream.channel.status;
          $scope.onlineUsers.push(obj);

        }

        $scope.$apply();

      });

      $scope.allUsers.push(obj);

    });

  });

}); //end
