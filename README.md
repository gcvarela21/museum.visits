# Museum Visits Journal

![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)

A Web based application to keep track of the places I want to go to.

## Summary

As an Art History student I was always encouraged and sometimes reaquired to see art work in person. Seeing some of these historial and even monumental works is always more awe inspiring than looking through a text book or scrolling through the world wide web. There is no better way to experience something than to see it for yourself. When ever I have an opportunity to travel I make it a point to visit the major art and history museums. I value expanding my cultural knowlege. This web based application is now my Museum Travel wish list, that gigves me the abblity to add places, mark those that I have been to, and move previously visited places back to my wish list to experience again.

![GIF Visual of The Deployed Web Application](https://github.com/gcvarela21/museum.visits/blob/main/museum.gif?raw=true)

______________________________________________________________________________

**You can find the LIVE PAGE [Here](https://my-museum-visit-list.herokuapp.com/)**

______________________________________________________________________________

## Table of Contents

* [Summary](#summary)
* [Built With](#builtwith)
* [How It Works](#howitworks)
* [Author/Links](#Author/Links)
* [Contributing](#Contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

______________________________________________________________________________

## **Built With**

* [HTML 5](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/css_howto.asp)
* [GitHub](https://github.com/)
* [JavaScript](https://www.w3schools.com/js/default.asp)
* [BootStrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL](https://www.mysql.com/products/workbench/)
* [HEROKU](https://www.heroku.com/home)
* [JAWSDB-MySQL](https://www.jawsdb.com/)

______________________________________________________________________________
  
## How It Works

**DEPENDANCIES:**

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars/)
* [MySQL](https://www.mysql.com/products/workbench/)
* [HEROKU](https://www.heroku.com/home)
* [JAWSDB-MySQL](https://www.jawsdb.com/)

This application was created by using Node.js, Node Package -Express, Node Package -Express-Hadlebars, and node Node Package -mysql. A data based was created using MySQL Work Bench and usinf the Schema and Seeds Inclued in the repository. This Apllication in its development used node-express to create a local sever to host the Api and Connct to the Work Bench's local port to send GET Requests, Posts, Updates, and to Delete from the local database call on the JSON data to be dispalyed on the web page.

Using Express-Handlebars allows for the use of a single web page. Express-Handlebars requires the naming conventios of the folders "views", "layouts", and "partials".

The main.handlesbars folder has the basic HTML 5 page setup as well as BootStrap Brand Nav and a Grid System Container before creationg the handlebars call to fill the {{{ body }}}

```html
	<body>
		<nav class="navbar">
 		   <div class="container-fluid">
   			 <span class="navbar-brand"><i class="fas fa-university icon"></i>Museums To Visit</span>
           </div>
		</nav>
		<div class="container">
			
			
				{{{ body }}}
			
		</div>
	</body>
```

Found in the base level of the views folder, the index.handlebars content is pushed into the {{{ body }}} and the index.handlebars has additional {{{ }}} calls for data and one last chunck of html left in the museums-block.handles file found in views/partials/museums folder. Using BootStrap's grid system both [Element: ul] unlisted elements will be displayed side by side on large screens and stacked verticle on med screens and smaller.

```javascript
 <div class="col-12">
          <ul>
           {{#each museums}}
             {{#if visited}}
               {{> museums/museum-block visit=false}}
             {{/if}}
           {{/each}}
          </ul>
       </div>
    </div>
  </div>
  <div class="col-sm-12 col-lg-6">
    <div class="row">
      <div class="col-12 ghost">
          <h2>Museums I have visited:</h2>
      </div>
      <div class="col-12">
          <ul>
             {{#each museums}}
              {{#unless visited}}
                {{> museums/museum-block visit=true}}
              {{/unless}}
             {{/each}}
           </ul>
        </div>
    </div>
  </div>
```

The listed elements are filled with the data querried from the database and have event listeners attached to the Visit Again! and Been There! text that will be rendered as buttons on the from end with boolean values that will change on click moving the item into the visisted, will vist lists.

```javascript
<div class="d-flex flex-row">
	<li>
		{{place}}
		<button class="change-visit" data-id="{{id}}"data-newvisit="{{visit}}">
			{{#if visit}}Visit Again!{{else}}Been There!{{/if}}
		</button>
		<button class="delete-museum"><i  data-id="{{this.id}}" class="fas fa-dumpster trash"></i></button>
	</li>
</div>

```

______________________________________________________________________________

## Author/Links

Created by Gloria C Varela

* [Live Site](https://my-museum-visit-list.herokuapp.com/)
* [Project Repository](https://github.com/gcvarela21/museum.visits)
* [GitHub Profile Page](https://github.com/gcvarela21)
* [Web Developer Portfoio](https://gcvarela21.github.io/glo.digital/)
* [Interactive Design Portfolio](https://www.glo.digital/)
* [LinkenIn](https://www.linkedin.com/in/glovarela/)

______________________________________________________________________________

### Contributing

```javascript
// There are no contributions at this time
```

______________________________________________________________________________

### Tests

In order to test open the console and run the following:

```javascript
// There is no test at this time
```

______________________________________________________________________________

### Questions

If you have any questions contact me on [GitHub](https://github.com/gcvarela21) or contact:
Gloria Varela at varela_gloria@yahoo.com

______________________________________________________________________________

### License

This project is licensed under: MIT
