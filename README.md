# Kestrel Pay platform: Bartman DevOps/Cloud Engineer Simulation starter

This is the starter repository for the [Bartman DevOps/Cloud Engineer Simulation](https://bartman.ai/simulations/devops-cloud-engineer)
(7-day sprints and 30-day programs). You play an engineer at Kestrel Pay, a fictional payments company.

## Get started

1. Click **Use this template → Create a new repository**. Create it under your own account; public or private both work.
2. In the simulation, open **Connect → GitHub** and install the **Bartman DevOps Simulation** GitHub App.
   Choose **Only select repositories** and pick the repository you just created. Pick only that one.
3. Start your play. During the play, your team asks you to add or fix files here, such as Terraform, workflows,
   Dockerfiles or Kubernetes manifests. The Workbench shows each file and the path it belongs at. Commit it on a
   branch, open a pull request and keep CI green.

## What Bartman can see

The GitHub App is **read-only**. It reads files, pull requests, Actions runs and checks in this ONE repository, and it
never writes. Uninstall it from GitHub at any time to revoke access.

## Layout

- `services/payments-api/`: the service (Node 20, no dependencies). Run its tests with `npm test`.
- `.github/workflows/ci.yml`: CI, which runs on pushes to `main` and on pull requests.
- `scripts/deploy.sh`: the deploy script your team uses.
- `infra/`, `deploy/`: added during your play.

Questions: team@bartman.ai
