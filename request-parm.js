(function($) {
	$.req = function() {
	};

	String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
		if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
			return this.replace(
					new RegExp(reallyDo, (ignoreCase ? "gi" : "g")),
					replaceWith);
		} else {
			return this.replace(reallyDo, replaceWith);
		}
	};

	/**
	 * 解析URL参数
	 */
	$.req.getParam = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null)
			return (r[2]);
		return null;
	};

	/**
	 * 将json对象组装成url参数
	 */
	$.req.toUrlParam = function(json) {
		var result = "";
		for ( var x in json) {
			if (result == '') {
				result = "?" + x + "=" + this.encodeURI(json[x]);
			} else {
				result += "&" + x + "=" + this.encodeURI(json[x]);
			}
		}
		return result;
	};

	/**
	 * 获取form表单中的值，并生成josn对象
	 */
	$.req.getFormValueToJson = function(json, form) {
		var resultJson = new Object();
		for ( var x in json) {
			var value = form.find("" + json[x] + "[name=" + x + "]").val();
			resultJson[x] = value;
		}
		return resultJson;
	};

	/**
	 * 增加Json对象
	 */
	$.req.addJson = function(json, addJson) {
		for ( var x in addJson) {
			json[x] = addJson[x];
		}
		return json;
	};

	$.req.encodeURI = function(str) {
		return str = encodeURI(encodeURI(str));
	};

	$.req.ajax = function(url, method, params, http, success, error) {
		if (method == 'jsonp') {
			url = url + "?callback=JSON_CALLBACK" + params;
			http.jsonp(url).success(success).error(error);
		}
		if (method == 'get') {
			url = url + params;
			http.get(url).success(success).error(error);
		}
		if (method == 'post') {
			http.post(url, params).success(success).error(error);
		}
	};

})(jQuery);
