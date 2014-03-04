---
layout: page
title: Projects
description: "Selected projects of me"
tags: []
---

Have a look at my &nbsp;<a href="http://github.com/{{ site.owner.github }}" title="{{ site.owner.name}} on Github" target="_blank">
  <i class="icon-github"></i>
  Github Account
</a>
<br>
The following list is directly taken from the Github API ([see how](test))

<!---
<ul>
{% for project in site.data.projects %}
  <li>
  	<h4>
      <a href="{{ project.link }}">
        {{ project.name }}
      </a>
    </h4>
    {{ project.description }}
  </li>
{% endfor %}
</ul>
-->

<h3>All own Github Projects</h3>
<div id="my-github-projects" class="project-list"></div>

<h3>Forked Github Projects</h3>
<p>Usually only forked to send a pull-request.</p>
<div id="forked-github-projects" class="project-list"></div>