(function($) {

    $.fn.cameraPreview = function(options) {

        // use the defaults or customized options if they exist
        var options     =   options || {},
            camera_id   =   options.camera_id || '',
            width       =   options.width || 320,
            height      =   options.height || 180,
            delay       =   options.delay || 1000
            preview     =   new Image(),
            lockout     =   false,
            debug       =   options.debug || false;

        if(!camera_id) {
            // can't do anything without a camera_id
            return false;
        }

        // add preview image to calling div
        this.append(preview);
        $preview = $(preview);

        $preview.width(width + 'px');
        $preview.height(height + 'px');

        function updatePreview() {
            $preview.attr('src', '/image/' + camera_id + '?rand=' + Math.random());
            if(debug) console.log('jQuery.preview: updating image');
        }

        $preview.on('load', function() {
            setTimeout(updatePreview, delay)
        });


        $preview.on('error', function() {
            if(debug) console.log('jQuery.preview: image error');
        });


        //fetch the first image
        updatePreview();

        //return this to make it chainable
        return this;
    }

}(jQuery));
