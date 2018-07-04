angular.module('demo', [])
.controller('Hello', function($scope, $http) {	
    $http.get('http://localhost:8090/graph').
	 //$http.get('http://localhost:8090/greeting').
        then(function(response) {
           $scope.greeting = 'thomas';	
			
			$scope.dis_bfs = true;
			$scope.dis_bfs_next = true;
			$scope.dis_heuristic = true;
			//$scope.s.startForceAtlas2();
        });
		
		$scope.test = function() {  
			var n = $scope.s.graph.nodes('0');	
			n.color = '#000';
			$scope.s.refresh();			
		};
		
			$scope.runHeuristic = function() {  			
			$scope.s.graph.clear();
			$scope.s.refresh();								
			//n.color = '#000';
			var response = $http.get('http://localhost:8090/runHeuristic').								
			then(function(response) {
				$scope.re = response;
				var i;
				$scope.colors = [];				
				
				for (i = 0;i< response.data.nodes.length;i++) {
				  if ($scope.colors[response.data.nodes[i].color] == null) {
					  $scope.colors[response.data.nodes[i].color]=getRandomColor();
				  }else {
				  }
				  response.data.nodes[i].color = $scope.colors[response.data.nodes[i].color];				  
				}
				
				for (i = 0;i< response.data.edges.length;i++) {
					if ($scope.colors[response.data.edges[i].color] == null) {
					  $scope.colors[response.data.edges[i].color]=getRandomColor();
				  }else {
				  }
					response.data.edges[i].color = $scope.colors[response.data.edges[i].color];
				}
				//$scope.s.graph.clear();
				//$scope.s.refresh();								
				$scope.dis_bfs = false;
			$scope.dis_bfs_next = true;
				$scope.s = new sigma({ 
			graph: response.data,
			container: 'container',
			settings: {
				defaultNodeColor: '#ec5148',
				edgeLabelSize: 'proportional'
			}
			});		   
			$scope.s.refresh();						
        });			
		};
		
		$scope.genGraph = function() {
			
			
			if ($scope.s != null) {
			$scope.s.graph.clear();
			$scope.s.refresh();
			}
			
			
			var nOfVertices = parseInt($scope.nOfVertices);
			var maxDegree = parseInt($scope.maxDegree);
			if (nOfVertices == NaN) nOfVertices = 6;
			if (maxDegree == NaN) maxDegree = 3;
			//let params = new URLSearchParams();
			//let headers = new Headers();
			//headers.append('Content-Type', 'application/json');			
			//headers.append("maxDegree", maxDegree);
			//headers.append("nOfVertices", nOfVertices);
			//params.append("maxDegree", maxDegree);
			//params.append("nOfVertices", nOfVertices);
			
			let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		    let cpParams = new URLSearchParams();
		   // cpParams.set("maxDegree", maxDegree);  
			cpParams.set("nOfVertices", nOfVertices);  
			
			 let myHeaders = new Headers(); 
			myHeaders.set('Content-Type', 'application/json');
			myHeaders.set('Accept', 'text/plain');  
			let myParams = new URLSearchParams();
			myParams.set('nOfVertices', 3);
			//myParams.set('writer', wtr);	
			//let options = new RequestOptions({ headers: myHeaders, params: myParams });
			//let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
			
			$scope.dis_bfs = false;
			$scope.dis_bfs_next = true;
			$scope.dis_heuristic = false;
			var response = $http.get('http://localhost:8090/genGraph',{params: {'nOfVertices': nOfVertices,'maxDegree':maxDegree}}).
				then(function(response) {
						$scope.s = new sigma({ 
			graph: response.data,
			container: 'container',
			settings: {
				defaultNodeColor: '#ec5148',
				edgeLabelSize: 'proportional'
			}
			});		   
			$scope.s.refresh();			
					
				
			
		});};
		
		$scope.bfs = function() {
			$scope.dis_bfs = true;
			$scope.dis_bfs_next = false;
			$scope.dis_heuristic = false;
			var response = $http.get('http://localhost:8090/bfs').
				then(function(response) {
				$scope.bfs_data = response.data;
				$scope.bfs_index = 0;
			
		});};

		$scope.bfs_next = function() {  
			if ($scope.bfs_index >= $scope.s.graph.nodes().length) {
				$scope.bfs_index = 0;
			}
			var n = $scope.s.graph.nodes($scope.bfs_data[$scope.bfs_index]);	
			$scope.bfs_index = $scope.bfs_index + 1;
			if (n.color == '#000') {
				n.color = '#0A0';
				//n.color = getRandomColor();
			} else {
				n.color = '#000';
				//n.color = getRandomColor();
			}
			$scope.s.refresh();	
		};		
});