function sample1() {
	var person = {
		firstName: "Christophe",
		lastName: "Coenraets",
		blogURL: "http://coenraets.org"
	};
	var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
	var html = Mustache.to_html(template, person);
	$('#sampleArea').html(html);
}
function sample007() {
	var template = "<form><fieldset><legend>Form Legend</legend>\
	  <img class=\"sf-logotype\" src=\"sunlight-foundation-logotype.png\" alt=\"Sunlight Foundation\" />\
      <h1>OpenGov Extension - Sunlight Foundation</h1>\
      <form action=\"http://10.73.98.100/\" method=\"post\">\
        <fieldset>\
          <legend>Form Legend - OpenGov Button</legend>\
          <label for=\"comment\"><b class=\"block\">Comment</b>\
            <textarea id=\"comment\" type=\"text\" name=\"comment\" value=\"testcomment\" placeholder=\"testcomment\"></textarea></label>\
          <label for=\"url\"><b class=\"block\">URL</b>\
            <input id=\"url\" name=\"url\" type=\"url\" placeholder=\"http://yourmom.com\" value=\"http://testurl.com\" /></label>\
          <label for=\"bucket\"><b class=\"block\">Bucket</b>\
            <select id=\"bucket\" name=\"bucket\">\
              <option value=\"B\">Not Open</option>\
              <option value=\"IA\">Broken</option>\
              <option value=\"NO\">Not Accessible</option>\
            </select></label>\
          <label for=\"url\"><b class=\"block\">Browser Headers</b>\
            <input id=\"browser-headers\" name=\"browser-headers\" type=\"text\" placeholder=\"[&#34;test&#34;]\" value=\"[&#34;test&#34;]\" /></label>\
          <label for=\"checkpage\"><b class=\"block\">Check This Page Now!</b>\
            <input id=\"checkpage\" type=\"submit\" value=\"Check this page now!\"></label>\
          <!-- <button onclick=\"sendData('Some data');\">Send data</button> leaving this here because maybe there's some value in that call -->\
        </fieldset>\
      </form>\
      <p><strong>OpenGov Button</strong> is <a href=\"http://sunlightfoundation.com/\">a product of the Sunlight Foundation</a>.</p>";
      var html = Mustache.to_html(template);
	  $('#sampleArea').html(html);
}
// 
// <ol class="xoxo">
//  <li><strong class="li-header">Tools/Utilities</strong>
//    <ol class="ol-sub xoxo">
//      <li>Thing 1</li>
//    </ol>
//  </li>
// </ol>


// url of webpage

// var currentURL = '';

// var userOS = '';
// var userBrowser = '';

// ?
// var screenShot = '';



function sample2() {
	$.getJSON('data.json', function(data) {
		var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
		var html = Mustache.to_html(template, data);
		$('#sampleArea').html(html);
	});
}

function sample3() {
	$.getJSON('data2.json', function(data) {
		var template = $('#personTpl').html();
		var html = Mustache.to_html(template, data);
		$('#sampleArea').html(html);
	});
}

function sample4() {
	var data = {name: "John Smith", skills: ['JavaScript', 'PHP', 'Java']};
	var tpl = "{{name}} skills:<ul>{{#skills}}<li>{{.}}</li>{{/skills}}</ul>";
	var html = Mustache.to_html(tpl, data);
	$('#sampleArea').html(html);
}

function sample5() {
	var data = {
		employees: [
		{	firstName: "Christophe",
			lastName: "Coenraets"},
		{	firstName: "John",
			lastName: "Smith"}
		]};
	var template = "Employees:<ul>{{#employees}}<li>{{firstName}} {{lastName}}</li>{{/employees}}</ul>";
	var html = Mustache.to_html(template, data);
	$('#sampleArea').html(html);
}

function sample6() {
	var person = {
		firstName: "Christophe",
		lastName: "Coenraets",
		blogURL: "http://coenraets.org",
		manager : {
			firstName: "John",
			lastName: "Smith"
		}
	};
	var template = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>Manager: {{manager.firstName}} {{manager.lastName}}";
	var html = Mustache.to_html(template, person);
	$('#sampleArea').html(html);
}

function sample7() {
	var person = {
		firstName: "John",
		lastName: "Smith",
		blogURL: "http://johnsmith.com",
		manager : {
			firstName: "Lisa",
			lastName: "Jones"
		}
	};
	var tpl = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>{{#manager}}Manager: {{firstName}} {{lastName}}{{/manager}}";
	var html = Mustache.to_html(tpl, person);
	$('#sampleArea').html(html);
}

function sample8() {
	var product = {
		name: "FooBar",
		price: 100,
		salesTax: 0.05,
		totalPrice: function() {
			return this.price + this.price * this.salesTax;
		}
	};
	var template = "<p>Product Name: {{name}}</p>Price: {{totalPrice}}";
	var html = Mustache.to_html(template, product);
	$('#sampleArea').html(html);
}

function sample9() {
	var data = {
		employees: [
		{	firstName: "Christophe",
			lastName: "Coenraets",
			fullTime: true,
			phone: "617-123-4567"
		},
		{	firstName: "John",
			lastName: "Smith",
			fullTime: false,
			phone: "617-987-6543"
		},
		{	firstName: "Lisa",
			lastName: "Jones",
			fullTime: true,
			phone: "617-111-2323"
		},
		]};
	var tpl = "Employees:<ul>{{#employees}}<li>{{firstName}} {{lastName}}{{#fullTime}} {{phone}}{{/fullTime}}</li>{{/employees}}</ul>";
	var html = Mustache.to_html(tpl, data);
	$('#sampleArea').html(html);
}

function sample10() {
	var data = {
		firstName: "Christophe",
		lastName: "Coenraets",
		address: "1 Main street",
		city: "Boston",
		state: "MA",
		zip: "02106"
	};

	var template = "<h1>{{firstName}} {{lastName}}</h1>{{>address}}";
	var partials = {address: "<p>{{address}}</p>{{city}}, {{state}} {{zip}}"};
	var html = Mustache.to_html(template, data, partials);
	$('#sampleArea').html(html);
}

function sample11() {
	var data = { depts: [
		{	name: "Engineering",
			employees: [
				{firstName: "Christophe", lastName: "Coenraets"},
				{firstName: "John", lastName: "Smith"}]
		},
		{	name: "Sales",
			employees: [
				{firstName: "Paula", lastName: "Taylor"},
				{firstName: "Lisa", lastName: "Jones"}]
		}]
	};

	var tpl = "{{#depts}}<h1>{{name}}</h1><ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
	var partials = {employee: "<li>{{firstName}} {{lastName}}</li>"};
	var html = Mustache.to_html(tpl, data, partials);
	$('#sampleArea').html(html);
}
