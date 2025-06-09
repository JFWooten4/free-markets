```
status: Draft
submit: 11 Jun 2025
dialog: https://github.com/stellar/stellar-protocol/pull/1740#discussion_r2119446671
```

##  personal intro

my  intro  to the  cummunity through  drafting  atr https://github.com/stellar/stellar-protocol/issues/1015



href base is https://github.com/stellar/stellar-docs/pull/723#issuecomment-2410026689


There seems to be two differences between Draft and Active:

Draft proposals should not be adopted, while Active proposals can be adopted
Draft proposals can change dramatically, while Active proposals can change subtly.
Ecosystem participants decide for themselves if they're going to adopt a SEP, and while the opinion of the author is a useful signal because it indicates how dramatically or frequently the author believes a SEP may change, participants can decide to adopt a SEP knowing it is subject to change and update their implementations as it evolves if they choose.

It is also difficult for the author to maintain their implicit promise to keep the magnitude of changes aligned with the status of the SEP. The author may believe the SEP should still be in Draft because they expect to receive significant feedback or aren't confident enough in their original proposal, only for the original proposal to be finalized without changes. In the same way, the author may believe the SEP should be in Active because they believe they've fully understood the problem space only to later realize that wasn't true and want to make breaking changes.

If we do this, I think there will be numerous benefits:

Ecosystem participants will recognize and expect the SEPs they adopt to change until they're in Final. We won't have cases where participants thought the proposal was stable only later to learn it isn't.
More SEPs will be authored. If an author doesn't actively pursue developing consensus among participants and the SEP sits in Draft or is prematurely moved to Final, participants will create competing SEPs. Active SEPs give the impression that they are the defacto standard and that participants need to either convince the author to make a change or give up.
SEPs will be more narrowly scoped, because the larger the scope of a SEP, the less likely consensus on the proposal in its entirety is achieved, which would result in competing SEPs being authored.


### Response to Discussion on Barriers to Submitting SEPs

I'd like to hear the perspective of @ankeliu on this one. Anke's overseen the transformation of the SCF over these last meaningful years. Recently, funding changes allow:

- Teams to receive training from an outside consultant with or without grant approval.
- Direct access to SDF team members to discuss network questions and visions.
- Smaller awards and review processes to prove the viability of a new project concept.

The direct manifestation of these efforts led to the [Kickstart](https://web.archive.org/web/20250422192912/https://stellarcommunityfund.gitbook.io/scf-handbook/scf-awards/scf-kickstart) new program this year. Broadly, these changes coincide with an overhaul of the voting and governance system designed to give the little guy a real voice. I saw the genesis of these changes in Round 11, and they seem aligned with Jake's ethos of smaller contributions from a diverse developer-base without consensus.

https://web.archive.org/web/20250422192912/https://stellarcommunityfund.gitbook.io/scf-handbook/scf-awards/scf-kickstart

https://stellarcommunityfund.gitbook.io/scf-handbook/scf-awards/scf-build/legacy-projects

We have existing +1 from Leigh in re #1735 as an example not merged.

_See also_ https://github.com/stellar/stellar-docs/commit/a8e083128f31446749ffed84b786169abb4bc3d6

Really good counterpoint (exact same thing as intro) at https://github.com/stellar/stellar-core/pull/4751/files

Solution likely around letting anyone move from draft to active in PR.

Diction as THE FOUNDATION.

INSPIRING with needing fix since 2018 from https://github.com/stellar/stellar-protocol/issues/80#issuecomment-386857773 joahn

---

## Permissionless Commenting

Some members use items like GDocs as was done in SEP-53 during the drafting and review process:

https://docs.google.com/document/d/1swCef4z5XVy6aH9naX7lotp4VboDE3JlScAIZhXqkW4/edit?tab=t.0

> Is there a way we could consider that case by asking multiple persons to prove ownership of multiple keys and then concatenate these to prove ownership of the account?
> 
> — overcat

For multi-signature accounts, I think we cannot do this off-chain because the signer list may be updated at any time.

Easier low-level comments than a formal PR on an individual's branch.

How to receive input and post progress with anonymity.

### Complimenting the Medium of a Draft PR

Good forum through line commenting here with specific items.

Challenging to recommend for discussion flows in SDF policy.

Comparatively, anyone can suggest changes in real time.

^ Ex: https://github.com/stellar/stellar-docs/pull/1557#issuecomment-2917081976

---

### Equivalent Implications for Local Changes per DOCS

We have the commit history here:

https://github.com/stellar-deprecated/docs/blob/master/validators.md

Check if largely SDF or community.

And then from that we have stale ones at:

# Super appreciate

#1731 which removed the list after Orbit self-removed in #1728.

> Unlike CAPs, that have a formal list of folks who review and approve the acceptance of CAPs, SEPs don't have a formal list of accepters and have a "lightweight process for approval," as noted by the ecosystem README. SEPs can be proposed and merged on a loose set of requirements as noted in the README.
> 
> — Leigh #1731

---

## Existing Syntax PRs from 53-FIX

Nearly fifteen percent of PRs to repo are closed without merging.

---

## SEP Versioning

Unlike CAPs, SEPs are assigned versions because they are dynamic and change over time. SEPs use semantic versioning in the form vMAJOR.MINOR.PATCH to determine an appropriate version for each change.

During draft a SEP should have a major version of 0 to indicate that anything in the SEP may change at any time. Once a SEP moves to Active it should be changed to v1.0.0 and the rules of semantic versioning apply.

All changes to a SEP should be accompanied by an update to its version, no matter how small, even typographical corrections. The exceptions that do not require version updates:

- Correcting metadata in the Pragma section.
- Updating broken links.
- Updating links to implementations.



# old  redesign  prpping notes o n  centralization

First we have  a design hashing mechanism which implies completeness  of genesis  draft  (https://github.com/stellar/stellar-protocol/pull/247#discussion_r263097069) 
[designed ot  support github identificaiton, but this  shoudl  be  a  littel implicit i n the PR (https://github.com/stellar/stellar-protocol/pull/247#discussion_r263097721)]

clearly this is undrealistic if  we awnat to spur  conversaiton

_comlpare_  to  permissioknelss ness of  openingan issue  or  PR :

> In Ethereum they just assign the number before merging, by using for example the pull request ID as ID generator, so the burden on editors is low.
— Nich  at https://github.com/stellar/stellar-protocol/pull/247#issuecomment-460882210

(affrim the schemnics on PR  v Issues  for  the EIPs  as a case study)

## Stale  state as  namign  info

>  Yeah I actually just changed it to `Rejected` or Perma-`Draft`. Basically if something doesn't ever get a decision or loses momentum will just stay as a draft.
— https://github.com/stellar/stellar-protocol/pull/247#discussion_r263097484

##  segue to 1044 in  
https://github.com/stellar/.github/pull/29
++  https://github.com/stellar/stellar-protocol/pull/1555