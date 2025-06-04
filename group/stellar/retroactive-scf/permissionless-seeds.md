```
status: Draft
submit: 10 Jun 2025
dialog: https://github.com/stellar/stellar-protocol/pull/1740#discussion_r2119446671
```

There seems to be two differences between Draft and Active:

Draft proposals should not be adopted, while Active proposals can be adopted
Draft proposals can change dramatically, while Active proposals can change subtly.
Ecosystem participants decide for themselves if they're going to adopt a SEP, and while the opinion of the author is a useful signal because it indicates how dramatically or frequently the author believes a SEP may change, participants can decide to adopt a SEP knowing it is subject to change and update their implementations as it evolves if they choose.

It is also difficult for the author to maintain their implicit promise to keep the magnitude of changes aligned with the status of the SEP. The author may believe the SEP should still be in Draft because they expect to receive significant feedback or aren't confident enough in their original proposal, only for the original proposal to be finalized without changes. In the same way, the author may believe the SEP should be in Active because they believe they've fully understood the problem space only to later realize that wasn't true and want to make breaking changes.

If we do this, I think there will be numerous benefits:

Ecosystem participants will recognize and expect the SEPs they adopt to change until they're in Final. We won't have cases where participants thought the proposal was stable only later to learn it isn't.
More SEPs will be authored. If an author doesn't actively pursue developing consensus among participants and the SEP sits in Draft or is prematurely moved to Final, participants will create competing SEPs. Active SEPs give the impression that they are the defacto standard and that participants need to either convince the author to make a change or give up.
SEPs will be more narrowly scoped, because the larger the scope of a SEP, the less likely consensus on the proposal in its entirety is achieved, which would result in competing SEPs being authored.



### Response to  Discssion on Barriers to Submiting SEPs

I';d lik to hear the persective of @ankeliu on this one.  Anke;s overseen  the transofmration  of the  SCF over these  last  menaingful years.  Relvetantly, recent funding changes allow :

- Teams to receive  training  from  an outside consultant with or without  grant approval,
- Direct  ascccess  to  SDF team  members  to  discuss  network  questiosn ajd visions, and
- Skmaller awardds  and review p rocesses  to  prove  the  viability of a new  project concept.

The dfirect manifestation o f these efoforts lead  to  the  [Kickstart](https://web.archive.org/web/20250422192912/https://stellarcommunityfund.gitbook.io/scf-handbook/scf-awards/scf-kickstart)  new program this year. Brioaodlky, these  changes coincide with  an overhaul of  the voting and governance system designed to gie the little  guy  a real  voicce.    I saw the genesis of these  changes i roundd 11, and  they  seem aligned with  Jake;'s  ethos of smlaler contributions foorm a diverce developer-base without consensus.

https://web.archive.org/web/20250422192912/https://stellarcommunityfund.gitbook.io/scf-handbook/scf-awards/scf-kickstart

https://stellarcommunityfund.gitbook.io/scf-handbook/scf-awards/scf-build/legacy-projects

we have existing +1 form leigh in re #1735 as an  example not merged

_see also_  https://github.com/stellar/stellar-docs/commit/a8e083128f31446749ffed84b786169abb4bc3d6
eally good coutnerpoit exact same  thign 9as intro) at  https://github.com/stellar/stellar-core/pull/4751/files

solution likey around letting anyone move from draft to active in PR 

diction as THE FOUDNATION



INPSIRTING with needing fix since 2018  from https://github.com/stellar/stellar-protocol/issues/80#issuecomment-386857773 joahn


#$#  [ermissionelss  commenting

some m embers use items l ikke Gdocs as  was done in  SEP53  during the  fradting and revviewe process
https://docs.google.com/document/d/1swCef4z5XVy6aH9naX7lotp4VboDE3JlScAIZhXqkW4/edit?tab=t.0
s there a way we could consider that case by asking multiple person to prove ownership of multiple keys and then concatenate these to prove ownership of the account?
overcat
overcat
3:07 AM Mar 24
For multi-signature accounts, I think we cannot do this off-chain because the signer list may be updated at any time.

easier  low-level comments htan a formal pR  on  an  indiviau.s  brnamcjh  

how  to re ceive input  nad post  progress with  ANONOMYITY

###  complimenting hte miedum of a draft  PR

doog forum through line commenting here with speicrfic items

challenging to reccomend for Discussion flows in SDFpoliiciy

comparativelyt, anyone  can  csuggest  changes i n real time
^ ex: https://github.com/stellar/stellar-docs/pull/1557#issuecomment-2917081976


### equiv implcications for l ocal  changes per DOCS

we hjave the  commit  historyh here https://github.com/stellar-deprecated/docs/blob/master/validators.md

check if largely SDF or communtiy

adn  then  from that we have stale ones at 



#  super  papreciate

#1731 which  rmeoved  the list
after orbit sel-removed in 1728

> Unlike CAPs, that have a formal list of folks who review and approve the acceptance of CAPs, SEPs don't have a formal list of accepters and have a "lightweight process for approval," as noted by the ecosystem README. SEPs can be proposed and merged on a loose set of requirements as noted in the README.
  - leigh   b1731




##  existing synta x PRs from 53-FIX

nearly fiftenn percent of PRs  to  repo are closed without merging






SEP Versioning
Unlike CAPs, SEPs are assigned versions because they are dynamic and change over time. SEPs use semantic versioning in the form vMAJOR.MINOR.PATCH to determine an appropriate version for each change.

During draft a SEP should have a major version of 0 to indicate that anything in the SEP may change at anytime. Once a SEP moves to Active it should be changed to v1.0.0 and the rules of semantic versioning apply.

All changes to a SEP should be accompanied by an update to its version, no matter how small even typographical corrections. The exceptions that do not require version updates:

Correcting metadata in the Pragma section.
Updating broken links.
Updating links to implementations.