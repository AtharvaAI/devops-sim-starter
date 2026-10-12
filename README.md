# Kestrel Pay platform: DevOps simulation starter

This is the starter repository for the **Bartman DevOps/Cloud Engineer Simulation** (7-day sprints and 30-day
programs). You play the platform engineer at Kestrel Pay, a fintech: pipelines, Dockerfiles, Terraform, Kubernetes,
pull requests and reviews, in a real repository of your own.

## Get started

1. Click **Use this template → Create a new repository**. Your own account; public or private both work.
2. On Bartman, open **DevOps simulation → Connect** and click **Install the App**.
3. Choose **Only select repositories** and pick the repository you just created (exactly one).

## What's in here

- `services/payments-api/`: a tiny Node service (health check, a charges endpoint, a test) and its `Dockerfile`.
- `.github/workflows/ci.yml`: CI that runs the tests on pushes to `main` and on pull requests.
- `scripts/deploy.sh`: a placeholder deploy step.
- `CODEOWNERS`, `.gitignore`.

Each play adds its own files (some of them broken on purpose) through a pull request: see below.

## What the Bartman GitHub App does in your repository

- **Reads** it: files, pull requests, reviews, GitHub Actions runs and checks, to check your work.
- **Opens pull requests on `bartman/*` branches**:
  - when a play starts, `bartman/play-…` with that play's files and one pull request ("Kestrel Pay: sprint setup");
  - during the play, your teammates' changes on `bartman/<change>-…`, as pull requests for you to review.
- It **never** pushes to your main branch, **never** merges, **never** force-pushes and **never** deletes a branch, a
  file or the repository. It doesn't change settings, collaborators, webhooks or secrets. Merging is always your call.
- Bartman stores no GitHub token. To stop everything, uninstall the App (GitHub → Settings → Applications) or press
  **Disconnect GitHub** on Bartman.

## How to work a play

- Review the setup pull request like any teammate's change. Fix what's broken on that branch, or on branches of your
  own, and keep CI green.
- Review teammates' pull requests on GitHub (comments or requested changes), push your fixes to their branch, then
  press **Grade from my repo** on the task in Bartman.
- Merge when you're happy, if you want to. Grading reads the play's branch while its pull request is open, and `main`
  once you've merged it.

Questions: team@bartman.ai
