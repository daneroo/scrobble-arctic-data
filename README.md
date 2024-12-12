# scrobble-arctic-data

Tracking arctic data

This repo archives the latest version of arctic-team data every 20 minutes.
The app is deployed at 3 urls:

- <https://cbr.v.imetrical.com/>
- <https://cambridge-bay-research.v.imetrical.com/>
- <https://cambridge-bay-research.vercel.app/>

If the repo goes dormant the cron trigger seems to be disabled. (after 60 days)

It is now using [git-auto-commit-action](https://github.com/stefanzweifel/git-auto-commit-action).
It was previously using flat action (which has been unreliable) but we can still use it's visualizations.

## Running locally

```bash
daniel@galois:.../iMetrical/scrobble-arctic-data main[?] ❯ deno task scrape
Task scrape deno run -q --env-file=.env.local --allow-read --allow-write --allow-run --allow-net --allow-env scrape.js
- Fetched places data: (10 records)
- Wrote raw data to arctic-data.json
- Wrote formatted data to arctic-formatted-data.json
```
