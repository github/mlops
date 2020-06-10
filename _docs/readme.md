---
layout: document
title: Read Me
description: Create a Jekyll generated Static Site according to the following design specification. Provide me the Jekyll code and I will take care of creating and hosting it on my GitHub Pages repository.
titles:
- Request
- What I want to achieve
- Design
- Advanced features of this site which are not needed
order_n: 0
tags: [jekyll]
---

# Request:

Create a Jekyll generated Static Site according to the following design specification. Provide me the Jekyll code and I will take care of creating and hosting it on my GitHub Pages repository.

### What I want to achieve:

This is a site primarily for writing content such as software instructions or lecture notes. I would like to easily sort content (posts) by category or date. Content should be written in markdown and I only want to store content in the "_posts" folder (no pages such as "About Me" are needed).

It is important to use **as little code as possible** to achieve this design. I do not want this implemented as a Jekyll theme laid upon a highly flexible site structure. Preferably no theme at all. I don't want unused code or folders related to comments section, social media, etc... The config file, in particular, should be simple.

# Design:
The design should match [this site](https://www.jetbrains.com/help/pycharm) by Jetbrains as closely as possible. Layout should react the same way as this site does to a pc screen or smarthphone, especially the left menu. Same formatting of links. 

### Sections that are needed:
- A top bar with webpage title
- A search box also shown in the top bar
- A left menu showing post titles sorted by category or date. See below for further information (Left menu functionality is NB).
- The main section showing content
- Footer with "MIT License" and "This Page is generated with GitHubPages"

I need the following **markdown features** to be processed similar to the above site and/or GitHub itself (GFM):
- Headers, lists, bold, italics (obviously)
- Blockquotes. Preferably with dark grey bar on the left and on light grey background such as [here](https://www.markdownguide.org/basic-syntax/)
- Inline Code on light grey background
- Code blocks on very dark grey background 
- If possible: Python syntax highlighting supported by GFM and also shown [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Advanced features of this site which are not needed:
- The right column showing Header titles of the current page.
- When using a smartphone, the left menu shows the header titles of current page under the term "On this page"
- Previous post and Next Post


### Parameters 
Parameters should be kept in the main jekyll config file:
- Title
- Website address, if not using the default '___.github.io/"
- Default post to display as home page (I will not use a unique home page)
- I would like to define the colours of the top bar and the Website title in the top bar via the config file.
- Priority posts (see below)

# The Left Menu (NB)
- At the top should be written "Arrange by: Category or Date", where one can click on Category or Date. The text for "Category" and "Date" should have their own CSS colour so they can be highlighted.

- If arranging by Category: Each category is listed alphabetically in the left menu. Each post title is listed within each category, sorted by date.
- A post can be shown in multiple categories if it is labelled with multiple categories.

- If arranging by Date, each Year of posting is listed from highest to lowest. Each post title is listed within each year when it was posted, and sorted by date.

- Clicking on a Category or Year should only expand or collapse this section in the menu, it should have no associated link. Only posts can be clicked.
- Hovering over a Category, Year or Post Title should highlight the box grey.
- The currently displayed post should be in Bold

- Below "Arrange by: Category or Date" should be a list of post titles which are defined in the config file (priority posts). It should come before the list of categories or years. These post titles should be in line on the left with the list of categories. Separated from "Arrange by:..." and the "categories/years" by a horizontal line above and below. 