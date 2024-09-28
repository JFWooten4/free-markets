```
status: Submitted
submit: 27 Sep 2024
dialog: https://github.com/stellar/stellar-protocol/discussions/1558
```

# 💱 Interleaving the SDEX & AMMs

This discussion extends decentralization points made in [note 2.1.1](https://github.com/stellar/stellar-protocol/discussions/1504), [SCP#25](https://github.com/stellar/scp-proofs/issues/25), and [Cede](https://www.whydrs.org/post/cede-ing-ownership-why-almost-all-publicly-traded-stock-belongs-to-one-company) [timeframe](https://groups.google.com/g/stellar-dev/c/vSsf75cYi5Q/m/AaIjpmC4BAAJ#:~:text=Whether,years). Its principles favor efficiency over incumbent business models employed by community members that have directly helped me over the years. Sorry about that, but keep [innovating](https://www.linkedin.com/pulse/from-trader-trailblazer-web3-stock-investments-sec-review-john-wooten-zvxbc/) because you all are incredible people! 🤝

The inspiration for this post came from @earrietadev's @FxDAO [community](https://discord.gg/t7PMNQVJV5).[^DAO] Last week, Soroban AMM troubles emerged after a [contract upgrade](https://stellar.expert/explorer/public/tx/aa38d1e4ea97228bed1010dfcfb9e4a1c95cf8427238e928e146e00a671dc04d) running the platform's only liquidity pool.[^single] This stopped users from withdrawing their funds and placed all deposits at risk.[^bug] 😐

The nuances of these developments are still [very new](https://www.youtube.com/watch?v=Sm17SAZO9hY&list=PLWUFvhKuc_5vycN0giWpgWIBbL4vuK88t&t=807) to society at large, likely because so few presently understand the [immense centralization](https://x.com/xximcapital/status/1835990569954246837) of risk in the trading markets. It's my understanding that this is why DEX aggregation hasn't been widely discussed across the industry; it's clearly no fault of any Stellar developers. That said, it drives directly into one of our shared objectives:

> The Stellar Network should support decentralization wherever possible, but not at the expense of the majority of its values.

This post explains that perspective as clearly as I can with five days to write it. Ideally, it's the start of a wider conversation, as there is certainly nothing I can do to stop you from deploying anything you want on Soroban. It's part of the endless debate of [decentralization quandaries](https://www.youtube.com/watch?v=JaMJi1_1tkA&list=PLWUFvhKuc_5uICfadww4PR76Rd2bl2MdT) that [I believe](https://www.youtube.com/watch?v=2b8me4_u6fA&list=PLWUFvhKuc_5sf6xhDONTEPOyrDtEn3wwm&t=2361) SCP so eloquently balances. 🧠

[^DAO]: I won't pretend to understand completely everyone's unique and interesting projects. Enrique has made incredible progress developing on Soroban with [fast reactions](https://discord.com/channels/1172621167400599582/1172621168197509135/1286790654957060128), an ongoing decentralization ethos of [community efforts](https://youtu.be/ZT9o_cK3_O4?t=514), and grassroots developer advocacy [within events](https://youtu.be/KKbU7xZqNmw). 👏

[^single]: When I say "only," I don't mean that this is the single source of any liquidity. Inherently, anybody approved by an issuer when applicable can post a native [offer](https://stellar.expert/explorer/public/tx/b9dc5ccfbb3e1012ba32711828c49fb73b5956feca4ee3e4630d96f618600eec) or deposit into a [liquidity pool](https://horizon.stellar.org/liquidity_pools/332b1f85f668a9b8f109207f97cde908b98a32ea6b7f427c620ee242f05a5f38). But it was the only pool selected for additional [governance token incentives](https://fxdao.io/docs/pools-and-rewards). 💸

[^bug]: The immediate, unannounced migration fixed a bug that let attackers empty a pool's reward reserves. 🕷️ Luckily, nobody drained any deposited funds before @rahimklaber found the exploit. 😌 But the entire liquidity protocol had to deploy new routers, pool identifiers, and balances. 🤔

## 1. Accessible Education Breakthroughs

Speaking of Soroban news, I'd like to highlight @SirTyson for his outstanding recent informational videos.[^main-g-ref] It's rare to find a developer of such high caliber as Garand who can also explain their work [in plain English](https://stellar.org/blog/developers/introducing-state-archival-the-solution-to-state-bloat-on-stellar). This ongoing treat stands strongly as a magnet for [new users](https://youtu.be/W4PXPzmzn0A) discovering the network.[^permissionless] 🧲

[<img width="450" alt="garand-eloquent" src="https://github.com/user-attachments/assets/af4ba303-f9b7-45b8-9661-3b1acae2f4e4">](https://consensus2024.coindesk.com/agenda/event/-performance-meets-scale-state-archival-and-multidimensional-fees-355)[^drs-discord]

Garand's sentiments in [this short release](https://x.com/StellarOrg/status/1811498824910930300) captured the wide array of applications we can build:

> Soroban has so many use cases. Use cases that the people building it haven't even begun to imagine yet... Truly, the sky is the limit.

These [groundbreaking applications](https://medium.com/clickpesa-debt-fund/introducing-the-clickpesa-debt-fund-transforming-sme-finance-in-sub-saharan-africa-3e9e7afebf4e) can be so much more than another trading avenue. Per [Sec 3.3](https://github.com/stellar/stellar-protocol/discussions/1504), these new applications can tie directly into egalitarian [engineering sentiments](https://lnns.co/YqRntTfvmuF/2132). Hopefully, we can get more industry understanding around the stellar work Garand and the rest of the network's contributors have recently pioneered. 🌐

[^main-g-ref]: _See_ tremendous [state expiration explainer](https://www.youtube.com/watch?v=H-crrmpLjV4&list=PLD_o9ntBnmGam9BuoTr_4cjPOksi1Dl1A), [informative technical specifications](https://github.com/stellar/stellar-protocol/blob/master/core/cap-0046-12.md), and [historical data education](https://stellar.org/blog/developers/data-structure-bucketlistdb).

[^permissionless]: I'm continually impressed by the permissionless, comprehensive, and public nature of Garand's posts. They break down innovations for everyone to understand and implement, no doubt after countless months of development. Hopefully, more pupils from @stanford-scs will join network development efforts. 🌌

[^dao-ing]: We've been [discussing](https://discord.com/channels/897514728459468821/907476473739354153/1262848253796286530) the challenges of marketing open-source development for weeks as our community [adopts GitHub](https://github.com/WhyDRS/DAO-docs).

[^drs-discord]: _See_ [original material](https://discord.com/channels/1102309240145707049/1118990437684875357/1288454624566841376) in [WhyDRS Discord](https://wooten.link/join), sourcing from @bibicjr and featuring @bobmahalo.

### 1.1 Latency Sensitive Background

As he's publicly communicated, Garand is a huge security nerd (oversimplified). I don't want to put any words in his mouth, but I will tell my recollection of the only conversation we've had as communicated in #1504. Namely, certain directive aspects of his work at a [major hedge fund](https://www.sec.gov/newsroom/press-releases/2023-213) may [seem "greedy"](https://www.quora.com/Are-bankers-as-greedy-as-they-are-often-portrayed-in-the-news-and-popular-culture-Take-films-like-Wall-Street-which-depict-them-as-a-group-of-grubbing-piglets-How-true-is-this/answers/25153079), but [I've done](https://stellar.expert/explorer/public/account/GDRM3MK6KMHSYIT4E2AG2S2LWTDBJNYXE4H72C7YTTRWOWX5ZBECFWO7?filter=trades&order=desc) quite the same and materially respect him for it&mdash;this is just for context.

While Garand might simplify it down to "kernel hacking" on his LinkedIn, he was working on hardware-enabled [high-frequency trading](https://wikipedia.org/wiki/Flash_Boys) enabled by centralized exchanges. Namely, the technology he worked on let his employer make trades that they [can't lose](https://blog.everstrike.io/the-0-hft-strategy/) (or at least almost never lose). 🧐

These business models rely on the extremely convoluted [market structure](https://youtu.be/lEBiyNojTqY) for American trading, which we will get into specifically in 2.2. I respectfully submit that we can further the network's goals by understanding lightly how this work allows for the kind of [risk-free trading](https://youtu.be/tDzMgtcJI0o) Garand saw at Coinbase.[^cb] Given the fragmentation of today's liquid exchange venues, this [latency](https://youtu.be/1ltjnbBaFok) is virtually impossible to remove.

[^cb]: It is my present understanding based on this conversation that Garand ingeniously developed a latency arbitrage strategy whereby he identified, via one-way ping latency, which of three cloud providers used by Coinbase hosted the order book for an asset. Next, he spun up an instance at the identified data center and, using his proprietary latency tests, kept refreshing the instance until his virtual instance was initialized on the same rack as the Coinbase server. ⚡ Once he was on the same Ethernet switch, his connection to Coinbase was so fast that it was trivial to execute arbitrage against other popular crypto exchanges with pro accounts.

### 1.2 A Fresh Start

But we have a unique opportunity with the SDEX to imagine how we might build markets _as they should be_ rather than as they have been. While most of the network's liquidity today revolves around a few trading pairs, it may just power all the world's assets tomorrow. Given we're designing the network for the next billion lumenauts, might we briefly appreciate the extremely unique position of the SDEX?

If we agree that we want stocks and bonds on Stellar, then it's counterproductive to ignore American securities laws. Namely, it is our interpretation after extensive diligence that virtually all other "decentralized" exchange platforms can be classified under existing centralized exchange regulation.[^dex1] This opinion is not yet formalized, and the SEC does not have an explicit stance on DEXes outside of present enforcement actions, as I affirmed with two Commission staff on Monday.[^disc]

Based on the work everyone like Garand does to simplify and accurately explain Stellar, I wholeheartedly believe we can establish a universal set of network interoperability, reporting, and modification standards. Alongside the exceptional on-ramping and redemption flows we've built, might we focus also on the trading functionality so gravely needed for cross-currency remittances? Perhaps our long-term approach on this front can obviate the presently costly market access, interface, and reporting costs. 💼

[^dex1]: _See, e.g.,_ [public discussion](https://www.blocktransfer.com/blog/post/investor-to-investor-direct-trading), cessation of DSTOQ operations through Liechtenstein custodian, and [pending conflicts](https://x.com/JFWooten4/status/1778787218041032865).

[^disc]: This is my present understanding, which [the Syndicate](https://www.blocktransfer.com/about/values) bases its [regulatory filings](https://www.sec.gov/edgar/browse/?CIK=1846058) along. 📜 However, it is subject to change and should not be taken as professional advice. We're [actively working](https://github.com/WhyDRS/DAO-docs/blame/main/comments/S7-27-15/README.md#L187) to clarify the narrative for other Stellar assets, especially tokenized mutual funds.


## 2. Market Fragmentation

Hello, my name is John,[^hey] and I am a little obsessed with [order books](https://ninetonoonsecrets.com/manuscript.pdf#page=97). It all started as a small research idea while I worked and went to school.[^lot] But over the years, it became something [foundational](https://wooten.link/thesis) to my life's purpose of building real savings and retirements for masses of people. 🤝

To understand my perspective, could I share with you a very brief overview of my trading journey? Namely, might I share with you why exactly the American stock market is [broken](https://dollarendgame.substack.com/p/gamestopped?r=3bnvyi)? It's my opinion that the history buried here tells a compelling tale for controlled decentralization, as promoted by our network values.

Our discussion starts with understanding [for-profit](https://x.com/i/spaces/1gqxvNBZoeBxB) exchanges. Particularly, did you know that the U.S. has nearly 100 stock exchanges?[^ats] These competitors each offer effectively the same order liquidity, but they continually undercut each other in fees or [kickbacks](https://bettermarkets.org/wp-content/uploads/2022/03/Better_Markets_Payment_for_Order_Flow_Long_02-21-2021.pdf).

[^hey]: I've been building on Stellar around the SDEX for just over three years because I wholeheartedly believe the network will be the efficient financial system the world so desperately needs. I've been helping around on the docs lately while our community organizes to work on mainstream frontend interfaces. 📃 Accordingly, organizing our approach to consolidate liquidity seems pressing to preserve a clear, direct, and efficient order execution path.

[^lot]: Trading naturally grew into a huge passion of mine, where I saw firsthand the damage of fragmentation. The turning point for me was when a third of my [biggest trade ever](https://wooten.link/bitcoin) went to a brokerage in commissions and fees. Even if you're trading less leveraged assets without derivatives, the small transaction costs created by markets [can really add up](https://github.com/JFWooten4/drip-fee-impact). 📈

[^ats]: _See_ 24 [national exchanges](https://www.sec.gov/about/divisions-offices/division-trading-markets/national-securities-exchanges), [internalizing brokers](https://www.sec.gov/foia-services/frequently-requested-documents/company-information-about-active-broker-dealers), and 72 [dark pools](https://www.sec.gov/foia-services/frequently-requested-documents/alternative-trading-system-ats-list).

### 2.1 Independent Autonomy

This plethora of trading venues, akin to different liquidity pools, presents a tangible difficulty for routing trades. In these last few weeks, we've already seen the emergence of multiple products that promise to capture the best exchange rate across native and Soroban liquidity pools.[^types] And these systems face fundamental rent-extraction incentives to skim off each trade.[^secret]

Might I ask: if the goal here is empowering anyone anywhere to invest in their future, should our underlying market tooling complicate trading for the sake of profits? I respectfully submit that smart contracts on other chains have had years to mature, but they still barely offer anything not present on the native chain or easily possible. While we are early in web3, we are not early in markets, which have naturally developed to serve a select few.[^VOC]

Accordingly, might we look to the long-term implications of interleaving the SDEX with AMMs under the frame of how markets evolved and [can now expand](https://wooten.link/ts)? I'm quite frightened by how other decentralized exchanges developed because they bring the same troubled past of siloed liquidity spread across disparate proprietary venues. In fact, some DEXes like dYdX have already started down the slippery slope of implementing maker-taker fees. 😨

### 2.2 A Liquidity Singularity

Once liquidity becomes diversely spread across the market, there is almost no way to "put the genie back in the bottle." Do you see any innovation surface across these contracts, or only isolated clubs? I started trading because I believed in the market as a path to a more abundant life, not a means to pay some broker huge fees. 💸

It seems the network aims for similar goals: empowering anyone to invest, transact, and capitalize on basic capitalistic financial infrastructure. I just don't want you or someone you care about to join the network only to instantly face a hidden tax on each operation because liquidity is not efficiently organized. Seven years ago, I quit my job to trade full-time, hoping to amass wealth through the investment vehicles touted by society, not to enrich a select few.

This is why I'm so concerned about the emergence of non-protocol DEXes across the industry, which naturally compete. In the spirit of open-source, might I suggest that the best approach follows the organic and necessary axiom that one source of liquidity lets us best match all orders between all parties fairly? In contrast, we can let new options compete for trading interest and follow the footsteps of Wall Street: 🏛

[<img width="640" alt="introducing-routers" src="https://github.com/user-attachments/assets/8745849f-a66a-4839-a9cc-ad69562c13fc">](https://blocktransfer.com/.well-known/yellowpaper.pdf)

[^types]: _See, e.g.,_ services splitting path payments into optimal chunks, splitting orders between three equivalent AMM contracts, and quantifying aggregated LP depth statistics.

[^secret]: Further, many of these routing systems are closed-source proprietary software with material [secrecy risks](https://www.sec.gov/comments/sr-occ-2024-001/srocc2024001-474471-1355754.pdf#page=47), especially for foundational financial infrastructure.

[^VOC]: _See_ [discussion](https://lnns.co/0clzI2NVtmk/2520), [study](https://pure.uva.nl/ws/files/1427391/85961_thesis.pdf), and [explainer](https://www.youtube.com/watch?v=YUwqzeaR1lA&list=PLWUFvhKuc_5trr9i5vEpdWZ6ZNZzHM3Nb&t=23) of early emerging brokerages around the Dutch East India Company. 🧂

### 2.3 Requisite Routing Function

The red circle above is effectively what DEX aggregators do in the context of traditional centralized liquidity pools that are not central exchanges. This is what the Soroban AMMs are, paralleling "exchange ECNs" and "dark ATSs." Again, the problem here is that you have to compare between vast amounts of disparate liquidity pools for every transaction or get a worse price.

I've seen this happen across financial markets for years, and it always leads to a gatekeeping eventuality where only a select few middlemen can access the best pricing. 😞 From what I've seen on other chains, which looks remarkably similar to our trajectory, the exact same is slowly happening to web3. The immediate question for me is whether or not we should protect something so fundamental to human life like trade itself.

If we can agree that everyone should get the same best access to liquidity, then what do you think about unifying markets? Namely, might we focus on exchange, the essence of an efficient capitalist society? Should we leave something so fundamental to our advanced, developed, and practiced ideals of specialization up to the whims of a [select](http://www.nanex.net/aqck2/4311.html) [few](https://web.archive.org/web/20170422040311/https://taylorswift.tumblr.com/post/122071902085/to-apple-love-taylor) [middlemen](https://usceconreview.com/2023/04/18/the-making-of-big-insulin-in-the-united-states/)? 🎩

### 2.4 Price Competition

The founding document of the NYSE was a price-fixing agreement between Wall Street. Brokers pay backend fees like these to the [plethora](https://www.linkedin.com/pulse/pipe-dreams-dollar-schemes-financial-world-xxim-c9eec) of middlemen in the present market system. Do you think extracting value through commissions like these via "smarter trade routing" should be enabled by the SDEX?

To answer this question in the narrow case of the SDEX, might we contemplate the history of traditional centralized financial markets? It's my interpretation of history that, in the long run, all intermediaries go bankrupt. Namely, the evolution of traditional liquidity routing presents a compelling case for the [race to zero](https://github.com/blocktransfer#eliminating-intermediaries-%EF%B8%8F).

The parallel of displaced orders would be a UniswapV4-style Soroban order book, where you can pay kickbacks or direct bribes to [fragment the market](https://www.youtube.com/live/XLc4c7vL3rM?t=2593). The end result of these shenanigans is a plutocracy where governance can self-fulfill perpetual illiquidity across [centralized matchmakers](https://www.sec.gov/comments/s7-25-20/s72520-8569142-230826.pdf#page=13). Might we make investing most [accessible and performant](https://github.com/stellar/stellar-protocol/blob/master/core/cap-0037.md#semantic-changes-for-existing-operations) for real users instead of circular path payment bots, as insightfully predicted by @orbitlens _infra_ note 18. 💡

### 2.5 Classic Operations

An efficient market to me means the most value possible given to all participants. If there's a `payment` taking place, it means the lowest [requisite](https://discord.com/channels/897514728459468821/1268550807335211059/1268596815251640445) transaction cost. And if it's a digital marketplace of buyers and sellers, it means [quite the same](https://wooten.link/gnu).

A middleman, call them the New York Stock Exchange, charging an extra fee to "authorize" and effectuate a transaction? Well, that sounds like an antiquated business model to me. And indeed, at $90 billion dollars [in value](https://finance.yahoo.com/quote/ICE/), these are profitable business models.

Do you think we should block masses of people in developing countries from investing? Transaction costs alone mean many never even have access to these markets in the first place—this is the promise the network offers to everyone. 🌍 Can't this goal be most efficiently reached with native operation performance?

### 2.6 Regulatory Compliance

Financial markets thrive because of liquidity, which we can most easily use when concentrated in the hands of the people. It's the grease in the wheels empowering a global payment system, which is why I believe we must protect it from middlemen at all costs. If we want to bring this liquidity to scale with no centralized party, might I suggest that the core trading functions must stay under classic transparency?

Consider briefly the case of executing a [reverse stock split](https://github.com/blocktransfer/py-tad3-horizon/blob/main/investors/stockSplit.py) using clawbacks, where users have deposited into liquidity pools. Early on, brilliant traditional market advocate @jonjove identified this requisite use case for institutional adoption. And the functionality was [expertly integrated](https://github.com/stellar/stellar-protocol/blob/master/core/cap-0038.md#clawback-assets-from-a-pool) into universal liquidity pools with due consideration. ⚙️

The stable protocol best deals with these [regulated edge cases](https://youtu.be/wcjzKdo0xS8?t=1057) key to basic financial functions like liquidity, which drives safe institutional adoption. I wholeheartedly believe that we need native participation to decentralize [the rules](https://x.com/JFWooten4/status/1838612974325412246) rather than delegate delicate trading edge cases to explicit contract rules. Might we best achieve comprehensive liquidity with this collective existing [rules consensus](https://x.com/BurCapital/status/1839383174033654075) so that certain core financial innovations stay within our collective regulatory scope of [safe oversight](https://youtu.be/e0YJBAJdVoc?t=911)? 🛡️


## 3. Unique Values

There seems to be no other truly decentralized, distributed, and permissionless order book. Do you think this makes the SDEX something special and worth all protections to continue explicitly managing the ledger's liquidity without external states? Should we keep it in whole?

[![contract-risks](https://github.com/user-attachments/assets/5824aacc-a47f-46de-8720-9b080a6ffe66)](https://youtu.be/nOh-7SzI6gM)

Nakamoto's [unkept promise](https://github.com/user-attachments/assets/b4b34d6b-94ea-40e3-8dfd-beb0239e5e9e) was an escape from the tyranny of centralized control. But the liquidity questions plaguing the industry around central exchanges still leave true ownership entirely up in the air.[^cro] They well achieved new [monetary standards](https://youtu.be/W2oRRGVo9xs) since:

> "21 million is not a feature of Bitcoin. It is Bitcoin."

Might I respectfully suggest that, as the globe's financial system and given the materiality of liquidity in the global financial system:

> "Liquidity is not a feature of Stellar. It is Stellar."

[^cro]: _See, e.g.,_ [unaligned risks]( https://www.reddit.com/r/Crypto_com/comments/igh4t3/where_does_cash_back_cro_come_from/), [internalization forces](https://www.reddit.com/r/Crypto_com/comments/igh4t3/comment/g2uoo57), and [unsound models](https://www.listennotes.com/podcasts/taking-stock-whydrsorg-cinl5YDNPCJ/).

---

I respectfully submit to the community that interleaving the SDEX with AMMs furthers our just principles since doing so:
- makes the Stellar Protocol clear, concise, and opinionated;[^values-1]
- introduces new functionality that is opinionated and straightforward to use;[^values-2]
- isolates only one obvious way to accomplish a given task;[^values-3]
- biases the Stellar Protocol towards user **safety,**[^values-4]
- makes the Stellar network secure and reliable;[^values-5]
- biases the Stellar network towards safety, simplicity, reliability, and performance over new functionality;[^values-6]
- allows the Stellar network to run at scale and at low cost to all participants of the network;[^values-7]
- could help the Stellar Network support off-chain transactions, e.g., Starlight;[^values-8]
- enables the Stellar network to power cross-border payments, i.e., payments via **exchange** of assets, throughout the globe, enabling users to make payments between assets in a manner that is fast, cheap, and highly usable;[^values-9]
- facilitates simplicity and interoperability with other protocols and networks;[^values-10] allows the Stellar network to support an orderbook that values simplicity over functionality, and one that primarily serves to enable cross-border payments;[^values-11]
- allows the Stellar network to make it easy for developers of Stellar projects to create highly usable products;[^values-12]
- and facilitates **liquidity** as a means to enabling cross-border payments throughout the Stellar network.[^values-13]

[^values-1]: _See supra_ note 8 regarding convoluted trade history reporting for IDEX contracts. Even with modest standardization, developers will need to implement contract, function, and data standards for each and every unique liquidity pool. Might it be simpler for end users to follow the existing native liquidity pool execution standards?

[^values-2]: Interleaving has been [vocally spearheaded](https://stellar.expert/blog/stellar-amms-at-crossroads-between-triumph-and-disaster) even before the present masses of circular path payments. We want users to have the most financial success, and this might be challenging without [natural understanding](https://discord.com/channels/897514728459468821/907476473739354153/1278056912742518866). Let's do it together through a common exceptional protocol process! 💬

[^values-3]: _Id._ We can give users a standardized, clear, and shared source of all execution with validator-level interleaving optimization. Wallets should not need to independently route large path payments through different routes to guess at specification optimizations. Similarly, trades with comprehensive price optimization obviate interface size arbitraging overhead.

[^values-4]: Without an entirely automated best flow, users risk proprietary systems like the internalization that plagues traditional markets. _See also_ [internalization rate](https://wooten.link/report) at 21, [SEC investigation](https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf#page=38), and [liquidity report](https://www.whydrs.org/post/how-is-a-short-squeeze-of-gamestop-related-to-the-drs).

[^values-5]: Users get maximum security when only they hold the keys to their assets, which can't happen with upgradable contract software development. While I'm not suggesting anything like that might happen in our community, it is a [fundamental weakness](https://revoke.cash/exploits/stablemagnet?chainId=56) solved exclusively through network consensus. Do you think collective scrutiny keeps funds securely processed? 🔐

[^values-6]: Reliability and performance can greatly transform without extensively complicated systems built on the frontend wallet side to extract spreads. Without the need to route between disparate sources of liquidity or transaction processing, might the whole network best employ validation resources? 💻 It seems the aggregation logic in particular could significantly expend ongoing Soroban computational resources.

[^values-7]: The material base functionalities of core embody a universal financial system, like efficient payment performance. But employing Soroban transactions costs more from all deployment, management, and processing standpoints. Might we focus on the existing efficiencies in the protocol's liquidity pools?

[^values-8]: As [SPEEDEX develops](https://arxiv.org/pdf/2404.03201), future scaling can include liquidity pools in a comprehensive efficient system. This continues the empowering decentralization promises of automated liquidity participation so that anyone can inclusively help build SDEX liquidity as a [dominant use case](https://groups.google.com/g/stellar-dev/c/GPjHIYPdud8/m/GvEF7R4UAQAJ). Since this innovation emboldens the native liquidity functions, might the best path forward become a CAP bringing native liquidity to scale all together?

[^values-9]: With native liquidity in one place, might all migrants and global transfers benefit from the best rates based on all available liquidity? Optimizations here can keep currency conversion at its lowest so that money gets to the places that truly [need it most](https://stellar.org/case-studies/irc). Wouldn't this be a better destination than an arbitrage bot, price slippage, or optimization miss?

[^values-10]: As a destination for liquidity, the network becomes much easier to reference when assets have a single point of reference similar to a cohesive best bid or offer. Requiring pricing consolidation into a [single point of failure](https://wallstreetonparade.com/2016/03/the-untold-story-of-why-the-sec-paid-whistleblower-eric-hunsader-750000) unnecessarily separates offer inputs across needlessly competing liquidity venues. There will always be competing DEX aggregators because smart contracts have an inherent competitive nature absent from the protocol.

[^values-11]: Without interleaving as a best system, smart contracts with proprietary routing can dominate discovery. But forcing permissionless developer standardization would be impossible without the extensive transparent consensus around protocol upgrades. 🛠 I respectfully submit to the community that synchronizing disparate Soroban contracts would, in all likelihood, be no more efficient than pushing through a CAP introducing a new fee band to native liquidity pools, for example.

[^values-12]: Do you think direct protocol functions in Horizon are easier to use than a DEX aggregator's contract? It's my interpretation that "the Stellar network" doesn't mean a centralized router on Soroban, despite upgradability. Alone, any interoperable governance standard here again just becomes as important as on-network protocol. 🌐

[^values-13]: Might liquidity be most effective as presently consolidated on the global SDEX? By combining liquidity pool optimizations, we can bypass traditional financial mishaps from brokers approximating spreads. Could a single native standard best synchronize all users with a simple pool of capital?

Might the best work here extend to advancing the protocol for the whole network rather than a few central interests? Given more time, I'd be happy to elaborate further on any of these points either in writing or orally. Moreover, if we support [egalitarianism](https://github.com/stellar/stellar-protocol/blob/master/core/README.md#stellar-network-goals) and everyone participating on the [same playing field](https://www.youtube.com/watch?v=iIMgaUyiEho&list=PLWUFvhKuc_5tD62OdZIv3HUaf4eBaQzG8), then might we contemplate further the competitive advantages of interleaving the SDEX with native AMMs so that liquidity stays core to the protocol?


## 4. Storied Guiding Principles

As someone deeply involved with early crypto liquidity, might @jedmccaleb understand firsthand the quandaries of disparate liquidity pools? In 2012, Jed [wrote](https://bitcointalk.org/index.php?topic=108782.msg1182508#msg1182508): "One thing you can do with it is exchange bitcoins for fiat without the need for a centralized market such as Mt. Gox. Which will be very useful for Bitcoin," when discussing preliminary ideas for Stellar. This [prescient](https://x.com/JFWooten4/status/1809667647040327949) viewpoint introduced me to the foundational ethos that "liquidity begets liquidity."

Might we continue championing the network's distributed exchange, as it was [originally named](https://web.archive.org/web/20170415141617/https://www.stellar.org/developers/guides/concepts/exchange.html)? Specifically, can we continue innovating on the exceptional core concept released in the [first version](https://discord.com/channels/897514728459468821/907476473739354153/1158791737565782199) of the protocol? Namely, interleaving liquidity pools ought to protect users since:

> Multiple exchanges will only increase volatility since each market will be thinner. The only thing that will decrease volatility is liquidity.
> &mdash; [Jed McCaleb](https://bitcointalk.org/index.php?topic=16032.msg212418#msg212418)

Since any account can send an order to the SDEX, its order book is uniquely egalitarian in that all market participants follow the same rules, treatment, and pricing. You receive the same exchange rate whether you are a major European bank or a rural Kenyan farmer. Perhaps the equal execution enabled by SCP and [primed to scale](https://www.scs.stanford.edu/~geoff/papers/speedex.pdf#page=4) can best empower global, inclusive, and decentralized liquidity?
