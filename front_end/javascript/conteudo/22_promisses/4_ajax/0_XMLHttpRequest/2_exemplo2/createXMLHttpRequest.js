function createXMLHttpRequest(method, url, callback, data = null) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.send(data);

  xhr.onreadystatechange = verificaAjax;

  function verificaAjax() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {
        const json = JSON.parse(xhr.responseText);

        if (typeof callback === "function") {
          callback(json);
        }
      } else if (typeof callback === "function") {
        callback({
          status: xhr.status,
          message: "Algo deu errado com a conexão",
        });
      }
    }
  }
}
