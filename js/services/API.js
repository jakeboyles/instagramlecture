(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http){

			return {
			    postData:(formData)=>{
			    	return $http({
			    		method:"POST",
			    		data:formData,
			    		headers:{X_CSRF_TOKEN:"jake"},
			    		url:`http://instagramcloneclass.herokuapp.com/image/post`,
			    	})
			    },
			    getData:()=>{
			    	return $http({
			    		method:"GET",
			    		headers:{X_CSRF_TOKEN:"jake"},
			    		url:`http://instagramcloneclass.herokuapp.com/images`,
			    	})
			    },
			    getSingleImage:(id)=>{
			    	return $http({
			    		method:"GET",
			    		headers:{X_CSRF_TOKEN:"jake"},
			    		url:`http://instagramcloneclass.herokuapp.com/images/${id}`,
			    	})
			    },
			    likeImage:(id)=>{
			    	return $http({
			    		method:"POST",
			    		url:'http://instagramcloneclass.herokuapp.com/images/vote',
			    		data:{imageid:id},
			    	})
			    }
		  	};
        });

})();