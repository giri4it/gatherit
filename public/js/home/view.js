define(["jquery", "backbone","marionette","handlebars","text!home/template.hb", "plupload"],
		function($, Backbone, Marionette, Handlebars, Template, Plupload){
	
    var HomeView = Backbone.Marionette.ItemView.extend({
    	id:'container',
    	tagName:'div',
        successMessage: 'Your file uploaded successfully.',
        initialize: function(){
        	this.template = Handlebars.compile(Template);
        },
        ui: {
            message: '.message',
            fileList: '#filelist',
            browseButton: '#file-select',
            uploadButton: '#file-upload',
            progressContainer: '.progress',
            progressBar: '.progress .bar'
        },
        onRender: function(){
        	this.$('dropdown-toggle').dropdown();
            this.ui.progressContainer.hide();
            var defaults = {
                runtimes : 'gears,html5,flash,silverlight,browserplus',
                browse_button : this.ui.browseButton.get(0),
                container : this.el,
                multi_selection: false,
                max_file_size : '10mb',
                filters : [
                    {title : "Image files", extensions : "png,jpeg,jpg"}
                ],
                resize : {width : 320, height : 240, quality : 90},
                url:"/upload"
            };

            this.uploader = new Plupload.Uploader(_.defaults(this.options, defaults));

            this.uploader.init();

            this.uploader.bind('FilesAdded', _.bind(this.filesAdded, this));
            this.uploader.bind('UploadProgress', _.bind(this.uploadProgress, this));
            this.uploader.bind('FileUploaded', _.bind(this.fileUploaded, this));
            this.uploader.bind('Error', _.bind(this.handleUploadErrors, this));
            return this;
        },
        events:{
            'click #file-upload': 'startUpload'
        },
        onBeforeDestroy: function () {
            
        },
        startUpload: function(e) {
            e.preventDefault();
            this.uploader.start();
            this.ui.progressContainer.show();
        },

        filesAdded: function(up, files) {
            var html = "";
            $.each(files, function(i, file) {
                html += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b>' + '</div>';
            });

            this.ui.message.html('<div class="alert alert-info">' + html + '</div>');

            up.refresh(); // Reposition Flash/Silverlight
        },
        fileUploaded: function(up, file) {
            this.ui.progressBar.addClass('bar-success');
            this.ui.progressBar.parent().removeClass('active');
            this.ui.message.html('<div class="alert alert-success">' + this.successMessage + '</div>');
            this.ui.progressContainer.hide();
        },
        uploadProgress: function(up, file) {
            this.ui.progressBar.width(file.percent + '%');
        },

        handleUploadErrors: function(up, err) {
            this.ui.message.html('<div class="alert alert-error">An error occured: ' + err.message + " for " + (err.file ? ", File: " + err.file.name : "") + '</div>');
        }

    });
    return HomeView;
});