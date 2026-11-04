
# Rendering Notes

## Task 3: Rendering Tests

### CSR
- Refresh: Successful.
- View Source: Empty root div.
- JavaScript disabled: Content disappeared.
- Conclusion: CSR needs JavaScript to display content.

### SSR
- Refresh: Successful.
- View Source: Complete HTML visible.
- JavaScript disabled: Content remained visible.
- Conclusion: Server generates HTML for each request.

### SSG
- Refresh: Successful.
- View Source: Complete HTML visible.
- JavaScript disabled: Content remained visible.
- Conclusion: HTML is generated before the request.

### ISR
- Refresh: Successful.
- View Source: Complete HTML visible.
- JavaScript disabled: Content remained visible.
- Conclusion: Cached HTML is regenerated after a specific time.

## Task 4: Streaming Measurement

TTFB: To be measured in Network panel.
Total Time: To be measured in Network panel.

Streaming helps users see available content before the complete page finishes loading.

## Task 5: Choosing Rendering Strategies

### 1. Blog Post — SSG
SSG is best for a blog post because its content does not change frequently. It loads quickly and is good for SEO.

### 2. Live Stock-Price Dashboard — CSR
CSR is best because stock prices change frequently. JavaScript can update the prices on the page without reloading the whole page.

### 3. User Account Page — SSR
SSR is suitable because the server can check the logged-in user's identity and generate a page with their personal information.
## Task 11: React Production Build

- Ran `npm run build` successfully.
- Ran `npm run preview` successfully.
- Opened the production app in the browser.
- Checked View Source.
- The root div was empty before JavaScript execution.
- Conclusion: The React application uses Client-Side Rendering (CSR).