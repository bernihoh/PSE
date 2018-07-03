angular.module('app')
.controller('HomeController', ['$scope',  'sigma',
            function ($scope,  sigma) {
    $scope.sigma = sigma;
    /*
            @description: only used by first drawing,would also add sigma events
        */
         $scope.drawGraph =  function() {

           sigma.draw($scope.graphData);
           sigma.s.bind('overNode', function(e) { //active action only work when state is all
                if($scope.state == $scope.states['all']) {
                    sigma.activeNodes(e.data.node.id);
                }
            }).bind('outNode', function(e) {
                if($scope.state == $scope.states['all']){
                    sigma.activeNodes();
                }
            }).bind('clickStage', function(e) {
                if (!$scope.isDragging && $scope.state !== $scope.states['all']) { // just click, not dragging
                    $scope.$apply(function() {
                        $scope.gotoAllBrandsState();
                        $scope.setSigmaAnimation(!$('#animation-button').prop('checked'));
                    })
                }
            }).bind('clickNode', function(e) {
                // transparent node should be filter out
                if(e.data.node.active) {
                    // trigger outNode can help remove the hightlight effect on clicked node
                    e.data.renderer.dispatchEvent('outNode');
                    $scope.$apply(function() {
                        $scope.gotoCompanyState(e.data.node.id);
                    })
                }
            });
        };
 }]);