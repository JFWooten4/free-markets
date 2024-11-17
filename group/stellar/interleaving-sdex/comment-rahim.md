```
status: Draft
submit: asap lol goddamn fucking fbi raid
dialog: https://github.com/stellar/stellar-protocol/discussions/1558#discussioncomment-10807798
```

Hi @rahimklaber,

Thank you for your thoughts, both here and shared on Discord. It was inspiring to hear via DMs how you got into the network, largely for humanitarian/real-world use cases. Over the years, I've found this to be a common thread linking us together.

In an effort to further these foundational principles that uniquely belowng to the network, might I quickly review my own understanding of these ethos? Chiefly, I understand that the founders wanted a decentralized payments network that was cheap, fast, and inclusive based on personal identity, not computing power. We seen uniquely adept to provide such a system given the legarthy, centralization, and gatekeeping present in other financial systems.

I'm writing this as someone who just wants the most efficient technology possible under our stewardship because I've felt so keenly the vast inadequacies of legacy markets for practically my whole life. They have ripped apart my family, taken nearly every drop of opportunity I've identified right out of my hands, and pulverized my aspirations as a mainstream asset manager.[^self] There is nothing I want more than for the network to succeed, and I believe wholeheatedly that we will triumph enormously over other technologies given the proper execution of scalable, decentralized, egalitarian markets. 🫱🏻‍🫲🏿


