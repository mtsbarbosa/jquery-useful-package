# jquery-useful-package
Here I share my useful scripts created for jQuery and javascript

## Getting Started

Simply copy the javascript piece of code or script straight to your repository

### Prerequisites

Most of my scripts require JQuery with the last version available

## Documentation
### jquery-extension.js

This file is about some useful extension of jquery to be used on web projects for many reasons

#### serializeData(dotReplace:boolean:optional)
This extension is to be applied on forms to serialize and apply as a form data to the POST via ajax call
> Optional param dotReplace: if you have more than one input with the same name 
it changes the dot (.) to array index identifier 
e. g. user[0].name and user[1].name instead of user.name twice

```
my-form.html

<form id="form-adress">
  Name:<br/>
  <input name="user.name" type="text" value="user"><br/>
  <h3>Adress 1</h3>
  Street:<br/>
  <input name="adress.street" type="text" value="Brazil avenue">
  <h3>Adress 2</h3>
  Street:<br/>
  <input name="adress.street" type="text" value="Nations avenue">
</form>
```


```
my-script-1.js

$.ajax({
          url: 'some-url/submit',
          data: $('#form-adress').serializeData(true),
          type: "POST",
          success: function(result){
              
          },
          error: function (request, status, error) {
              
          }
      });
```

```
form-data-1 (browser inspection)

user.name = "user"
adress[0].street = "Brazil avenue"
adress[1].street = "Nations avenue"
```

```
my-script-2.js

$.ajax({
          url: 'some-url/submit',
          data: $('#form-adress').serializeData(),
          type: "POST",
          success: function(result){
              
          },
          error: function (request, status, error) {
              
          }
      });
```

```
form-data-2 (browser inspection)

user.name = "user"
adress.street = "Brazil avenue"
adress.street = "Nations avenue"
```


## Authors

* **Mateus Carvalho**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

