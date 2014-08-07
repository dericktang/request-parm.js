request-parm
============
页面异步请求更简单
Sample 1:
var url = "http://localhost:8080/user.jsonp";
var params = $.req.toUrlParam({currentPage : 1,pageSize : 10});
$.req.ajax(url, angular_req_method, params, $http, function(result) {
			//成功
}, function() {
			//失败
});
