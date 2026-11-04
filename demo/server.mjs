
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const ssgFile = path.join(currentDir, "dist", "ssg.html");

const PORT = 3000;

// Create HTML page
function createPage(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <h1>${title}</h1>
        ${content}
    </body>
    </html>
    `;
}

// ISR cache
let cachedISR = "";
let cacheTime = 0;

const REVALIDATE_TIME = 10000;

// Create server
const server = http.createServer((req, res) => {

    // Get URL path
    const url = new URL(req.url, `http://${req.headers.host}`).pathname;

    // Route 1: CSR
    if (url === "/csr") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>CSR Demo</title>
        </head>
        <body>

            <div id="root"></div>

            <script>
                document.getElementById("root").innerHTML =
                    "<h1>Client Side Rendering</h1>" +
                    "<p>This content is rendered using JavaScript.</p>";
            </script>

        </body>
        </html>
        `);
    }

    // Route 2: SSR
    else if (url === "/ssr") {

        const html = createPage(
            "Server Side Rendering",
            `
            <p>This page is generated on the server.</p>
            <p>Generated at: ${new Date().toLocaleTimeString()}</p>
            `
        );

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(html);
    }

    // Route 3: SSG
    else if (url === "/ssg") {

        if (fs.existsSync(ssgFile)) {

            const html = fs.readFileSync(ssgFile, "utf8");

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(html);

        } else {

            res.writeHead(404, {
                "Content-Type": "text/plain"
            });

            res.end("SSG file not found. Run node demo/build-static.mjs first.");
        }
    }

    // Route 4: ISR
    else if (url === "/isr") {

        const now = Date.now();

        if (!cachedISR || now - cacheTime >= REVALIDATE_TIME) {

            cachedISR = createPage(
                "Incremental Static Regeneration",
                `
                <p>This page is generated and cached.</p>
                <p>Generated at: ${new Date().toLocaleTimeString()}</p>
                `
            );

            cacheTime = now;
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(cachedISR);
    }

    // Route 5: Streaming
    else if (url === "/stream") {

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            "Transfer-Encoding": "chunked"
        });

        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Streaming Demo</title>
        </head>
        <body>
            <h1>Streaming Rendering</h1>
            <p>This first part arrived immediately.</p>
        `);

        setTimeout(() => {

            res.write(`
                <p>The second part arrived after 1.5 seconds.</p>
            `);

            res.end(`
                </body>
                </html>
            `);

        }, 1500);
    }

    // Unknown route
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page not found");
    }

});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
