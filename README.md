# gulp-font-blast
Gulp wrapper for font-blast.


## Status

Work In Progress

## Issues

- First draft of plugin. Hard-coded for font-awesome for now.
- Requires that source is an svg font (fontawesome-webfont.svg), also requires the font-awesome build file ```icons.yml``` be in the same source folder.
- This plugin does not yet support streams, instead taking an output path (relative to cwd) as it's only option.



## Install

Clone me!

## Usage

```js
var gulp = require('gulp'),
	blast = require('gulp-font-blast');
	
gulp.task('blast', function () {
	return gulp.src('source.svg')
	.pipe(blast(output.dir));
});
```

Turns this:

```
./src/fontawesome-webfont.svg
./src/icons.yml

```

into this:

```
./dest/source-font.ttf
./dest/verify.html
./dest/svg/arrow-circle-down.svg
./dest/svg/arrow-circle-left.svg
./dest/svg/arrow-circle-o-down.svg
...

```


## Contribute

Open an issue if you can help. This is my first gulp plugin after all, and I only picked up Node for the first time this week :o)

- Is it possible to make font-blast stream compatible without modifying font-blast source? (font-blast expects a destination path when called).

