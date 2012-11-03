/// <reference path="jquery-1.8.1.js" />
/// <reference path="underscore.js" />
/// <reference path="codemirror-2.3.3.js" />

(function () {
	"use strict";

	$.fn.interactive = function () {

		function setFrameContent(frame, content) {
			var frameDocument = frame.contentDocument || frame.contentWindow.document;
			frameDocument.open();
			frameDocument.write(content);
			frameDocument.close();
		}

		return this.each(function () {
			var container = this,
				editorTextArea = $('<textarea>').appendTo(this)[0],
				previewFrame = $('<iframe>').appendTo(this)[0],
				$codeSamples = $('textarea.code', this),
				$actionBar = $('div:first-child', this),
				editor, editorOptions;

			// Create buttons to switch between code samples
			$codeSamples.each(function () {
				var textArea = this;
				$('<button>').text(textArea.title).appendTo($actionBar).on('click', function () {
					editor.setValue(textArea.value);
				});
			});

			// Pre-populate the editor with the first code sample
			editorTextArea.value = $codeSamples.first().val().trim();

			// Set up the CodeMirror editor options
			editorOptions = {
				mode: 'text/html',
				lineNumbers: true,
				tabMode: 'indent',
				tabSize: 2,
				onChange: _.debounce(function () {
					setFrameContent(previewFrame, editor.getValue());
				}, 300)
			};

			// Initialize the editor and the preview frame
			editor = CodeMirror.fromTextArea(editorTextArea, editorOptions);
			editorOptions.onChange();
		});
	};

	$('figure.interactive').interactive();

	$('button.both').on('click', function () {
		$(this).parents('figure').removeClass('code preview');
	});

	$('button.code').on('click', function () {
		$(this).parents('figure').removeClass('preview').addClass('code');
	});

	$('button.preview').on('click', function () {
		$(this).parents('figure').removeClass('code').addClass('preview');
	});
})();
