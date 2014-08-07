request-parm
============
页面异步请求更简单
Sample 1:<br>
var url = "http://localhost:8080/user.jsonp";<br>
var params = $.req.toUrlParam({currentPage : 1,pageSize : 10});<br>
$.req.ajax(url, angular_req_method, params, $http, function(result) {<br>
			//成功<br>
}, function() {<br>
			//失败<br>
});
