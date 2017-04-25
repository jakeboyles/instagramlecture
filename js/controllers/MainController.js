(function() {
    'use strict';

    angular
        .module('routing')
        .controller('MainController', function(API,$state) {
        	const vm = this;

        	let getData = API.getData();
        	getData.then(res=>{
        		vm.images = res.data.images;
        	})

        	vm.likeImage = (item)=>{
        		let tacos = API.likeImage(item._id);
        		tacos.then(res=>{
        			item.likes = res.data.data.likes+1;
        		})
        	}

            vm.route = (id)=> {
                $state.go('detail',{id:id});
            }
        	
        });
     
})();