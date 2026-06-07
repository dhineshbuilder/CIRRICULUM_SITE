# Deploying This Curriculum Site To Vercel

This is a static HTML/CSS/JavaScript site. It does not need React, Next.js, npm install, or a build step.

## Recommended GitHub Method

1. Push this workspace to GitHub.
2. Open Vercel and create a new project from that GitHub repository.
3. Set Root Directory to:

```text
curriculum_site
```

4. Set Framework Preset to:

```text
Other
```

5. Leave Build Command empty.
6. If Vercel asks for Output Directory, use:

```text
.
```

7. Deploy.

## CLI Method

From this workspace root:

```powershell
npx vercel curriculum_site
```

For production deployment:

```powershell
npx vercel curriculum_site --prod
```

During setup, choose:

```text
Set up and deploy: Yes
Link to existing project: No, unless you already created one
Framework preset: Other
Build command: empty
Output directory: .
```

## After Deployment

Check these URLs:

```text
/
/volume.html?id=v1
/volume.html?id=v8
```

Progress saving uses browser localStorage, so saved progress is per browser/device.
