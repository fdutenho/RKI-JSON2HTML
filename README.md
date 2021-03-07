# RKI-JSON2HTML

Loads RKI JSON data and transforms selected counties into HTML table

## how to use

you need two lines of HTML code in an HTML file (see [example.html](./src/example.html))

1. a table with id "rki": `<table id="rki" ></table>`
2. load the rki.js: `<script src="./rki.js"></script>`

You can load the JS inline in your HTML code. No need to add it to the header section of your HTML file.

```html
<table id="rki"></table>
<script src="./rki.js"></script>
```

## how to configure

Have a look at [rki.js](./src/rki.js). You will find an array `counties` you may want to modify and adopt to your needs...

```javascript
const counties = ["LK Wetteraukreis", "LK Gießen"]
```

## how to customize

If you like it more colourful please use CSS in you HTML to style the table ;-)


## result

The `rki.js` will load data from RKI API and adds per county of the `counties` array one table row. Each row will have three cells
1. county name
2. state
3. cases per 100k inhabitants of the last 7 days

```html
<table id="rki"></table>
```
becomes
```html
<table id="rki">
   <tbody>
      <tr>
         <td>LK Gießen</td>
         <td>Hessen</td>
         <td>82,4</td>
      </tr>
      <tr>
         <td>LK Wetteraukreis</td>
         <td>Hessen</td>
         <td>75,6</td>
      </tr>
   </tbody>
</table>
```
