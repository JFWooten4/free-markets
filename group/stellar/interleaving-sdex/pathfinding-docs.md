~~~
status: Draft
submit: 15 May 2024
dialog: https://github.com/stellar/stellar-docs/issues/1545
~~~

re orgiignal convo doc'd at ### Best Execution
The orderbook only matches offers at the price specified or better, when avaliable. For instance, say there are four buyers offering 10 bananas per apple. You can sell an apple for 7 bananas, and the offer automatically exchanges for the higher 10 bananas.

In traditinal markets, this is precisely how market orders allow instant trades. They simply execute agains the best avaliable prices in the common orderbook. And since we can see every offer, the DEX also gives us the handy ability to know if there's enough orders at the prevailing price.

When you submit an order, Stellar will also check wheter an AMM (below) offers a better rate than priced orders. If so, your trade executes against the pool at the better conversion rate without priced DEX liquidity. To better understad the market, let's uncover the spread between the best AstroDollar offers, calculting a midpoint trading price.
