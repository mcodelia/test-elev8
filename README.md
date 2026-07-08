# Elev8

One-page Next.js website for Elev8, based on the `elev8_index_v1.html` reference.

## Requirements

- Node.js
- npm

## Run Locally

From this folder:

```bash
cd /Users/maticode/Documents/test-elev8
npm install
npm run dev
```

Keep that Terminal window open. The site is available only while the development server is running.

Open:

```text
http://localhost:3000
```

You should see a Terminal message similar to:

```text
Local: http://localhost:3000
Ready
```

If the browser shows `ERR_CONNECTION_REFUSED`, the server is not running or it exited with an error. Check the Terminal where you ran `npm run dev`.

## Alternative Preview

Build and run the production server:

```bash
npm run build
npm run start
```

Then open:

```text
http://localhost:3000
```

## Useful Commands

```bash
npm run lint
npm run build
```
