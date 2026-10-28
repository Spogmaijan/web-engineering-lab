# Legacy Code Notes

## 1. jQuery Calls and Native JavaScript Equivalents

| jQuery | Native JavaScript |
|---|---|
| `$("#name")` | `document.querySelector("#name")` |
| `$(".field")` | `document.querySelectorAll(".field")` |
| `$("#name").val()` | `document.querySelector("#name").value` |
| `$("#name").text()` | `document.querySelector("#name").textContent` |
| `$("form").on("submit", handler)` | `document.querySelector("form").addEventListener("submit", handler)` |
| `event.preventDefault()` | `event.preventDefault()` |

## 2. Three Legacy Code Smells

1. **Dependency on jQuery:** The code needs an external library for tasks that modern JavaScript can perform directly.
2. **Repeated code:** Similar validation logic may be repeated in different places, making the code harder to maintain.
3. **Unclear error handling:** Simple alert messages do not provide clear, accessible error messages next to the relevant form fields.

## 3. Conclusion

Modern JavaScript can replace many jQuery operations. Using native JavaScript reduces dependencies and can make code easier to maintain.
