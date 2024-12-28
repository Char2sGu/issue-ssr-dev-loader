# IssueSsrDevLoader

When importing some assets from `node_modules` with a `text` loader on the server, the asset will be resolved to a path instead of the content of the asset.
Local assets are resolved correctly.

```
$ ng serve
Browser bundles
Initial chunk files  | Names            |  Raw size
polyfills.js         | polyfills        |  90.20 kB |
main.js              | main             |   2.61 kB |
styles.css           | styles           |  95 bytes |

                     | Initial total    |  92.90 kB


Server bundles
Initial chunk files  | Names            |  Raw size
polyfills.server.mjs | polyfills.server | 572.91 kB |
chunk-YY6C2CHF.mjs   | -                |   2.79 kB |
server.mjs           | server           |   1.32 kB |
main.server.mjs      | main.server      | 704 bytes |

Application bundle generation complete. [1.060 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
Re-optimizing dependencies because vite config has changed
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
Re-optimizing dependencies because vite config has changed
Cannot optimize dependency: @material-symbols/svg-500/outlined/add.svg, present in 'ssr.optimizeDeps.include'
{
  local: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M445.93-445.93H194.02v-68.14h251.91v-252.15h68.14v252.15h252.15v68.14H514.07v251.91h-68.14v-251.91Z"/></svg>',
  module: '/@fs/home/char2s/projects/issue-ssr-dev-loader/node_modules/@material-symbols/svg-500/outlined/add.svg'
}
```
