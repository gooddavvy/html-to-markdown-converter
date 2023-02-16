const htmlContent = document.getElementById('html-content');
const markdownOutput = document.getElementById('markdown-output');

markdownOutput.innerHTML = `<pre><code>${htmlToMarkdown(htmlContent)}</pre></code>`
