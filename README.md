# Pure.js \#4 examples

``` bash
# install dependencies
npm install

# install HTTP-server to run results
npm install -g http-server
```

## 01 - basic imports

``` bash
# open example directory
cd 01\ -\ basic\ imports/

# build code
webpack src/calculator.js -o dist/app.js --mode="development" --devtool="(none)"

# run code
http-server -o
```

## run other examples

``` bash
# open example directory
cd <EXAMPLE-FOLDER>

# build code
webpack

# run code
http-server -o
```
