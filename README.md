# Angularjs Toggle-Button directive
toggle button directive for angular

## Install
1. Add the script file to your page – make sure it’s added after the Angular script:
```html
 <script type="text/javascript" src="toggle-button.js"></script>
```

2. Add the style file to your page: You must using sass to compile the scss to css first
```html
 <link rel="stylesheet" href="toggle.css">   
```

3.Add the toggleBtnModule module as a dependency in your Angular application:
```javascript
 angular.module('myApp', ['toggleBtnModule']);
```

## Usage
``` html
<toggle-btn ng-model="info.Enable" trigger="info.toggleCtrlBtnFunc()" disable="info.NeedDisable" text="{{AUTO_REFRESH}}"></toggle-btn>
```

## Property
- ng-model: binding the toggle check value [true|false]
- trigger: (option) binding the grigger function pass through controller
- disable: (option) disable the toggle button
- text: (option) show text after the toggle button

