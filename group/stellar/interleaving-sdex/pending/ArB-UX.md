Horizon’s pathfinding to determine the path before coore consensus
(differenes here between limiting core routes for AtomicResps)
Doesnt document auto-routing of markt limit orders at all
undelying reliance on pathfinding intermediaties (SB)


- diredct  arb  form https://github.com/stellar/stellar-core/pull/1077  whcih  is  fropm past  questikoninkg  at  https://github.com/stellar-deprecated/horizon/issues/229 (finding  stellar-core bug)


If you look at it from a UX perspective, you're not doing one path find call per payment. If path finding is instant, you're maybe doing one per digit. If it's almost instant, you're maybe doing *ten* per digit. So you have to sit down and think things through really hard.
--- https://groups.google.com/g/stellar-dev/c/wToe6YE2xfU/m/m6bvzXp0BQAJ

## Overcoming _IL_ Naive Obviation

- https://x.com/0xRyuzaki/status/1437512570420727809


