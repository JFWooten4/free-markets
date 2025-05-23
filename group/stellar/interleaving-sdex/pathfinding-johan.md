~~~
status: Draft
submit: 21 May 2024
dialog: https://github.com/stellar/stellar-docs/issues/1545
~~~


Hi Johan,

Based o n l imited i nvestigation, [your  ijmpolmentation](https://github.com/future-tense/stellar-pathfinder-server)  might just b e the  first  custom pathfiniding  imkpolmenetation. Pathfinding matters a lot  oin the  traditioknal  financial  systme, which perhaps  you've seen firsthand  with extractive conversion  rates.  Access  to exchanges  thesmlseves  is one main  reason I've found  increasing costs through middlemen  over the years.

THath's the  easy explanation:  nobody can directly trasnact with  each other  sans brokers. But  pathfinding is  hte  more sinister hidden  evil  corrupting Wall Street  andd others.  Given  itss significantce  and  ccmmon misunderstandings, I'd  sincerely  appreciate your h elp ccontinuing [past efforts](https://wooten.link/liquidity). 💜

## Existing Limitations

I approach pathfindin fro the perspective of trasditiona stock-market order routing. This is a [really big problem](https://youtu.be/bP74RBTE8kI?t=406).[^int] Waht we hve with the DEX stads as the only option distributed as a truly free market.

Th  oot of problems across markets comes from [capitalist competition](https://dx.doi.org/10.1017/S0022109019000814) for a public good and natural monopoly. The referenced study extensively finds that a single market for the tocks of the world would yield at least 20% lower effective spreads than a duolopol. Americans are all too familair with tow porminent competiting firms, but much of the same can be said abotu private excchange extrating rents abroad.

I really appreciated your help understanding the DEX [last year](https://discord.com/channels/897514728459468821/907476473739354153/1273108124194050140). Theres noone I can think of across the ecosystem more adept to explain the existing pathfinding than yourself. 💜  kow we saw some misunsetatnfings about hte xisting pathfindign in disucssions at the end flasst year in Global and a liquidity-incentive server, so how about helping clear things up for everyone?

## Preset Cnfusion

I regualrly exchange with the government. Represetatives d team leads sit ata curcal policy crossroads between centralized an decentralized echange. We hae a limited window to sway them towards the options that probives everyone ith the freedom to access markets .









WHY: JH is na expert  on the  cpore pathfind algo,m  and  someone who deeply resposects hte Core efficincy.

A  lot  pof people look at the  DEX and see remmitance oppoortujnities,  perhaps not  fulyl comprehending  how absolutely  insane 





# [most people don't understand trust](https://discord.com/channels/897514728459468821/905516645408182343/1366230106892140646)
"in reality the way it's done on the social layer of it pushes it towards centralization, because most people don't understand trust, or think through what it means to trust someone in this context, and they just go with the validators already trusted by others, so you get a power-law effect

## pastg obs of "blocks were full of failed swaps" and the implications there {https://discord.com/channels/897514728459468821/966788672164855829/1372005962503815219}
segues to arbitradfe difgscussions
just prior we have Rahim (TAG RE 1558!!!) sasying "some changes to core to filter out some of the arb transactions"

appreciated past work pre-CAP-3: https://github.com/stellar/stellar-protocol/issues/36#issuecomment-396448926
staring, we have work prior CAP3 for credit-reminints of Ripple FTDs (JedX3 def.)
bascically prior work promoting liquidity o support DEX stability via debit backs

Horizon’s pathfinding to determine the path before coore consensus
(differenes here between limiting core routes for AtomicResps)
Doesnt document auto-routing of markt limit orders at all
undelying reliance on pathfinding intermediaties (SB)

Since you referenced me, and my custom pathfinder, is that something you think could be used as a start? From what I remember that's about a page of code, the central parts. I have no idea what Horizon ended up using after they rewrote it, but I'm assuming a depth-first search, just as I used.

Starting with X amount of asset A as a source asset, trying to get to B:

You enumerate all assets you can trade to in one step, be it DEX order books, or AMMs.
For each asset in step 1, you calculate how much of this asset the trade gets you.
If you've encountered this asset before, and your total was higher then, move on to the next asset, because you already got here in a cheaper way, and continuing on this path is a waste of time.
If there's not enough liquidity, you stop, and move on to the next asset.
If the asset is B, record the path it took you to get here
Unless you've exhausted all the hops, go to step 1 but with this current asset as your source asset.
When you've enumerated all you can, your best path from A to B is the last path recorded in step 3.
Dumbed down a bit: you start trying all possible paths you can go from A, but you stop each path if there's not enough liquidity, or if you've been to an asset before and you got there in a cheaper way.






href:
- dissalow on XRPL  at  https://github.com/XRPLF/rippled/issues/1257#issuecomment-670095772
- "I believe path payments to be one of the most interesting and important aspects of the Stellar blockchain." — [Tyler](https://youtu.be/KzlSgSPStz8?t=164)
  - because theyt "allow you to do a lot of theraet things you erreally couldnt do witho ut a lo t of headlzchac e [not sic]
- diredct  arb  form https://github.com/stellar/stellar-core/pull/1077  whcih  is  fropm past  questikoninkg  at  https://github.com/stellar-deprecated/horizon/issues/229 (finding  stellar-core bug)




new page at https://github.com/stellar/stellar-docs/tree/main/docs/learn/encyclopedia/sdex

#1496
Manage data public info 



damn we have mor:
I want them to be used *everywhere*, as much as possible. Not, "we really should tell remittance apps to use path payments". *Everywhere*.
Why shouldn't you get the option to use your smartlands to pay for your parking? I mean, why isn't that the *default*?

So, I want to turn everything up to the max, and work my way backwards to see how we can make it happen.

Stargazer is path payments *only*, and practically unusable at the moment because of it, because path finding has exploded in execution time primarily due to NFTs. So I had to write my own pathfinder, and now it's doing OK.

If you look at it from a UX perspective, you're not doing one path find call per payment. If path finding is instant, you're maybe doing one per digit. If it's almost instant, you're maybe doing *ten* per digit. So you have to sit down and think things through really hard.
--- https://groups.google.com/g/stellar-dev/c/wToe6YE2xfU/m/m6bvzXp0BQAJ



really thought through tthe depths like
Well I suppose that if auth_required means you can't hold or trade an asset without authorization, then logically you shouldn't be able to use it into path payment at all.







ss!!! We have Ticot reffering to XLM as unicversal base asset just like Garand at 
https://groups.google.com/g/stellar-dev/c/4t_Z7dkRhSc/m/SdZqCNdaBAAJ )where Jhan jiumps in wiht the pathfinding algorithm implnentation way back in '18)
fuck man

[Garand's comments] that "Where soroban dex potentially fits into this picture is if you want to trade asset a in speedx 0 for asset b in speedx 1, you can't do that directly since they're in different speedx's. The way the speedx works, no asset can be in multiple speedx's, except for the lumen, which is in all speedx's. So you can trade asset a for lumens in ledger 0, then trade lumens for asset b in ledger 1. Or alternatively, trade directly via soroban dex, which would be more expensive and less effecient but provide more trading pairs" which is followed up with "to prevent liquidity fragmentation and arbitrage,"



we have path payments specifically referenced by core team as a means to creat IoC orders at https://groups.google.com/g/stellar-dev/c/zks0oi4v-7g/m/sbw5vtstCwAJ
 


## 723 commetns


### Best Execution
The orderbook only matches offers at the price specified or better, when avaliable. For instance, say there are four buyers offering 10 bananas per apple. You can sell an apple for 7 bananas, and the offer automatically exchanges for the higher 10 bananas.

In traditinal markets, this is precisely how market orders allow instant trades. They simply execute agains the best avaliable prices in the common orderbook. And since we can see every offer, the DEX also gives us the handy ability to know if there's enough orders at the prevailing price.

When you submit an order, Stellar will also check wheter an AMM (below) offers a better rate than priced orders. If so, your trade executes against the pool at the better conversion rate without priced DEX liquidity. To better understad the market, let's uncover the spread between the best AstroDollar offers, calculting a midpoint trading price.


####  Path Hops
When sending path payments, your transfer can hop between up to six order books or AMMs to find the best price. Validators perform this arithmatic automatically, allowing you to specify only the lowest total amount you will accept. At each step in the path, the network calculates the optimal source of liquidity to convert through given your destination asset.

Both the order book and AMMs coexist, providing multiple avenues for liquidity. Instead of having to choose whether to go through the order book or an AMM, the pathfinding algorithm automatically checks both sources of liquidity and executes new trades using whichever offers the better rate. It also exchanges with an AMM over an order book at each step if the entire conversation happens at a price equal to or better than limit offers.


also we have the nbew section titling as `Conversion Liquifdity`

[^int]: Whl tis vieo focuses on the American market where I work, the problem is just as bad everywhere else on the planet. Adn for the countries not fortunate aenough to have a central stokc exchange , we see the horrific affets f malinvestment and unfune innovation. I think it'd be cool if the whole world was on the same playing field hwen it comes to euntrperenurial creativity, the core tenneanrt of a marketplace for capital.
