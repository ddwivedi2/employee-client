function fetchWrapper(url, params) {
    url = new URL("http://localhost:8089" + url);
    if(params != null){
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }
    return fetch(url, {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'
    }}).then(response => response.json())
        .then(responseJSON=> {
        return responseJSON;
    });
  }

export default fetchWrapper;