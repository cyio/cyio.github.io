# footer

实现:
```html
<!DOCTYPE html>
<html>
 <head>
   <link rel="stylesheet" type="text/css" href="main.css" />
 </head>
<body>
 <div id="page-container">
   <div id="content-wrap">
     <!-- all other page content -->
   </div>
   <footer id="footer"></footer>
 </div>
</body>
</html>
```
```css
#page-container {
  position: relative;
  min-height: 100vh;
}
#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
}
```
[How to keep your footer where it belongs 👣 – freeCodeCamp.org](https://medium.freecodecamp.org/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c)
