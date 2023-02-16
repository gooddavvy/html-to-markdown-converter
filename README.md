ChatGPT gets a bonus for helping me make this library.

It's nice! Wanna try it out? The function name is `htmlToMarkdown`. Just add the following code to your HTML:

```html
<script src="https://HTML-to-Markdown-Converter.goodnessdavid.repl.co/index.js"></script>
```

And there you have it! You can now do something like this:
```javascript
const htmlContent = document.getElementById('html-content');
const markdownOutput = document.getElementById('markdown-output');

markdownOutput.innerHTML = `<pre><code>${htmlToMarkdown(htmlContent)}</pre></code>`
```

I hope you like it, and again, me and ChatGPT worked on it together!

BTW take a look at this:
![image](https://storage.googleapis.com/replit/images/1676577863905_0cb3aa87fafe10f64eb3ba5e6a4ff50e.png)
