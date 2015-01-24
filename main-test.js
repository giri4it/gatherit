var tests = [], file;

for (file in window.__karma__.files) {
	//console.log('file-'+file);
    if (/\.*Test\.js$/.test(file)) {
		//console.log('selected - '+file);
        //if (!/dataset/.test(file)) {
            tests.push(file);
			//}
    }
}

//console.log('tests -'+ tests);
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        'jquery': 'public/js/libs/jquery/jquery.min',
        //'underscore': 'public/js/libs/underscore/underscore',
		'service':'express_app/pushMessage/service'
    },

    shim: {
        //'underscore': {
        //    exports: '_'
        //}
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
