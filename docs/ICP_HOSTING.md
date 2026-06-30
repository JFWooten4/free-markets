# ICP hosting setup

The repository builds the Hugo site into `public/` and publishes that directory to an ICP asset canister named `frontend`.

## One-time local setup

Install the current pinned ICP CLI and its required Wasm utility:

```bash
npm install --global @icp-sdk/icp-cli@1.0.2 @icp-sdk/ic-wasm
```

Create and back up a production owner identity:

```bash
icp identity new free-markets-owner
icp identity default free-markets-owner
icp identity principal
icp identity account-id
```

Send ICP to the displayed account, then mint cycles:

```bash
icp token balance -n ic
icp cycles mint --cycles 5T -n ic
icp cycles balance -n ic
```

Build and perform the first deployment:

```bash
./scripts/build.sh --minify
icp deploy frontend -e ic
```

The first deployment creates the canister and writes its public mapping to:

```text
.icp/data/mappings/ic.ids.json
```

Commit that mapping so GitHub Actions always updates the same canister.

Get the canister ID and verify the deployed site:

```bash
icp canister list -e ic
```

Open:

```text
https://CANISTER_ID.icp0.io
```

Use the same canister ID in the XLM Domains `ICP Canister` record.

## GitHub Actions identity

Use a separate identity for automated deployments. Do not place the owner identity in GitHub.

```bash
icp identity new github-actions
DEPLOYER_PRINCIPAL="$(icp identity principal --identity github-actions)"
icp canister settings update frontend \
  --add-controller "${DEPLOYER_PRINCIPAL}" \
  -e ic
icp identity export github-actions > github-actions.pem
```

In the GitHub repository, create an Actions secret named `ICP_DEPLOYER_PEM` and paste the complete contents of `github-actions.pem`.

After confirming the secret was saved, securely remove the exported plaintext key:

```bash
shred --remove github-actions.pem
```

The workflow builds pull requests without deploying. Pushes to `main` build the Hugo site and run:

```bash
icp sync frontend --identity github-actions -e ic
```

The workflow skips deployment until both `ICP_DEPLOYER_PEM` and `.icp/data/mappings/ic.ids.json` exist.

## Ongoing maintenance

Check the cycle balance periodically:

```bash
icp canister status frontend -e ic
```

Top up the canister before its balance becomes low:

```bash
icp canister top-up frontend --amount 2T -e ic
```

Keep the `free-markets-owner` seed phrase offline. The GitHub identity is only for deployments and can be removed or rotated if its secret is exposed.
