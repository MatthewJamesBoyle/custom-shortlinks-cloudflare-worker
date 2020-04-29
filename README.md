# 👷 Custom-Shortlinks for CloudFlare Workers

Super Simple solution to build your own shortlinks.

For example, I own `mattjamesboyle.com`. By deploying this code to Cloudflare workers I can now access `sc.mattjamesboyle.com/git` and it redirects to `github.com/matthewjamesboyle.` I plan to buy a shorter domain, so I can do stuff like `sc.wtf/git`

To add new URLS, simply add them to the JSON object at the top of `index.js`. You could make this a little better by using Cloudflare Workers KV, but since they are not free I avoided them.

### Getting Started

You'll need a Cloudflare account. You can visit [this page](https://workers.cloudflare.com) to get started.

Once done, make sure you install the [Wrangler CLI](https://developers.cloudflare.com/workers/tooling/wrangler)

Once done, simply rename `wrangler.toml.example` to `wrangler.toml` and fill in the details. Update the short links to whatever you want, and run `wrangler build` and `wrangler publish`.

You should now have your own short linking system running on whichever route you specified in `wrangler.toml`!
