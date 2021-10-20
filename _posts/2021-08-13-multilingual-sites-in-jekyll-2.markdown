---
layout: post

title: Multilingual sites in Jekyll, Part 2
author: Andrea Buran

date: 2021-08-13 08:00:00 +0300

tags: [approach, development, Jekyll, multilingual, site]

excerpt: This series of articles illustrate my approach to create a multilingual site in Jekyll.
exordium: This series of articles ([Part 1](http://andreaburan.com/post/multilingual-sites-in-jekyll.html), [Part 2](http://andreaburan.com/post/multilingual-sites-in-jekyll-2.html), [Part 3](http://andreaburan.com/post/multilingual-sites-in-jekyll-3.html), [Part 4](http://andreaburan.com/post/multilingual-sites-in-jekyll-4.html)) and this [basic *GitHub Pages* site](https://ranbureand.github.io/multilingual-experiment/) illustrate my approach to create a multilingual site in *[Jekyll](https://jekyllrb.com/ "Jekyll")*.

published: true
---

+ [Front matter](#front-matter)
  + [Pages](#pages)
  + [Posts](#posts)
+ [Data files](#data-files)
{: .toc }

## Front matter

In the front matter of each page or post, but for the usual variables, we set two new custom variables to handle the multilingual logic[^logic] of the site:

+ `language` defines the language of the page/post
+ `language_reference` relates different translations of the same page/post

We can use `language` to retrieve only the pages or posts that have the same language, and `language_reference` to retrieve only the pages or posts that return the same content translated in different languages (read the sections [navigation.html]({% post_url 2021-08-14-multilingual-sites-in-jekyll-3 %}#navigationhtml) and [language-switch.html]({% post_url 2021-08-14-multilingual-sites-in-jekyll-3 %}#language-switchhtml) for more details).

### Pages

For example, here is the front matter of the English page *Stories*:

{% raw %}
``` yaml
---
layout: page

title: Stories
description: Stories.

language: en
language_reference: stories

published: true
order: 2
---
```
{: .code-m }
{% endraw %}

and here is the front matter of its Italian counterpart:

{% raw %}
``` yaml
---
layout: page

title: Storie
description: Storie.

language: it
language_reference: stories

published: true
order: 2
---
```
{: .code-m }
{% endraw %}

Both pages have the variable `language_reference` set to `stories` so that they can be easily related with each other.

### Posts

For example, here is the front matter of the English post *Hello World*:

{% raw %}
``` yaml
---
layout: post

title: Hello World
description: Hello world.
date: 2021-01-01 00:00:00

language: en
language_reference: world

published: true
---
```
{: .code-m }
{% endraw %}

and here is the front matter of its Italian counterpart:

{% raw %}
``` yaml
---
layout: post

title: Ciao Mondo
description: Ciao Mondo.
date: 2021-01-01 00:00:00

language: it
language_reference: world

published: true
---
```
{: .code-m }
{% endraw %}

Both posts have the variable `language_reference` set to `world` so that they can be easily related with each other.

## Data files

We create a YAML [data file](https://jekyllrb.com/docs/datafiles/ "Data Files") named `snippets.yml` to store the different translations of the user interface copy as additional data in the `_data` subdirectory.

We then create a new variable named `snippets` in the `base.html` layout to shorten the code that we need to write to access the data contained in the `snippets.yml` file:

{% raw %}
``` liquid
{%- assign snippets = site.data.snippets %}
```
{: .code-m }
{% endraw %}

Since the `base.html` layout is the base for all the other layouts, if we place the variable `snippets` there, we can then access it from any other page.

Through this variable, we can write just `snippets.name_of_the_data_item` when accessing a data item rather than the full, longer `site.data.snippets.name_of_the_data_item`.

For example, the piece of code that generates the *Back to the Top* link at the bottom of the page:

{% raw %}
``` liquid
<a href="#{{ snippets.top[page.language] | slugify: 'latin' }}">{{ snippets.back[page.language] }}</a>
```
{: .code-xl }
{% endraw %}

uses the following variable:

{% raw %}
``` liquid
{{ snippets.back[page.language] }}
```
{: .code-m }
{% endraw %}

to retrieve the name of the link in the current selected language from the following lines in the `snippets.yml` data file:

{% raw %}
``` yaml
back:
  en: Back to the Top
  it: Torna in Cima

top:
  en: Top
  it: Cima
```
{: .code-m }
{% endraw %}


In the eventuality that the user interface copy is quite lengthy, we might consider creating a different data file for each language and place it in a dedicated subdirectory—similarly to what we already do for pages and posts. For the sake of this basic site, we keep things simple and use only one single data file to list the copy in all the different languages.

[^logic]:
    The logic is based on the principle articulated in Sylvain Durand’s *[Making Jekyll Multilingual](https://sylvaindurand.org/making-jekyll-multilingual/#principle "Making Jekyll
Multilingual")*.
