```
status: Draft
submit: 18 Nov 2024
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

Rahim [said](https://discord.com/channels/1172621167400599582/1172621168197509137/1291850276646551653): "if we have enough liquidity onchain then interleavin the amm and sdex wont' make much difference"

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
> &mdash; [aLatvian](https://discordapp.com/channels/761985725453303838/1302004423483981924/1302064708035154000)


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

Tomer seems equallty hopeful for a network with more liquidity, trading, adn access.[^t2022] My understanding of their perspective so far is a focus on composability between protocols built on top of the network. In the disucssion, Tomer [said](https://discord.com/channels/761985725453303838/1302004423483981924/1302276394356703232) they didn't yet have much "to add on top of what was said" at Merridian.[^hack]

[^t2022]: _See_ 2022 remakrs that "the order books are extremely efficient as far as order books go, but orderbooks in general are not the most efficient data structure." Might I posit that we can still develop production applications in [Python](https://x.com/JFWooten4/status/1849109891471843764) despite the technical reality that Rust programs would run much faster, ignoring nostalgia _ab initio_? Perhaps marginal improvements here and there are less relevant given the contextual competition from [COBOL mainframes](https://x.com/JFWooten4/status/1843833900642320509) so common in the correspondent banking system?

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

Should we burden the network with spam due to "someone who happens to be running a bot against some soroban pool somewhere," as aLatvian said? Or should we protect our existing implementation in stellar-score, obviating the needless localization of functionaltiy as basic as cross-boarder exchanging payments? Perhaps create a just society where we might share the natral abundance afforded by liquid markets and their implications?

There's a reason "ALL other chains" face the material oeprational limitations presently unaflicting the DEX.[^cite] Should any meaningful volume chift hnds into Soroban venues, we risk seeing the newrok's good name getting smeared in the legal abiguity of a Wells notce.[^exam] Is this the fate Jed envisioned when they [wrote](https://github.com/stellar-deprecated/docs/commit/40dcdd5f7694afe8e0a80744be050fb619b690aa#diff-33f8136fb62b58edc1ba95991ceab5575eaac61855583bba45c60121990a8709R42):

> Imagine a world where, anytime you travel, you never have to exchange currency except at the point of sale. A world where you can choose to keep all your assets in, for example, Google stock, cashing out small amounts as you need to pay for things. Cross-asset payments make this world possible.


[^cite]: _See_ David at _supra_ S 1.2.2. _See also_ intutional adoption of the DEX as a native offering book in registered offerings. Might we inspire the rebirth of IPOs by supporting the [documented](https://developers.stellar.org/docs/tokens/control-asset-access#issuing-and-distribution-accounts) application of issuing an asset by creating an offer?

[^exam]: In numerous encounteres with traditional web3 pioneers on [other chains](https://x.com/JFWooten4/status/1778787218041032865), I have repeatively brought up the [many nuances](https://lemmy.whynotdrs.org/post/1166651) of offering regulations. However, they rightfully choose to ignore the consequaneces until their operations are so large that [regulators "attack"](https://www.sec.gov/securities-topics/crypto-assets) their communities. If we truly aim to take down the inneficient financial system once and for all, might we continue treading towards a truikly decentralized DEX?


## 3.2 ZK Scaling and Rollutips

My [original implementation](https://github.com/blocktransfer/TAD2) of a stock market was designed to scale with optimistic rollups, as they're an easy answer to the scaling question plaging less efficient blockchains. Another option, [zero-knoeldge proofs](https://youtu.be/PIFclL2EE9g), offer similar promises. Admittedtly, this is not my area of expertise iby any means.

But I know markets, and the fundamental probelm we ran in to with these systems is that htey require an order books hwick lives somewhere other than on-chain. And the latter case often requires contracts to both simplify and propogate complex off-chain math. These abstractions create the unholy mess of a merket present in the U.S.[^mk]

The power of longstandign Rust contracts is indeniable, per Garand's sentiments. We're at the start of an unparlaleled journey to build an innovative financial system that actually serves the neeeds of it users, not its executives. Might we move past the elementary applciations so common on other chains which we have already efficeintly solvied using validator-level logic?


[^mk]: _See, e.g._ routine coplexity in S 2.2 of PREV. _Compare_ cobvoluted rotung which developed over half a century with elegant simplicities promoted by direct pairwise liquidity pools in CAP38. Might innate routing efficincy drasticaly simplify the process of building dApps on Stellar? 🌌

[^es]: _See, e.g.,_ transaction from S 2.1.1, a fraction of instuttional volume. Upon conusltation with Enrique, this was the most anyone paid for the asset by far. Should we silo liquidity in contracts, making it sparingly available to specific users through certain frontends?


## 3.3 "UniV4-Style" Future Developmet Pitfalls

Throughout the conversations, we've all generally agreed that "the sthe sdex orderbooks are still more advanced than any set of orderbooks on any chain." Indeed, in my view, Uniswap V4 is just  a mechanism to cope with the realitey that other chains are not efficient enough to offer limit orders. If we are to replace the mamouth intermediaries gatekeeping the financial system, we cannot ignore the fundamnetal need for priced offers.

[^add]: _See e,g.,_ Adam's remarks in S 1.2.1. This truth remains as abbundantly clear to me know after three years of compliance work as it did when I fist understood the network. There is a reason every other orderbook operation at meaningful scale (e.g. past #5000 on CMC) receives a nice visit from a three-letter agency, including "DAO-based" ones like Tornado Cash.


Markets are not continous functions like an AMM pricing curve. They do not follow your rules no matter how many times you run them through a monte-carlo simulation.[^maths] As I presently understand these V4 contracts, they attampt unsucessfully to tame the exposure particpants face as the market moves against them, a natural uncertainty in the business of making a market for a spread.


[^maths]: _See, e.g.,_ the collapse of the "techncially-accurate" [LTCM fund](https://www.pbs.org/wgbh/nova/stockmarket), [GME shorts](https://dollarendgame.substack.com/p/gamestopped), and [WTI turnover](https://www.bbc.com/news/business-52350082). _See also_ a plethora of "six sigma" events perpetuated by "black swans." To paraphrase the man who created teh SEC, the only thing we can be certain of is uncertainty itself. 🛡️


The further down this path of control you cenutre, the closer you get to today's market infrastrure. Pamphile explained [the materail challenges](https://x.com/gttyson/status/1844446137408946680) excletopionally when they wrote, "it's bloated, slow, old and everything."[^tup] Can we really centrally control something as complex as markets themselves?

[^tup]: _See_ Tupui at _supra_ S 1.2.3. Other comunity members have asserted but not proven that long-tail iliquid, unregulated, and trailblazing assets are better off on AMMs. However, could this enforced trading policy unintentionaly limit the free-market price discovery mechnism so efficient in today's long-tail equities?



### 3.3.1 Constitutional Corproate Overloard, Investors

As is made abundantly clear in [this response](https://blog.uniswap.org/wells-notice-response.pdf#page=8) to their SEC investigation, Uniswap "Labs" is a [for-profit C corporation](imgs/comments/uniswap-labs-entity.png) with "leading U.S. institutional investors, such as Paradigm, Andreessen Horowitz, and Union Square Ventures" and "more than 100 employees."[^mfers] This document also highlights that the enterprise has kept its algorithms under the oppressive protection of rent-seeking [software licenses](https://github.com/orgs/WhyDRS/discussions/1).

[^mfers]: _See, e,g,_ their [legal mandate](https://en.wikipedia.org/wiki/Dodge_v._Ford_Motor_Co.) to maximimze profits for shareholders, as upheld in the Supreme Court. _See also_ the formation of a "Foundation" give years after Uniswap's parent company we incorpoated. Why do you really think they starting follwoing SBF's "effective altruism" [peddling](https://www.sec.gov/comments/s7-15-23/s71523-301019-767522.pdf#page=25)?


I am in no way whatesoveer implying that similar business practices mightemmerge over the years from existing netowkr partitcipants. But even if the ecosystem's Soroban developers adhere strictly to the nonprofit principles embedded in SCP, they'll still be targets for regulatory action the moment they touch absolutely anything we're building at Block Transfer. It was also discussed that the SDF could deploy "definative" Soroban AMMs to centralize liqudity, but this wiuld very unambiguously place the Foundation in the crosshairs of similar threats.[^conv]

[^conv]: I have communicated this view with multiple SDF staff members over the years, including in the confidential notes of our third application to SCF. The underlying _funding_ of an excange venue is categorically different than the _operations_ of root protocol rules. INdeed, this is precisely that paradox I ran into when I originally tried to position the Syndicate itself as a "stock transfer protocol," rather than the TAD3 complinance layer.


The stakeholders in today's systems are and have alwyas been investors and issuers. Might any other party involved in the exchange process [excluselvy serve](https://youtu.be/HQZg0ZY-Amg?t=2353) to suck value away from those two grpous? Should we defend the DEX as the last bastion of a free financial market?



### 3.3.2 Unnaceptable, Unaccountable Execution Centralization

Aloong the path of centralization, incuments try to sell "faster access" as a "trading ebenfit" to investors. However, if we're truly designing a global (and ultimately interplanetary) finacnial system, at some point we;re goingto run up against round trip propogation time of digital sigals.[^ciddf] This is exactly what Uniswap Lba's laterst "invesntion" has introduces through the [Unichain POC](https://docs.unichain.org/whitepaper.pdf).[^garand]

[^garand]: 
 as a premise around making somehting decentralized v. the only way to attain faster spee being centralization ir a "[trusted execution encironment](https://x.com/gttyson/status/1844445777114038761)" 

[^ciddf]: As I understand it, this is about two seconds. _Compare_ thee base agreement timeframes across any Network peer with the present efficincies of locally computing paths on shared variables. Might a further specialization of select order batches best serve an increasingly asset-abundant ecosystem?


I say "invention" because absollutely nothin here is new. I could sit of and list dozens of regualtory filings which detail these exchant changes across the AMerican seucirites landscape. The points at which certificates, settlement, and reporting became centralized come to mind&mdash;leading tothe ultimate endgaem of massive profits paying out to Silicone Valley over Main Street.[^sads]

[^sads]: The endgame of thie path also implicates American legislature of the final "crytpo market," as this is the only way to hold centrak ubstutions accountable when they serve the public at large. Of course, the "market" will be just another trading venue for Wall Street's power brokers to mimic, bloat, and explout for huge return. Copuld we be doomed to repeat yesteryear's sins so long as there exists central parties involved in exchange?


Given America has the world's most advanced, developed, ad liquid market for capital, might we learn from the pitfalls of Wall Street? If we can right there wrongs, perhaps we can free ourselves from the schakles of a select few financial intermediaries. Shackles which have so poignantly determined entire directions of porigressubg nations. 🕌



### 3.3.3 Requisite Insurance for Adoption

I've spent the past four years talking to just about every anker, trader, and regulator I know about blockchsin. Following the prior logic, institutional adoption of actual trading on a self-custody basis requires gargantuan insurance products when using bootstrapped smart contracts which we very clearly see pose hazard per your work. Could trading be the msot important aspect of a financial system which we are presently left to master?[^imps]

[^imps]: _See_ ongoing fund clarity work both internal and opened on Syndicate GitHub repos in re note 9 in PREV. We respectifully submit to the network that you do not get a "second first impression" with regulators, especially given the tacit but not ocntextual background of Jed. Are the relatively modest prodits a select few developers present enjoy by arbitraging Soroban AMMs worth giving them a bone to pick with us, _ad infinitum_? 🏛️


Everyone generally wants to move fast when it comes to klaunching into a sustainable business state&mdash;completely understandabe.[^easya] But might it be prudent to [slow down](https://www.blocktransfer.com/about/values) and build something longstanding to serve generations of users to come? At this Merridina, Tomer positted that:[^bug-20]

> There is no certainty. At the end of the day, it doesn't matter how many audits you go through; it doesn't matter how much testing you do. Sometimes there are bugs.

[^easya]: _See, e.g._ various developer disucssions about the relative easy of deploying a new pool with a custom stabelswap bonding cure or mutli-asset pool composition for "diversification." Might these capital allocation quandaries necessarily exist in the market, solvable chiefly and simply by propor native balances incorpated into a higher optimized system? Perhaps the capable core developers and ecosystem partiticpants could trivially implement new curves as needed but not satisfied by passive sell offers, should sufficient aid emmerge?

[^bug-20]: _See_ _infra_ note XYZ [^maths] _quo videtur_ we are all in agreement. But I do not think the most basic of core infrastructure should require scores of bug bounties to attaub modest crdability. Maybe the community's satefty approach showcased in the [Soroban update delay](https://youtu.be/rbjFjda3_UI?t=7080) can be our guiding light to "take a minute, do things slow, do them steady, do them the right way from the onset, and fix the bug?" 🐛


While we in the DRS community apprtrciate that there will be bugs in any computer systems, we'd prefer our funds not be at risk in flash crashes perpetuated by complex trading infrastrucutre. 🫤 Would it be best to strictly apply an unwavering software mindset to somethign [as important](https://stellar.expert/blog/tiny-things-matter-or-detective-novel-featuring-stellar-dex) as markets? Or might we conceivably best serve the plausible needs of our expanding ecosystem through a [feasible unifrom front](imgs/comments/collective-network-benefit.png)?[^groups]

[^groups]: _See, e.g.,_ open protcol upgrades facilitated through [public discussion](https://www.youtube.com/watch?v=wcjzKdo0xS8), [copmrehensive analysis](https://www.youtube.com/live/aHZQfcIdmoQ?t=1067), and [iterative disclosures](https://stellar.org/blog/developers/amms-in-the-stellar-ecosystem). _Compare_ the collective growth of such an important network function with the singular gatekept product-development approach employed aceross largely-identical Soroban AMMs. Perhaps more concerningly, _see also_ long-term natural supply-and-demand construment when upgradable underlyingstrutues [rely on an etity](https://x.com/JFWooten4/status/1853607712111624481) operating the order book itseldf.


# 4. Legal, Composible, Community Solution

[![requisite-humanitarian-application](imgs/comments/path-payment-impact.png)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4550837)

Since understandding its deep humanitarian implications, I've bet my entire career that SPEEDEX works, and that it works stellar. Without true offers on the DEX, I see no future using today's technology in which I'd like a stake in this industry.[^works] Do you think Wall Street's time is up, as do the tousands of members in our grassroots community afflicted by their unadulterated theft? ⌛️

[^works]: For time, I will omit further contemplations on [design principles](https://gist.github.com/JFWooten4/827e423f6d3f2f43801602d81d6adbc0) _in re_ prior [public discussion](https://groups.google.com/g/stellar-dev/c/GPjHIYPdud8/m/S6mFvpgaAQAJ), _quod erat_ appreciatively incorprated into CAP45. 🫱🏼‍🫲🏻 [Tomer established](https://discordapp.com/channels/761985725453303838/1302004423483981924/1302262610409951275) that "you can't call classic order books from Soroban." Might we first "put a lot of effort into that" to rectify this limiting plight, since contracts share the root account infrastructure ti hold classic assets?


Markets have proved time and time again the immense neccesity of limit orders as the base building blocks of liquidty for the tens of thousands of long-tail assets issuer on the network. The proven DEX is anything but the black box pictured above, whic is explciilt not the case for smart contacts, aggregators, and frontends.[^hidden-fees] Might an investment in efficient markets today serve the network's issuers for all eternity?

[^hidden-fees]: _See, e.g._ XYZ% [Matcha](), XYZ% [Uniswap](), and .15%+ [zeroEx](actual-org-schedule.pdf#page) website execution expenses. The requisite siloing centralization showcased here run antithically to [free markets](https://discord.com/channels/761985725453303838/761985725453303841/1295912752027664424). All furiousity aside, these are fundamntal flaws in the endgame of these contracts, not the fault of talented developers like @earrietadev whom have show exceptional humanitarian consciousncess by pivoting projects away from [wasteful mining externalities](https://discord.com/channels/761985725453303838/946921813143851019/1279941567515459606).


Could a turly nonprofit financial systme built for its users minimie rents, as [discussed](https://discord.com/channels/761985725453303838/1292523643900919951/1294381549072154746). Or will we contnue to be hadncuffed to titanic habritrary capital requirments to bootstrap liquidity, as in the message immediately suceeding _Id_? Perhaps the most performant trading system doesn't require at least three operations to min/max the pathfindong algorithm.

{{e
mlplore to contrmplate the longerterm thinking that makes Stellar work so foundationally well across developing global nations with usch a dire need for a system that puts us all [on the same playing field](https://youtu.be/5wUhyR94rho).
}}


It might be hard for technical guys like us to see some of hte incredible implications of a 50 bps spread reduction. But these innovations truly change peoples' lives&mdash;I've seen, felt, and shared it firsthand. In an inreasingly abund society in raw compute terms, might we best empower all network users with tooling that places the locust of economic control squarely in their hands? 🤳🏼

{{
[^chatz]: Perhaps there are good reasons our key to basic capitalistic tooling_ (but worded more eloquently)

- https://stellar.org/blog/developers/the-principles-behind-protocol-design-amms-stellar
- https://stellar.org/learn/swap-functionality-and-amms (is this a stable link?)
- https://stellar.org/blog/developers/liquidity-liquidity-liquidity


}}




first of all we need to acknoledge significantly their work and community controbtuiosn in re n.3






price competation which [naturally](https://reports.tiger-research.com/p/onchain-darkpool-eng) occurs
(including negative privces with PFOF)

[^lolpcs]: [instanet_history_comic.pdf](https://github.com/user-attachments/files/17347641/instanet_history_comic.pdf)

[^fragmentation1]: [quandaries_of_fragmentation.pdf](https://github.com/user-attachments/files/17347675/quandaries_of_fragmentation.pdf)
[^fragmentation2]: [Base asset differentiation](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1808269)
[^fragmentation3]: Synch the argument with the material difficulty of [reconciling segmented assets](https://github.com/user-attachments/files/17347723/inften__20200407094352_82382.pdf)




a question on:
Confidence re the reputation game, and applications in specialized financial instrument composability



{{ [^tractionQ]
the problem is their revenue, popoularity, and indeed sustainability comes from attracting ever-increasing trading volumes, which presents a [direct conflict of interest](https://youtu.be/YUwqzeaR1lA?t=63) with the [investing public](https://www.reddit.com/r/Bogleheads/comments/ug32km/can_someone_explain_to_me_what_revenue_from/?rdt=55563)[^investing-public]

[^investing-public]: These needs a better citation, likely thje congressional report, study on use of AI, or confetti ban. _See also_ [demoralizaing](https://microstructure.exchange/papers/TME-paper.pdf) at 13 ~~per GUH and the kid that killed himself~~

}}





{{ Our Opportunity

- https://x.com/JFWooten4/status/1842296919160144159
- https://youtu.be/YUwqzeaR1lA?t=63
- https://youtu.be/UzLCQaJ-TqU



_See, e.g. supra_ note 22, [demo execution RAM](prob speedex original paper at like 4, 7), and _supra_ note 23.

}}




{{ on the hacking part, let's FN the custody implication

Implicate very deeply https://www.youtube.com/watch?v=QafkIh2nvY0&list=PLWUFvhKuc_5vyAfq_AbWz-wSl82p_xtH9
https://x.com/JFWooten4/status/1815083374744334340

again, discuss the custody implications and href to the not you keys part and such in the nicehash arguments first introdiuced per [higher fees](https://discord.com/channels/761985725453303838/761985725453303841/1293775764830814350)
- corporate control
- custody implications
- arbitrary limits [discussed] in re _Compare_:
  - https://discord.com/channels/761985725453303838/761985725453303841/1293804598368145449
  - https://discord.com/channels/761985725453303838/761985725453303841/1293770598891389060

}}





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



also we should ahve soemthing implicating the use of p[eople as the arbiters for trust in central regs , which precisely cucking translets to these contracts re ~~wooten.link/uniswap~~ link 2 in note 8 of PREV.

and obvs with this, you are very explicitly assuming liability to earn trust, whcih is exactly what fucking SCP is supposed to handle
i should have a fn harping on this and use it as pressure for SCP#25




even if we can momentarily agree that the "best" Sorobvan DEX(es) will attract a large amount of liqudiity, which dominates the network, this leaves the power over democratic trading in the hands of a select few organizations

presently, the instutitons which run these technologies are centralied, legal, for-profit corporations

this presents the very clear path for "traction" in terms of user funds locked to lead to VC interest




personal analysis of 0x[^capture]

[^capture]: _See_ [comparative analysis](https://blocktransfer.com/.well-known/thesis.pdf#page=15) in PREV S 2.

but we don't need to pick and chose given the SPEEDEX advanceemnmts highlighted by recent community discussion.
