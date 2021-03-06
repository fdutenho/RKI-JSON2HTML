# RKI-JSON2HTML

Loads RKI JSON data and transforms selected counties into HTML table

## how to use

you need two lines of HTML code in an HTML file (see [index.html](./src/index.html))

1. a table with id "rki": `<table id="rki" ></table>`
2. load the rki.js: `<script src="./rki.js"></script>`

You can load the JS inline in your HTML code. No need to add it to the header section of your HTML file.

> The table's id must be set to `rki` otherwise the script will not work.

```html
<table id="rki"></table>
<script src="./rki.js"></script>
```

## how to configure

You will find an array `counties` you may want to modify and adopt to your needs...

```javascript
var counties = ["LK Wetteraukreis", "LK Gießen"]
```

In addition the index.hml accepts a `cfg` GET-parameter having a URL encoded comma separated list of counties in

> [see below](#config-helper). Use [config.html](./src/config.html) to generate the link including the `cfg` GET parameter


## how to customize

If you like it more colourful please use CSS in you HTML to style the table ;-)

The JavaScript will not modify the table tag itself. You could add a `style` attribute here as well. You may also add `<thead>` to the table if you like, e.g.
```html
<table id="rki" style="border: 1px solid black;">
   <thead>
      <tr>
         <td>Name</td>
         <td>BL</td>
         <td>I-Wert</td>
      </tr>
   </thead>
</table>
```

## result

The `rki.js` will load data from RKI API and adds per county of the `counties` array one table row. Each row will have three cells.

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

# Config Helper

Just open [config.html](./src/config.html) in your browser and is the generated link. That's it!
