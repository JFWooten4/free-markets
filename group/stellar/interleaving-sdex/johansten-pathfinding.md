~~~
status: Draft
submit: 15 May 2024
dialog: https://github.com/stellar/stellar-docs/issues/1545
~~~

```drafting
GOAL: Johan thwoign together a simple individual page section on pathfinding
WHY: JH is na expert  on the  cpore pathfind algo,m  and  someone who deeply resposects hte Core efficincy.

A  lot  pof people look at the  DEX and see remmitance oppoortujnities,  perhaps not  fulyl comprehending  how absolutely  insane 

```

href:
- dissalow on XRPL  at  https://github.com/XRPLF/rippled/issues/1257#issuecomment-670095772
- "I believe path payments to be one of the most interesting and important aspects of the Stellar blockchain." — [Tyler](https://youtu.be/KzlSgSPStz8?t=164)
  - because theyt "allow you to do a lot of theraet things you erreally couldnt do witho ut a lo t of headlzchac e [not sic]
- diredct  arb  form https://github.com/stellar/stellar-core/pull/1077  whcih  is  fropm past  questikoninkg  at  https://github.com/stellar-deprecated/horizon/issues/229 (finding  stellar-core bug)

re orgiignal convo doc'd at 

### Best Execution
The orderbook only matches offers at the price specified or better, when avaliable. For instance, say there are four buyers offering 10 bananas per apple. You can sell an apple for 7 bananas, and the offer automatically exchanges for the higher 10 bananas.

In traditinal markets, this is precisely how market orders allow instant trades. They simply execute agains the best avaliable prices in the common orderbook. And since we can see every offer, the DEX also gives us the handy ability to know if there's enough orders at the prevailing price.

When you submit an order, Stellar will also check wheter an AMM (below) offers a better rate than priced orders. If so, your trade executes against the pool at the better conversion rate without priced DEX liquidity. To better understad the market, let's uncover the spread between the best AstroDollar offers, calculting a midpoint trading price.


####  Path Hops
When sending path payments, your transfer can hop between up to six order books or AMMs to find the best price. Validators perform this arithmatic automatically, allowing you to specify only the lowest total amount you will accept. At each step in the path, the network calculates the optimal source of liquidity to convert through given your destination asset.

Both the order book and AMMs coexist, providing multiple avenues for liquidity. Instead of having to choose whether to go through the order book or an AMM, the pathfinding algorithm automatically checks both sources of liquidity and executes new trades using whichever offers the better rate. It also exchanges with an AMM over an order book at each step if the entire conversation happens at a price equal to or better than limit offers.


also we have the nbew section titling as `Conversion Liquifdity`
