// Cycles the palette on <html data-palette> and remembers the choice.
// base.html applies the stored palette in <head>, before first paint.
(function () {
    var palettes = ["red", "green", "blue"];
    var root = document.documentElement;

    document.querySelectorAll(".palette-switch").forEach(function (button) {
        button.addEventListener("click", function () {
            var next = palettes[(palettes.indexOf(root.dataset.palette) + 1) % palettes.length];
            root.dataset.palette = next;
            try { localStorage.setItem("sorrow-palette", next); } catch (e) {}
            document.dispatchEvent(new CustomEvent("sorrow:palette"));
        });
    });
})();
