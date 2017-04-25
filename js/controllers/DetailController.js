(function() {
    'use strict';

    angular
        .module('routing')
        .controller('DetailController', function(API,$stateParams) {
        	const vm = this;

        	let singleData = API.getSingleImage($stateParams.id);
        	singleData.then(res=>{
        		console.log(res);
        		vm.image = res.data;
        	})
        	
        });
     
})();