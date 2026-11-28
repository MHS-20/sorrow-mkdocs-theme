// Cycles the palette on <html data-palette>, remembers the choice and swaps
// the theme's own favicon to the matching color.
// base.html applies the stored palette in <head>, before first paint.
(function () {
    var palettes = ["red", "green", "blue"];
    var root = document.documentElement;
    var icon = document.querySelector("link[data-palette-icons]");

    document.querySelectorAll(".palette-switch").forEach(function (button) {
        button.addEventListener("click", function () {
            var next = palettes[(palettes.indexOf(root.dataset.palette) + 1) % palettes.length];
            root.dataset.palette = next;
            if (icon) icon.href = icon.dataset.paletteIcons + (next === "red" ? "" : "-" + next) + ".ico";
            try { localStorage.setItem("sorrow-palette", next); } catch (e) {}
            document.dispatchEvent(new CustomEvent("sorrow:palette"));
        });
    });
})();