[^self]: This is not a reply about myself, but I just want to share my openly-disclosed "stake at the table." I have aproximately $3,000 in both my checking account and Roth IRA; everything else is in [john.xlm](https://stellar.expert/explorer/public/account/GC5TUPFLOXCINDYHQVYYLLVYP6GKHT65ELB2Q2WLFTGN63YYIXPQTDFJ). I sold the vast majority of my assets three years ago for [$30,000](https://youtu.be/rbjFjda3_UI?t=4815), which I've been using to build the stock market on Stellar ever sense.

# 1. Extensive Recent Community Actions

Since this post, quite the collective discussion has popped up on the subject. Perhaps most relevantly, you were rightly given accolades for uncover in the deadly bug.[^yays] 🎖️ The context under which this occured is materially-relevant to the rest of this discussion, so I will link it here:


[^yays]: _See_ the [above post](https://github.com/stellar/stellar-protocol/discussions/1558#discussion-7245978) ("PREV") at n.3.
<!-- this works as long as we only ref PREVs in the footnotes -->

[![meridian-2024-ama](imgs/comments/builders-bridge-thumbnail.png)](https://youtu.be/KTH85egVSzw?t=388)

Also, we wouldn't have heard live about your expert white-hatting if it weren't for [Jayrome](https://discordapp.com/users/769062410518134874), whom kindly reached out to community members to solicit AMA questions before the event. Jayrome relentlessly contributes their time, expertise, and consideration throughout open disucussions, prudent facilitation, and [news aggregation](https://communityfund.stellar.org/project/lumen-loop). And they did an unbelievably-tremendous job asking with relevant tone-setting context from 2022, genuine tact for differing perspectives, and an open mind towards possible solutions.

I believe so earnestly that these open communal disucssions are the secret instrument we can leverge to overtake entranched incumbent interests. Indeed, might the optimal solution for these network-wide quandaries come from the artful, attributable, and permissionless Discussions we've already seen lead to stellar outcomes in CAPs [51](https://github.com/stellar/stellar-protocol/discussions/1435), [53](https://github.com/stellar/stellar-protocol/discussions/1447), and [56](https://github.com/stellar/stellar-protocol/discussions/1460
)?

## 1.1 Previous Mobile Working Advancements

Before diving into the nuances, I'd like to applaud you longstanding efforts to bridge different platforms to stellar with [a single SDK](https://github.com/rahimklaber/stellar_kt). 👏 Too often, work might not see the light of mainnet despite the material efforts behind its development. But many of our long-term challenges can be overcome seamlessly thanks to those key thoughts, incremental imporvements, and persistant bug fixes.

As I've [tried to express](https://github.com/stellar/stellar-docs/pull/723#issuecomment-2410026689), I might not be intimately familiar with the particular nuances of JS/Native/JVM implementations and their core XDR (not Horiozn)&mdash;just yet at least. But it's clear to see that you're making [ongoing progress](https://github.com/rahimklaber/stellar_kt/issues) on what just might be the next big community project. And it's quite inspirational for me at least, to think that you're able to do all that on top of traditional work.

## 1.2 as introducing communal discussion and quotes

Unfortunately, much of this [thinking work](https://github.com/rahimklaber/soroban_token_dao) can get lost in the fast pace of release schedules. In the spirit of documenting [AMM design choices](HREF_PROTOOL_21_meeting?), I'll append some discussions from the [Stellar Global](https://stellarglobal.community) Discord. Namely, most of these messages stem from [shared concerns](https://discordapp.com/channels/761985725453303838/1292523643900919951/1301285580310839367) over a network participant's transparency, integrity, and liquidity governance influence.

### 1.2.1 Adam: Trading Execution Materiality

> what really attracted me to stellar is the sdex order books. once you add an interface, it suddenly feels like stellar has centralized orderbooks.. the stellar sdex orderbooks creat and offer the most free market this world has ever seen...
> the orderbooks on the sdex give EVERY asset on the network a starting point and reference for price. having this time tested and trustworthy reference point provides an adavantage  to every asset in its search for fair value. this advantage is unseen on other networks.
> 
> &mdash; [adam.xlm](https://discordapp.com/channels/761985725453303838/1302004423483981924/1304772394828828712)

> without the sdex isnt stellar just another smart contract blockchain...
> like what makes it special once yo ditch the best part?
> no chain has anything like the sdex orderbooks...
> the sdex orderbooks are still more advanced than any set of orderbooks on any chain. and we still have just enough volume in the sdex to prime the pump for an insane surge of liquidity
> &mdash; [adam.xlm](https://discordapp.com/channels/761985725453303838/1302004423483981924/1302004862170435674)

> the entirety of the sdex amm's provide the market participants with a reasonable aprroximation of the the fair value of the assets in the whole of the system. amm's compliment the orderbooks and vice versa.
> 
> it is a whole organism now. an entire economy has developed inside the sdex. it is the reference point of fair value for anyone attempting to use the fragmented liquidity on soroban.
> 
> we have black boxes providing prices on soroban that are far from the value derived by the trusty sdex. the sdex is a strength of stellar and should be utilized to roll out the soroban economy in an orderly fashion. it gives an opportunity for intrachain arbitrage that is unseen in other chains.
> 
> &mdash; [adam.xlm](https://discordapp.com/channels/761985725453303838/1302004423483981924/1302311486240329800)


### 1.2.2 @ddombrowsky: Order Book Independence

> One other thing to consider: why would stellarx implement the api to trade tokens on the new soroban aqua exchange?  Taking the "D" out of the DEX definitely seems like a step backwards...
> the horizon API gives you everything, not just the tokens that aquarius decides are important.  For example: where can I find the simple UI to swap blend and usdc using the comet pool?
> &mdash; [aLatvian](https://discordapp.com/channels/761985725453303838/1302004423483981924/1304657143466557482)

> Case in point: the 1inch dApp is blocked in all of the US of A.  If amm and dex moves off of stellar core, you should expect nearly all site-specific implementations of these features to be blocked in the US.
> 
> &mdash; [aLatvian](https://discordapp.com/channels/761985725453303838/1302004423483981924/1304657143466557482)

> Right now, I can place an order on a thin orderbook and it might be filled if there's a path payment through it at that price.  Without the amm, I'd have to rely on just the volume in that pair, or maybe someone who happens to be running a bot against some soroban pool somewhere.
> There's also the fact that in ALL other chains, if I want to swap, I need to go to one site that runs a good UI for one pair into a common token (eth or op or sol or whatever), and then at least 1 other site to get to what I want.  Expensive, slow, and annoying.
> 
> &mdash;[aLatvian](https://discordapp.com/channels/761985725453303838/1302004423483981924/1302064708035154000)


### 1.2.3 Active Competative Differentiation Work

> I’m interested to learn what the fees on soroban will be when adoption grows. Stellar classic fees make fee sponsoring very doable and also allow for low value transactions. The latter I really can’t judge yet; soroban be just as efficient in terms of fees as the dex is for conversions of low amounts? 
> 
> &mdash; [Wouter](https://discordapp.com/channels/761985725453303838/1302004423483981924/1305172585788735488)

> We already have tech no other chains have since years. What is needed, not just in Stellar but in the whole crypto bubble, is to actually build things for people out there. Look at the current financial system, it's bloated, slow, old and everything.
> 
> &mdash; [tupui.xlm](https://discordapp.com/channels/761985725453303838/1302004423483981924/1305670913898975292)

^segue this guy (sole tup ref) info the above arg from Garand on building things other than LP venues
"I am talking about the rest of the world who litterally does not care about the tech stack and just want real usage. And AGAIN, crypto is NOT just for finance!"

> At the Meridian round table, I chatted with a bunch of the soroban devs to try and figure out what their needs were wrt soroban DEXs...
> To be clear this is early stages, which is why I wanted to open the conversation at Meridian. Ideally, we'd have something where both soroban and classic could use the SDEX orderbook and both classic AMMs and Soroban AMMs could use SPEEDX as a shared "backend"
> 
> &mdash; [Garand (SDF)](https://discordapp.com/channels/761985725453303838/1302004423483981924/1305123502369538171)



Adam voiced that it's "the coolest creation in crypto in the last 10 years" which comes back to thesis part

relevant face: <-- thinking 1.1-- and 1.3 on Rahim / other, 1.2 very briefly into public background shared around origination acc EA

in addressing Enrique;s points, chiefly around "I agree we need to get rid of the AMMs and maybe just keep the orderbook" - will need to dive into the net social expense of arbitrage

will need to defend my position to be perfected at a protocol level re past convo on saving end users cents becuase cents fucking matter re PFOF and https://discordapp.com/channels/1172621167400599582/1172621168197509137/1291849856121311333

i dont think we can have gif memes, but we need to acknowledge the importance of liqduiity as framed
https://discordapp.com/channels/761985725453303838/1302004423483981924/1304786314092347566

## 1.3 Appreciated Thought-Provoking Perspective

repl here on info

praise:

- https://github.com/rahimklaber/SStream
- https://github.com/rahimklaber/stellar-accounts-as-a-service
- https://github.com/rahimklaber/galactic-wizard as origins





# 2. Enabling Trusted Global Liquidity

Part of Stellar I find so incredible is the heavy lifting done by community validators behind the scenes. The diligent and selfless contributions bring accessable transactions to all. In this light, I [originally](https://github.com/JFWooten4/free-markets/commit/9b8c125b955594c1d73d1ace031146f9588a05fa) wanted to have our own nodes spun up to try testing for the simulated ongoing execution burdens.

Part of the reason for this logic is that I don't want to sit here asking for something for nothing. Namely, I'm only a motherboard, CPU, and NVMe drive away from getting things spun up.[^test] But that;s presently outside my scpoe of poeprational capabilities across organizations per survivability contraints _supra_ note 1.

[^test]: I particularly want to mimic some of the original SPEEDEX paper's results on a modern Threadripper. With some actual data, I can more meaningfully contribute to the conversation going forward. Albeit the precise configuration work is outside my meximal area of expertise.

That said, can we all agree that the contemplation given to my beliefs ought be weighed independently of my present socioeconomic standing? As I've tried to shortly capture, the beaty of the network really shines when it shares the best industry tech with all the classes of society. Could introducing "loyalty tiers" as is so common on central exchanges run counter to the ethos that genius can [can come from anyone](https://lnns.co/ZT-4HtxlXVK)?


## 2.1 Enduring Network Design Perspectives

Expanding on the chief question asked in the video from Meridian,[^ngr] might we take a wholelistic consideration as to the cost of liquidity as it stands today? As volumnous comments in the singular conversation forum so far have releaved, liquidity is a key aspect of the network for users, developers, and advocates together. Reflecting on the asked investment of time, energy, and composability into interleaving liquidity, might we consider the sum network benefits?

[^ngr]: Which is different from the [round table](imgs/comments/garand-offline-roundtable.png) Garand mentions. I reached out to @SirTyson for comment on Nov 1 but haven't heard back yet. In the same chat linked in S 1.2.3, they say SPEEDEX "opens the door to a lot of interesting opportunities, such as higher trade volume, better compatibility between soroban and classic ops, etc."


Markedly, the choices we make around items like [whether or not](https://github.com/stellar/stellar-protocol/pull/1562) contracts call the DEX have significant downstream affects on whether the network runs well for users like us or the centralized institutions presently so dominant across other chains. I like to think there's a reason the large majority of demonstrably-compliant web3 investment products employ the network (or at least originally launched here). All this despite the current lack of attention on self-custody options avaliable to all.[^cbn]

[^cbn]: _See, e.g.,_ the UI depriortization of Stellar on the centralized exchange in note 7 of PREV, buried under every other supported USDC chain. _See also_ similar treatment in the Circle developer dashboard. These starkly contrast with the plethora of legal filings explicitly referencing the network behind the closed doors of legalese.


Might the self-custody implication inherent in existing exchange business models draw attention away from the SDEX? This might lead to a number of quandaries that came up in this discussion such as trading volume compared to propritary venues, AMMs, and HFTs. I believe wholeheartedy in our unique opportunity to collaboratively explore the most efficient globalized solution that satisfies the longstanding needs of traders, developers, and innovators.[^nex]

[^nex]: I might not know exactly what will cahnge about financial markets over the coming decades, which could materially impact SDEX requirements. But I have deeply studied the history of markets over the past six years in an effort to understand what _won't_ change, no matter how many centuries pass. Can you imagine a future where developers demand wider spreads, traders want fewer ways to game the system, or innovators want to build whole businesses on delicate foundations?

this should frame as a collaborative effort to explore other opetions not revelaed in my 1 v 2 hypothecation since theres so many incredibly-intelligent believers in network with genius ieas etrc decenbtralized (this implicates the points amde to Shaptic and adopted by in https://github.com/stellar/stellar-docs/pull/1043#discussion_r1811060899)


### 2.1.1 @jedmccaleb: Blockchain Liquidity Innovator

Might we emphasize Jed's brief remarks on thep anel given their precedential history in markets, as shown by being on of three current footnotes in the [Wikipedia page](https://web.archive.org/web/20241112165049/https://en.wikipedia.org/wiki/Order_book) for order books? The particular footnote posits that Jed was the first person to develop an orderbook link plot showcasing market supply and demand, back when it was just them working alone on Gox. When asked about [their view](https://youtu.be/ZsiPqcyvDFQ?t=1244) from two years ago that "people love the DEX," Jed optimistically referenced the evolution of the DEX, telling Jayrome:

> The basic functionality still needs to exist within Stellar.

Can we agree that this steadfast committment to form refreshingly positions the network in an industry where some leaders are so improperly influenced by Wall Street? Namely, might we best align with our mission to better humanity through the nonprofit nature of SCP combined with the decnentralized governance it implies? While [alternative systems](https://lnns.co/zox1f6-_G4F) serve to enrich a select few, might we objectively ask what could best serve users, absent external business interests?

To bring this point to light, I [recently executed](https://stellar.expert/explorer/public/tx/2d32c9f6ea1baf2bf3fbe051346a42d8d1917c911aa4f4c171915cb0eebf910a) an offer to buy an asset from an issuer I like. However, a majority of the liquidity for this asset lives in Soroban AMM contracts, so I learned after later consultation. Might we jointly develop a scaling solution that doesn't incur at least 80% slippage?


### 2.1.2 @tomerweller: Seeking Efficient Replacement

Tomer seems equallty hopeful for a network with more liquidity, trading, adn access. My understanding of their perspective so far is a focus on composability between protocols built on top of the network. In the disucssion, Tomer [said](https://discord.com/channels/761985725453303838/1302004423483981924/1302276394356703232) they didn't yet have much "to add on top of what was said" at Merridian.[^hack]

[^hack]: According to further [conversation](https://discord.com/channels/761985725453303838/761985725453303841/1306590729098887231), this statement was made before the recent social account takeover. I find this point relevant becasue one of the first things the attacker did was send out mass ETH phishing links. Might we keep this in mind when disucssing the incument architectures that follow?


I sincerely appreciate Tomer's experienced, meticulous, and transformative work throughout the ecosystme. That said, might we bound ourselves for material compliance violations using the two alternative options they propose, based on Soroban and presently in the incubatory stages of development?[^twos] We're all for a new visionary, collaborative, and dynamic system; by my understanding&mdash;building on the same team.

[^twos]: _See_ discussion on first and second options _infra_ S 3.1 and 3.3, respectively. Given the involvement of these systems in the recent [FBI Polymarket raid](https://youtu.be/tx6A3_OLEMY), might we take caution in the real-world lioablities associated with the exchange function. The present path of development could introduce material compliance risks to existing network projects, no matter their locale, given our SEP8-light implmemetatoin of book-entry securities.


But the core function of asset exchange implicates not only regulatory security but also practical custody risks which the previous suprise update actuely brought to light. Combined with the recent hikes in AMM "listing fees," might we contemplate further which path could best grow the network? Fees which, I feel obliged to remind everyone, are paid in speculative tokens for the vast majority of present implementaions.[^nxlm]

[^nxlm]: These tokens are issued, controlled, and governed at the whims of central organiations operation on the netwrok. Indeed, this discussion stemmed from material concerns over the influence one such network participant had over the DEX due to their concentration of tokens. Might we widen our impact by ensuring that, just as with payments, there are no central intermediaries able to contorl the most key spocial function of trade itself?

### 2.1.3 @rice2000: Community Collaboration Focus

From the original 2022 panel to today, Justin has stood firm as a neutral arbitrer between Jed and Tomer's viewpoints.[^arch] It doesn't seem like Justin explicitly prefer any one route, based on limited in-person conversations, historic public info, and [recent statements](https://www.reddit.com/r/Stellar/comments/1ciiki3/comment/l3b0h24). These sentiments were also true by my interpretation of the 2021 [Open Protocol Meeting](https://youtu.be/aHZQfcIdmoQ?t=1214) adopting native AMMs.

[^arch]: Please do feel free to jump in an comment if I'm missing anyhting here, though. 😅 Relevantly, by "adopting" later in this paragraph, I mean taking the [CAP Core Team](https://github.com/stellar/stellar-protocol/blob/master/core/README.md#awaiting-decision---final-comment-period-fcp) poll, based on the open communtiy contribution framework. Might we further discuss elsewhere the migration of disucssions from the stellar-dev mailing list onto GitHub Disucssions, as implicated in S 1 at links 4&ndash;6?


In conversation with the community projects Justin highlighted on [Reddit](https://discord.com/channels/761985725453303838/946921813143851019/1291438741747138560), developers beleive trading needs to be the first Soroban use case because you can't call the DEX from contracts yet. But, as discussed, we can transform the DEX together to deploy infrastructure that doesn;t overly burden a central point of failure. Indeed, Justin seemed to lightly nod when Tomer voiced that "another option" is "people like Garand" prototyping evolved orderbooks implementing SPEEDEX.

Might we continue supporting parallization, decentralization, and concurrent trade execution to "prevent liquidity fragmentation and arbitrage?" Garand is only one of many SDF members who's [voiced](https://discord.com/channels/761985725453303838/1302004423483981924/1306427216699068496) such concerns over needless extractive arbitrage. After a crowd survey, Justin responded in 2022 with their thoughts on the most efficient path forward:

> I actually think having public discussions about controversial issues like: "where scalability verses the DEX&mdash;which one to favor?"


# 3. Smart Contract Trading Systems

As I've [communicated](https://x.com/JFWooten4/status/1849109891471843764) with Tomer and [ecosystem particpants](https://discord.com/channels/897514728459468821/907476473739354153/1263819898594005075) at large, might ew design the evlution of the DEX using a "regulation-aware development strategy" (from [Sec 3](https://github.com/stellar/stellar-docs/pull/723#issuecomment-2410026689))? [Compliance work](https://x.com/BurCapital/status/1857504726159344047) takesm many years of solid foundations, which Blcok Transfer has previously found in the steadfast, utalitarian, and resourceful network. Might we continue expanding on substantial past efforts to implement multithreaded batch trade execution?

As we will see in the next three subsections, the argument here is materially related to the neverending debate of centralization v. decentralization. But when applied to liquidity _tself_, we need a forcing function to an agreed-upon standard not dissimilar to the GPL. The chief difference between traditional "distrbute wealth and power" arguments and fundamental markets is that anything other than a single venue enables wasteful arbitrage.[^furth-liq]

[^furth-liq]: Consider, e.g., the posited scenario fo a rural Kenyan farmer sending Euros through string receive. How can that person expect fair execution if the European bank has some large amount of value lcoked away in a single (or even many) Soroban AMM-type projects? If all the central bankers vote to concentrate their "liquidity rewards" on Yen, will the Kenyan be unreasonably forced to route payments through unnatural venues?


In examiing this question, I will present three common systems empoyed across lesser chains. These arethe sort of arguments I can't really make in a formal filing given their derrogitory nature, so I appreciate this opportuntiy to expand on these thoughts in a meaningul way outside of litigation. 💜 Could you consider reading these sections as if you were the new Chair of the SEC? 

## 3.1 Off-Chain Order Book Systems

Our community cares greatly about order books becuase, as "inneficient" as they might be in data-structure analysis, **they form the basis of an efficeit market.** There is no global financial system when each and every transaction relies on the goodwill of a select few.[^roths] Indeed might the democratic, egalitarian, and accessable provision of liquidity best serve an increasingly decentralized society?

[^roths]: _See, e.g.,_ [banking implications](https://x.com/JFWooten4/status/1854915975247794213) at 1:18:20 deminstrated after the Chancellor was on the brink of second bailout for banks. Could these antiquated challenges exist chiefly because of the unambigous tradeoffs implicit inthe isolated, partitioned, and fragmented markets of yesterday? After fixing the conundrum of whom to trust via SCP, might we perhaps perpetuate Jed's founding vision of a single lqiquitity nexus?

I've believed in the DEX since the moment I understood SCP, [this vide](https://youtu.be/YFca255hXj8), and Wall Street's exclusive club.[^cibt] And I believe with every ounce of my being that we're dooming future generations to contnued exploiteatteion by these bastardizing central planners if we fail to protect the last bastion of a free market present in the network. Here abd now is our opportunity to fulfil Nakamoto's vision for a disintermediated base financial infrastrucutre, capable of the globr's payments, trades, and balances&mdash;not a select few.

[^cibt]: _See_ collaboration discaimer at S 2.2 in [video](https://youtu.be/S75IvkicWD8) description. Both of us generally understood that "protocols" like 0x could work with cautious deplotment, buit time has proved that the developers thereof have consistantly put profit over order execution efficinecy. Might these be the explicit tradeoffs incherit in a [credit-based system](https://youtu.be/YUwqzeaR1lA?t=23) surrounded by venture-cpaital interests?

[opporutnity for another pg here]

### 3.1.1 Unspoken, Silent Centralization Inceitves

![central-complex-routing](imgs/comments/0x-protocol-frontend.png)

Pictured is an image from the present homepage of ZeroEx Holdings, Inc.; better known as 0x. [Here](https://www.sec.gov/edgar/browse/?CIK=0001828694) are their regulatory filings discolsuing material venuture investing for every year in the first three years of its existance. These filings detail how this corporation sold at least $84,121,200 to a paltry 45 investors at minimum.

The public fee schedules avalibael from 0x[^lolf] reveal take rates starting at .15% - conservatively. These are not expenses passed on to a decentralized group of liquidity providers. They are not safegaurding fees built around investor protections of regulatory frameworks _in toto_.

[^lolf]: Which are paltry at best aside from gidding into smart-contract code. _Compare_ these lax discolsures to the extensive public avaliability of pricing data from any number of traditional financial intermediaries. _See, e.g.,_ SEC-mandated Form 606, ATS, and 19b-4 reports letting investors know what fees they internalize.

These are economic rents siphoned off to a select few groups of early investors who were ucy enough to capture the immense value of liquidity singulariies. And it is preciesly this centralizeation that allows them to force transactinos through the complex intermediated frameworks neccesary to most efficiently trabsacto pn _their_ system. Should we really let our freedoms, governance, and oversight stay in the manipulative hands of these centally-controlled iniddlemn?

### 3.1.2 Unspeakably Efficient Path Handling

No matter how you slice andd dice your interpretation, Rust in the execution enviromnet will never operate as fast as validators' C++ logic. This presently enables the unbelievanle efficiencies of 6-hop order routing without a central partyy. Might this unique idfferentiiation of the DEX best allow us to compete with monopolistic, entranched, and stagnant incumbents' domineering grasp on global financial liquisity?

I will go on to compare this opportunity with the present system which [continually faces](https://www.cftc.gov/PressRoom/PressReleases/8774-23) material regulatory scrutiiny. Might the only way to maximuze capital formation, efficient markets, and investor protects be to design a system which fundamnetally disslows centralized censortship of specific items deemed innaproriate in the legacy reguatory context? This idealistic future, poriginated in the founding vision of Stellar, exists only in a distriubted trade execution environment.

The only way to mimix this efficeicnty in the status quo is to consolidate all recordkeeping into a single entity. This powerful overlord can thus know all information, theoretically offering the most efficient system. But we've seen this gatekeeping develop firstahnd through the [monpolization](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3885194) clearly present in America's DTCC, and it's not pretty.

### 3.1.3 We Are Not Ripple

In the BFT world, beneavolent dictators unilaterally decide exactly knwo starts off with power. And in a mathematical system as complex as the market, these initalization conditions have profound long-term implications. Might we step back and ask our selves if it's worth deveating from the ingenious course we've been chartting together for over a decade?





args around access to contract per expensive exec
args for "multi-asset" diversificution horeshit v. routing efficiently


In the example from S 2.1.1, I paid at least three times the trading market rate because today's liquidity venues silo orders into contracts. Despite attempting to use centralized frontends to these services, the process to transact in them

Despite attempting to transact with such hidden sources of liquidity

then dive into the interface quandaries, ebcause **this is more than interface implicationls**



### 3.2 ZKrolls and such



### 3.3 Specified as like uni v4

constant on the limits of other chains to not actually register true offers
maybe here "staked my career on SPEEDEX"



As is made abundantly clear in [this response](https://blog.uniswap.org/wells-notice-response.pdf#page=8) to their SEC investigation, Uniswap "Labs" is a [for-profit C corporation](imgs/comments/uniswap-labs-entity.png) with "leading U.S. institutional investors, such as Paradigm, Andreessen Horowitz, and Union Square Ventures" and "more than 100 employees." This document also highlights that the enterprise has kept its algorithms under the oppressive protection of rent-seeking [software licenses](https://github.com/orgs/WhyDRS/discussions/1).

[large number of technical flaws](https://x.com/gttyson/status/1844446137408946680) per MeV L3 post

also relevant but a seperate oinit whicih perhaps we can interlink with teh SDF's role/ish would be the 
formation of a "Foundation" fiyr years after incrpation, and directly after XYZ (implciate FTX at link explaining the fake insurance fund via FTT)

UniSwap "Labs" is a profit-fit corporation with a [legal mandate](https://en.wikipedia.org/wiki/Dodge_v._Ford_Motor_Co.) to maximimze profits for shareholders.

and obviously at some point we;re goingto  need to introduce the world-signal 2sec round trip as a premise around making somehting decentralized v. the only way to attain faster spee being centralization ir a "[trusted execution encironment](https://x.com/gttyson/status/1844445777114038761)" which requisites gatekeeping to a select few financial intermediaries, serving the interests of Silicone Vlley over Main Street, and porigressubg nations, and you. 

------


possible implicate dzar and emir and enrique
^ def the enq footnote here

at some point we will need to write that the DEX is very explictcityl not fucking nostalgia (but like in a nuanced way t end of snet)

---

original comments 2022:

" The order books are extremely efficient as far as order books go. But orderbooks in general are not the most efficient data structure." [that you can have]

---

here r my contemplating [speedex principles](https://gist.github.com/JFWooten4/827e423f6d3f2f43801602d81d6adbc0) re public discussion

long-tail unliquid assets "better off on AMMs" suggested/asserted, but not how real markets work outside of a traditional data management model
implicate the only fkn long-tail assets whic are equities, and as such there are material introductoryh practices enshrined in law quich require pricing via explicit parties rather than an AMM

mentions cusotmized stableswap pairs which again trivial addition of a bonding curve withing the pathfind (again requisistes teh xdr from prtocol-1555)

as he identitfied, it takes much less assets to build liquidity through an order book for long0-taukl assets





> 0x style is illegal, uncomposable zk = prorietary connections

see thesis at 10.4 if relev

"you can't call classic order books from Soroban" so let's worry about that and fix it since contracts are trivial to implement as connecting data struct market participant (given already holding classic assets) but like researched
it is very very much worth it to "put a lot of effort into that" and doable


### re AQUA hack/bug fix by Rahim:

"There is no certainty. At the end of the day, it doesn't matter how many audits you go through; it doesn't matter how much testing you do. Sometimes there are bugs.[^bug-20] ny bug bounties you go through.

compare with direct "there will be bugs (NOT VERBAITM)" affirming software mindset to somethign [as important](https://stellar.expert/blog/tiny-things-matter-or-detective-novel-featuring-stellar-dex) as markets.

[^bug-20]: Very very very heavily implicate the community's satefty approach in re https://youtu.be/rbjFjda3_UI?t=7080. re id might we "take a minute, do things slow, do them steady, do them the right way from the onset, and fix the bug?" [like done in re the p20 bug delay community-wide decision] which requisities framign disinterop re earely early convo from _Anuxya?_ about interaction between native/soroab n for liq (butt careful b/c now we're implicating another thing which is materially expansive, albeit related implicately)



------
.

cincing in 4.:

[![requisite-humanitarian-application](imgs/comments/path-payment-impact.png)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4550837)
["Necessity" paragraph here]
how it's anything but the black box pictured, whic is explciilt not the case for smart contacts, aggregators, and frontends.[^hidden-fees]

[^hidden-fees]: _See, e.g._ XYZ% [Matcha](), XYZ% [UniSwap](), and .15%+ [zeroEx](actual-org-schedule.pdf#page) website execution expenses. These are not fucking free markets.


need to clarify very explicitly that this is Not Enqiue's fault (or the fxdao community_ but rather a fundamnetal flaw in the endgame of these contracts

emphasize the last clause in re upgradable or not based on the underlying strucutre of the entity operating the order book itself (this can introduce the interview via https://x.com/JFWooten4/status/1853607712111624481)

migrate this into the AQUA requesrds program in Lobstr,. based on a proporietary codebase you can I can't contribute to, help understna,d or even xyz (let's be carefil here iwth social implications)

extrapolate to natural process or the entity ot org or community, whatever around the project as requiring some kind of reward for their "innovation"

_compare_ a turly nonprofit financial systme built for its users to minimie rents in re https://discord.com/channels/761985725453303838/1292523643900919951/1294381549072154746

aprecite the reptatuion based "fast" benefits in _Id._ at 1-4, but emlplore to contrmplate the longerterm thinking that makes Stellar work so foundationally well across developing global nations with usch a dire need for a system that puts us all [on the same playing field](https://youtu.be/5wUhyR94rho).

---

some fnotes and context around both wooten.link/bad (subtle but materially readable, optiopnally by drastically limiting all other footnotes, inclining the _supra_ xyzDs) [can you customize the numbering to start at 30, upto 32?]

open for upgrades, collective growth rather than single propr gatelkeeping re https://discordapp.com/channels/1172621167400599582/1172621168197509135/1286721830211813449

- https://www.youtube.com/watch?v=wcjzKdo0xS8
- https://www.youtube.com/live/aHZQfcIdmoQ?t=1067
- https://stellar.org/blog/developers/amms-in-the-stellar-ecosystem

can also imp[licate the extensive public discussion voer a network feature that is so _key to basic capitalistic tooling_ (but worded more eloquently)

- https://stellar.org/blog/developers/the-principles-behind-protocol-design-amms-stellar
- https://stellar.org/learn/swap-functionality-and-amms (is this a stable link?)
- https://stellar.org/blog/developers/liquidity-liquidity-liquidity


"Stellar has a near-zero-fee Decentralized Exchange built into the protocol, which allows you to trade any token pair and list your tokens without any listing fees or restrictions."
&mdash; [Nikhil Saraf](https://stellar.org/blog/developers/kelp-why-we-built-it-the-liquidity-problem) on [kelp](https://discordapp.com/channels/761985725453303838/1292523643900919951/1301969206081753178)

---

maybe laight gas arg if reelvant in any maningul fn

new native AMMs release as benefit on narrowing at https://youtu.be/FiYKWQyLAuE?&t=1118
"with AMMs ... you're only p[aying 50 basis points. That is "[AMMs create] a 33% imporvement on your cost... When we're thinking about cross-boarder payments, I think we can envision some future state where this is... all different fiat assets that are tokenized into stablecoins. And these AMM pools are enabling cheaper and more efficient FX transactions" &mdash; Phil Meng @ a the SDF

---

first of all we need to acknoledge significantly their work and community controbtuiosn in re n.3

it's not performant if you're doing like 4 txns to min/max the system

Reply with data (src here orignally prob) from running validator, tracking Soroban liquidity-related txn execution time v. paralell interleaved best execution/

in re smart swap and such for the elabroation on protprietarity, incorpoatate "wont' make much difference
" per https://discord.com/channels/1172621167400599582/1172621168197509137/1291850276646551653 as segway to severe materiality

## deeper dive on the price competation which [naturally](https://reports.tiger-research.com/p/onchain-darkpool-eng) occurs
(including negative privces with PFOF)

[^lolpcs]: [instanet_history_comic.pdf](https://github.com/user-attachments/files/17347641/instanet_history_comic.pdf)

[^fragmentation1]: [quandaries_of_fragmentation.pdf](https://github.com/user-attachments/files/17347675/quandaries_of_fragmentation.pdf)
[^fragmentation2]: [Base asset differentiation](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1808269)
[^fragmentation3]: Synch the argument with the material difficulty of [reconciling segmented assets](https://github.com/user-attachments/files/17347723/inften__20200407094352_82382.pdf)

the data implciatiosn originally references at wooten.link/amzn in src § 2.3
https://wallstreetonparade.com/2016/03/the-untold-story-of-why-the-sec-paid-whistleblower-eric-hunsader-750000/

## Confidence

re the reputation game, and applications in specialized financial instrument composability

---

the problem is their revenue, popoularity, and indeed sustainability comes from attracting ever-increasing trading volumes, which presents a [direct conflict of interest](https://youtu.be/YUwqzeaR1lA?t=63) with the [investing public](https://www.reddit.com/r/Bogleheads/comments/ug32km/can_someone_explain_to_me_what_revenue_from/?rdt=55563)[^investing-public]

[^investing-public]: These needs a better citation, likely thje congressional report, study on use of AI, or confetti ban. _See also_ [demoralizaing](https://microstructure.exchange/papers/TME-paper.pdf) at 13 per GUH and the kid that killed himself


S 2 should start with https://www.youtube.com/watch?v=HQZg0ZY-Amg&list=PLWUFvhKuc_5vycN0giWpgWIBbL4vuK88t at a tiemstamp or /ED_

## Our Opportunity

- https://x.com/JFWooten4/status/1842296919160144159
- https://youtu.be/YUwqzeaR1lA?t=63&
- https://youtu.be/UzLCQaJ-TqU

_See, e.g. supra_ note 22, [demo execution RAM](), and _supra_ note 23.



Implicate very deeply https://www.youtube.com/watch?v=QafkIh2nvY0&list=PLWUFvhKuc_5vyAfq_AbWz-wSl82p_xtH9
https://x.com/JFWooten4/status/1815083374744334340

again, discuss the custody implications and href to the not you keys part and such in the nicehash arguments first introdiuced per https://discord.com/channels/761985725453303838/761985725453303841/1293775764830814350
- corporate control
- custody implications
- arbitrary limits [discussed] in re _Compare_:
  - https://discord.com/channels/761985725453303838/761985725453303841/1293804598368145449
  - https://discord.com/channels/761985725453303838/761985725453303841/1293770598891389060




### reasonable ppl in a menainguful debtaet
we have a very very very limited window of time to introduce this material functionality befdore the netowrk faces enough adoption that something like it would be impossible going forwared (maybe maybe maybe href the chat dir in discord on what tomer said abotu how it's poissible b/c that was really solid its at https://discordapp.com/channels/761985725453303838/1302004423483981924/1302262610409951275)
### requisite central plan or not, and omplications re introductory network value

### some fincnaila-sector implications alongside the central regs in place now



## Expanding the Locust of Trust

there are very legitimnate centralization implications in upgradable smart contracts having hteir keys get hacked, as we see so commonly

i know there is soroswap (prob dont mention expckityl;)_ which does this without upgradability
but this segways directly inbto the very foundational argument that andy upggrade (and ther ewill be fucking upgrasdes _see unsiwap vers FN_) goes through the process of creating a new source of liqudiity
the only way to fix this is to have it at the protocol level so that upgrades continue preserving the existing lokced-up liquidity
&&
this will implicate making the argument against deposit locks as discussed on both sides of the agenda


Money is power, and power needs to syty in the hands of the peope.
### 
some of the args around being able to centrally control the liqudity, which is very very fucking bad

this was something that was brought up by XYZ FF/engineering in Discord convo (dir link here)


obvs we need to frame the whole thing around the args, let's start with some src quoite framing at the intro for 2.
but actual info in 2.1 for ref


---
also we should ahve soemthing implicating the use of p[eople as the arbiters for trust in central regs , which precisely cucking translets to these contracts re ~~wooten.link/uniswap~~ link 2 in note 8 of PREV.

and obvs with this, you are very explicitly assuming liability to earn trust, whcih is exactly what fucking SCP is supposed to handle
i should have a fn harping on this and use it as pressure for SCP#25



---
long-term centraliztion implications

even if we can momentarily agree that the "best" Sorobvan DEX(es) will attract a large amount of liqudiity, which dominates the network, this leaves the power over democratic trading in the hands of a select few organizations

presently, the instutitons which run these technologies are centralied, legal, for-profit corporations

this presents the very clear path for "traction" in terms of user funds locked to lead to VC interest

and VCS ARE FUCKING CENTRALIZED AND WILL DO WHAT THEY FUCKING DID TO 0X HOLY SHIT
this is a goddamn untennable posititon
like fduck you wall st

this shoud get framed in the very relevant context of S XYZ (thesis) in link NUM from S ABC in origingal work (which we should declare in the intro as "ABC/D")





the centralization of org argument shoudl implicate the only deleted/private video in [this blog post](https://www.redbellyblockchain.io/researchpapers/is-robinhood-wallet-truly-decentralized-unveiling-the-truth/ previosuly titled "Did the Robinhood Crypto Wallet Just Change Everything?" which very fucking clearly implicates the recent FCM modification (but don't change/mention that in any way whatsoever)

see also "Thought the Crypto Wallet provided on Robinhood was owned by me, but apparently not." at https://www.reddit.com/r/CryptoCurrency/comments/1c8ifcd/warning_do_not_trade_or_store_crypto_on_robinhood/ (this should stay out of TAR)


aksi naybe in re ^ we want to href 




at some point there can be a compliance argument made re:

- CAP 35 -> 36 per compliance impls
  - https://groups.google.com/g/stellar-dev/search?q=dannydoney%40gmail.com
  - https://github.com/stellar/stellar-protocol/blob/master/core/cap-0035.md
  - https://github.com/stellar/stellar-protocol/blob/master/core/cap-0036.md
- "issuing assets in a regulatory compliant manner" &mdash; [u/denelledixon](https://www.reddit.com/r/Stellar/comments/1f2lyfl/comment/lkix9dp)
- the youtube chat on AMM adoption for CBs as returning sponsor

# Things to incorporate:

- https://github.com/JFWooten4/JFWooten4/blob/main/sticky-notes/blah.md
- https://www.google.com/search?q=%22dencetralized+robinhood%22&oq=%22dencetralized+robinhood%22 at supra, implicating very explicitly the interview intro congratulations with coderipper and then this very obviously introduces the corporate entity argument above
- idk this shit fuck em https://app.hyperliquid.xyz/trade as per core arguments from https://hyperliquid.gitbook.io/hyperliquid-docs (dont fuckuing cite these assholes)
okay they're probab;ly good people, but i  mena it in the sense of it being sytemically flawed, so i should communicate that dman

ubunntu spec at https://github.com/stellar/stellar-docs/pull/723/commits/f83f4ade7f9f09b2be52b10e4fa19e43c1f03623

gov things
- https://github.com/stellar/stellar-protocol/blob/master/core/cap-0044.md



TOMER Meridian:

says "one way" is soroban 0x/uniswap v4 protocols (for more granuality)

personal analysis of 0x[^capture]
question of v4 just being due to the limits of slower chains without OBs
[^capture]: _See_ [comparative analysis](https://blocktransfer.com/.well-known/thesis.pdf#page=15) in PREV S 2.

but we don't need to pick and chose given the SPEEDEX advanceemnmts highlighted by recent community discussion.

Framing efficient "data strcutures" v. fukn "markets" which CANNOT HAVE central power over protocol liquidity in the hands of a relatively opaque and historiucallty contextual oprg




### footnotes

Enrique: let's commend the move away from PoW per mining implications





# 4.






Might we defend the DEX as the last bastion of a free financial market?













---

clkosing intro to community in thread:

let's do as a reply to https://discordapp.com/channels/761985725453303838/1302004423483981924/1304799045826379818 based on DMs

we're all on the same team 🤝

^ per se this (prob respond here or quote: https://discord.com/channels/761985725453303838/779402900828323891/1307362967918215250

> There is a single group of people that issue AQUA tokens, whether or not the distribution thereof comes from DAO choices or not. The ICE systemic design choices rested in the hands of a central organization. Compare this with the decentralized rules of the network inherent in SCP.

First of all, the issuer is locked. All supply is controlled by the Signers Guild. There is no single group of people issuing tokens—you are wrong. The Signers Guild controls over 75% of the uncirculated supply of AQUA. AFAIK, some other popular projects on Stellar have followed a similar approach. You can see all the guild wallets here: (lionks to article with key points:

- Holders voting on what to incentivize (this should be markets using underlying)
- DAO makes "decisions" over distribution of 1B arbitrary token treasury... (k??)
- "Singers guild" makes token ownership :"decentralized" (but not the protocol..)
- appreciate opening "empoyment" for 4-8 hours a week, but point is not a product

> If we have SPEEDEX then we don't need
> I will do my damndest to address this here by Monday because the answer is relatively nuanced.

Aquarius is just a single project. You’re framing it as though Aquarius aims to end SDEX and bring liquidity solely to Soroban. I’ve seen this viewpoint from you in the channel @earrietadev.xlm created. However, the purpose of that channel is not negativity—it’s to provide different viewpoints and contribute to the ecosystem in the best way possible. There are and will continue to be thousands of projects building on Soroban.

The only reason Aquarius is shifting from classic to Soroban is that it was built before Soroban existed. Liquidity on Soroban will ultimately benefit Stellar the most. Additionally, the Aquarius team is highly active in the ecosystem. If SDF takes further action for SDEX in the future, I’m confident the DAO can reallocate reward funds if necessary. This is just speculation, of course, as Garand’s work for SDEX is still in its very early stages. However, this issue is not specific to Aquarius. Other projects, like Phoenix and Blend, are also incentivizing liquidity for Soroban protocols.




