---
layout: post

title: Multilingual sites in Jekyll, Part Four
author: Andrea Buran

date: 2021-08-15 08:00:00 +0300

tags: [approach, development, Jekyll, multilingual, site]

excerpt: This series of articles illustrate my approach to create a multilingual site in Jekyll.
exordium: This series of articles ([Part One](http://andreaburan.com/post/multilingual-sites-in-jekyll.html), [Part Two](http://andreaburan.com/post/multilingual-sites-in-jekyll-2.html), [Part Three](http://andreaburan.com/post/multilingual-sites-in-jekyll-3.html), [Part Four](http://andreaburan.com/post/multilingual-sites-in-jekyll-4.html)) and this extremely [basic *GitHub Pages* site](https://ranbureand.github.io/multilingual-experiment/) illustrate my approach to create a multilingual site in *[Jekyll](https://jekyllrb.com/ "Jekyll")*.

published: true
---

+ [Multilingual sitemaps](#multilingual-sitemaps)
  + [Sitemap index file](#sitemap-index-file)
  + [Sitemap files](#sitemap-files)
+ [RSS feed](#rss-feed)
+ [404 page not found](#404-page-not-found)
+ [Resources](#resources)
+ [Afterword](#afterword)

# Multilingual sitemaps

To serve a multilingual sitemap, we need to create a [Sitemap index](https://www.sitemaps.org/protocol.html#index "Sitemaps XML Format, Sitemap index") file and list a Sitemap file for each language we support.

## Sitemap index file

We place the page named `sitemap.html` in the root directory of the site. It points to the other localized sitemaps in the respective language subfolders.

{% raw %}
``` liquid
---
layout: none

sitemap:
  excluded: true
---

<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  {%- assign pages = site.pages | where: 'language_reference', 'sitemap' %}

  {%- for page in pages %}
    <sitemap>
      <loc>{{ site.absoluteurl }}{{ page.url | remove: 'index.html' }}</loc>

      {%- if page.sitemap.lastmod %}
        {%- assign lastmod = page.sitemap.lastmod | date: '%Y-%m-%d' %}
      {%- elsif page.date %}
        {%- assign lastmod = page.date | date_to_xmlschema %}
      {%- else %}
        {%- assign lastmod = site.time | date_to_xmlschema %}
      {%- endif %}
      <lastmod>{{ lastmod }}</lastmod>
    </sitemap>
  {%- endfor %}

</sitemapindex>
```
{: .code-l }
{% endraw %}

By setting the following variables in the front matter of the Sitemap index file:

{% raw %}
``` yaml
sitemap:
  excluded: true
```
{: .code-m }
{% endraw %}

we make sure to exclude it from the list of pages returned in the other Sitemap files.

## Sitemap files

{% raw %}
``` liquid
---
layout: none

title: English Sitemap

language: en
language_reference: sitemap

sitemap:
  excluded: true
---

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  {%- assign posts = site.posts | sort: 'date' | where: 'language', page.language | where: 'published', true %}

  {%- for post in posts reversed %}
    {%- unless post.sitemap.excluded == true %}
    <url>
      <loc>{{ site.absoluteurl }}{{ post.url }}</loc>

      {%- if post.sitemap.lastmod %}
        {%- assign lastmod = post.sitemap.lastmod | date: '%Y-%m-%d' %}
      {%- elsif post.date %}
        {%- assign lastmod = post.date | date_to_xmlschema %}
      {%- else %}
        {%- assign lastmod = site.time | date_to_xmlschema %}
      {%- endif %}
      <lastmod>{{ lastmod }}</lastmod>

      {%- if post.sitemap.changefreq %}
        {%- assign changefreq = post.sitemap.changefreq %}
      {%- else %}
        {%- assign changefreq = 'monthly' %}
      {%- endif %}
      <changefreq>{{ changefreq }}</changefreq>

      {%- if post.sitemap.priority %}
        {%- assign priority = post.sitemap.priority %}
      {%- else %}
        {%- assign priority = 0.5 %}
      {%- endif %}
      <priority>{{ priority }}</priority>
    </url>
    {%- endunless %}
  {%- endfor %}

  {%- assign pages = site.pages | where: 'language', page.language %}

  {%- for page in pages %}
    {%- unless page.sitemap.excluded == true %}
    <url>
      <loc>{{ site.absoluteurl }}{{ page.url | remove: 'index.html' }}</loc>

      {%- if post.sitemap.lastmod %}
        {%- assign lastmod = page.sitemap.lastmod | date: '%Y-%m-%d' %}
      {%- elsif post.date %}
        {%- assign lastmod = page.date | date_to_xmlschema %}
      {%- else %}
        {%- assign lastmod = site.time | date_to_xmlschema %}
      {%- endif %}
      <lastmod>{{ lastmod }}</lastmod>

      {%- if page.sitemap.changefreq %}
        {%- assign changefreq = page.sitemap.changefreq %}
      {%- else %}
        {%- assign changefreq = 'monthly' %}
      {%- endif %}
      <changefreq>{{ changefreq }}</changefreq>

      {%- if page.sitemap.priority %}
        {%- assign priority = page.sitemap.priority %}
      {%- else %}
        {%- assign priority = 0.3 %}
      {%- endif %}
      <priority>{{ priority }}</priority>
    </url>
    {%- endunless %}
  {%- endfor %}

</urlset>
```
{: .code-l }
{% endraw %}

{% raw %}
``` yaml
---
…

sitemap:
  lastmod: true
  changefreq: 'monthly'
  priority: ''
---
```
{: .code-m }
{% endraw %}

## RSS feed

*Coming soon…*

## 404 page not found

*Coming soon…*

# Resources

+ [Making Jekyll multilingual](https://sylvaindurand.org/making-jekyll-multilingual/ "Making Jekyll multilingual")
+ [Making a multilingual website with Jekyll collections](https://www.kooslooijesteijn.net/blog/multilingual-website-with-jekyll-collections "Making a multilingual website with Jekyll collections")

# Afterword

If you feel like adding something to the subject and/or you have spotted something worth fixing, please feel free to either [drop me a line](andreaburan.com/ "Andrea Buran’s Sitefolio") or [create an issue on GitHub](https://github.com/ranbureand/multilingual-experiment/issues): thoughts, critiques, suggestions are all more than welcomed.

Thank you!