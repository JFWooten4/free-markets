```
status: Published
submit: 15 Jul 2024
dialog: https://github.com/stellar/stellar-protocol/discussions/1504
```

In re [updating documentation](https://github.com/stellar/stellar-docs/pull/723), I believe we need to clarify some outstanding items, so that developers read accurate network information. ℹ️ In the medium term, this formalization can keep developers satisfied knowing that their noncustodial application will continue functioning on Stellar with a streamlined user-centric approach. 👩🏼‍💻

## 1. Decentralized Governance Innovation

Before diving into this post, I'd like to shine a spotlight on @ankeliu. Anke has been instrumental in spearheading SCF's collaboration with BlockScience to bring Neural Quorum Governance to life.[^anke_gov] Along with the rest of the SCF team, her recent debuting efforts not only shaped the technical landscape of our network but also reinforce the importance of community-driven innovation. 💡

The deployment of NQG on Soroban represents a significant leap forward in our quest for a more democratic and transparent decision-making process. By integrating reputation-based voting power with the flexibility of opt-in group delegation, NQG sets a new standard for governance models. 🗳️ It ensures that every voice within our community can be heard and valued, paving the way for a more inclusive and equitable future.

[<img width="450" alt="NQG-meme" src="https://github.com/user-attachments/assets/5d0f87a6-2b0e-4b26-a702-bcd6091cd4d7">](https://en.wikipedia.org/wiki/Open_government)

The journey to develop and implement NQG has been nothing short of remarkable.[^anke_work] It embodies countless hours of research, an undeniable large commitment of financial resources, and generous community involvement and data shaping.[^anke_efforts] Anke's vision and perseverance have been the guiding force behind this initiative, transforming it from a conceptual framework into a tangible, open-source reality [now available on mainnet](https://medium.com/stellar-community/scfs-implementation-of-nqg-on-mainnet-open-source-08ca1656cfc8). 🥂

[^anke_gov]: Anke’s dedication, leadership, and tireless commitment have been pivotal in driving this project forward, marking a massive advancement in decentralized governance.
[^anke_work]: This project is a testament to what we can achieve when we come together, pooling our resources and expertise for the greater good.
[^anke_efforts]: Anke’s ability to rally support, gather insights, and drive engagement has been nothing short of inspirational.

## 2. Claimable Balances Opportunities
Stellar solves payments, securities, and debt. It solves it better than anyone else. It is the root infrastructure that will become the interplanetary financial system imo. 💱 If Satoshi [was](https://evanhatch.medium.com/len-sassaman-and-satoshi-e483c85c2b10) around, I think he would approve of everything the burgeoning community built.

Claimable balances are essential to the efficient and compliant operation of the network. They provide a flexible and powerful tool for managing payments, regulatory compliance, and network efficiency. By leveraging CBs, we ensure that the network remains decentralized, efficient, and scalable, serving the needs of users, developers, and regulators alike.

In an effort to make Stellar's empowering mission a reality, this section continues our [ongoing discussion](https://groups.google.com/g/stellar-dev/c/BpLxedn4Gpg) of CBs. 💬 It's inspired by discussion at Consensus 2024 with @SirTyson where we contemplated the slowed growth of CBs on the network. Since Garand wasn't familiar with our use case, I'll also recap that in the next section.

### 2.1 Classic Operation Permanence

Classic operations with traditional financial applications form the backbone of the network.[^cb_core] These operations are fundamental to the network’s integrity, recordkeeping, and transparency. Data integral to the network's functionality, such as transaction histories, account balances, and CBs should be stored perpetually, as is common in modern blockchains, promoting:

1. **Trustless Verifiable Trust:** Continuous storage ensures that all historical data remains accessible, promoting transparency and trust within the ecosystem. Users, regulators, and auditors can trace every transaction and balance, reinforcing the integrity of the network. 🔍

2. **Secure Immutable Claims:** Durable storage of critical financial data protects against tampering and fraud. 🚔 This security is paramount for maintaining the network’s reliability and reputation.

3. **Client Operational Efficiency:** Unending storage of classic operations reduces the overhead associated with data retrieval and validation, as this data is continually available without interim restoration, reconstruction, or recalibration. 📀 With a steady reference point through Horizon, clients don't need to worry about the changing state of an otherwise deterministic, defined, and deductible claimant amount.[^asset-splits] That simple choice not only means simpler front-end design but fundamentally it lowers the technical bar for new app developers to startup without operating their own nodes. 🚧

[^asset-splits]: By deductibility, I'm explicitly referring to the unique ability for CBs to be trustlessly modified by an asset issuer, especially when clawbacks are enabled. This foundational federated power allows for the surefire, transparent, and custodian-less implementation of [asset splits](https://groups.google.com/g/stellar-dev/c/40u3UiqMXk0/m/p8-k2mhcAgAJ), which have created [challenges before](https://groups.google.com/g/stellar-dev/c/vSsf75cYi5Q/m/_vUa7fn5AQAJ) and enticed an [anchor solution](https://groups.google.com/g/stellar-dev/c/vSsf75cYi5Q/m/yQNcm7IKAQAJ). While _infra_ Section 3 will detail our implementation and nuances, these can only be formatted into a SEP with certainty around CB durability.

@jonjove brilliantly introduced the concept of CBs to solve a fundamental problem in payment systems: ensuring successful transactions regardless of the recipient's preparedness. According to his CAP, CBs were designed to separate the act of sending a payment from the act of receiving it. 🫱🏽‍🫲🏿 Might this feature also make Stellar more accessible given the [trusting](https://github.com/stellar/stellar-docs/issues/767) nature inherent in quorum sets?

#### 2.1.1 Onboarding New Users

CBs are not just about simplifying ledger analysis. They are a foundational tool for permissionless financial services and self-custodial dApps. 📲 Most pressingly, anchors cannot distribute pre-existing assets to new users without either (i) claimable balances or (ii) centralized trust.

As further detailed _infra_ note 10, the removal of claimable balances introduces requisite trust in centralized contract deployers, even if a standard interface gets developed. This challenge has [already plagued](https://github.com/Dexaran/ERC223-token-standard?tab=readme-ov-file#the-reason-of-designing-erc-223-token-standard) other chains when [routine implementations](https://cointelegraph.com/magazine/phishing-crypto-erc-20-bait-scammers/) of contract standards [go awry](https://github.com/0xjac/master-thesis/blob/f0f363d8d795500b98db4c039e941820eff87948/chapters/07-competing-token-standards.md?plain=1#L50). 💭

More immediately, I will outline the trustless send case addressed in CAP-23, per _infra_ note 11. Consider that a user has 500 pesos in their bank account. 🏦 The bank decides to upgrade their financial infrastructure to Stellar, letting users hold through any wallet application.

If Alice sends her public key to the bank, how will the bank send her pesos? One option requires central coordination whereby the bank creates the wallet app, programming in specific instructions to always add the bank pesos asset. 🧑🏽‍💻 This is not ideal because now only users of the bank app have a user-friendly way to hold their pesos.

Another option is that the bank gives explicit instructions for Alice to add `PESOS-GABC...XYZ` to her wallet's trusted assets. This is not ideal because the communicated message may be intercepted and changed to Mallory's `PESOS-GDEA...STL` asset, either during the message transit or local clipboard interactions. 😈 Moreover, it requires material effort from Alice that acts as a barrier to widespread adoption, especially with feature phones.

Lastly, I might consider the case where the bank operates an interim service where they can ping your device with a request to add a trustline to the pesos asset. 📡 This seems to requires a webhook built into all noncustodial wallet apps in accordance with a costly ecosystem standard for repeatedly querying anchors as to their intent to distribute assets to accounts without trustlines. 😕 While something like this could happen through Soroban, it just begs the question of why introduce such a new permissioned, costly, and demanding ongoing user requirement?[^open_access]

[^open_access]: [Open access](https://resources.stellar.org/hubfs/Treasury%20RFI%20Financial%20Inclusion%20(executed).pdf#page=3) to financial infrastructure means [low cost](https://resources.stellar.org/hubfs/Stellar_Q4_2022_Deck_1.31.2023%20(Report%20Version).pdf#page=34) and ultimately [radically efficient](https://resources.stellar.org/hubfs/Blockchain%20Sustainability%20Report.pdf#page=11) wallet operations.

#### 2.1.2 Facilitating Wallet Decentralization

CBs contribute significantly to the decentralization of the network by eliminating the need for centralized coordination in wallet onboarding. 👛 In traditional payment systems, centralized entities often manage the onboarding process, creating potential bottlenecks and single points of failure. However, with CBs, anyone can send funds to an account without requiring the recipient to be immediately prepared to receive them.

Namely, CBs let anchors perform nuanced mission-critical real-world applications _today_ with transparent and distributed agreement on the conditions of a claimed transfer. I posit that the network is drastically more valuable with the core financial functionality CBs provide through (i) dynamic claimant options, (ii) ledger-bound chronology, and (iii) account object association. 🔐

These three features alone let anchors integrate with existing Stellar wallets without asking permission for a wallet's asset trustlines, which may need to get approved. Might we leave the responsibility of managing claim decisions in the hands of the user rather than the sender? 🤔 This was one option [suggested](https://groups.google.com/g/stellar-dev/c/BpLxedn4Gpg/m/I8SUeP5GAwAJ#:~:text=such,CB) from the recipient end without adding even more data to the CB.

#### 2.1.3 Self-Introduced Claimant

The [existing docs](https://github.com/stellar/stellar-docs/blob/b50c5af013db89c9db9973f21c47d956413d1c3a/docs/learn/encyclopedia/transactions-specialized/claimable-balances.mdx?plain=1#L15) recommend that you "put one of your own accounts as a claimant for a claimable balance." This is concerningly problematic in a distributed environment because of risks a claimant faces while waiting to satisfy all claim conditions. ⏲️ More to the point, it introduces undue custodianship risks if the keys of a semi-honest grantor are ever compromised.

Consider the case where Charlie creates a CB for Alice, claimable in a year. Say Charlie is also allowed to claim the CB for the sake of decreasing network data, thus increasing the amount of storage needed for the CB's additional claimant. Alice now faces the real risk that Charlie claims back the CB on day 364, which could happen for a number of reasons. ❌

Firstly, consider the case where Charlie is a real-world institution offering assets for user Alice. Say Charlie goes bankrupt on day 256, and lawyers analyzing the chain of claims on the entity decide that Alice does not come before senior debtholders. 👩🏿‍⚖️ Charlie now has a direct means of seizing the claimable asset from what would have otherwise been Alice's balance.

If the asset in question has clawbacks enabled, then this is fine and expected behavior. But if the asset is exclusively transferrable&mdash;say USDC&mdash;then Alice has been materially cheated. 🧐 Accordingly, users across the network may begin worrying as the widespread adoption of this suggested practice squarely introduces uncertainty while waiting for claim conditions, thereby introducing counterparty risk.[^central_broker]

[^central_broker]: _See, e.g.,_ [market importance](https://lnns.co/0clzI2NVtmk/2603), [modern implications](https://youtu.be/YUwqzeaR1lA?t=23), and [incomplete alternatives](https://stellar.stackexchange.com/questions/4571/authorize-a-trustilne-for-an-account-before-a-trustline-is-set-up).

Accordingly, the finality of CB transactions gives users comprehensive certainty of payment, per:

1. **Uncoordinated Wallet Creation**: CBs enable a seamless, flexible, and independent onboarding experience without the need for centralized control. Users can receive funds even if they don't have a pre-existing trustline or [a prepared account](https://stellar.expert/explorer/public/tx/bc0bd021d4f7a6de10e9a8eb3d9a50cc74dc938f77971a83e35994aa23f68cbf). This reduces the reliance on centralized entities to manage and coordinate the onboarding process, thus promoting a more decentralized ecosystem. 🌐

2. **Facilitating Transfers and Gifts**: CBs allow users to make transfers and gifts without the recipient needing to take immediate action. This is particularly beneficial for scenarios such as sending gifts or making charitable donations. 🎗️ The sender can create a CB, and the recipient can claim the funds at their convenience, ensuring a smooth, effective, and hassle-free transfer process.

3. **User Tax Benefits**: From a tax perspective, CBs can offer significant advantages. When a user sends a gift or makes a transfer using a CB, the ownership transfer occurs at the time of claiming rather than at the time of sending. 💼 This can help users manage their tax liabilities more effectively, as the (non-accrual) taxable event is deferred until the recipient claims the balance.

### 2.2 Unsystematic Data Rents
As we have collectively agreed, arbitrary smart contract data does not require the same level of permanence as classic operations.[^cb_not_soroban]

```
Might the network continue adopting a dual approach to data storage:
  perpetual storage for classic operations and
  rent-based storage for arbitrary contract data?
```

Implementing a rent-based storage model for this type of data addresses the issue of state bloat and ensures sustainable network performance. Soroban's approach to state expiration exemplifies this strategy, incentivizing efficient storage management as well as commonplace execution runtimes:

[![state-bloat](https://github.com/user-attachments/assets/6a48ddfd-b63b-4a30-8699-2406e129c791)](https://consensus2024.coindesk.com/agenda/event/-performance-meets-scale-state-archival-and-multidimensional-fees-355)

Because CBs are not Soroban contracts, I believe it bears reiterating Soroban's common objectives:

1. **Managing State Bloat:** State bloat occurs when the blockchain's state grows uncontrollably, making it difficult for validators to manage and slowing down transaction processing. By applying a rent model, only essential data remains on the ledger long-term, reducing bloat and improving overall efficiency. This works well when applied to any and all miscellaneous user data on a [resource-specific](https://developers.stellar.org/docs/learn/fundamentals/fees-resource-limits-metering#resource-fee) allocation curve. 🧮

2. **Economic Incentives:** Requiring smart contract data to pay rent creates economic incentives for developers to manage their data efficiently. This model ensures that validators only retain valuable, foundational, and imperative data; while pruning redundant, unoptimized, or outdated information. ⏳ Notably, core financial data like payments and other existing classic operations still never disappear.

3. **Scalable Decentralization:** By mitigating state bloat, the network can maintain high operations per second and lower the barrier to entry for new validators. This approach supports decentralization by ensuring that validator requirements remain manageable. 🛜 However, I respectfully submit that Stellar already has reasonable validation costs, per the recent [validator awards program](https://communityfund.stellar.org/validator-awards), generally in line with other major blockchains.

### 2.3 Core Data Permanence

One common use of CBs is for token lock-ups, which have systemically-important implications in regulated securities. Should Stellar become the new standard financial system, we respectfully submit that the maintenance of these records ought continue operating with classic efficiency. Tactful improvements on the existing model may also foster widespread community adoption, as: 

> "Token lockups are one of the best mechanisms for demonstrating conviction in the long-term success of a project and for aligning the interests of stakeholders over the long-term. This can be determined at various time periods, potentially far in advance of other token considerations; for example, in seed rounds when token warrants are signed."
&mdash; Adina Fischer, Matt Gleason, and Justin Simcock at [a16zcrypto](https://a16zcrypto.com/posts/article/token-launch-operational-guidelines/#section--4)

Given this institutional importance, a simple fix for the spam challenge ensures transparency, security, and efficiency for critical financial operations while managing state bloat. By keeping limited core data outside of contracts, we can maintain the network’s integrity, application, and reliability, ensuring its long-term success and usability. 🌌 As originally suggested by Igor Natanzon at Franklin Templeton, we can maintain existing critical systems by allowing users themselves to reject CBs, ensuring that only meaningful and desired transactions remain on-chain.

[^cb_core]: _See, e.g.,_ payment histories, portfolio trading, and claimable balances (“CBs”).
[^cb_not_soroban]: _See, e.g.,_ inaugural smart contracts [release](https://stellar.org/blog/developers/project-jump-cannon-soroban-preview-release), [design](https://stellar.org/blog/developers/not-all-data-is-equal-how-soroban-is-solving-state-bloat-with-state-expiration), and [craft](https://youtu.be/rbjFjda3_UI?t=7200) supplements.

## 3. Restricted Security CBs
We at [Block Transfer](https://www.blocktransfer.com/about/values) and the greater [DRS](https://www.whydrs.org/what-is-drs) community see great value in [noncustodial distribution](https://github.com/blocktransfer#eliminating-intermediaries-%EF%B8%8F). The promise of CBs for out-of-the-box claim topics wholly separates Stellar from competing chains.[^l1-competition] It drastically improves the ease of auditing grants and acceptances of assets compared to existing smart-contract solutions. 😵‍💫 

CBs are not just a voting tool, distribution framework, or decentralization precedent. They have practical, real-world applications that are vital to our efforts to decentralize capitalism. 🌍 A key aspect of this is their ability to seamlessly comply with the SEC's promulgated [Rule 144](https://www.tad3.dev/en/latest/regs/us/144.html), an American securities law mandating a stock be held for up to a year after issuance before it can be claimed and freely traded. 

This regulation aims to prevent undue public distribution by ensuring that stockholders do not inadvertently act as underwriters. CBs directly address the requirements of Rule 144 by [allowing us](https://stellar.expert/explorer/public/tx/a22b7fa63af4f45cdbab94170d3349f9d5cf4a3df58dacd5704a92ee136a2379) to [issue stock](https://stellar.expert/explorer/public/tx/37be2f6976bf0fc8ca9c716e49e970a2271dd6574feda80df8377530eb88b80a) that is [claimable](https://stellar.expert/explorer/public/tx/da94ed189947e91aee260aef43852784a3fb4816820f148cdd3db487ef7db35c) only after the mandatory holding period. This ensures regulatory compliance while simplifying the process for our users. 👨🏾‍💼 They can confidently hold and eventually claim their stock without the risk of violating securities laws.

### 3.1 Stellar's International Protocol

Our [TAD3 platform](https://tad3.dev) leverages CBs to manage the distribution, disclosure, and claiming of equity offerings. By utilizing CBs, we can ensure that all regulatory requirements are met, providing a transparent and efficient way to handle equity distributions. 📈 This method not only simplifies compliance but also enhances trust, accountability, and reliability in our system.

In building TAD3, I've come to recognize the [growing importance](https://lemmy.whynotdrs.org/post/1166651) of a [uniform standard](https://www.sec.gov/comments/s7-15-23/s71523-301019-767522.pdf#page=62) financial system, especially for empowering [today's disenfranchised](https://youtu.be/1Lq51IJDHI0?t=280). 🤐 If you agree that we're all together building a platform affecting billions down the road, then fostering adoption through existing classic operations seems inherent.

Introducing a `reject_claimable_balance_op` can streamline CB management. In my original undercollateralized loan example, the creditor can reject the CB upon loan repayment, burning a nominal reserve fee and returning the 10 yBTC. This operation reduces network load and simplifies transactions. 🔩

### 3.2 Email Protocol Parallel

We don't block emails because we're worried about storing spam. If bad actors want to spread information across the network, they will.[^limited_data] This was true for email since the [earliest of days](https://en.wikipedia.org/wiki/History_of_email_spam#cite_ref-5) when mass message distribution could generate any profit. 🪙 Thankfully, a growing number of frontend providers are disabling memo displays from unknown senders by default. 🫱🏻‍🫲🏼

The community has a unique opportunity to fix spam in a decentralized, inherent, self-incentivized way. This promising governance chance can leave the network leaps and bounds ahead of traditional centralized and often-exclusory email filters with centralized blacklists. 📨 I believe in our ability to analyze all relevant viewpoints and make a selection that keeps adoption growing!

Lastly, the related cost per CB issue seems similar to unknowing conundrum of selling postage stamps before you know the distance a letter will travel. 📬 Implementing these nuances on a contract-by-contract basis presents material ongoing concerns which are not an issue with the classic standardized operation.[^real_questions] One option is to continue following the example set by major postage services: standardizing costs enough to cover the average expense, inherently subsidizing remote edge-case users in the name of accessibility and inclusive public policy goals.

### 3.3 Collaborative Solution Discovery

As many other members I've talked to, the community's relentless humanitarian mission inspired, astounded, and enticed my imagination. Never would I imagine such care from a financial protocol when learning about the existing banking system as a kid. Our community is now planting the seeds for what might just grow into the world's most stable oak. 🌳

[<img width="450" alt="collective-impact" src="https://github.com/user-attachments/assets/9434007f-f3e6-4b66-8d13-2dc4e68b855d">](https://en.wikipedia.org/wiki/Stellar_(payment_network)#cite_ref-30)

Let me know if this line of reasoning makes sense to you. Would love to hear how you approach any stellar principles, involvement, and adoption.[^status_quo] Claimable balances are a technological marvel that give us a real opportunity to displace incumbent oligopolies through innovation. 🌱

Might we discourage spammers by allowing the rejection of CBs, burning base reserves to the fee pool after using them to cover transaction costs? 👀 This approach can ensure that only relevant and meaningful data persists across ledgers, maintaining network efficiency and scalability. The community's unique L1 features make Stellar an unparalleled tool for empowering anyone, anywhere, anytime to employ capitalism without centralized, self-interested exclusion from a privileged few.[^see-sdex]




[^l1-competition]: The differentiating ability to specify when an account can claim a payment is a groundbreaking innovation at the native network level.
[^see-sdex]: _See, e.g.,_ [financial application](https://blocktransfer.com/.well-known/yellowpaper.pdf) of the SDEX for your own gain as the only native decentralized order book, enabling market inclusion without [legacy](https://www.nber.org/system/files/working_papers/w11556/w11556.pdf#page=5) membership [costs](https://thesis.jfwooten4.com).
[^limited_data]: _See, e.g.,_ low barrier to entry in existing [spam providers](https://groups.google.com/g/stellar-dev/c/BpLxedn4Gpg/m/DgRmH97OAQAJ#:~:text=newfound,problem), mass payment campaigns with memos, and any number of online bots.
[^real_questions]: _See, e.g.,_ question of [entries v. instances](https://discord.com/channels/897514728459468821/1114313260653613168/1117937592730656828), [specific storage syntax](https://discord.com/channels/897514728459468821/1113162153847967844/1113572043909234780), and [ongoing retrievability](https://docs.google.com/document/d/1ye8A0sp_DwiP-ZvCr9SRHqc9--km2K96UUANvdCkaUk/edit?disco=AAAAzhl-MPU) should there by a redundant pressured transition.
[^status_quo]: _Id._ The [existing implementation](https://github.com/stellar/stellar-core/pull/2591/files), which has been subject to ongoing [community improvements](https://github.com/stellar/stellar-protocol/commits/master/core/cap-0023.md), elegantly solves all these challenges, as [was noted](https://github.com/stellar/stellar-core/pull/2591#pullrequestreview-438719014) during review a few years ago.
