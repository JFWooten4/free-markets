```
status: Draft
submit: 27 Sep 2024
dialog: https://github.com/stellar/stellar-protocol/discussions/new?category=core-advancement-proposals
```

# 💱 Interleaving the SDEX & AMMs

This discussion extends decentralization points made in [note 2.1.1](https://github.com/stellar/stellar-protocol/discussions/1504), [SCP#25](https://github.com/stellar/scp-proofs/issues/25), and [Cede](https://www.whydrs.org/post/cede-ing-ownership-why-almost-all-publicly-traded-stock-belongs-to-one-company) [timeframe](https://groups.google.com/g/stellar-dev/c/vSsf75cYi5Q/m/AaIjpmC4BAAJ#:~:text=Whether,years). Its principles nullify incumbent business models employed by community members that have directly helped me over the years. Sorry about that, but keep [innovating](https://www.linkedin.com/pulse/from-trader-trailblazer-web3-stock-investments-sec-review-john-wooten-zvxbc/)!

The inspiration for this post came from the [FxDAO](https://youtu.be/ZT9o_cK3_O4?t=514) [community](https://discord.gg/t7PMNQVJV5). Last week, Soroban AMM developers [upgraded](https://stellar.expert/explorer/public/tx/aa38d1e4ea97228bed1010dfcfb9e4a1c95cf8427238e928e146e00a671dc04d) a contract running all the platform's liquidity pools. This stopped users from withdrawing their funds and placed all deposits at risk.[^bug]

[^bug]: The actual bug this immediate, unanounced migration fixed allowed attackers to drain a pool's entire reward reserves. Luckily, nobody drained any deposited funds before @rahimklaber found the exploit. But the entire protocol deployed new routers, pool identifiers, and duplicate tokens.







## Accessable Education Breakthroughs

But before we dive into the implications, I'd like to highlight @SirTyson for his outstanding recent informational videos.[^main-g-ref] It's rare to find a developer of such high caliber as Garand that can also explain their work [in plain English](https://stellar.org/blog/developers/introducing-state-archival-the-solution-to-state-bloat-on-stellar). This ongoing treat stands strongly as a magnet for [new users](https://youtu.be/W4PXPzmzn0A)

focus on innovation on the permissionless side
mgith want to actually move the n2n OB reference here from #723

[^main-g-ref]: Do the info links 

[<img width="450" alt="garand-eloquent" src="https://github.com/user-attachments/assets/af4ba303-f9b7-45b8-9661-3b1acae2f4e4">](https://consensus2024.coindesk.com/agenda/event/-performance-meets-scale-state-archival-and-multidimensional-fees-355)[^drs-discord]
[^drs-discord]: _See_ [original material](https://discord.com/channels/1102309240145707049/1118990437684875357/1288454624566841376) in [WhyDRS Discord](https://wooten.link/join)


commend osmething.... probably garand? i really liked his recent explainers on state expiration
https://www.youtube.com/watch?v=H-crrmpLjV4&list=PLD_o9ntBnmGam9BuoTr_4cjPOksi1Dl1A
which was across socials
potentially href https://discord.com/channels/897514728459468821/907476473739354153/1262848253796286530 re [google img here maybe, if time to incorporate monpoly implciations from s7-24-15]
- [Historical Education](https://stellar.org/blog/developers/data-structure-bucketlistdb)
- "Soroban has so many use cases. Use cases that the people building it haven't even begun to imagine yet... Truly, the sky is the limit." [release](https://x.com/StellarOrg/status/1811498824910930300)
^mentions AMMs on soroban and should explicitly reference extended conversation on _May 30?_ per [Sec 3.3](https://github.com/stellar/stellar-protocol/discussions/1504) which ties into [^egalitarian/**engineering** sentiments](https://lnns.co/YqRntTfvmuF/2132)
see if youtube - https://x.com/StellarOrg/status/1814017394660229367













## Market Fragmentation

Hello, my name is John, and I am a little obsessed with [order books](https://ninetonoonsecrets.com/manuscript.pdf#page=97). It all started as a small research idea while I worked and went to school. But over the years, it become something [foundational](https://wooten.link/thesis) to my life's purpose of building real savings and retirements for masses of people.

To understand my perspective, could I share with you a very brief overview of my trading journey? Namely, might I share with you why exactly the American stock market is [broken](https://dollarendgame.substack.com/p/gamestopped?r=3bnvyi)? It's my opinion that the history buried here tells a compelling tale for controlled decentralization, as promoted by our network values.

Our discussion starts with understanding [for-profit](tZero_this_week_X_link_href) exchanges. Particularly, did you know that the U.S. has nearly 100 stock exchanges?[^ats]


[^ats]: _See_ 24 [national exchanges](https://www.sec.gov/about/divisions-offices/division-trading-markets/national-securities-exchanges), [internalizing brokers](https://www.sec.gov/foia-services/frequently-requested-documents/company-information-about-active-broker-dealers), and 72 [dark pools](https://www.sec.gov/foia-services/frequently-requested-documents/alternative-trading-system-ats-list).






It started potentially how you'd expect: young kid wants to make some money and tries their hand at the stock market. I'll admit, that was the case&mdash;a raw sense of wanting someting better and beliving in the market as a path to get there.

If you've ever invested (and I think we're all pretty deep in lumens), maybe this was a similar call to your start? Wanting to amass wealth through the investment vehicles touted by society. That was the view I had when I quit my job to trade stocks full time.

In the first two weeks of a paper thinkorswim demo, I made more than the entire year prior working minimum wage. 









### Classic Operations

An efficient market to me means the most value possible given to all participants. If there's a `payment` taking place, it means the lowest [requisite](https://discord.com/channels/897514728459468821/1268550807335211059/1268596815251640445) trabsaction cost. And if it's a digital marketplace of buyers and sellers, it means [quite the same](https://wooten.link/gnu).

A middlemen, call them the New York Stock Exchange, charging an extra fee to "authorize" and effectuate a transaction? Well that sounds like an antiquated[^thesis] business model to me. And indeed, at $90 billion dollars [in value](https://finance.yahoo.com/quote/ICE/), these are profitable business models.

## Free Markets

The immediate question for me is whetehr or not we should allow something so fundamental to human life like trade itself
Namely, might we focus on trade, the essense of en efficient capilistt society? The immediate question: should we leave something so fundamental to our advanced, developed, and practoiced ideals of specialization up to the whims of a [select](http://www.nanex.net/aqck2/4311.html) [few](https://web.archive.org/web/20170422040311/https://taylorswift.tumblr.com/post/122071902085/to-apple-love-taylor) [middlemen](https://usceconreview.com/2023/04/18/the-making-of-big-insulin-in-the-united-states/)?

To answer this question in the narrow case of the SDEX, might we contemplate the history of traditional centralized financial marketsd? It's my interpration of history that, in the long run, all intermediaries go bankrupt.[^jerry] Namelt, the evoliution of ECNs[^ecn-q] presents a compelling case for the race to zero.

[^thesis]: _See_ Block Transfer's [foundational thesis](https://wooten.link/thesis).
[^jerry]: _See, e.g.,_ [STUDY_1](), [executive sentiments](https://github.com/blocktransfer#eliminating-intermediaries-%EF%B8%8F), and [STUDY_2]().
[^ecn-q]: _See supra_ note 1. The parallel of ECNs to Stellar would be a UniswapV4-style Soroban order book, except you can pay [kickbacks]() and other [bribes]() to [fragment the market](GARY_97%_CONGRESS_TALK_DIRECT_TIMESTAMP). The end result of these schenanigans is the plutocracy governing our extractive American stock market.[^America]
[^America]: My diction is quite sentimentatal to my hoome nation, as these inescapable "decentralizing" centralization problems reached our market xyz. explain something here on global impact and being blocked out from investing. But if you live elsewere, (especially somewhere less developed) then you may not even have access to these markets in the first place&mdash;which is the promise the network offers to everyone once ubiquitous.

### Price Competition

In the 70's, the NYSE charged $XYZ per stock trade. Your broker pays many fees like these to the [plethora](ANKIT_<MARKET_STRUCUTRE_POST_LINKEDIN) of middlemen in the present market system. For context, here's just a small part of existing trade clearing and settlement labrynths:


[<img width="450" alt="routing-birdsnest" src="https://blocktransfer.com/.well-known/post-internalization.png" style="border-radius: 64pt;">](https://blocktransfer.com/.well-known/yellowpaper.pdf)







When you convert one currency to another in traditional financial markets, your trade happens because of limit orders. [These orders] specify how much someone will pay for a certain amount of any asset. Thus, when you need to convert your dollars to yen, e.g., their order to sell yen for dollars counteracts and "fulfills" your trade.

## Market Depth

The more orders available to transact against, the more currency you can convert at any time without [moving the market](https://dollarendgame.substack.com/p/gamestopped?r=3bnvyi). Stellar stores these open orders as `offer` [objects](https://developers.stellar.org/docs/data/horizon/api-reference/resources/offers/object) directly on chain. XYZ_ONE_SENT_HERE_WITH_HREF_ON_TRADING—maybe SpeedEx post.

## Fill Prices

The network and by extension its [validators](https://stellarbeat.io/) match orders based on the protocol rules of [Stellar Core](https://github.com/stellar/stellar-core/blob/fbb53d8ad42dcc12a046c9be949d654821a24d38/src/transactions/OfferExchange.cpp#L227-L550). SENTENCE_HERE_ON_SAME_PRICE_OR_BETTER SENTENCE_BEST_EXEC (#ref-more-later-on-per-ledger-match-matching).


Financial markets thrive because of liquidity. It's the grease in the wheels, so to speak, of a global payments system. Stellar is one of the very few platforms that accounts for liquidity at scale with no centralized party.











## Competative Interleaving


## Interleaving 

[![contract-risks](https://github.com/user-attachments/assets/5824aacc-a47f-46de-8720-9b080a6ffe66)](https://youtu.be/nOh-7SzI6gM)

"21 million is not a feature of Bitcoin. It is Bitcoin." [src](https://youtu.be/W2oRRGVo9xs)

# Significance
On markets as one of the base functionalities of a capitalist financial system, like `payments`.

## Direct AMM Comparisons
Order book limits compete explicitly with crowdsourced liquidity pools.

## Compounding Fragmentation Perils
By separating the base trading functions so intertwined with the network, we can introduce extractive attack vectors by the nature of rent-seeking.

### Legacy Market Evolutions
We want to promote innovation but understand the past of fragmenting liquidity via ATS evolutions.

### Extensively Complicated Systems
detail the implications of `routing` brokers / parallel to newfound DEX aggregators.

### Popular Chain Problems
How this applies to all the trading applications on legacy smart contracts because of fragmentation.

## Enabling Equal Efficiency
Certain processes are already extracting value as commission on smarter trade routing.

need to heavily push back on building a "sophisticated DEX"
same as shit

# Combination Remedies
Introduce per CAP37, making orders work at the validator level.

## Eliminating Redundancies
The prediction of all the circular path payments was correct.

## Protecting Users
Know they get the best execution with concentrated liquidity; redundant fragmentation eliminated.

## Adapt Insights
Proactively see how others improve (which has been effectively nil) and incorporate into network upgrades.


Developer goals

### Value Alignment

> The Stellar Protocol should be clear, concise, and opinionated.

> New operations and functionality should be opinionated, and straightforward to use.

> There should ideally be only one obvious way to accomplish a given task.

> **The Stellar Protocol should bias towards user safety.**
probably remove the added emphasis lol

see 87% GME internalization rate[^gme]
[^int-r]

[^gme]: intro report https://wooten.link/report
[^int-r]: _See supra_ note XYZ at 21.

_See also_ [SEC investigation](https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf#page=38) uncovering manipulative centralization.


### Stellar goals:

# Goal Alignment

> The Stellar Network should be secure and reliable, and should bias towards safety, simplicity, reliability, and performance over new functionality.

## Reliable Safety

## Execution/Routing Simplicity

## Priotizing Performance

raw inputs v conmpo



## Transactional Efficiency

> The Stellar Network should run at scale and at low cost to all participants of the network.

cost of soroban is higher than classic

same ass shit

> the Stellar Network should support off-chain transactions, e.g. Starlight

this is literally speedex sorta




## Triplicate Implications

> The Stellar Network should enable cross-border payments, i.e. payments via exchange of assets, throughout the globe, enabling users to make payments between assets in a manner that is fast, cheap, and highly usable.



## Interoperability Standard

> The Stellar Network should facilitate simplicity and interoperability with other protocols and networks.

antithical to wierd propritary routing functions
^ standardizing this would basically be communism forcing all permissionless devs to do the same ass shit


## Global Simplicity

> the Stellar Network should support an orderbook that values simplicity over functionality, and one that primarily serves to enable cross-border payments.


> The Stellar Network should enable users to **easily** exchange their non-Stellar based assets to Stellar-based assets, and vice versa.
_[emphasis added]_


> The Stellar Network should make it easy for developers of Stellar projects to create highly usable products.

highly usable doesn't mean DEX aggregators
"The Stellar Network" doesn't mean a centralized router on Soroban, despite upgradability <-- ONLY REFERENCE TO SOROBAN UPGRADABILITY

## Liquidity Mandate

> In support of this, the Stellar Network should facilitate liquidity as a means to enabling cross-border payments.


not fucking possible if fragmented
refer to forex broker ECN model v. `var` accounts


## Values Contemplation

> The Stellar Network should support decentralization wherever possible, but not at the expense of the majority of its values.

sum up with "if we really support [egalitarianism](EXCLUSIVE_VALUES_HREF to https://github.com/stellar/stellar-protocol/blob/master/core/README.md#stellar-network-goals) and everyone participating on the [same playing field](https://www.youtube.com/watch?v=iIMgaUyiEho&list=PLWUFvhKuc_5tD62OdZIv3HUaf4eBaQzG8), then might we contemplate further the competative advantages of interleaving the SDEX with native AMMs? 💭


The Stellar Network should make it easy for developers of Stellar projects to create highly usable products.



## Uniqueness of SDEX
^need to establish how fucked up the system is first
Special because it is the only real distributed order book, reference 

## Decentralization of Rules
^need to first contextualize how impoertant this is per: https://x.com/JFWooten4/status/1838612974325412246
A crucial differentiator from explicit contract rules, implications: https://wooten.link/uniswap

## Efficient Direct States
Reference how it manages the ledger through explicit and defined patterns without external state.
more of a technical thing, prob need to dive into the Herder if time

## Transparent Access Patterns
A universal set of standards for interoperation, reporting, and modifications.
^showcase traditional market API costs, incl. DSTOQ, and flawed long-term approach
discuss explicit REG SHO fee caps with links to the three tenths page in a formal PDF
charts and studies on that if time allows 















## Storied Guiding Principles

As someone who needs no context, Jed un


The [founders](https://stellar.org/blog/foundation-news/introducing-stellar) of the network, particularly Jed McCaleb, understood firsthand the quandaries of centralized [order books](https://wikipedia.org/wiki/Order_book). In 2012, Jed [wrote](https://bitcointalk.org/index.php?topic=108782.msg1182508#msg1182508): "One thing you can do with it is exchange bitcoins for fiat without the need for a centralized market such as Mt. Gox. Which will be very useful for Bitcoin" when discussing preliminary ideas for Stellar.

This [prescient](https://x.com/JFWooten4/status/1809667647040327949) perspective led to the creation of a distributed exchange, as it was [originally named](https://web.archive.org/web/20170415141617/https://www.stellar.org/developers/guides/concepts/exchange.html). The core concept, released in the [first version](https://discord.com/channels/897514728459468821/907476473739354153/1158791737565782199) of the protocol, still operates today. However, for phonetic reasons, we will hereafter refer to it as the Stellar Decentralized Exchange or SDEX.

> Multiple exchanges will only increase volatility since each market will be thinner. The only thing that will decrease volatility is liquidity. &mdash[Jed McCaleb](https://bitcointalk.org/index.php?topic=16032.msg212418#msg212418)

Since any account can send an order to the SDEX, its order book is uniquely egalitarian in that all market participants follow the same rules, treatment, and pricing. You receive the same exchange rate whetehr you are a major European bank or a rural Kenyan farmer.. Ubdeed, the [throughout](REF_SPEEDEX-inclACcc?) enabled by [SCP](REF_DOCS_SCP_PAGE) means you can specify exactly how much you pay for conversions.



Speedex future scaling work: https://arxiv.org/pdf/2404.03201
built as cap improving native!





We want users to have the most financial success. Let's do it together!

idk somewhere should reference https://www.reddit.com/r/Crypto_com/comments/igh4t3/where_does_cash_back_cro_come_from/ which has internalization discussion at https://www.reddit.com/r/Crypto_com/comments/igh4t3/comment/g2uoo57/ in re _TS_ on torubled broker business models (maybe https://www.listennotes.com/podcasts/taking-stock-whydrsorg-cinl5YDNPCJ/)

INIMICAL WITH THE sdex
