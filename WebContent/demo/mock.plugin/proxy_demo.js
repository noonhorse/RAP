 window.RAP_override_XHR = {
 	method:'',
 	query_url:'',
 	urlToRelative:function(url) {
        if (url instanceof RegExp) {
            return url;
        }
        if (!url) {
            throw Error('Illegal url:' + url);
        }
        if (url.indexOf('http://') > -1) {
            url = url.substring(url.indexOf('/', 7) + 1);
        } else if (url.indexOf('https://') > -1) {
            url = url.substring(url.indexOf('/', 8) + 1);
        }
        if (url.charAt(0) != '/') {
            url = '/' + url;
        }
        return url;
    },
 	proxy_url:function(){
 		url = this.urlToRelative(url);
  	url = "http://" + ROOT + PREFIX + projectId + url;
  	return url;
 	},
 	callback:function(cb,cb){
 		var routePassed = route(url) && projectId;
 		if()
 		cb && cb();
 	}
 };
 //判断是否需要重写xhr请求
 var routePassed = route(url) && projectId;
 if()
 
 //
 //获取xhr的请求信息
 (function(open){
    window.XMLHttpRequest.prototype.open=function(){
        var arg = arguments;
        RAP_override_XHR.method =arg[0];
        RAP_override_XHR.url = arg[1];
        var arg = RAP_override_XHR.callback();

        open.apply(this,arg);
    }
})(window.XMLHttpRequest.prototype.open)


  //需要重写的项 open，请求链接地址修改
  
  //判断是否是api请求地址是否项目名单中
  var routePassed = route(url) && projectId;
  //核心新的请求地址
  url = convertUrlToRelative(url);
  url = "http://" + ROOT + PREFIX + projectId + url;

	/***绝对地址转化
     * convert url from absolute to relative
     */
  function convertUrlToRelative(url) {
      if (url instanceof RegExp) {
          return url;
      }
      if (!url) {
          throw Error('Illegal url:' + url);
      }
      if (url.indexOf('http://') > -1) {
          url = url.substring(url.indexOf('/', 7) + 1);
      } else if (url.indexOf('https://') > -1) {
          url = url.substring(url.indexOf('/', 8) + 1);
      }
      if (url.charAt(0) != '/') {
          url = '/' + url;
      }
      return url;
  }


  //回调成功或失败处理
  if (PREFIX == '/mockjs/') {
      data = Mock.mock(data);
      if (data.__root__) {
          data = data.__root__;
      }
      if (!disableLog) {
          console.log('请求' + url + '返回的Mock数据:');
          console.dir(data);
      }
  }
