function htmlToMarkdown(htmlElement) {
    let markdownString = "";

    const headings = htmlElement.querySelectorAll("h1");
    if (headings.length) {
        for (let heading of headings) {
            markdownString += `# ${heading.textContent}\n\n`;
        }
    }

    const paragraphs = htmlElement.querySelectorAll("p");
    if (paragraphs.length) {
        for (let paragraph of paragraphs) {
            markdownString += `${paragraph.textContent}\n\n`;
        }
    }

    const blockquotes = htmlElement.querySelectorAll("blockquote");
    if (blockquotes.length) {
        for (let blockquote of blockquotes) {
            markdownString += `> ${blockquote.textContent}\n\n`;
        }
    }

    const codeBlocks = htmlElement.querySelectorAll("pre code");
    if (codeBlocks.length) {
        for (let codeBlock of codeBlocks) {
            markdownString += `\`\`\`\n${codeBlock.textContent}\n\`\`\`\n\n`;
        }
    }

    const lists = htmlElement.querySelectorAll("ul, ol");
    if (lists.length) {
        for (let list of lists) {
            markdownString += `${list.tagName === "OL" ? "1." : "*"} ${list.textContent}\n\n`;
        }
    }

    var table = htmlElement.querySelector("table");
    if (table) {
        var tableRows = Array.from(table.querySelectorAll("tr"));
        var tableHeaders = Array.from(tableRows[0].querySelectorAll("th")).map(header => header.textContent);
        var tableColumns = tableHeaders.length;

        markdownString += `| ${tableHeaders.join(" | ")} |\n| ${Array(tableColumns).fill("---").join(" | ")} |\n`;

        tableRows.slice(1).forEach(row => {
            var columns = Array.from(row.querySelectorAll("td")).map(column => column.textContent);
            markdownString += `| ${columns.join(" | ")} |\n`;
        });


        return markdownString;
    }

}
