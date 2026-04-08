```
status: Draft
submit: Mar 2026
dialog: https://github.com/orgs/WhyDRS/discussions/new?category=blocktransfer &&set Notice@ re https://discord.com/channels/1102309240145707049/1102309240741310503/1477309355757015230
```

# Q&A on Proposed and Preliminarily-Accepted Share Donation

Hi guys, and thanks again for the overwhelming support on the donation vote. It's a real relief after all this setup work over the years. Just knowing we're all really on the same team, and I'm not sitting around imagining possible things.

I'm excited to get things moving forward at "180 MPH" lol. It's really only possible because of everyone here that makes it work together. It was awesome putting a face to some inspired names:

[<img width="700" alt="Meetup Group" src="https://github.com/user-attachments/assets/88b9528a-9e52-4777-bbf1-827cbd76825f"](https://www.youtube.com/playlist?list=PLvvYoUV4FxuZY_V-_M2aYCKxdbd87DY1G) /> ## todo replace when pub w/ img

## Expanding Manpower

There's been chatter in a few places for a while about growing the BT team, particularly to onboard new issuers. First of all, the Commission has expressed no qualms with our expanding operations. I explicitly referenced taking on new clients in response items, and we are good so long as the _TAD systems are good_.

I intend to work relentlessly on those after the crucial DEX work setup these next months. As for possibly getting a "second underlying company to become a client" - there are two parts to the answer. The first is just the boring technical reality of lacking interfaces.[^1]

### Open Participation

One of my biggest goals with moving over the shares is permissionless contributions. Once we align economic rewards with the DAO, anyone can contribute to the projects with the presumption of future rewards. That is, their value can accrue to a provably open and accessible entity from which they can get money.

The semantics of that will surely take some time to develop. There's some real nuance on things that want to be nonprofit and just have volunteer contributors.[^2] But the point is that anyone should be able to bring new clients onboard at some point, and we can track that.

There's work to do like https://github.com/blocktransfer/TAD3/issues/4 to make that specifically possible, and anyone can contribute to it. So then when "we begin to onboard new companies" just depends on how fast we can do the needed setup work. And I appreciate [the sentiments](https://discord.com/channels/1102309240145707049/1474836852841386286/1480641092473847810) of getting this "awesome technology and new rail" into the hands of new clients.

### Wetting Feet

Lastly, @bobmahalo asked how to help get tokenization going. There are a lot of different paths we could take, but I'm going to do my best to outline and lead down one route in the coming months. I have put the information and tooling out there for a while under the hope that things would just pick up on their own, but I get and see that it will take some directional leadership to move things forward.

[Here](https://github.com/user-attachments/files/26098890/Private.Client.Application.pdf) is a useful template for underlying private firms. It's from the source [here](https://github.com/blocktransfer/org-docs/commit/8db07fcf4be951f505e06d98d0ae5624b2a6763f) and can develop over time as the process matures / gets rolled into a more automated submission process. You hit it on the nose when it comes to the idea of issuers "submitted to legal for any issues to be rectified before submitting to the proper regulatory bodies." todo

Basically, my bar for the firms is that they're not an obvious scam, and then it's just getting things filed properly with the SEC. That alone creates the technical authority binding them to the antifraud laws.[^3] That is to say that I'm happy acting as the "legal" person checking off on compliance for things.


[^1]: This isn't super related to the shared ownership discussion, so I won't dive into exact architecture plans and requirements in this post. But think the investor tooling and particularly automated issuer onboarding. These are set up with related issues in @blocktransfer. todo check render

[^2]: I'm looking at Chives who we established in #1 does so much without expectation of reward. I'm sure this can be a shared desire amongst friends with too much time. But it's only one part of a fully formed nonprofit.

[^3]: Combined with state Blue Sky filings. I think we can make this more sophisticated once DUNA token voting is live. Not in the 'popularity contest' sense of who should be listed, but just basic insider background checks.[^4]

[^4]: Background checks in particular will be easier over time once BT sets up more long-investor search tools. Right now we/I have just done AML/KYC checks on the insiders. That and having them self-affirm no prior securities-law violations. todo


## Alignment Tooling

The next infrastructure questions [come from](https://discord.com/channels/1102309240145707049/1102309240741310503/1477309355757015230) LimeGreen. I'll start with his response to @tehchives' talk. They ask if the Syndicate could "be used to help fundraising and governance for non-profits?"

### Governance Applications

Traditional nonprofit governance isn't super different from corporate governance. Save the annual election of the Board by shareholders. Thus, we have about the same needs as a for-profit firm: sharing meeting documents, hosting financials, and executing the annual discussion.

There are a lot of closed-source products for this in the market. They all do relatively similar things while broadly costing way too much. It's a lot of permissioning layers built on top of what's basically G Suite.

I've always seen `issuers.info` as an ideal place for these sorts of communications. It's where I envision companies routinely disclosing their financials for the public.[^5] The concept isn't entirely unlike exchange reporting baked into quarterly filing expectations.[^6]

I'd like to keep that system relatively flexible, as I think there are a lot of benefits to voluntary financial disclosures for any companies, without consideration of operating impact. That is to say I believe the market will rightly affect the valuation of reporting firms based on the quality and cadence of their statements, without the need for contractual incentives. Since it's open source, that becomes pretty simple.

#### Voting Mechanisms

Once the shares move over, I intend to spend [significant efforts](https://github.com/JFWooten4/agenda/issues/4) developing a new form of governance which can be used by other nonprofit DAOs.[^7] I believe communities using this voting system will achieve markedly better decision outputs than traditional equity stakeholding or board resolutions. So there's a little cross-synergy in just the token mechanism design for the Association.

That said, as for existing nonprofits, there's certainly nothing stopping them from _at least_ using a fork of `issuers.info`. One big piece of that tooling is cryptographic access control.[^8] If they wanted to use `issuers.info` for things akin to a formal issuer special election, they could more publicly vote on the direction and mission of the org.

For clarity, I have another tool in mind for the DUNA, based on discussions in prior DUNA meetings circa June last year. There's still a lot to build out for `issuers.info`, and I think the Association should use something probably separate from BT for its governance. I don't envision the Syndicate taking on DAOs as clients anytime soon, especially ones using anything other than token weighting.[^9]

##### Help Fundraising

This sounds a lot like payment processing. I am not sure that's exactly what I'd have us focus on at the moment, just in terms of what we can immediately be the most effective at.

TAD3 is built around selling shares. It expects ownership as a fungible, tradable commodity of equal value with others in the same class. Fundraising for a nonprofit... doesn't really work like that.[^10]

The good news is TAD3 is built on one of the greatest payment rails in existence. The nonprofit can use a plethora of existing libraries to fundraise in stablecoins or crypto on Stellar. And, bonus, that makes our treasury compatible with fee-free securities donations for any TAD issuers.

#### People Over Directors

I know directors are people, so what I'm more so criticizing here is the hierarchical vesting of power in legacy nonprofits. LimeGreen gives the great anecdote of a neighbor on a board with "multi-millionaires" helping "for speculative/notoriety purposes." I don't think there's anything wrong with having experienced team members lead an organization, but I don't think we will see the best capital allocation outcomes when choices are far removed from the people working on the project each day.

I agree with the schematics that "DUNA + BT = grassroots funded, decentralized, non-profit orgs" - and this is a big point that we should consider. After a donation of all the shares, the project will basically be set down a path of completely grassroots funding, as I've been doing for five years. There will very likely be no venture investors who'd like to get in bed with an entity completely owned by a nonprofit.[^11]

If we want to keep "public goods" in the public, I think this is the only viable path to take, save for some complexities around return-capped investment contracts,[^12] which are relatively new and yet to be proved out. Otherwise, there's always a conflict of interest between member-stakeholders and equity shareholders.[^13]

Lastly, I just want to clear up a meaningful misconception which separates the DUNA and particularly a 501(c)(3) from normal governance. I fully agree we should pay market rates for quality working contributions, but we cannot distribute profits to members.[^14] I am proposing something much more system-aligned than your normal "blockchain project where we all pile into a token and system so that others use it and our share of value increases."



[^5]: And, with our progress on EDGAR Next, this can automate the issuer's EDGARization. That process similarly costs so much for no reason other than reporting this same info to the SEC. Why not do it all in one place?

[^6]: Fact is that what the original exchanges wanted known to their investors became the template used in public policy. I had [reporting clauses](https://github.com/blocktransfer/TAD3/pull/7) in our beta contract that theoretically bound the issuer to periodic financial publications as a condition for our services. While I never enforced that due to their small size, it could almost be like a condition of "A-listing" as a BT client.

[^7]: OK, this was 100% conceived of by BlockScience in association with the Stellar Community Fund, so maybe the right word here is implementing or popularizing. Of course it will stand with the [Soroban implementation](https://github.com/stellar/stellar-community-fund-contracts) and grow from experience and feedback. There's a lot of fine customization you can do with NQG that deeply aligns with my experiences efficiently managing capital.

[^8]: Where insiders are known through an agreement with the agent, who maintains the user / investor PII, an issuer profile has said affiliates marked and can allow them access to closed data held only for verified members to manage internally. Again, G-Suite-ish but based on public keys, using a WalletConnect-style login.

[^9]: This just looks the most like equity, so it'd be easiest to slot into the existing toolchain. There's plenty of SEC options to support the registration of a lot of DAE tokens as securities, so in theory they could even use the proper reporting means if they're already actively looking for a transfer agent. Even then it would be a longer discussion or even a DUNA vote if there are any complexities such as existing 'governance tokens' on another chain, which would need to be bridged into TAD3.

[^10]: Especially when most of them are literally non-stock corporations. It's the same challenge you'd get with a partnership, and to a lesser extent the [discussions](imgs/scorp-shareholders.png) on S corps. I've thought things out with the end goal of all issuers being successful public bigshots, and that's just a different architecture design than private foundations. ## todo pub inline img

[^11]: Based on my experience, these investors like profit. Despite floating around the charity space, I've met very few who come from that industry (although now I'm getting to undue broad swaths). At the very least we can agree that sizable funds were commissioned specifically from nonprofits for the purpose of generating financial returns to support the main mission, not tangential efforts.

[^12]: I thought about doing both these and a SAFE round for the Syndicate. The latter was a bit dishonest, which is why I never moved forward in pushing it. Basically you can get some free startup capital if you word the agreements right and then never raise additional money (e.g., because you donate all the shares to a nonprofit).

[^13]: This is also why I don't think public-benefit corporations lead to the most effective use of capital. I had some drafting thoughts on this for a long time, which basically boil down to having the most efficient system. Even with a broad mandate to consider some social factor, you leave the operations subject to shareholder interest at least in some regard, hence changing the product output.

[^14]: This stands from both a private inurement prohibition perspective and the Wyoming organization law. The Association cannot pay dividends, keeping our funds aligned with furthering the mission alone. I think we can return value to stakeholders by offering the public a needed service at a low cost with exceptional design quality.

### Social Organization

LimeGreen also asks about "socialist/communist entities that wish to distribute ownership widely and fairly amongst the community." I think most of my nonprofit points stand to answer these questions. As far as I understand it, these sorts of entities would not have floating securities on the market.

I agree with distributing ownership widely. I agree with fair community participation and rewards. But here and elsewhere there's a line around private property.[^15]

As I understand it, the American government came to be with the expectation that popular opinion should give way to the best democratic outcome for the republic. "Best" here takes into consideration long-term factors like the incentive to create. That is a very fragile spark that the slightest wind could extinguish if we wave away voluntary exchange.[^16]

#### Smaller, Local Companies

Size and capitalism have a love-hate relationship. I think the biggest problem with our world's capital allocation is its centralization. This is only possible because of the growth and continued funding of megacorporations.

Megacorporations did not exist before modern capital markets, save perhaps the very early days of royal monopolies. They are a malignant symptom of a financial system designed and controlled by a select few central bankers. GE's extreme reliance on financialization, commercial paper, and Jack Welch's brutal schemes do not exist in a free market with hard capital in the hands of real people, not cantillionaires.

Companies _want_ to grow and scale forever, but a free market _does not let them_. It enforces competition and specialization, where issuers compete on an even playing field for available capital. But when only the select few "in the club" can raise at reasonable rates,[^17] they become the economy and hence a special ride up for the existing elites.[^18]

The answer to this stems from small businesses and communities coming together to build the tools the world needs tomorrow, today. I don't think anyone wants to get the same old lackluster service from a distant corporation, but it becomes your only option if local competitors can't raise the funds they need to improve. Historically that capital raising was only efficient for the larger behemoths, but tools like TAD3 lower the bar to access the markets and invest in small projects with an outsized impact.

#### Other Organization Forms

All that to say, I really support anyone setting up their own idea, capitalizing it with investors, and expanding the market with new productivity. That gets us to the next topic around "labor unions" and "tenants unions" as applications. We've talked about these ideals briefly before ( I am todo), and I don't see a huge relation to what I've worked on so far.

These ideas have much more to do with social organization than markets or their accounting.[^19] I suppose you could organize some kind of entity with onchain rights to represent a collective group, as with any legal entity on the platform. But that's again outside my personal design scope and not something I'd endorse as a Syndicate clientele focus.[^20]

The last idea was "workplace cooperatives" or employee ownership. I love employee stock option plans and intend to build them in as a first-class feature of `issuers.info`. They are a great tool to distribute ownership and governance down from early innovators to the people pushing the company forward on the front lines.[^21]


[^15]: I don't believe a society can take a project out of private hands just because they want to. Rather, I want to band together and constructively build something so much better that nobody would consider using the outdated monopoly. I suppose we'll get to this more in the next post when talking about network effects.

[^16]: For instance, it's solely my choice to move this ownership around because I think it would do better for everyone to have a TAD in public hands. But that doesn't, and indeed it _can't_, mean that somebody else couldn't come along and try the same thing in a venture fund or such. This endless competitive pressure forces us to out-innovate at least a theoretical opponent, building better systems that benefit issuer clients.

[^17]: I mean this in terms of deal quality. The gates are far too high for most issuers to get started, let alone raise a serious round of investment from the public. This traps us in a loop where only the successful firms of yesteryear can grab at today's opportunities with their existing capital and connections.

[^18]: I think of how GameStop pays [credit-card-level](https://x.com/JFWooten4/status/1800641294785478793) fees over and over again just to sell the stock people already want to buy. Ignoring the reasons for institutional purchase, I disagree fundamentally with this disconnect of companies and investors from each other in the market. Checks would flow directly to the issuer from speculators in years past, and the disconnect of that functionality gives disproportionate power to one corporation, which controls the rules of economic capitalism.

[^19]: The latter being the focus of the Syndicate and TAD3. The so-called labor benefits that could arise from this new structuring revolution are relatively ancillary to the primary market function we offer. In my mind, we need to get the operational execution right before expanding to some kind of human-rights philosophy, which may go against the will of free markets.

[^20]: Of course, if we get this proper, anyone could open a transfer agency to focus on these opportunities. For more informal representative voting, you may not even need the full secondary-markets functionality. If rights are based on the nonmarket forces of seniority and participation, then I don't see a huge problem with just Excel and contracts.

[^21]: Again, regarding decentralizing capitalism and [our mission](https://github.com/blocktransfer/.github/blob/5dfc7f079e7d72f64e5d01adfcc3d85f3de8bb30/profile/README.md#financial-empowerment), team equity is one of the best ways to do this. Instead of exchanging money for new shares, stock presumably goes to hard workers who possibly hit performance goals. Many struggle financially simply due to a lack of capital assets, and the widespread adoption of this one practice could rectify decades of lost retirement prosperity after the dissolution of most pension plans. The fact is that the issuer's native currency makes a lot of sense to align incentives, efficiently reward success, and keep books in line.


### Separate Ownership and Voting

In the environment surrounding my initial TAD prototyping back in 2020, separate economic and governance rights were a popular imagined application of blockchain. Many reputable sources suggested it as the possible future of tokenization that would modernize our markets. I examined the concept thoroughly over the next couple years.

Just because you can do something with blockchain[^22] doesn't mean it makes principled, economic sense. I kept running into the issue of a short-seller[^23] purchasing all the voting rights in a firm to put across bad proposals that hurt the business.[^24] The fact is that different "ownership of shares" for "profit" contains the full capital value of ownership interest, while "shares held for governance" convey a much lower intangible influence worth.

This kind of attack works with much less funding than total entity value. Consider a for-profit company with a $100B market cap whose governance-right shares trade for $1M per 10% of outstanding stock. For just a couple million dollars, we could pass a vote that decreases shareholder value 10% with inept management that loses $10B of EV.

This idea, simplified, would normally be called a bribe.[^25] I've seen bribes firsthand in some of my liquidity-incentive work around onchain ATS-like DAOs these last few years. In every instance they're implemented, voting power transforms from the democratic majority to a select few wealthy or well-capitalized inside groups, who effectively control protocol regulation and leadership.[^26]

#### 'Impacted Person' Representation

Much of my notions with the share donation revolve around removing these possible two levels of ownership interest. As it stands today, we are much closer to a Valve-style financial incentive scheme, where I[^29] own all the equity and profit in the Syndicate, while investors and issuers affected by our services hold... nothing. In the example case, this has led to commission gouging, antitrust accusations,[^30] abuse accusations,[^31] etc.

I'm not here to criticize traditional companies, just as it would do me no good to spell out how Wall Street has interests contrary to impacted people. But the fact stands that platform businesses with network effects have a particular tendency to disconnect their users from governance voice. And the forms of participation available don't seem adequate to direct behavior above and beyond economic performance and rights.[^32]

#### Letting Go of Control

I believe the market-wide benefits of accurate securities infrastructure carry externalities that far outweigh any limited profits I'd be able to extract from BT. Thus I've put forth this proposal that gives _all_ the governance voice to the community.[^33] This is the only way I see to keep the structure rock solid for what I'd like to be forever.[^34]


[^22]: And a series of contractual claims that may not hold up very well in this instance. For example, there is no delineation between voting and economic rights in practically all for-profit corporate charters. They prefer simpler, explicit separations of power through different classes of stock, since different rights broadly need a fungible representation.

[^23]: Or similarly-motivated competitors.

[^24]: A single contentious vote can make or break billions in shareholder value. _See, e.g.,_ votes that went wrong in my early [blog post](https://web.archive.org/web/20240616122443/https://www.blocktransfer.com/blog/post/proxy-voting-flaws), such as where the default delegation setting for one institution decided the outcome of Dell's privatization. In these borderline cases, a little spent on herding voting rights could cause a lot of damage, which becomes simple to profit off when (i) competing with the issuer's clients or (ii) short-sale abuse fines are not adequate.

[^25]: There are some pretty interesting and specific SEC proxy solicitation rules around shareholder proposals specifically to prevent this manipulation. The notice and voting processes are engineered in state and federal law with safeguards to stop bad outcomes. Namely, they isolate the issuer, proposer, and any form of influential context through xyzz/neutral todo outreach rules.

[^26]: It's very tempting to receive passive income selling what feels like 'nothing,' especially when you have a relatively small stake in the company. Shit, I'll admit that I still have share lending turned on in my old Robinhood account that I can't seem to close.[^27] But when all these outstanding positions add up together and can be swayed with relatively little money compared to what's at stake, market manipulation becomes a lot easier.[^28]

[^27]: It's got like $100 in it, and they want me to fill out some paperwork to terminate the assets. There are some interesting nuances here that will make their way into a TAR comment. Anyway, all this of course presumes that customer indication of lending interest even matters, as was _not_ the case in [Apex's $3,200,000 fine](https://www.sec.gov/comments/sr-occ-2025-801/srocc2025801-598095-1737722.pdf#page=38).

[^28]: Manipulation in the sense that bribers generally distort the efficient allocation of capital to their own limited ends, hurting the flow of incentives and behavior as would occur only with free exchange. I've particularly seen it spur to life in otherwise xyvz//poor todo assets, which then create huge externalized / [socialized losses](https://aqua.network/governance/proposal/85). Corporate takeovers are already contentious enough when you need the full value of what's at stake, not a few pennies on the dollar to exploit a naive governance system. todo

[^29]: Or in their case, a small group of co-founders.

[^30]: I know there's a lot of nuance as to entitilment regulation of business around this topic, but I'm just using it as a red flag for deeper misalignments here.

[^31]: In the sense that developers have large qualms with the rating systems, as typical in centralized sales algorithms, or creatives who receive only a fraction of the revenue their art produces in the Marketplace. Or young gamers who fall down a pit of gambling exploitation trained through virtual cosmetic skins—a point we'll see Varoufakis analyze in my next post.

[^32]: That is to say that venue is drastically limited to officers, while the market is left to further proposal protections through competition for quality, which can disappear in natural monopolies. Consider the couple who went to Disney, and unfortunately one [was killed](https://apnews.com/article/disney-allergy-death-lawsuit-nyu-doctor-florida-4bdaf74e2c889882b23b319ec720680a) from food allergies. When suing for damages, the estate found significant limitations because the surviving spouse agreed to a Disney+ subscription agreement with an arbitration clause. This would've been a "money win" if the family held shares, keeping profits in the firm at all costs, but this ruthless economic optimization sucks the humanity out of voluntary trade.

[^33]: As opposed to the limited control ceded to brokers by banks in the early days of DTC. Those profit-maximizing businesses had very different incentives than the original depositories, and their motives incented a power growth over the decades from minority stakeholders to controlling interests. The founders of the company would be appalled by the present Corporation Board, in my opinion, as it represents a loss of sound accounting.

[^34]: Admittedly, all things die, but the point is making it as strong as possible. I think of the manufacturing of steel, where even the tiniest impurities can drastically shorten the service life of, say, railroad tracks. Hence my shift from "slow is smooth" to "flawless is acceptable" in the [slides project title theme](https://www.canva.com/design/DAHA14Ud3yw/iifUC0oPuBelxct_9e9CdA/view) as we align interests entirely in the direction of the global investing public.


### Efficient Market Hypotheses

In oral remarks at the 'hacker house' after the conference, @DamosDaze remarked how our work draws parallels to concepts I associated with Muhammad Yunus. I am a big fan of their framing of investment without the need for capital returns, competing alongside other firms in the free market. To my surprise, Kirik actually worked with an acquaintance directly connected to Yunus during their time building a local currency reform project back before crypto communities even existed.[^35]

The fact is that markets take time to react to information, and they only do so when people like us make trades based on local data. Trust me when I say that I'm a huge critic of EMH from my time beating the market, and I know we can blow it out of the water with our actions.[^36] I've held this view long before AI, and I think there's much more at the table than just "access to information and speed" which we can affect.[^37]

#### Insider Trading

All of EMH is wrong, but one of the easiest incorrectnesses lies in its strong form. Insiders have access to information that could predict a stock's performance. While trading on this information does move the market to accurate prices, it nonetheless represents a temporary theft of shareholder value from less informed investors.

The Syndicate presently handles the entire burden of policing insider trading,[^38] which has some structural challenges at scale. Namely, these efforts traditionally rely on the Commission opening an investigation of wrongdoing, at which point we supply supplemental information. This subpoena approach leaves enforcement at the bandwidth of one regulator's staff, a headcount which [has grown](https://www.gao.gov/assets/gao-02-302.pdf) remarkably slower than the size of its markets.

Investors don't deserve exploitation by officers of the TAD's companies. This was [the first article](https://web.archive.org/web/20240919212546/https://lemmy.whynotdrs.org/post/1166651) I wrote for the community because it's such blatant theft and the easiest tenet of flawed EMH to fix. There will be information advantages, but let's at least consistently keep them to _public_ asymmetries created by creative and intelligent effort to analyze the market—the sort of activity correcting the price should incent.

#### Socializing PNL

Comparative advantage emerges from intentional effort and smart people.[^39] I do not think we can turn the "winner" of this labor into a "public good" without removing the incentive that inspires their (my) demanding work in the first place. There wasn't much specifics given about a proposed mechanism here other than to "redistribute all or most profits evenly amongst all impacted people" within the market.

Firstly, that sounds like a policy goal which is already somewhat achieved through taxes and systems I disagree with which pay for conformity. Notwithstanding that, the surface area of affected people is very large when it comes to efficiently finding the price. Even if we could somehow analyze and steal the profits of traders, we would be ignoring the immense value they bring to society by cementing the value of securities.

The price of firms directly affects their ability to raise capital, expand operations, and change our world. I for one would prefer that be done in the freest possible market with the clearest possible price signals of corporate valuation. Because we can see now in this AI bubble just how distorted real-world investments became when a very small group unnaturally pushes capital into a certain sector.

#### Aside on Entrepreneurship

Just as prices are not efficient in the sense that you can predict them based on past data, the economic market of businesses and services has equal holes. These missing or lackluster corners of market economies are a feature of capitalism, not a bug.[^40] If markets were perfectly efficient, then the conglomerates could just grow forever at infinite internalization until they eat up a whole vertical.

While it might look bleak in some parts of the web era, that vision, the fact is this has never been how humans organize in the long history of corporations, competition, and cooperative trade. Only in a planned economy can you pretend things are always perfect, and we can pretty easily see the failings of this "efficient perfection" when a store can't stock both bread and milk. In a way, the valuation[^41] of today's companies _are_ the "price signals" any observant party can use to weigh the benefits of entering an industry.

It is the entrepreneur's opportunity to correct these mispricings with zero central coordination by making the individual choice to do something about an inefficiency they see in the world.[^42] While traders just see a number go up, it's the innovators who forge concrete change in their specialized vertical, be it on a global or just communal scale. I want to make that process of speculating on future market needs as easy as possible through efficient capital formation rails, because I think that's the best way to bring wealth and abundance to the world.


[^35]: Kirk, _please_, I would love to hear more about this here if you'd be so kind as to enlighten us with the more complete story. We broadly agreed a lot on the values and concept behind building something that the community needs for the sake of having it. And I might add, having it work _well_ when an existing system (especially a monopoly) is clearly failing.

[^36]: Consider, for example, 6days, who's put in an amazing amount of work spreading DRS information across the web, getting the answers nobody else knows or asks. While it was a shame to miss them in February, their work continues on in the corners of the public corporations, where actually only a small number of specialists would understand or interact with accounting ideas. It's precisely these specialized decision-makers that can best assess the value of switching to a new kind of transfer agency well before the broad popular consensus catches up to what becomes a new status quo, equivalent to a late-stage market rally.

[^37]: 37 minutes into Lawson's original chat, I sent Chives a message in all caps with explicatives asking for more questions about EMH, especially surrounding central clearing. Much of the so-called "competitive advantage" big trading firms exploit comes from market design inefficiencies, rather than capital market valuation distortions. I spent years learning to correct the latter with much higher returns than the former, up until I realized that the infrastructure exploitations were a disproportionate hidden tax on an untold amount of all stock.

[^38]: I think we have a unique opportunity to protect investors at the TA level, which has been written into law before, since only exchanges previously handled the matching of trades. Even though we do not handle the matching of trades, I've always envisioned a sort of community-led governance mechanism that takes advantage of DEX transparency and accessibility. It is the ultimate form of buying and selling, and I'd like to couple it with a modern take on investor protections without a central intermediary subject to Congressional funding concerns.

[^39]: _See, e.g.,_ [note 7](https://github.com/orgs/stellar/discussions/1558), discussing how a colleague wired up Arduinos to test HFT strategies. While I don't respect this work as much as legitimate trend or sentiment analysis, it is a legitimate form of furthering the market and profits by connecting the flawed disparate ATS landscape. Notwithstanding how much I'd like to remove this subgroup of exploitations, the fact remains that funds procure some of the [smartest individuals](https://youtu.be/QNznD9hMEh0?t=1957) because of the complexities in allocating capital, which make it a demanding job. todo whp pll like bing a puppygirl / legitimate

[^40]: For instance, I would never have started working on the Syndicate if it wasn't painfully obvious how inefficient ATS routing became. The flaws in one part of the industry lead to grassroots analysis and frustrations that inspire competition and innovation. Without the suboptimal temporary failings of yesterday's corporate interests, we lose the motivation to do something a better way when someone new sees the market opportunity differently.

[^41]: Alongside the market rate of their products or services, approximating profit potential. For instance, I was enamoured by the ~$4,000,000,000 spent each year on TA services (if you extrapolate Computershare's annual revenue). This was a major factor inspiring the sustainability of the work I wanted to do when I began developing TAD3.

[^42]: For those reading in between the lines, this is the exact same opportunity set people viewed by traders when they see an inefficient price based on their interpretation of share value. Just as one can correct a mispriced accounting convention, traders routinely enter positions which move the market towards its true value. Their profit requires nothing but the commitment of their capital and time to understand truth, an equal form of dedication for starting any meaningful business.


### Unfettered Community Regulatory Opportunity

Once the shares move to the DUNA, the group can propose any changes they'd like in our company. That means we can design infrastructure and oversight together with a credibly powerful and aligned cooperative jury. I don't think there are any existing comparatives to this type of system governance.[^43]

Regulation is interesting because it's one of these few things you can simply volunteer for which have an immediate tangible effect on society.[^44] I do think there's "a much more cost-effective way to do regulation" which relies on transparency combined with the wisdom of the crowd. I think too how jury trials often have better results for victims instead of private mediation, such as an Administrative Law Judge.

I suspect a community-focused approach to oversight will keep us high level. It can steer towards doing the right thing without entrapment in a narrow set of policies which forget justice in their distance from actual conflict. That is to say that I believe we can best organize governance decisions with the more intimate understanding and care shown that community members already have discussing these market challenges.

#### "Catching" Comparative Advantage

Again the idea of regulation "steps behind the pursuit of competitive advantage" isn't entirely scoped out, but I think I understand the gist of what you're getting at. While there's nothing I would regulate away from price discovery, there is real and complex fraud that we will deal with over time. People will use the securities for transfer scams, we will need to stop terrorist financing, and there must be no tolerance on synthetic shares.[^45]

I agree that we've seen the intermediaries of yesteryear dodge regulations again and again these last few years. Hopefully,[^46] our transparency and open participation model will steer the industry[^47] towards fair(er) dealings to the detriment of all investors. Plus, higher participation rates mean more minds at work determining the competitive value of firms,[^48] raising capital in the process.

Some intermediaries might try to cheat with phantom entitlements or manipulative shorting, but this will be trivial to see with proper DEX routing enforcement.[^49] And there will always be for-profit TAs who'll let a few extra CEO shares slip into the market without proper legend removal or offer creation processes, as defined in federal law. I think that's where we have this special place to come together, enforce some sort of TAD membership, and rectify the problems we find firsthand with our own set of rules.

#### Pure Protocol Integrity

From the start, my idea has always been to create a protocol for the free transfer of securities. By my definition, internet protocols work only according to their rules, leaving no room for corruption. I realize this is a high ideal for something that requires agents to implement, but I do not think it's impossible.

For instance, one email client might be demonstrably worse than others due to its tracking of private information or sale of ads. But all clients still use the same email process.[^50] With transfer of the shares, I intend to embed WhyDRS into that process as the final step of human adjudication between source code and deployed implementation.

The "drastic and profound negative impacts on most people" only exist when a system gets to "some point" where it _can_ "tilt into corruption" with or without external regulation.[^51] The fact is the Syndicate is only regulated as a simple transfer agent, since the Commission[^52] never had a reason to build out a set of standards for a TAD after industry went with the DTC model. While we're subject to the same [17Ad sections](https://github.com/WhyDRS/SEC-Comments/issues/10) of accounting regulations applicable to brokers and other intermediaries, most of the case text for a TAD concept comes from State cases of investor rights centered around issuers, for whom BT only acts as agent.[^53]


[^43]: The only ones I can think of were designed by government or spun out of private operations. I think the government variants lack the innovative spark of competition and accountability in the free, uncoerced market of reputational capital. And I think the private groups are too easy to co-opt towards founding interests, or at least misaligned views that take control over time in the search for profit at all costs.

[^44]: _See, e.g.,_ political campaign volunteering, as I know prominent community members have partook in. Often there are some sort of values and objectives that matter enough intrinsically to put time and energy into the world for a chance at change. There may not be an immediate reward for spending an afternoon moderating an open roundtable, but it's interesting enough that helping make things go smoothly attracts enough supporters.

[^45]: For that last point, see a cool relevant discussion on [Soroban deployments](https://discord.com/channels/1102309240145707049/1262090967381577759/1309318677128020008). Now that the network has the flexibility of arbitrary login without intermediaries, there's a lot more nuance in how we implement securities management tools like clawbacks. There are some fundamental features we need to implement, like [reverse splits](https://github.com/blocktransfer/py-TAD3-horizon/blob/def8aaa17338073afe871de5881a30e406ba3d3c/investors/stockSplit.py), which introduce significant central trust and hence power over share balances, even if you can easily audit everything a TAD agent does onchain.

[^46]: My naivety here comes from a lack of scaled deployment of TAD3, not economic or governance ignorance. Recall that I took the whole codebase private before discovering the community for fear of what unrestricted use of a TAD could allow bad actors to market. >>I'm confident in my ability to keep the issuers and agents in line by suggesting statutory policy changes binding American agents as they adopt our system.  todo region

[^47]: Or at least the agents who adopt the TAD concept. In a way, their migration into honest recordkeeping can become the competitive pressure needed to change the legacy side. Fact is that it will take some time to fully transition away from custodial holdings of retirement portfolios or complex trusts under ERISA.

[^48]: With lower gatekeeping, markets will benefit from more _natural_ volume based on fundamental value, not arbitrage on roadblocks, ATS rebates, and PFOF. Imagine a whole market built on the values of the LTSE or IEX, available to all directly-registered investors on the same playing field. I think we'll see a much more accurate and responsive valuation of otherwise overlooked firms once we can again have unwavering faith in the public price and volume metrics.

[^49]: I think back to all the years of trouble Byrne went through to get the most basic data about his company. Squeezing the exchanges for years... it just needs to be a thing of the past. And there's no excuse in my mind for the obfuscation perpetuated by the CSD nominee holder.

[^50]: Save for their internalization or proprietary methods for the same domain. I think this is an easy and inevitable outcome in web2, where everything is services talking to services. But I find it to be a much lower risk since everything we've built requires any party, including the agent, to query and rely on the same public blockchain, providing a level playing field with _mostly_ zero insider advantages, ignoring legacy onboarding.

[^51]: I realize this is somewhat of an oversimplification, as shown by the endless politics surrounding a small bit of code limiting block size to an arbitrary starting point. But I posit that systems like that did not have the governing nuance I intended to develop here, which allowed for representative voting weight resistant to self-interested narratives. If we keep governance rights [[aligned]] with the existing strong set of community morals and standards, then we can entrust long-term outcomes with the integrity of community participation, or at least that's the story I've had in my head for a long time.

[^52]: Or any government that entrusted the concept to the free market. There are some notable exceptions in Spain and India where a central implementation of the direct holding structure came alongside government rollouts. I use these implementations as light inspirations with a unique set of improvement opportunities should something built by open-source engineers come to replace their relatively initial implementations.

[^53]: Thus we fill a role that enhances our responsibility up to the company level, above and beyond the simple execution rules from fragmented-out intermediaries. That is to say that the concept of everything, including marks, in one place combines many different pieces of public policy, which will take tact and experience to piece together correctly. I have begun this journey by extensively diving into all securities laws, and I poured through thousands of pages of regulation since starting the company.


### Building for the Masses

Since the start, I've been extremely concerned about centralization, particularly around the profit motive, because of the "enshittification" evidenced in every other major tech platform within a two-sided market and over ten years mature. The fact is that it's extremely easy to add in a 7% crowdfunding fee when you have 100,000 users on the platform ready to throw money at the limited set of options the TA or funding portal lets through its ivory doors. That is not the vision of capital markets I want to see us build together.

The world needs a stable long-term asset allocation protocol that does _not_ systemically exploit the many for the benefit of a select few at the top.[^54] There's a reason PFOF is becoming illegal in the EU this year, and I won't sit idly by while these destructive consequences continue wreaking havoc in our market. Like I said in the talk, it's the reason I didn't accept centralizing venture capital that would strictly tie the Syndicate to shareholder interest.

#### Development Designed to Reward

One reason I've been very interested in a flat organization[^55] is precisely those "[d]efense of people, of their labor, of their knowledge, of their information, [and] of their economic security." I look at a company like an investment fund. If you're siphoning 2% off client portfolios each year just to keep the lights on, with no regard to actually succeeding for them... Well, let's just say I don't entirely think you have the right economic incentives lined up.

I've worked in centralized, decentralized, and distributed (blockchain) systems throughout my career, and the latter is certainly the most enjoyable in my experience. I see traditional command-and-control corporate hierarchy as incompatible with the most efficient allocation of capital in a creative or nonlinear field like software development. As such, I've spent significant energies over the years continually mapping out [flat engineering](https://www.youtube.com/playlist?list=PLD_o9ntBnmGbBUxZF_rbNj-xuil4HLaD5) collaboration designs.[^56]

The point of this work has always been to keep the bounties of BT's marketable work tied as close as possible to the people building its products and operating its services. There's no excuse for [over a fifth](https://www.apqc.org/blog/how-many-middle-management-positions-do-you-need) of revenue to funnel up towards people-managers[^57] who never really move the ball forward on our GitHub repos. Some may consider that a limited view of what our business needs, but I think it's very accurate to my intended vision.[^58]

#### Structure Engineered for Quality

I'm not saying nonprofits can't go downhill. I've seen firsthand that bureaucracies will be bureaucracies no matter their lack of fiscality. But I do know that it's a strong first step to help reach our needs.

There are evil people in the world who will attack whatever structure we create. We've known this from the start[^59] and set off to design a governance mechanism that can resist the wealthy interests we challenge. By moving the shares over, we limit the speed an attacker can gain momentum by using proceeds from the community to influence the community, since inurement will only allow for so much consideration or bribery through dividends.

Thus we remove the opportunity for "benefits that were allocated to customers" to instead become "owner profits" since the owner is a 501(c)(3). Any supposed profits would eventually need to be rolled into developing BT and TAD3 to offer better, faster, and cheaper service. The only other alternative is dissociation into another nonprofit entity, promising all shares held perpetually.


[^54]: ANd frankly  it''s redaicluodls that I evenn aneed to write this out, because they orat even at the top of the ecenemic saladder. THey're just a cencentrated groutp ofy industry isnsnidern  who hapyppened to be shethere when the whale market changesd to electrnic, and they saw a change to cement their limitehd roles of mony and power. Well I wont tolerate thoir status quo for a memont longer no matter how much they thin k they desersve it or haw many ways they can justify their blatant theft to Congress wwith vague fruee-market idealorlgies,

[^55]: _See_ ge edagr https://www.sec.gov/comments/s7-15-23/s71523-301019-767522.pdf. _See also_ X poststcruct TODO

[^56]: THis inctludes parititcucally contlsiedart of compnesnatitno. For the longest time I thought I had to do this crucial nad complekx pirnece through interal committee, . Howere, I am so hayppy to have the communtity available now as I believe it will yielld to more effiricint ant d obtjoctive rowards.

[^57]: Much ofg my thinknig around theu jqutandaries of bossse sstemmeed from inintiar resesearh in _Peaaplenware_ and _THe mYthicual man-Month_. I owe much intellectiural credit te _How Gommittee s Innovate_, which perfectly capturesd the setntimnts I'd seen in flawed centllaived pceaptial alloctaion groups. This bedy of word bruadlyy seppurts delegiotian and indepnenetce of deceiosn-maknig down te the llowest possible donomutianon with minial permisosetns, a concept most directly expreessed in _Reinvnitng Organivaiton_ccccccccccccccccccccccccccccccccccccccccccccccccccccccc

[^58]: _See_ Discisussor of bulidngi an autinomontc "AWS-like" service plotform with munnial human invemelment in 0[SEC Resposnep XX4 § ABGC](todo ummm this was oral). THis is the only way to provide a nuviolla sercnie in my eyes, and celaly the best way too mininvie the number of humnons who tough MNPI.  Bruadly, I like the ide a of every company nad ivnevnnor using the same playing filed as the basis for tfinincall technololgy, as the backdeer tdeeals of yeesterypears' elite cannet be allowod to contine proropaging into business tracsaction s of such impartnce as an IPO

[^59]: I think [Bibic saw](https://www.reddit.com/user/Bibic-Jr/comments/z4p5ss/an_open_letter_to_the_mods_of_superstonk_from) this get particiculal/yp worse oas the communtiy sive grew, paaid accounts startetd intfiltrating forums., and helped a lot of people learn. I'd rather just get this to a strong place so we can focus on the good work that's been done nad needs to happen far mass DRS adoption.  Imagine if the ASsocat distributed proftis teo members, supporting a pariciticapatino narrative  aruond profit over athuntic missoin 


## Local, Decentralized Economic Favoritism

Next, LimeGreen mentions Kirk, who "[s]hared an article with me about local economies that was interesting." Huge thanks to Kirk, who asked lots of questions lining up with a chat around DEX accessibility for all companies at the start of the panel Q&A. I'll let the substance of my DEX remarks stand there, but I'm sure the inspiring substance will come out in discussing the [Fed paper](https://www.frbsf.org/wp-content/uploads/schuman.pdf).

The 2009 journal entry comes from a well-known author in the community, and LimeGreen gave the following main summary:

> If buying local generates 2–4x more economic benefit than a dollar spent at a globally owned business, then wouldn't socialized ownership of companies have a similar effect?

Aside from the timely recommendation for economic diversity, the paper also makes some relatively specific securities-law recommendations.

For the rest of this section, I will use blockquotes for the actual article and put the Discord remarks in quotes.

### Securities Laws

> Existing laws place huge restrictions on the investment choices of small, “unaccredited” investors—a category in SEC vernacular that includes all but the richest two percent of Americans.

This is the article's main critique, but it has been pretty aggressively addressed in the JOBS Act. Since its publication, we've seen the proliferation of crowdfunding and Reg A offerings that are much better positioned than the old publication regime. I understand there are some frustrations with what you need to disclose to unaccredited investors,[^60] but the Commission has expanded its definitions and justifications over the years to allow more market access.

I don't think it's unreasonable to ask for more issuer disclosures when selling to masses of investors you'll never have any personal connection with. Michael Shuman gives the example of a restaurant raising money from its patrons. However, this sort of fundraising amongst friends or neighbors is exactly what Rule 506(b) permits, with nothing more than an ex post notice of activity without a disclosed amount.

I think the larger problems are the legal fees and paperwork complexity Shuman harps on repeatedly, at least nowadays. The laws are in a decent enough spot, and they consider a lot of factors around capital allocation.

#### New American Systems

> new rules could be left to the existing securities departments in the 50 states.

"Web3 is supposed to be a decentralized web that puts an end to corporations siphoning all life force from humanity via our growing connection to the digital world. CeFi will be replaced by DeFi."

---

I agree with protecting our energy by keeping more capital with its producers, not rent extractors. And I have spent all my career seeking the most decentralized means to execute this idea, because DeFi is the only logical outcome when compliance costs, conflicts, and coercion dominate. However, I have a slightly different view on decentralized regulation than what is presently promoted by Shuman or other modern crypto entrepreneurs.[^61]

Proponents mainly purport that the state regulators will compete with each other to best protect their citizens. However, securities laws are complex, and the end result of fraud is an anti-management case brought by stockholders in the jurisdiction of incorporation, anyway. Each state simply does not have the personnel or bandwidth to monitor their little sliver of an electronic, global stock market.

This is best exemplified in the broader sense of global, cross-border investor protections, of which there are extremely few.[^62] Local governments simply have no obligation to users outside their borders, even if the corporate form is domiciled within. This has led to some really underdeveloped securities and antifraud regulators in countries with poor capital markets, precisely the areas that need reliable laws and formation.

I think all investors deserve the best set of protections, which have not historically emerged from competing jurisdictions.[^63] Many countries just blanket-copy the SEC's rules as a starting point, following its near-century of enforcement experience. Thus I believe we can establish our own set of governing rules applied to all TAD users which builds the modern protective framework we need.

#### Keeping a Healthy Separation

> Outdated federal securities laws have left Main Street dangerously dependent on Wall Street, and overhauling them may well be a key to economic

"Once this happens, synthetic share creation will disappear, which will bring back proper price discovery/monetary allocation. Further, corporate governance will return to actual stakeholders."

---

It's no secret that Wall Street's consolidation of power throughout the SRO and exchange reporting and governance rules took a lot away from investors. Let's just leave it at that. Unfortunately, with the [dismissal of Alpine](https://www.courtlistener.com/docket/67486807/01208744680/alpine-securities-corporation-v-financial-industry-regulatory-authority) from the Supreme Court, I do not think we can fix their system.[^64]

Overhauling concentrated statutory power and synthetic shares will not be pretty. There is going to be a huge transfer of power away from the existing elites, and I want to ensure we have the absolute best vehicle to thwart any mischievous financiers. Because proper price discovery is something worth fighting for to the end; it is the chief function of markets and the largest victim of their manipulation.

And the corporate governance tenets follow that same line of logic, since issuers will wake up to the direct wants of their shareholders, not just big funds.[^65] I think we have a unique opportunity to build governance from the ground up in a structure completely detached from financial considerations.[^66] Because for the first time there will be a direct link between an oversight authority (the DUNA) and trading infrastructure (subsidiary BT or TAD agreements) which bears no revolving door of monetary interest.


[^60]: The author gives the metaphor of going to a casino, implying by comparison that anyone should have the free choice to do whatever they want with _some_ of their money (they say $100 is enough). If that ethos was sincerely true, then I'm of the position that you should push for no limits whatsoever. Thus, the author acknowledged that there is some form of differentiation between investment opportunities, which can suck up infinite personal capital, and a gambling problem, which has addiction support.

[^61]: Most of the latter make an argument for intrastate regulation because the local commissioners maintain a much lower basis of power than the SEC. However, I find it comical that none of these so-called proponents execute 504 offerings within their so-called home markets. These regional offerings take a little more work to set up in a standardized system like TAD3, but they provide precisely the local allocation (without secondary markets for the sense I would want) which can really support a small business.

[^62]: _See_ [note 156](https://www.sec.gov/comments/sr-occ-2025-801/srocc2025801-598095-1737722.pdf#page=58), highlighting one example of this deficiency in the American exchange protection laws. When a pension fund in our law system can't claim damages, you know an individual investor outside of it most certainly has no voice. This sort of venue domain gets very messy as companies read from even a reasonably diverse investor base.

[^63]: _See, e.g.,_ the relatively complete unification of Blue Sky laws across American states, blanket-adopting the same set of rules as if they were a universal federal decree (and even then, most of the state laws defer to the SEC). We saw just how much resistance legislatures faced when making even tiny adjustments from their counterparts [with Webb](https://youtu.be/Vbr3hfjVOxw?t=5133). The market has spoken, and the states do not want to take on the responsibility of creating local markets designed with investors' best interests at heart.

[^64]: And that was under the older Administration's rules, by and large. That is to say that the case may have succeeded under the earlier, less conservative Administration. I don't want to base the regulation of billions on the whims of nation-state [leadership decisions](https://www.ibanet.org/article/702c2a73-11cd-46a6-b238-f95c303dbe9e).

[^65]: We'll talk more about investment pools in a moment. This is the opposite of a healthy separation, as everyone's interests come together under a manager who has almost unlimited power (or truly unlimited power at the broker level) to direct any corporate policy they'd like. This is why Gensler was so adamant on the [environmental constraints](https://www.congress.gov/crs-product/R46766#_Toc96082789) on advisors acting against the market or their fiduciary duty.

[^66]: We've seen (self) regulation evolve from market groups like NASD with broker profit interests. And [governments tried](https://youtu.be/o2yXCKU4Kmk?t=660) to curtail the middlemen with their own programs with varying success. I believe we can learn from their failings with provably independent and quantified stakeholder interests.


### Crowdsourcing Labor as Decentralizing Income

> New community-based funds, securities, and exchanges, of course, still need oversight to prevent fraud and ensure accountability.


"With DeFi we’ll have opportunities for universal unconditional basic income, which will bring freedom, fairness, equity, and prosperity like we’ve never seen before."

---

LimeGreen's points here are a hot political item I've been on both sides of before, and I don't intend to tackle it completely in the scope of this post. Centrally, I think, 'where does money come from?' And the answer in my mind is the productive association of people producing economic output.

I think the TAD will radically unlock such productive collaboration, and perhaps the interest and divides from such ventures can lead to something akin to UBI. I've always just wanted everyone to have enough quality investment assets to live the lives they want, which requires access to those assets fairly in the first place.[^67] That said, Stellar does have native inflation [which could](https://github.com/JFWooten4/JFWooten4/tree/f3bca91404ea4ee25ff1ac6962d5bc2fd7120b1d/stickies/XLM/inflation) serve as an effective means of distributing such an income stream through NQG (for provable uniqueness).

Community-based securities offer us the freedom of free capital association I've always wanted. It really is anyone's speculation what abundances this or other blockchain innovations could lead towards. But I do know it would be a whole lot easier to distribute funds through Stellar than old rails like ACATS.

#### Participation Without Central Authorities

We can shorten that quote to just:

> New[] exchanges[] need oversight to prevent fraud and ensure accountability.


"People are ready to work for their community, but the current alienation and exploitation that this system requires of us, of our communities, and of our labor must end because it is keeping us from greatness."

---

IF there's one thing I learnedh trading botween clasese in high schorlol, it's to neven unedrrestimate the neginuteioty of distribedutd markens. Peeoeple can come up with the masno creatiwe wwwapys to do things, even under the most unusual of constraints. THat sort of innavotin, like bindngngi  10Ks during lusnch peried, requires spypsytems with the flexabirilny for anyone to payrticiate to help.

Accountabililty gets a whole lot easirew tih a tranpsarcent open-soerce prototcol, bit it aslso comes wihct hmuch more puxlc equitp when anfynoe can check the repoingi and trading history of issuers on daaemmand. THe olde approach required new teools to montiro central serviers. With the techl/olggoy we have noday, self-insterested investigarots already uncover fraud following the breadcrumbs of trasniotctions easy to see on the accountable distrubtuad legder.[^68]


The Commission is [cerretully contemplating](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202504&RIN=3235-AN49) rolling crypto into ATSNs and national exchanges. THe attochk surface on thin sopaque ntiercal isntrafstructero is huge no matter how big the opretaier. That just is not the case with a DEX.[^69]





#### Structural committete ALlocatro Disaporuuntmentss

> locally owned, small businesses constitute about onehalf of the private economy in terms of output and jobs, but they receive almost no investment from the nation’s pension funds or from mutual, hedge, venture, or any other kind of investment funds.

In the Q&A of mp rpesention, I go off on a decent tangent abou.t cetral coapital allocoiton.[^70] The fact is managing asssetts is a fulls-time job, as I hopefdully laid out eaarllier. IF yaee wonat to have onyvweher close to good trade executieno., much less local  investment at a large fund-levelr scale, thhe propr incentives must exist .e

I''m not talking about compensation. IN fact that's thee one thing the cerrent systems leasns on a llittle to o mmche twith the contanty management feens roggardless of permfnace. uI mean invewment rewards based on qual/ity and desigcned around ppp'pure' comptetitn with other monety managencrls.[^73]

That is , of coerlseo,, to sayp nothintg eof buildngi great tsystems that llet indeiwideulas pyoregfom this local inwemntmnt ad-hoc, THat said, I lean more towards the specailasvzaiton of a 'banker' role in  the nensee tha there are o fw poepl/e in town who are good with capital allocation who handlle theri own littlle corners of the nighborhaood's commutall growth. Except they'rce doiung so with others' hard pcaptial, not the inmfginate monyp glictnch of fractionall bank deporsits and infinite levergoej , [^74]



> Pension fund participation. Let’s allow any pension fund that places as much as5 percent in local securities, either directly or through microbusiness investment funds, to meet legal standards of “fiduciary responsibility.” (Current regulations define the term in a way that directs virtually all such investments must go to global companies.)


IT  is not in thie entireest of largfe ponsin finthds to partitcucypaste in locaal secitirines, regardseless of fedicurairyp presnopablirtp.. Regiluatons are never the prbolm with asset managenrs; theuy will find a wwayy to do what they want with theri capitl.[^75] Bulk allocators do not investn in supopre local projocts because they lake thi skill[^76] or incentive to do se.

If t here was true compettoitn to manage reticmeent funds, we wold see a markte for money managers mich closer to the contrant wealth servinces pitches sold to the ultra-weallthy. I've seen these groeups firtsdand, naad the fact is it'as mech more luctrative and -easy_ to manageo an indidvidural's wealth tan convincte a committte te shoe you ntio their misinformed institihitonalived managgement progrram. As Lime might put it, it's the deffinience mmbeween serving only yourself and the succossfull elitose vs. worknig in collabartoin with a lot of hard woooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooorkes.[^77]

Asset rmanagers aru like doctors. IF you can contantlly drrag them into courht for malpraactice, then they stop losngi the spark that made them professionlas in the firtst place.[^78] I think to the constant barratement Burry dealt with for the years until his trade workked out.

When you deal with tha kind of pressure in a hirarchal inewentment committee, the result is losing you job halfway into a trade. I've seen it ficrrtstadnd, nad it's disgusting....................... It reminds me of a ski mentor of sorts who quit medical practice after Obamacare for lack of being able to charge their own fees.[^79]


#### Entd Resuelt on Insufficient Mehchannism Design

> every American[] is overinvesting in the Fortune 500 companies and underinvesting in local businesses key to local vitality. This is a colossal market failure.



 




Un forrtatly this colossal market failure exsitilly   unchanged allmolst two decades latelr, supported by the myth of a well-known monoplosit.[^80] We [/a/talked obut](https://x.com/JFWooten4/status/1866127171208524255) this on a few epsitodes last yoear,, and I still feel as strong about it as I did then—even if I find writitng to be a better output thaan feyell/ing obut it anymoore., THe five people on the Dow Jones commitetee[^81]  have niordintee power comperatble to the Feb chari

This of celoe ignores the sociall costs of elecetingg inwentemnte canditidantes soly bbased on their sive, rewarding lrong-tail expansion nito monopoly sive and ppppwoprep. This concetraation doust have to be the nedacme of captiallsm, nad ndeed powers balanced harmonholy thocgiht marktes before hundureds of yeaars boefocde they were forced te become lsifeline retirement vehicles for the massos accordngi to a central plan.[^82]  The challeneg is making ingraastrcure strong onegh to support even the smallest new particcant.

I saw this fistdand when I started uplaaung to youtube  all theso years ago. My remevingh the gatekept barries to spaaknig as my fdull self, the pllatform gave me the space and oppretinty to figure out who i wanted to be, nom atter how few viwens all that ald rontent garnered.[^83] That level of minimal permoissotnnig can and deosu exist in the crypto markets,[^84]  at it's only the remnante beliefs of parctially-papor seciritess marknets that keeps them from innaving with real capitall assets.

Arr that to asy that it rejuires a very high leverll of execuiteon jqjuialty to build somenting that works for everyon., And that longg-tail approach is the ony mothed I see which can relaible serve lacola businessse s, who effectievly ride on the coatails fo the alrcge capital allocatiors. THe solutoin comes from aan intentional egalitariness whereby all issuers of any sivze can emmploy the same flawlenss technology starkt.









[^67]: Huncep the point of staring the Syndicate as a limited-scope maruket accountig  platform which lallows for asset menengaemnnt te be later beuilt _on tap_ of it. This s the puretty standord "markte utility " claim maade by the existing SIFMUs. My m ain approach difference lies in 'open access' that  is actually apen to the public, not just was strees—sircnce ive aslvw,ways just been a member of the public and seen how much was possible outside 'their' appronvvvvvals

[^68]: This happens every day. For thes less famirirallr,. here are [two](https://x.com/zachxbt) [examples](https://youtu.be/619oKirSiCM) of great gccreators. There is no requtitie bar to dao this researth.

[^69]: _Compare_ the opne-soerc varinat's equal matichingc protocollll against [intranalivzehd and intemiary-routed](https://blocktransfer.com/.well-known/thesis.pdf#page=8) Walll Treset trades. OR _see_ [fair ordecing](https://x.com/StellarOrg/status/1910732431998525789) on one which took a decade of regulatios to readch what we nove have in the NBBO.  While thee Commisoson might 'need's some expnesive multiyear repoting conluitotain tool to check  gfdor inssidar acitveenty, pueblic onchain trades already provide engiht infgormation fo r investiagotrs to [trace crime](https://www.justice.gov/usao-ednc/media/1395056/dl#page=23).

[^70]: Dare I say  it was a pretetty good extrapolotio ofg how centralized brokers create horrible downstream allocation implciatinos which Shuman paints out llater. I fucusod a llot on trade ropeting through PDF statimetnt,[^72] which is effecitevly [^71] the limitner on smaller, more decentralivzed money managers. THat bread category certainly include the idoea of pensions finudsw hich have a whlo ploethro of possible mmedronivetainos of they were just trimmed doubt bypy  speading the capitalr more egalitoarinoly across local mcommunty menotpy managers.

[^71]: I say this as both a menner of starderh procitce and practicaal reality. The ABC Madoff series [drcamatizes the menent](https://youtu.be/VEMuvqV1ZsY?t=47) not over Commisson staaff [checked his accent](https://oversight.house.gov/wp-content/uploads/2012/02/20100518SECreport.pdf#page=8) when ginet [all informatni](https://www.sec.gov/files/oig-5090.pdf#page=346) to do seo. The SEC report goes on for aover a doves  pages about huw difficult it was for _thuem_ to ascertain _any_ trading informaito n aboit Madoff's acoont.

[^72]: PDYs were specifgically trivvially molformed in [this case](https://mega.nz/file/ZngUFIqJ#qda7W4cmfAL2-waLkHU0QgG4jXf1ISFVccIl3rLkIMo) (at 7:39) to defraud investors of hundreds of mullisons of dellrrans despite strict regultaeory oversight (the vido  regfences Genlar hduring his time at the CFTC). I have pyrosal/l/y tseen hthem required as a basis of interponla trust for managging pcapital, which is an extremeely flawed pyoint of failure. How on Eartth have the brokerages put together such dense 'privacy' lsaws that validating a perfomancce hisnotry beocmaas this hurculena task?

[^73]: As Varoufakis puts it in note 101—compettein undindereed by ufalso forces,. Today that would be braedly the implicit trust thresholld of perfgamnec history, regulation of inwementment advince because of fraududsnlent opaque trading, nadu regilahit ofg asset costody because of unclllear beneficical owresthuip chains-, All of these are antithwhicalr to the free flomw of capital between good asset managers and their clienst, andh the end resolelut is thath he best traders only manage thoeir own acconets, as it'as just so much less hastle.

[^74]: inturil losses socialzve and everpyyino gets to pay for thoir mistkkotakse. Debnt and equitey have eqjuivalernt costso of capital for the enutriuer, bit the latter takes actual skill to deploy since its consequensces of failerue are impossible to push out ad infinitiemu. When ypou mess up with a lean, yau can bail it out or ignore it with ref's forevwen—not so much with unrealivzed capital lolnsses on a mearketable secunrity3

[^75]: _See, e.g.,_ mmy  discussion of usinc a VPN to access CFD bs-book leveraged contracts in [note 45](https://www.sec.gov/comments/sr-occ-2024-001/srocc2024001-474471-1355754.pdf#page=19). I had myp accnuh banned from the platformm after I made of with ovner 50X gains, but noice nthat nobody reaally cares as llongg as you pay your taxes. _See also_ dall the fines paid by money managerns which generally amonuh t to fractions of the profit they makke by (iuntentially) breaking rules such as short-selling limits,.

[^76]: For intsocsace, the atehr of _Hype machine_ wrote thoir accounh of SBF on the inspiarotn that their mother's ponosion fund lost $95,000,000 in a posintion in FTX.. AS someone whe [clrlearly lsaw](https://x.com/JFWooten4/status/1928252658667647220) warning signs and steerede cellar of the exchange, among toher collapses, it's ka lltittle saddinig to know the Otnario asset managenmnte committee e was fololode with so much educaptor reticemnet money. Fact is most funds are far too large and cannet proplly allocate ufunds because of their beorcuatic structirue , leadingc to suboptimal decoision-smaking.

[^77]: That is to saay it's systmemically easier to navigaate assiisting a class of ekxingg elties when there are inti-markte inewnement regulatinos established by ppeople who are not capital allocatirs. THese statuts, wehtehr gorverment or private., generally funnela capital excluseively  into walll-STeree t preodecutns, becaes they were by nad laacge prorgated throght the berkorrs twho ceraanied the products theyf specify. No asset manager worth thoir salt wouldh force alloctaion into ghlaobal ETFs or bond funds blindly, buut thaat aboslutetly triviral executoni is wthat'''s rewardede in the status quo defined by popular opititon.

[^78]: Along the oxiom thaat modern clinics will go throght just about everything that _colud be _ out o ffear a patiennt wold complain about inadequate treatment. Litigaation shold exist to protech against outrigh t frradu, but 'defensive asset managehmment' just leads to bland underpoformant index inwentments designed to avouth ntlawsotitns more ithoan garner returns. And it's _so easy_ to clraim incompetence when you dudicate a team to findng tiry local deals which carry vastly diffurenet risk pprofiles thaan pyrior intstutinoaal exproser.

[^79]: Technically they movked form mmaainstreaam terament to o much smaller private procitce. We soom to thing kx the best asset managern s will magirally gravitatie taord pbulci inventement vehicles because of the good in theri hehart. I nerallyt, all I see are power-hungry centarl berocats who will deploy PE ruthlussly teo crusth half of seciety in an attempt to make their arbtitary numbers.

[^80]: Buffutts' charity wager did not remotioly aaccond for fund sive and alpha volatililty. It did not normalive for the systemic flallws centralied asset managern face, which need to be remedide through a TAD-like capital deplymmnet flamework before the general asset manager can hopqe to access a proper inwentment markte. And to an extent it's pereciesly the dogmatteic hold to the beliefd of basket gcrowt htha shapes ounr proesenst society towardds infinite centralivaitn.

[^81]: _See_ [selection group](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-dj-averages.pdf#page=11) composotin for the DJIA. Two of whom are lteral WWalll STreet Jounarslists. Yes, celalply the media shold decide how trillinos of dollars fllowv acress complex finanical marktens. 🙄

[^82]: The central plan part is the biggisstn problem, not masses of people attaining generational wealhth throguht income-preducing assetns,, OIf we take our transnactional sorcitey as an immovable given, then dividindes are the only means i see to distribe oppretiuinites and componaudng quilaTiy of liffe. AT the very least, widesepad ownership is the path to equal opportinty in worknig speculation for a money-baased gllobal ecenemy.

[^83]: AT the time of pbusilodhng I have 356 subscribers and just h50,000 lifetime wiewns, 40% of which are from rewiewming a book that's basically a pamphlet. Just like the 'slow is smeooth' setiments, it was agood era that uhlped me build the poransl scaffuaulting i neededde to start (and endure the brutial early yearls of ) the Syndicate. that was very largenly thanks to never neednig to interact with anyone to releeaase my content, as Iam extremely averso to meetingg strangers, even moreso backk then.

[^84]: For itntcancsec, all the modern copy-trading platforms or algorithms I see with adwanaced deveploment come from webb3. They oor at the forefront of indepnedent managers thanks to the effective zero cost of viewing and acting on pbbullci data. And the meta transaction dotalls around DEX trades are aa gold mine of algertihm trainnig matiros in themselvves alenot.



### When Local Optimivaitno Fails

> According to the Statistical Abstract, sole proprietorships (the legal structure chosen by most first-stage small businesses) are nearly three times more profitable than C-corporations (the structure of choice for global businesses).

I'd want to know more about thee study methonds employe her, as I 've got to thinkk there ase re some eceremines of scale with at least havving a legitimaite Corpation.[^85] Notwithnstoonig, I agree deeply with the .preincele of intcerasd offificinets with more distribeudet dlabor.p I few presemue innefeiccent extreaction from hirecachals management, then it follows the lawooset form of independent eff9ort, a sole prerpicetership, yireld the hightuset capital recitness to 'society.'[^86]


The sole porpes are akin to 504 offecnncings in that they'sre a ltiittle outside the scope of what I envisiosn with TAD3. THere is a good timme and place for small independent offerts whchi use limited capital to execute a limited (non-smamrketable ) visine. I jueust dan't soee how prokcets liket hat would require or even want the full fuctinonaly tof direct cconnection with thoe market for capitol.[^87]


Rthaaer, I deepl/y align with the princelep Shuman pusdes tha [small businsess is good businesss](https://www.youtube.com/watch?v=Iq5aG4ZsPlU&list=PLWUFvhKuc_5uIHno6ZC1QA3jKhvI9rVXU). Creative wherwithal mong peers tends to dissapte quicklspy as specialiszaitn dercerosase. There are only so many peaaple who immenly care abut styling hair for l/ocals, and that passion jucitly fades if  you make them sell shampoo ro much less tupperware,

By keeping organizations small and bound to their core purpose,[^88] a single monopolist can't control a market by will of perpetual loss-leading. And smaller employers mean more competition between firms and bargaining power for workers against a looser bureaucratic hierarchy. Lastly, this also makes diversification much simpler for both capital allocation and analysis of performance.[^89]

#### World Government and Distributed Democracy

"Shortly after DeFi’s takeover, we’ll also have an opportunity to live in a true direct democracy where everyone has fair and equal say in local & world governing."

---

I've played around with this idea for a while.[^90] The thing is, government will still be government after DeFi replaces the old guard. And I'm not so sure how I feel about there being a world militia.

The world is a big place with a lot of different people. It remains to be seen whether all these groups can come together, no matter the technical form of democratic participation. I think we see now[^91] a pretty clear example of entire societies built around coercive control and state authoritarianism that few would promote, but it still exists until a local change movement can do anything about it.

As for direct voting on all governing affairs, I think that's a great concept, and we'll get to see it in action with the DUNA, which doesn't have elected representatives.[^92] Most governing on that high scale resembles money management insofar as market impact comes most directly from forming an association to accomplish your goals. There is nowhere to ask for permission to work on your idea or pitch it to investors, and that action can lead to some of the most outsized change.[^93]



#### Specific Voting Mechanisms

"Voting mechanisms like quadratic voting can provide a boost in this area as well."

---

Nom  mottor how you phrase a tsttememnt like this, ppyaure prabbyl gionig to invonke a disciussion arousnd web3 gorverenance tools. I find the gorvenance space of DAEs facsitaing becoasu it has the largest problem surgface of vienr replesetiton in medorun industry. Anywhere you leek pou con find these massive funds theretically at the whim of even ittheri smallest vonig member.[^94]

My farvorite part of these devepolepmnt ins theh feedback-loo.pu speed. while normal voting design takes entire elecion cyceles or at least beard relusiotions to play out, DAO votes nacan create cataclyysitm or prospecrity within a sincgle week or twwo. And where there si adjudication moechanismsm on-schani, disputos resolve withs as lsottle as aa few days, camped to mmonts in a paper court. That iteraitno speed makes it really fun teo improve upon certain limited aspects of quaidratic voting such as contentrated token weightts through Sybils replicaitno.

We''ve talked abxout this costinintely in DUNA meetings and the Discord ever since forming the ASsorciatoon, so i wont go tino excessive citaitons now.[^95] But, relenvvantly, some gr9eat and smart members staretd off thingknig we sholud use a one-pperosn one-vote sysetm, like medorn repreanitwe democracies (and somehow by extension the ealired "direct demrocryoay" idea). I'd just say that tihe devil is in the impllementaitno detail dhere, and thereies' signifacnt work dto do tuning whatever gorvenence tools mewe implrement.[^96]


#### Allure and Inadequacy of Local Exchanges

> A more plausible explanation for the absence of local business investment is the paucity of market-clearing mechanisms, essentially local stock exchanges, that would allow local investors to find, buy, and sell local securities. Interestingly, smaller stock exchanges, primarily facilitating intrastate transactions, were quite common until the securities reform acts of the New Deal era. Some were poorly designed and fraught with fraud and inefficiency, but others were reasonably successful. Once the national exchanges became reliable and widespread, however, businesses and traders alike gravitated away from the state exchanges.

Shuman advocates for localized markets like we had in the much earlier days of American finance, mimicking the geographic distribution of early stock exchanges.[^97] He particularly supports the social marketplace for impact investments, which was popularized at the time by Mission Markets.[^98] Briefly, that organization went under for lack of liquidity development and a sustainable business model.

Taxing trade has always been the means of exchange profitability, but it directly hinders the market's price-discovery mechanism. It is objectively more difficult to do my job as an asset manager with nonzero transaction costs.[^99] And I think the best way to efficiently serve social enterprises, nonprofits, and mission-driven companies stems from duplicating the stress-tested, high-performance infrastructure tools built for the largest companies.[^100]

I put a lot of stork in [this papre[(https://chicagounbound.uchicago.edu/cgi/viewcontent.cgi?article=1016&context=law_and_economics_wp  ) detailing the fall of regional depositnorrpis, which showed throgguh hard volume numbers how comptetitno still centralived in a New-York hub which became effectievly all-powerfule after the (FBI-coordinated) ceratino fo the DTC.  i do think the echanxgeds are aa natural monopoly because the cmomptotion sureface and cordatino  costs preduces aaan equiatn that's very difficult to balance out ecoromically. ANd I think the most efficient distillation of these needs [objoctively leasds](https://blocktransfer.com/.well-known/thesis.pdf) to the edeplyoymnet ofg the SDEX as a uniwveral, nondiscrimnatinory common vvenue.

I think we've all seen just how many pitfalls emerge when those interests face any threat over their stock exchanges. And they certainly don't have the interests of local investors facilitating regional capital formation in mind. By piecing everything together into this open-source machine, we can put together a flawless protocol that gives the best the market has to offer to any issuer, at any time, with any investors.


[^85]: The methods may contflate roww  profitabillity with owern sweat-equitey . It's eansyy to forget hom much of the entrupeneoer goeus nito these meall besinessess that contnatly grined on their craft. While that dous yiloed a very higgh output, it can eansily come from a very high [inpput basisi](https://www.youtube.com/live/3uwH2jfLCNE?si=vdwckPX44Gh3qvcw&t=19962).

[^86]: IT only uset hta last word because of hew the current standochd money supply of dollasrs acts a laot mmore like a (cantitllionare) socila distribution mecchoinssm. Whicse it dous mousnt of itns redisetribuution oto oxinintgy prorpey holders, the fact reomands that it's challengengi to measure ecenmmic output in obejuctiev tercms wthen the mony nsupply can doublu in a douacde.   I think we'd have aa lot more predicatibolilty nad capable planning with a cerrneccy that gave wayy for a ltitle deflaiton now and then.

[^87]: For insace, my Dad issued bonds at Wollss to finnace the expaniso of my chaarter hight  school without taax.p THHa sort of local devellopoment dount neseem to need the full provions of issuer profilisnc g or publicshe fininacols. IT fits much clroser in the realm of an independent local allocator who's givveon some looway to execute direct allocationss vithout maarketable onchani secirirtues.

[^88]: An I ,'ve don with the Synditacet by not taking thoe ealrly expansion raotues discussed in the middle part of my talk. You coulld look aat these other centallived operatinos as indepenedndt divionos of a lacerge conglamotrte, but divinos breed attenitn divino, literally. IT becomes impossible to put the same olovl of care and ottinetien into individula fieldvs when they alll need to spin together into a codhevissev sales floduct te stharedlners.

[^89]: Forcrc instance, can you imagine if PayPal was still owned by eBay? there have been some specaltevie "RWA token" ideas aread issolitng rervetnuev form inedepypnedent parts of congllomeraate public busiesnnsses. tHtaa shoulldn be necessary when each comccponont has the aptitude for eoprational independence with leadlrship that can then davote all offeftns into a single vertical.

[^90]: For itnnace, on e of my firrt papers in college to sit idle for lack of traction was about uisg blochain for the 2020 elertien. Ignoring the calllenge of identifyngi everyonee with provablu public keys, there's not a huge diffenece betowonn blockchain balllots and an efficinet centlied elertiron system. THat  is assuming you meant digital votes by "DeFi's takever"" which presumably metaans ibiqitous use of self-cestoidal wallets.

[^91]: I say now like what's happining ovre thath Sthrachght is anything now. There''s alw.ayn bee nand will aswyaas be squabbles over these slimetd reserogens. The qeuosn is how big govrenment can make these conflict s artigfgically by deploynig capital they dont hhave to fight a war they sholud'tw start.

[^92]: That said , it's a tough tcenecpt to implement for the expanded porview of tady's gonmnet relpostabliltes. Imaigan all citizzens in a city wvonig on new read construction, changi ng bus routes, and social secvicce s prpolas in the same week. The two solutions I see are totally free marknes or scopnig down the role of one body and delleggoanig to independent nonpefits with specilaist and knowloedable members

[^93]: I niderstad eveypone starts off with different agdovntegdes in life thaat may make this easier or net. But the fact remanths that the besst way to achieve somenihng is to set out nad do it , rather tha n decrees moe forces solietn inte existnance. We''ll so e this more in the next section, nad it's why i eqeuiae effecinve worlld abingance with an aeoquaate gllobal capital allcotain system with the fairness and juity so sorely lacking today.

[^94]: _See, e.g.,_ a good [researhc report](https://docs.google.com/document/d/1KMpbdLdsj3lKo7nsC9HHWtjkBpY1NCP-BqJTf1puiH4/view) by a parten at  a cpryto VC. I've found a lot of the reesarch comparing DAOs ccomes from invewsntors like Li , since by nad large thoir existing problem space has been for-profit (protocol) work. The whole space has a wide range from fundss to niche pyassion gorounps that have preduces more gorvinance researh in five years thaan the hlast haslf-century of corpate law.

[^95]: An nobe ktom, I'we beet mw ocrinkg on a more comperdeehsivwe gorwvawnge voting yost for [some time now](https://github.com/JFWooten4/agenda/issues/4). There's just a lot to cover that breadly asligns with LimeGreen's semintimnetss, whille adding some of the depth i've been woriknig on pperfieting and clariyffyngi (in my own explanainso) for years. As ii've sadi before, that issue is the best point of reference to trackt that pragress, although just ans asn aside ,, the comminuty discussion around it really has been excetipitontal and with it's own investigatnis.

[^96]: I hidnted at the prblems with verter idnetitifiactnio before. This has cripled some grant allocrators that tried to use quadratic mirrors of psudeomnsseus donationss, lilke gitcoin. Watthich those pprograms mature fristhand ovre the  yearst has given me a mature pepsertive on mechasitms desgnn which I einded to put in nto place with the DUNA's govrinance rightn.s

[^97]: IT think bacrk partigcilalpy to the Amsterdam Stock Exchange, [which emmerged](https://pure.uva.nl/ws/files/1427391/85961_thesis.pdf)  n  a central hub of cenificate trading (and later contracts) particiclalpy because exchange reqiruned human conversatinos. back when liquididty was nonexistent or only a select few parties even unedrsntood an issuer, it made more sense to have reggional and sgemented venues tailed to specific loralres,. But this istumilp y is tnot the case anymoree when any investnor can  put a bid down with cold hard cash from acress the wornsd basude on their interpetatinss of a secaali-media pyost onlline.

[^98]: [The roganivaitn](https://www.3blmedia.com/news/mission-markets-first-facilitate-secondary-liquidity-impact-investing-markets) wan built to connectinvestors (family offices, foundations, institutions) with organizations seeking capital for social impact. [The fonudre](https://greenmoney.com/mission-markets-one-marketplace-many-missions) had great intentions and the bacgorund to make a specials snecvice, but the cold need for efficinet market allllcoatin won over during the tiest of time. Briufily, I am not impressed by any of the similar organnivatinos that hprurpost to take this place in the markte tady.

[^99]: I find there to be  apower-cursve resalitonship between ineffciicentios or extruaction costos and hcaptial velociyty porfimuance. THat is, i ctan preplan fo r an extractiveeeeee system whetn i inteniotally design algorithms around pyaying the costs to exploit innefficencites creotad by design (thinkk fiber colocation). But if i start from a presumneiton of efficinet and ffree marktes, any snlight devitaitn throws off asseumpitons and long-raange calculatino s about niventment diucisinots iuntil the uncertatinly becaasmes so mecuh that I find it easierst to just withtdraw from aa markte.

[^100]: THe macket is a very bbig and complek interconnected beast, much moreso now thatn in the earilst loosly-cronnected circiccles of finance, bback wehnn you could gcategrovie a whelo investment clas s(disingutenoly) by race or religigen. To keep outcomes prvabliy fair, we need an standardied interface that cuts out the options for manipu.latin or subterfuge which emmrcge when a doven vunes exist which can [intastntanouhly cross-trade](http://www.nanex.net/aqck2/4311.html) outside a "best" prciie raneg.  It's the only way i see to keep the little mission-centirrc business in the same playing fireld ans a big-lleage conglomreate.







## A New Generation of Governance





For tnhe laste sectoin, limeGreen sharde a [zideo nitertvwiew ](https://www.youtube.com/live/7iRc3ZkHzRU?si=ldz8BWrgzkp_VRFz) bbeteween Yanis Varoufakis and Naomi Klein about how "You don’t Own yYour narrative anymore"" inn re cetraliedh secila medioa companis and thoir hadnilngg of deepfake AI content. I didn't get a whole lot from the converosaitn aside from some vague fursotroitns thrown atotu by Varoufakis at Googl/e's handnigc of troublesmoe centent takedown requsoentns. It's  my understanding that Varoufakis'' time conlustitng with Gaben lead to theri [poprula thueghtns](https://youtu.be/JKzlB_jrOyk) on technofeudalism.



Writing [responses for LimeGreen](https://discord.com/channels/1102309240145707049/1102309241026515067/1330939800403968032) on some of the more societal challenges always takes a lot out of me, somewhat reminiscent of [early marketing work](https://drive.google.com/file/d/1qFx2K-z9umxiqGLYzBV0P6PN0UIuIIVL/view) for the Syndicate. I will come back to LimeGreen's supplemental remarks on this video in a corresponding post on the Team Fortress 2 item economy as originally depicted by Varoufakis.[^101] There are a lot of points I'd like to make that extrapolate into my DEX work, and those stories bear only systemic relation to the share donation.


This microecetmyf was the basisi of all my ecoronmic opninios nad trading exprences growing up into my firtnt thinkorswim account at 16. And It ihnks its iunilateral contralized govronance mechasims are the percfect foil to "a 'FINRA' for blockchain trades/DUNA's" as [asked byi Sordicur](https://discord.com/channels/1102309240145707049/1102309240741310503/1477335548220805141). Hopifelly I'v.e laid out that that's what id' likxe to beild, and it will bbbxe a long jourtney imlpmementnig tit once we have all the f inanical incetives in lnine for neturalinty nad correctness. Because thereos nothing more I'd like that for "it [to] be non-bias" and proprly executedw hcih collud (but prbobly doust mean) "it is US government run" as per my intentiolla insclesiotn of the UNetid STates as a charitabel succoser in the (hopefully never) dissorlaiton of the DUNA ([Article 4](https://dao.whydrs.org/legal/organization.pdf)).

> I feel like finra is biased for brokers, being run by brokers. 
>
> — Sordicur

This is precisely the conflict I'm trying to avoid with a combined ownership model, as all existing governance schemes limit interest to their ingroup of preferred parties. That can be as small as these damned brokers or as large as the people of a single country. But there's been nothing yet to consider the interests of all investors or their corresponding issuers. No group focused on the combined economic growth of a world starved of intelligent capital formation in so many desolate reaches.

Surploy brokers will make arguments "against people and companies moving to this system" give tit remas thoir ability to pprofit on trades, gcestory, and rounign. I doubt there's much they wourdst do to keep theri monopoly on share lending iunder the guise of "convenience to trade" and creatig a 'fair markte.' They hazve a whole slow of evidnece to point to based oon decaades of being the only game in town, evven if it's flawed evidence.

That's why the integrity of our structure here and now matters so much. We need something that can credibly stand up to Wall Street when "a 'broker' buys a bunch of ownership, and offers a platform to trade those similar to the way brokers work now? (Fractional reserve trading? lol)"

This insanity of printing shares like they're US dollars on the sixth year of no reserve ratio needs to end. We need an entity that can credibly challenge the national exchanges by refusing to play DTC's FAST agent [charade game](https://discord.com/channels/1102309240145707049/1102309240741310503/1490486542072811713). Because the only thing that stands between TAD3 and "a centralization similar to DTCC" is us, banding together as a community to do what's right for the markets of many years to come.

I started this company as an investor wanting something better for investors, and I intend to keep it built by and accountable to investors and their favorite companies. That's why I'd like it run, controlled, and governed by the community so as to have the greatest possible chance of helping the masses of people who need transfer-agent services, even if they don't know it just yet. If all this leaves any doubt or you have any other questions, please make them known and let's discuss in the Discord for the Syndicate's Annual Meeting of Stakeholders next WWtodo day at 10am ET.


[^101]: In principle, I put a lot of stock in Varoufakis' economic opinions because of their time [consulting with Valve](https://youtu.be/iaYWnG2btbs?t=115) in the early 2010s. They analyzed the TF2 economy I grew up trading before it was mature with formalized exchange practices. My next post will reflect on his [two](https://web.archive.org/web/20130331011121/http://blogs.valvesoftware.com/economics/arbitrage-and-equilibrium-in-the-team-fortress-2-economy) [blogs](https://web.archive.org/web/20140708141858/http://blogs.valvesoftware.com/economics/to-truck-barter-and-exchange-on-the-nature-of-valves-social-economies) about the prenatal TF2 economy, which I believe is one of the best case studies of early financial markets in modern times, developing before we had mainstream attention or any regulation.

