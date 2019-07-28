---
title: creative-way
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <div class="date">{{ post.date | date_to_string }}</div>
      <div class="description">{{ post.description }}</div>
    </li>
  {% endfor %}
</ul>