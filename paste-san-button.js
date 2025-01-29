tinymce.PluginManager.add('paste_raw_html', function (editor, url) {
	editor.addButton('paste_raw_html', {
		tooltip: 'Add HTML',
		image: url + '/paste-san-button-icon.svg',
		onclick: function () {
			var raw_html = window.prompt('Please enter HTML', '');
			if (!raw_html) {
				return;
			}
			var sanitized_html = raw_html
				.replace(/<script[\s\S]*?<\/script>/gi, '')
				.replace(/on\w+="[^"]*"/g, '')
				.replace(/javascript:/gi, '')
				.replace(/data:/gi, '')
			editor.execCommand('mceInsertContent', 0, sanitized_html);
		}
	});
});