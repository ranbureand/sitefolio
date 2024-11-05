# Andrea Buran’s Site. Fifth Edition.

The code for my personal site, [andreaburan.com](https://www.andreaburan.com "Andrea Buran’s Site"), is based on this repository.

This site is:

+ designed and developed in the browser
+ written in Kramdown
+ generated using [Jekyll](https://jekyllrb.com/ "Jekyll")
+ scripted in JavaScript
+ styled from scratch using SCSS
+ typeset with [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono "IBM Plex Mono in Google Fonts"), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans "IBM Plex Sans in Google Fonts"), and [IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif "IBM Plex Serif in Google Fonts")

It is a playground in constant evolution where I experiment, learn, and try new things.

The favicon is:

+ designed in Figma
+ generated using [RealFaviconGenerator](https://realfavicongenerator.net/ "RealFaviconGenerator")

## Install

Run the following commands in the Terminal:

    bundle install

## Serve

Run the following commands in the Terminal:

    bundle exec jekyll serve --baseurl ''

## Build

Run the following commands in the Terminal:

    bundle exec jekyll build

## Jekyll variables

```
<ul>
  <li>page.title = {{ page.title }}</li>
  <li>page.url = {{ page.url }}</li>
  <li>page.id = {{ page.id }}</li>
  <li>page.collection = {{ page.collection }}</li>
  <li>page.dir = {{ page.dir }}</li>
  <li>page.name = {{ page.name }}</li>
  <li>page.path = {{ page.path }}</li>
  <li>page.slug = {{ page.slug }}</li>
  <li>page.ext = {{ page.ext }}</li>
  <li>page.next = {{ page.next }}</li>
  <li>page.previous = {{ page.previous }}</li>
</ul>
```