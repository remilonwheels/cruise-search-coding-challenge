# Cruise Search Coding Challenge

## setup
it's an angularJS component based app bundled by webpack

**run it locally:**
- install dependecies with `npm install`
- run `npm start` and the app will be availble at `http://localhost:8080`

*NOTE: because of a CORS issue with the API, please disable CORS on the browser you are using, if you're on a Mac, you can run this command from the command line to run a cors disabled version of `chrome` [[link to run chrome disable chrome]](https://medium.com/@siddhartha.ng/disable-cross-origin-on-chrome-for-localhost-c644b131db19)
```
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary -disable-web-security -allow-file-access-from-files -allow-file-access
```

**production build files:**
- run `npm run build` and the files will be outputted to the `/dist` directory

## app
[index.js](https://github.com/remilonwheels/cruise-search-coding-challenge/blob/coding-challenge-remil/src/index.js) bootstap the app to the document
- components organized into `common` and `component` modules
- sass
- webpack
	- `.js` --> ng dep injection --> es5
	- `.scss` --> css --> inline style tag
	- images/fonts

## Requirements:

- ✅ Cruise tile sample: Feel free to make your own or follow design sample below. 
- ✅ Demonstrate use of web standards including HTML5.  
- ✅ Use a separate CSS file.   
- ✅ Make the navbar responsive with at least one breakpoint (your choice as to how it looks on a smaller screen width). 
- ✅ Using the API populate the data into the reusable component tiles.
- ✅ Follow the style guidelines listed below.  
- ✅ Make production ready 
- ✅ Clean code
- ✅ Reusable components best practices 

## Bonuses

- ✅ Use SASS or LESS to pre-compile your CSS.   
- Add a CSS animation with transitions.  (Loading component) 
- ✅ Use JavaScript to trigger active state room in tile.   
- Image a separate component
- ✅ (Book now / View Itinerary) buttons open new route path in AngularJS. 
- Taxes and fees links open in a modal. 
