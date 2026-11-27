// Renders Mermaid diagrams in the Sorrow palette.
// Accepts plain ```mermaid fences (<pre><code class="language-mermaid">) and
// pymdownx.superfences' <div class="mermaid">. Runs deferred, so it swaps the
// code blocks out before highlight.js sees them on DOMContentLoaded.
(function () {
    if (typeof mermaid === "undefined") return;

    document.querySelectorAll("pre > code.language-mermaid").forEach(function (code) {
        var div = document.createElement("div");
        div.className = "mermaid";
        div.textContent = code.textContent;
        code.parentElement.replaceWith(div);
    });

    var css = getComputedStyle(document.documentElement);
    var token = function (name) { return css.getPropertyValue(name).trim(); };

    mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
            darkMode: true,
            background: token("--blackSecondary"),
            fontFamily: getComputedStyle(document.body).fontFamily,
            primaryColor: token("--black"),
            primaryTextColor: token("--greyTernary"),
            primaryBorderColor: token("--cyan"),
            secondaryColor: token("--grey"),
            tertiaryColor: token("--blackSecondary"),
            lineColor: token("--blackTernary"),
            textColor: token("--greyTernary"),
            mainBkg: token("--black"),
            nodeBorder: token("--cyan"),
            clusterBkg: token("--black"),
            titleColor: token("--white"),
            edgeLabelBackground: token("--blackSecondary"),
            noteBkgColor: token("--grey"),
            noteTextColor: token("--white")
        }
    });
    mermaid.run({ querySelector: ".mermaid" });
})();
