(function() {
    'use strict';

    angular
        .module('routing')
        .controller('AddController', function(API,$state) {
        	const vm = this;
        	vm.submitForm = function(){
        		//console.log(vm.post);
        		let postedData = API.postData(vm.post);
        		postedData.then(res=>{
        			$state.go('home')
        		})
        	}
        });	
     
})();