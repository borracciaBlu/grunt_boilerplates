grunt_boilerplates
==================

Grunt boilerplates for less, javascript, img resize, watch

Foreach boilerplate just clone it and type:
```
npm install
```

## Structure

The basic structure of the project is given in the following way:

```
grunt_project
├── app
│   ├── less
│   │   ├── style1.less
│   │   └── style2.less
│   ├── js
│   │   ├── script1.js
│   │   └── script2.js
│   ├── img
│   │   └── image.jpg
│   └── tmp
│       └── js_grunt.js
├── dist
│   ├── index.html
│   ├── css
│   │   └── styles.min.css
│   ├── js
│   │   └── grunt_project.min.js
│   └── img
│       └── image.jpg
├── Gruntfile.js
└── package.json

```

#### app/

Contains the files You are editing and working on.

#### dist/

This is where the generated files are stored once Grunt runs.

#### Gruntfile.js

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### package.json

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.
