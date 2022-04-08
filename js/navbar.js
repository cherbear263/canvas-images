(function(){     
	var content = document.createElement('div');
	content.innerHTML = "";
	var liststart = document.createElement('ul');
	var listelement1 = document.createElement('li');
	var listelement2 = document.createElement('li');
	listelement1.innerHTML = '<a href="#tabs-1">One</a>';
	listelement2.innerHTML = '<a href="#tabs-2">Two</a>';
	liststart.appendChild(listelement1);
	liststart.appendChild(listelement2);


	var html = [
	  '<div>',
	  '<nav class="navbar navbar-default">',

	  '<ul class="nav navbar-nav">',
	  '<li class="active"><a href="#">Home</a></li>',
	  ' <li><a href="#">Page 1</a></li>',
	  '<li><a href="#">Page 2</a></li>',
	  '</ul>',

	  '</nav>',
	  '</div>'
	].join('\n');
	$("#navbar1").append(html);
	$("#navbar2").append(content);
});