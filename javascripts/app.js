var app = angular.module('app', []);

app.controller('ConvertCtrl', ['$scope', function($scope){

  $scope.error = false;

  $scope.convertBtn = function() {

    // 何も入力されてないとき
    if(!$scope.text) {
      $scope.error = true;

      return;
    }

    // path変換
    var text = $scope.text,
       isWin = text.indexOf('\\') > -1,
       isMac = text.indexOf('/') > -1;

    if (isWin) {
      text = text.replace(/\\/g, '/');
      text = 'smb:' + text;
    } else if (isMac) {
      text = text.replace(/^smb:\/\//, '\\\\');
      text = text.replace(/\//g, '\\');
    } else {
      // pathが入力されてないとき
      $scope.error = true;

      return;
    }

    $scope.error = false;
    $scope.path = text;


  };


}]);