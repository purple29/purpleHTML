function getXMLHttpRequest(){
	if(window.ActiveXObject){
		try{
			return new ActiveXObject("Msxml2.XMLHTTP");
		}catch (e){return null;}
	}else if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else{
		return null;
	}
}

var httpRequest = null;

function sendRequest(url, params, callback, method) {
	httpRequest = getXMLHttpRequest();
	
	var httpMethod = method ? method : "GET";
		if(httpMethod != 'GET' && httpMethod != 'POST'){
			httpMethod = 'GET';
		}
	
	var httpParams = (params == null || params == '')? null : params;
	
	var httpUrl = url;
		if(httpMethod =='GET' && httpParams != null){
			httpUrl = httpUrl + "?" + httpParams;
		}
	
	httpRequest.open(httpMethod, httpUrl, true);
	httpRequest.setRequestHeader(/*헤더값 설정 : 외부파일 설명하는거라는데...*/
			'Contnet-Type','application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = callback;
	httpRequest.send(httpMethod == 'POST' ? httpParams : null);
	console.log(httpParams);
}