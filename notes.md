## Project Configuration
###install bower
- npm install -g bower  
- run bower init to create the bower.json file  
- inside of bower.json file add the following section afer the dependencies section  

```
"exportsOverride": {  
    "jquery" : {},
    "bootstrap": {  
        "styles": "dist/css/bootstrap.css",  
        "fonts": "dist/fonts/*.*"  
    },  
    "angular": {  
        "Scripts": "angular.js"  
    },  
    "angular-bootstrap": {  
        "Scripts": [ "ui-bootstrap.min.js", "ui-bootstrap.js" ]  
    }  
}  
```

###install grunt-cli
- npm install -g grunt-cli

###install grunt
- create package.json file  

```
{  
  "name": "my-project-name",  
  "version": "0.0.0",  
  "devDependencies": {  
    "grunt": "~0.4.5",  
  }  
}  
```  
- run "npm install"  

###bower is great, but make sure you set up grunt-bower-task
- run as npm install grunt-bower-task --save-dev  
- create gruntfile.js in the config directory  
```
module.exports = function (grunt) {
    grunt.config.set('bower', {
        install: {
            options: {
                targetDir: './RefreshHiloAngularJS'
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
};
```   
to install bootstrap via bower: - bower install bootstrap  
to install angular via bower: - bower install angular#1.3.0  
to install angular-bootstrap via bower: - bower install angular-bootstrap  

to copy files to the proper location, run "grunt bower:install"  

## Notes for talk
- Talk about "what is Angular"  
  - full SPA framework  
  - web development for the desktop minded person  
- Show how to avoid the "flicker"  
  - add the ng-cloak attribute
  - add this css to your css file: [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
display: none !important;
}
- Talk about routing  
- Talk about testing  
- Talk about promises to help with async  
