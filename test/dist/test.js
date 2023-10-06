/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-new-object, object-curly-newline  */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Symbol = require( '@stdlib/symbol-ctor' );
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var isEmptyObject = require( './../../dist' );


// VARIABLES //

var opts = {
	'skip': !hasSymbolSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEmptyObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an empty object', function test( t ) {
	t.strictEqual( isEmptyObject( {} ), true, 'returns true' );
	t.strictEqual( isEmptyObject( new Object() ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided an empty object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{ 'beep': 'boop' },
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isEmptyObject( values[i] ), false, 'returns false for when provided ' + values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided an object with symbol property keys', opts, function test( t ) {
	var sym = Symbol( 'foo' );
	var obj = {};

	obj[ sym ] = true;
	t.strictEqual( isEmptyObject( obj ), false, 'returns false' );

	t.end();
});
