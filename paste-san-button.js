tinymce.PluginManager.add('paste_raw_html', function (editor, url) {
	editor.addCommand('pasteSanRawHtml', function () {
		var raw_html = window.prompt('Please enter HTML', '');
		if (!raw_html || !raw_html.trim()) {
			return;
		}
		editor.execCommand('mceInsertContent', false, raw_html);
	});

	editor.addButton('paste_raw_html', {
		tooltip: 'Add HTML (Shift+Cmd+K)',
		image: url + '/paste-san-button-icon.png',
		onclick: function () {
			editor.execCommand('pasteSanRawHtml');
		}
	});

	editor.addShortcut('meta+shift+k', 'Add HTML', function () {
		editor.execCommand('pasteSanRawHtml');
	});
});