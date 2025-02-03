tinymce.PluginManager.add('paste_raw_html', function (editor, url) {
	editor.addButton('paste_raw_html', {
		tooltip: 'Add HTML',
		image: url + '/paste-san-button-icon.png',
		onclick: function () {
			var raw_html = window.prompt('Please enter HTML', '');
			if (!raw_html || !raw_html.trim()) {
				return;
			}
			editor.execCommand('mceInsertContent', 0, sanitized_html);
		}
	});
});