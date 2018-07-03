angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8090/graph').
	 //$http.get('http://localhost:8090/greeting').
        then(function(response) {
           $scope.greeting = response.data;	
			$scope.s = new sigma({ 
			graph: response.data,
			container: 'container',
			settings: {
				defaultNodeColor: '#ec5148',
				edgeLabelSize: 'proportional'
			}
			});		   
			$scope.s.refresh();
			$scope.next_dis = true;
			//$scope.s.startForceAtlas2();
        });

		$scope.test = function() {  
			var n = $scope.s.graph.nodes('0');	
			n.color = '#000';
			$scope.s.refresh();			
		};	
		
		$scope.bfs = function() {
			var response = $http.get('http://localhost:8090/bfs').
			then(function(response) {
           $scope.bfs_data = response.data;
		   $scope.bfs_index = 0;
		   $scope.bfs_dis = true;
		   $scope.next_dis = false;
			
        });
			
			
		};
		
		$scope.bfs_next = function() {  
			if ($scope.bfs_index >= $scope.s.graph.nodes().length ) {
				$scope.bfs_index = 0;
			}
			var n = $scope.s.graph.nodes($scope.bfs_data[$scope.bfs_index]);	
			$scope.bfs_index = $scope.bfs_index + 1;
			if (n.color == '#000') {
				n.color = '#0A0';
			} else {
				n.color = '#000';
			}
			$scope.s.refresh();	
			
		};
});