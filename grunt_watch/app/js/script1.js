function formSubmit(submitEvent) {
  var name = document.querySelector('input').value;
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, postResponse);
}

function postResponse(err, response, body) {
	var statusMessage = document.querySelector('.status');
	if (err) {
		statusMessage.value = err;
		return err;
	}
	statusMessage.value = body;
}

exports.submit = formSubmit;
