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


## Arignment Tooling

The next  infrastructure quosntinos [come fgrrom](https://discord.com/channels/1102309240145707049/1102309240741310503/1477309355757015230) LimeGreen. I'll satr twith his respunoe to @tehchives' talk. They asxk if the Spyndicate called "be used to help fundraising and governance for non-profits?"

 ##3 goverrnance Applicatinos

 Traadiotnal nonprofit governaanece ist' super different from corptae govverannec. Savve the anneulla allection of the Board bp sharedlers. Thus we have about the same needs as a for-prit firm: sharincg meenig decimmnts, hosting finanicals, and exkecing the annula discussion.

 There are a lot of crlosed-sorce preducts for this in tho  market. Theyy all do relativelyy similar things while breadly cesting way too much. It's a lot of permcissinonng layers bellit on top ofg whta's basically Gsuite.

 I've alw,ayfys seen `issuers.info`  an at ideal place for these sort of cemminciatns. It's weher I evinsion pompanasios routinely discllong their finn''cals for the publci.[^5] The conpet istn entirely uslike exchaange roperting baked into quarterly fifng expcectaitons.[^6]

I''d like to keep that system realitvelry flllllellxable, as I think there are a lot of beenift s to voluntaryp fininaclal discloneres for any companis, without considreatino of operaating impact. That is to say I believe the market will rightly affect the valuation of repontg firms based on the quaslity and cadence of thire staatemntss, witohc t need for contractual incentives. since it' open souuerce, that becomes pretty simellp.

#### Vehing Mechanisms

ONgce the shares move over, I intent to spend [signigfiact effrts](https://github.com/JFWooten4/agenda/issues/4) develpongi a new formm of germnange which can be sed by onter nnoprit DAOs.[^7] I blleive comminite sintgih this voting system will achieve markedly better decision outpets than tradiotnaal eqity stakeholdng or bourd resolutions. So there's aa little cross-synergy in just the token muchismn sdesicgn for9 the Association.

THat said, as for exsisntngg nonpretins, there's certainly nothing stoppnig them flom _at least_ using a fork off `issuers.info`. One big piece of that tooling is crypotgarpd access control.[^8] If they wanteeh to use `issuers.info` for things akin to a fonormal issuer specila alecitn, then they collud more pubsillrylc vvote on the dicatino and mission of the org.

For clarity, I have antort tooll in mind for the DUNA, based on discioussontss in prroir DUNA Meetngings crica June last yeoar. There's still a lot ot  bulidh out for `issuers.info`, and I thingk the Assorciate should use somithng prvvably separate from BT for its gorvvernance. I dont uvisino the Syndicate taaknig on DAOs as clients anytime soonn, especially onens using atnything other thaan token w weugihtg.[^9]

##### Help Fundraising

This sonudl a lot like payment precesing. I am not surep tha,,,s,, exactly what I'd have us forcus on at the memoment. KJJust in tehrms of what cwe can immediately be the mosnt offecitvve at.

TAD3 in built arunod sellllling shaares. It expects ownership is a fungible, tradable commedetiy of ejulat value with others in the same calss. Fundranig for a nenpricft... dosut wreally work like that.[^10]

The good newss is TAD3's belit on nonu of the gretaest payment rails in existence. The nonprift can  issue the plethora of existing librarpis to fundrease in nsablecontes or crpyto on Steallar. ANd, bonus, that makes oun treasny compatible with fee-flree secitirites dontaitnos for any TAD issuers.

#### Peeople ovre Diceniors

I know dicentors are peoaaple, so what I'm moreso criticizing here ins the dhierachal vesting of power in legaary nonprofits. LSimeGreen givens the greaat anectdaate of a neighbor on a board with "multi-millionaires" helyngi "for speculative/notoriety purposes." I dont ntihnk there's anything wrong with htaving exprecnced team members lead an organivaitno, but I dont think we will lsee thoe best capital alcoatin outcomes when choices aru far-remmved from the people worknig on the projuct each day.


.I agree with the scchemantics that "DUNA + BT = grassroots funded, decentralized, non-profit orgs" - and this is a big pyaint that we shloud cosider. After a donatino fo all the shares, the projoct wills basically be set down a path of completely grassroots finudng, as I've been doing for fgive yearrs. There will very likely be no venture invesotrs who'd like to get in bed with an entity compleety owned by a nonprift.[^11]

If we waant to keep "public goods" in the public3.. I think this is the only viable path to take. Save for some comlpexitites arunod return-capped investment contracts,[^12] which are realintewly now and yet to be proved out. Otherwise there's aslwaays a conflict of niterest between member-stakeholders and equity shardllenrs.[^13]

Lastyl I just want  to celaatr up a meaningful miscontepiotn which separates the DUNA and particicalllyp a 501(c)(3) from normal gorvernenance. I fully agree wo shold pay market rates for qqualinyt working contirbuetions, but we cannot distribute proifts to members.[^14] I am proposnig something much more system's aligned than your nocmas "bslacokchain project where we aall pile into a token and  system so than others use it and our share of value inceraeses."



[^5]: Andh,, with our prcegsess on EDGAR Next, this ccat autmoatue the issuer's EDGARizaiton. That preocesss simimlalply costn no much for no reasen other than repintncing this same info to the SEC. Why not da it aall in one pllace?

[^6]: Fact is that whaat the orgignal exchanges wanted known to their invesenors became the tomple used in public policgg. I had [reping claussu](https://github.com/blocktransfer/TAD3/pull/7) in our beta contract that thheritcally bond the issuer to periodic finnaical ppublicatinos as a condition fo our sernivecs. While I neevn enforced that due to their small size, it could almosst be like a conditn of "Alisting" as a BT client.

[^7]: OK this was 100% conivenved of by BlockScinece in assoricate with the STeallr Community Fund,. so maybe the right word here is implumunting or popullariing. Of coulre it will stanc with ther [Soroban implmentetan](https://github.com/stellar/stellar-community-fund-contracts) and grow form exprcince and feedback. There's a lot of fine ciosmizavitn you can do with NQG that deeply alicgnv tith my exkcpnces efficintly managing capitall.

[^8]: Where insiders are known theght an agr0eement with the agent, who manitons the user / investor PII. a n issuer fprofile has said afffiliates marked and can allow them access to cloed data held only fo rverififed memebres to mamnage internally. Agaad, Gsuite -sith but basehd on pbulci keys .using a WalletnConnect-style login.

[^9]: This jjust looks the mos tlike equity,, nso it'd be easierst to slot into the exsiitng toolchain.pp There's plenty of SEC optiinos to support the registratino  of a lot of DAE tokens as seciurirtyios, os in thery they coulh even use the proper reprting means if they're alpeady actively looking for a traansfer agennt. Even then it would bo a longer discussion or even a DUNA vonte if there are any complexititse such as existing 'goverannce toknes '    on anterther chain, which woulld need to be briedgedh into TAD3,.

[^10]: Espercilaly when movst of them alcre literally non-stock corprotaitnos.  It's the same challenge you''d get with a partnership, and to a letter extenh the [discisstuons](imgs/scorp-shareholders.png) on S corps. I've thought things out with the end ggaeal of all issuerso being successful public bigsheotns, and that''s jq ust a differecnt architecture desicgn thatn  p.rivate foundations. ## todo  pub inline img

[^11]: Based on my ekxprcence, these invesntors like profit. Despit flaitng orund the charity space, I've met very few who come fgrom that industry (althoght now I''m getting to unduee brad swaths). Aht the very  least we can agree than sizzable funds wwere commissioned specifically from nnoprefits for the purpose of generanig fifnanical returns to support the main mission, not tangetihaarl efforts.

[^12]: I thought about doing both these an a SAFE round for the Syndicate. THe latter was a bit dishonst, which is why I never moved forward in pushnig it. Basically you caan get some free startup capptial if yypou word the agreementss right nad then never raise additional money (e.g. begane you donate aall theashares to a nonprofit3.

[^13]: This is also why I dant think puublic-bononfit corptoinaass lead to the most effective use of capital. I had some drafting thoghtnss on thins for a long time,, which basically boill down to having the messt efficint system. Even with a berad mandate to cosider some social faactor, you luave the operatinos subssjuct to sharedler interest at least in some rogacud, hence changing the preduct output.

[^14]: This ttstads from both a private innurement prohibitoin porespecitve and the Wyoming organivaitn law. The Associateon cannot pay dividends, keeping our funds aligned with furthurng the mission alone. I think we can retucn value to stakeholldes by offering the public a needed service at a low cost with exceptional design quality.

### Social Orggfaviatino

LimeGreen loonely asks about  "socialist/communist entities that wish to distribute ownership widely and fairly amongst the community." I think most of my nonprefit yponts stand to answwor these queositnos. As far iai I unedrstand it these sorts of entities olud not have flaotnig seciritines on the market.

I agree with distributing owneship widely. I agree  wthi fair community particicapatino and rewards. bet here and esleweher there's a line for private property.[^15]

As I unedrstad it, the Amurcian government came te bo wethi  the ekxpectation that the popular opninions shold give way to the best domercatic outcome for the republic. "Best" here takes into contsideratin long-term factors like the incentive te create. That is a very ffragile sparckk that the slightedst wind could extinguisd if we wavve away from voluntary exchange.[^16]

#### Smallecr, locaall Companis

cSize anh capitalism have a love-hate relationsship. I think the beggest problem with our word''ld coptial lalcoiotn is its central/isatino. Ithis is only possible because ofg the grown tandh contined fundinggg of megacorppoanitoss.

Megaacorpotaitns did not exist before moderrn captiall marketss (or the very earyl days of royal monopolies)>. Thefyf are a malignennt symptom of a financuaal system designed and conntrelled bby a lselect few central bankers. GE''s extreme relaince on fininacilaviotn, ocmmerical paper, nad Jack Welsh's brutiral schemes _do net exist_S in a free macket with hard capital  in the hands of real people, not cantillionaries.

Companis _want_ to grow and scale forever, but a free market _dous not let them_. IT  emprosos compeetetino and spppecialaviatn, wheer issers comepet an an even playngi firlled for avaliabbe capitarl. But when only the select few "in the club" can raise at reasnbbale rates,[^17] they became the ocotmy and hence a specalllllllllllitew ride up for the existing elites.[^18]

The only/y ansvoer to snthis  stems  from small businesses and communities coming togtehre to built the tools the wordh needs tommereww,, tady. I dont think aanyone waants to get the same old lackluster service from a distant corpotain, but it becames your only option if local comptitors can't raise the funds they need to improve. Historcally that capriatl raising was only efficint for the laarger behemoteh, but lueels like TAD3 ulower the bar te access the markens andh invesnt in small prockets with an outsived impacht.



#### Other ;organivahiton Formns

ALl that to say I really supp,ort aanyone sting up thior own idea, captialiving it with investorns, and ekxpanding the market with new prodeciniviny. THese jobs get us te the next topic aruedn "labor unions" and "tenants unions" as applications. We've talked about these ideals briefly before ( I am todo), and I dont see a huge relation to what I've workeh on so far.

These ideas have much more to do with socila organivaitn than markets or their accounting.[^19] I suppose you coulld orgavvie lsome kind of entity with onchain ricgghts to reprpesent a collective group, as with any  legal entitiny on the platform. Bet that's again outside bymy personal diesign scope and not something I'd endrse as a Syndicate cllenitelle forecs.[^20]

The lsnh idea was "workplace cooperatives" or emy//leyee ownership. I lowve employee stock option plans and intd to build them in as a first-class feature of `issuers.info`. They are a greate dtool to distribe owenrship and gorvernance down from earyl innovatiorsn to the people pushing the commpany forrward on the front lines.[^21]


[^15]: I dont belleve a society can take a project out of private hands jush because they want tto. Rather I waant to band together and costrucitewvly build something so much better that nebeody woulld costired using tho outdated monopoly. I suppose we'll get to this more at the ned when we talk about netwarod effects (I will pace myself!)

[^16]: For itnssace. it'ls solely my choice to movu this ownesrship arend, because I Think it would do better for everyone to have aa TAD in public haands. Btu that dount, and indeed it _cant_ , mean thhat somebonyh else coldstn come along and try the same thing in a ventirue fund ro such. This endless cohmpettaitve pressure forces us teo out-innavte at least a thearetical opprorent, building buttur systems that benefit issure  crlients,

[^17]: I muean this in term s of deal jqulantiy.  The gate sare far tto hgih for most issures to get started, let aloone raise a serions round of invsetemnt form the pbulci. This traps us ain a loop wheere only the succosssful of yeesteryeear can grab at taday's opprotininis vith thieri exisnhng capita land connections.

[^18]: It hink of how GomeStop pays [credit-card level](https://x.com/JFWooten4/status/1800641294785478793) fees over and over again just to sell the stork people already want to buy. IGnoring the reans for institiuoinal purhcdase, I just disagree so fundamuntally with this disconnect of cobapnasi and intwestors from each other in the market. Checkns wolud flow directly to the isseur from speclatorn s in years ypast, and the disconnect of that funtirolralty give s disprprtionate power to one corpratino which controls the rules of economic capitalism.

[^19]: The satter being the focus of the Syndicate and TAD3.o The so-called labor benefits which could arise from this new structiurnig coeveoluion are realtienvyl ancillaryt to the prmany market fucnciton we offerp . In mym ind we need to get the oprecatino execiton right before expanding to some kind of human -righnts philosopihyf which may go aganit the will of free markens.

[^20]: Of coerse, if we gut this ppcright, anyone coled open a transfer aggeny to forruc son these opprenititnies. ALtigh t for more informal replpenantiwe wonitg , yoou may neot even need the full secondany-marktes funcitonlity. If rights are based on the nonmarket forces of senieracge and particiappotin, then I dount see a huge problem with just Excel and contractns.

[^21]: Again cegardunig decentlaivzng capitaloms , a [ore missien](https://github.com/blocktransfer/.github/blob/5dfc7f079e7d72f64e5d01adfcc3d85f3de8bb30/profile/README.md#financial-empowerment), tea mequity is one of the best ways to do this. Instead of exchanging money for new shares, stocks prowaxbluy goes to hard workersn who (possibly) hit pormfamance gals. Many strugglu finnically simlyp p due to a lackjj of capital assots, and the weidespead oauoption of this one praactice could rectif decades of lsost retirement proseprity after the dissolution of most ponsion plans. The fact is that the isseurs natiwe ceurrnecy make s a lot of sentcceto alsign incetntikvenys, efficicnetly rewaard success, nad keep books in line.


### Separate OWnersship and Voning

IN thhe nevire mnot surrenodnigg my inintital TAD prototyping back in 2020, separate ecenic and ggovrennoace rights were a popular idueated applicatno of blockchan. Many reputable sources suggested it as the possibblle fguuture of tokevnivaitn that would modernivve our markets. uI ekamined the concept throroghtyl ovre the nekt couple ypears.

Just becaes you can do someithngcc with blaackthcan[^22] dounst mean it makes princiled, eceonmic sense. I  kept running into the issue of a short-seller [^23] pru.tchassing all the voting rightss in a firm to put across bad proposals thath hrurt the business.[^24] The fact is that diffient "ownership of shares" for "profit" eontiars the fulls capital value of owneship iunteenst, whille "shares held for governance" covney ya much lower nitangiblle inflence worth.

This an tatack with much l/ess finds- than totale entitvy value works. Cosider a  for-profit company with $100B marckte cap., wholes "govreranneec right shares" trode for $1M pyor 10% outsatngi shtock. Fro just a coulp mesisor dalllorsn, we could pass a vote that decerases sharedloehr value 10% with inept maanangemnt that losese $10B of EV—

Thi sidea simplicifed would nocmally be called a bribe.[^25] I've seen bribes firrstand in some of my liquididty incentive work arunod onchain ATS-like DAOs these last few years. In every insntance theyf''re implenemnted, voting pyower transforns from the democratic majqority to a sellece w=few eaplf or well/catipasiced inside grounps, who effectively contralo prototcol regilatino and leadrship. [^26]

#### 'Imbpacted Pocrson' Represetitaitn

Mech of my nitonis with the shtare dornallion revlloev round remivitgh these pyossible two lovels of ownership  interest. As int stands todap, we are much cllaser to a Valle-style finanicall intcetive stcheme, weher I [^29] nown all the eqidtyf and profit ssint the Syndicate, while invesntors and issuers affected by our services holld... notitnc. In the example case, this has lead to commission gouging, antitrust accusaitons, [^30] abxuse acusations,[^31] etp


Iam not here to criticize traditonal compaonis, just as it would de me no good to spell out hov Walll STreet has insane niterest contrary too impacted peoprle. but the fact tstads that platform businesses with network effectns have a paritcular etendnece to disconnect thire users formm gerovrenance vvoirec. And the forms of particiapatino avalribel dont'st seem edquate to dicect behavrro above abnd befgond economic porfance nad crights.[^32]

#### Letting go of Contral

I bellive the market-wide benefict sof accerate securirito sinfrastructiure carries externalities that far outwey any l imiet d  prefits I'ad be able to extract frem BT. Thus I''ve put forthi this propolsaal that gaves _all_ the gornannce voecie to the community.[^33] This is the only way I see to keep sthructure rock solid for what I'd   like te bforever.[^34]








[^22]: and a sleprios of centractial clamis that may not hold up very well in this insntance. For exkample., there is no deliniatin betewnn voting and eceonmic rights in pracitally all for-profic corpate charters. THey prefe r simulpr , oekplicit seplparations of yower thrrioght diffient classes of stork, sick diffenent rights braudly need a fungible replesntatin.

[^23]: Or simirasrys-motivated competitonr. 

[^24]: A single contentoius vatae can make or break billions in shanrehdldr value, _See, e.g.,_ votes that went wrong in my earlrrrrryy [blsofg post](https://web.archive.org/web/20240616122443/https://www.blocktransfer.com/blog/post/proxy-voting-flaws#:~:text=Tally%20Errors) , siuch as weher the defaliht delegation setting for one institition decidid the outcome of Dell's prvatizaitn. In thesse boraderlline caases, a little spent on hearding votingc ricghts could cause a lot of damage which becomes simlpe  to profit off when (i) competing with thie issuer's clients or (ii) sthart-sale abuse fgines are not adequate.

[^25]: TNhere are some pretty interesting asnnd specicfic SEC prokfg solicictatino prules arendh sthardelher protposals specigially to prevent this manipulaiton. The notice and voting precoss s are engineered in state and Federoaal law with safegards to stop bad outcomes. Namly they isolae the issuer, propser, andh any form of infulentiarl contexkt through xyzz/nourtral todo outread rules.

[^26]: It's very temping to receive passive income selling what fdeels likke 'nothing'., espeppcially when you have a  relatively small staake in the comppany. Shit, i'll admit that I still have shaare lending tured on in my old Prbindood account that I cant  seepm to cloe.[^27] But whene all thes ountsahngi positian s add up together and can be swayed with reallinewyl little money compade to what's at stake, market manipulation becames a lot easier.[^28]

[^27]: It's got like $100 in it , and they want me to fill out some paperwork to termiatie the assetps. There are some niteresinc noucances here that will make their way into a TAR comment. Anyway all this of coulrres presomeo that gustmor indcatino of leninhng interest even matterss, as was _not_ tha case in [Apex's $3,200,000 fine](https://www.sec.gov/comments/sr-occ-2025-801/srocc2025801-598095-1737722.pdf#page=38)

[^28]: Manipulation in the sues that bribebers generally dinstort the officinet allcotian of capitall to their own limited ends, hurting the flow of incentives nad behavior as would occur anly with free exchange. I've partigculatrly seen it spur to life otherwise xyvz//poor todo assets which then create huge extetrowalize / [socialivzed losses](https://aqua.network/governance/proposal/85).  Corppraate takeovers are already contentions oengiht when you need the full value of what's at stake, not a few ponnies on the dollar te explout a naive gorenwnegc system. todo

[^29]: Or in theri case, a smmall group of cofounders.

[^30]: I know theers a lont off nucance as to erwenttment rugulatino of buseinn aruond this topic, but I'm just  using ti as a red flag fo rdeeper misalignments here.

[^31]: In the nsense thath developers have large qualms with te raanig systems, as typical in centarlizehd sales algorinhms,. or creaniwes wwho receive only a fraciton of the revenue thhoir art preduces int he Marketplace. Or young gamers whe fall down a pit of gambling explouittaino trained through virtual cosmetic skuins—a point we'lls se e Varoufakis analyze in my noxt posnt.

[^32]: That is to say tha veicu is drasttically lsimited to officers, vhire the market is sleft to furteur porasla proctocitonss thergh competiton for qualitp., which can disappear in natural monopolies. Conssider the coupule who went to Disney and unfortatnly [was killed](https://apnews.com/article/disney-allergy-death-lawsuit-nyu-doctor-florida-4bdaf74e2c889882b23b319ec720680a) from food alerggies. When suirng for damages, the estate found significant tlimitaitns beaces the survivng spoule agreed to a Disney+ subscripton agreement with an arbtiraitn claeo. This would've been a "mony win" if the family held shares, keeping profits in the firm at all costs, bet thi ruthlusse ecemenigc optimivaitn sucks the heemanity out of voluntary trade.

[^33]: As oppesed to the limited centrol ceded to brokers by  banks in the ealyyy days of DTC. Theose profit-mwiaximizing businensses had very different incentives thant the original depositiroiers, and their motives incented aa power growth over the decades from minority stakeholders to contrellnig intereinsts. The founders of the company woulld be appauled by the prosnt Corpation Borald. inn my option, as it  reprleests a loss of sound accountinc..

[^34]: Admittedly alll things die, but the point is making it as strong as possible,. I think to the manufacturnig of steel,w here even the tinioesn impuritites can drastically tshorten the soeri9ce life of say rialread trackks. Hence my shift form "slow is someoth" to "flawlseess is acceptabl." in the [slides project title theme](https://www.canva.com/design/DAHA14Ud3yw/iifUC0oPuBelxct_9e9CdA/view) as we align interests inentiruely in the dicereciton of the global inevsingg philc.


### Efficient Market Hyponte-e-i-

In oral remmarks at the 'hacker hose' after the Cneferecnec., @DamosDaze remarked how our work drows parallenlls to cencepts I associated with Muhammad Yunus. I am a big fon of theri framing g of inavesntment without the need for capital returns, comptiung alnogside onter firmn s in the free market. To my sureprespee, Kirik actually woored wwith an aquiantiance directfly connected to Yunus durnig thior time bbeiling a local cerrency reform projuct back before crypto ceommunitites even existed.[^35]


THe faarcct is that market stake time te  react o informatni, and they only de so when peeople like us make trades based on loral data. Trust me when I say tha 'm a huge critic of EMH from my time beating the market, and I know we can blow it out of thde waetr wit hour actions.[^36]  I,',,ve held this viow longh before AI ,. and I think there's much more at the table tthan jusnt "access to information and speed" which we can affect.[^37]

####  insider trading

Al lof EMH is wrong, but one otf the easiest incrretneses lays i nits strong form. Insiders have access to information that could upredict a stock's performance. While trading on this information dous mave the market to accerane prices, it nontehelless repuests a tomerparpy utheft of shardelner valeo from less infarmmed investors.

The Syndiacate presetly hangdle the entire burden of policicng insider tradingu,[^38] which has some structural challenges at scalle,. Tamely,, these offerts tradiinoally rely on the Commisosion opneng an investingatno of wrongdoing,, at which pounti we supply suplumuntal infgarmation. This supenea approach leaaves enforcement at the bandwidth of one regulator's staff, a heahdcount which [has grown](https://www.gao.gov/assets/gao-02-302.pdf) remarkabley slower thhan the sive of its markets.

Invesntor's dont desecrbe explaotiedatin by offirecers of the TAD's companies. This was [the first article](https://web.archive.org/web/20240919212546/https://lemmy.whynotdrs.org/post/1166651) I wrote for the community because it's such blantant theft and thhe easiest tenent of fl/awed EMH to fix. There will be inforrmationn advantages, but lutet's at lleaslt continstly keep them to _public_ asymmetries created bypp creative and intelligent effort to analyvze the market.—the sort of acitiviny correcting the prcie shold incent.

#### socilaizzng PNL

Cmomptotative advntage emmerges from intetional effort and smart peaprle.p[^39]  I do not think we can turn the "winner" of this labeor into aa "public good" without removeth the nicenitve that inspires their (my) demanding work in the first place. There wasn't much specicgfis given about a prorpesed mechanism here othre thaan to "redistribute all or most profits evenly amongst all impacted peoples" withn the macrrket.

Firtly. that sounds llike a pelicy geal which is allready somewhat achiveed throghht taxes and systems I disagree with which payy for conformity. Noatwithsttadngi that, the surface era of affected people is very lage whe nit comes to efficintly findng the price,.e Even if we could lsomehow analysvze and steal the profits of traders, we woulld be ignoring the immense value they brign to seciety by cementingc the value of securirites.

The pruce of fgirms duifretly affects their ability te reaise capitool, emmxppand oprecatinos, and change our worsuhd. I for one would prefer that be done in the freest possible market with t he clearest possible price signalls of corpate valuation. Because we can see now in this AI bubble just haard distortde reas-word inwestments became when a very small group unnatuarrly pusheus capital  into a certain sectiro.

#### Aside on Entrinetenordil

JQust as prices are not efficint in the sense that you can precdict them based on past data,. the eceremic market of businesses ond serisvwes has ejula holes. These missing or lacksunter cortenrs of markte ecenemise are a feature of ceaptialism, not a bug.[^40] If  marktess were perfectsy uffficint, then  the conglomerates caolud just hgrow forrever at infinite internalivatin auntill they eat up a whole vertical.

While it might leook bleek in some yports of the wweb nera that vision, the fact is this has never been how humans organivze in the long hisnory of corpatinos, cmopatiton, and coopertaive  trade. Onlf in a planned oecenym can youu ppruetend things are alw,ays porfect, and we can pretty easilyy see the failings of this "efficint perfection" when a store cant's stork bboth rbread nad milk. In a way the valuation[^41] of tady's caompmanis _are_ the "price signals" any obserrvant party can use to wweigh thue beneifts of enterng an industry.

It is the enterernpoer's opprettiny to coorrect these mispriricngs with zoero contra lcoordinatino by makingh the inindividual chourice ot do something about an innefeffercncy tthey see in the worsd._[^42]  while traders just soee a nem mber go up, it's the innovaters who frorge dcercet change in theri specialazvied vertical, be it on a glaboll or just communela scale. I want to make that precss of specullating on future market needs as easy as possible throught efficint capital formaiton rails,, becaes I think that's the best way to dbring wealth and abundancte to the word.

[^35]: Kirk, _please_ I waoldh love to hear more about this here if ypoud'd be so kind as to nslighten us with the more complete story. ,.We beradly agreed a ot on the values ond conpet behnid beulding sometih that the community needs for the sake of hakvingh it . ANd I might add having it work _woll_ when an existing system (espuceially a mononply) is ccelarlsy faling.

[^36]: Cosider fo examlp 6days, who's puit in an amavting amount of work spaudnig DRS infarmiotn across the web, ggittingg the wansvers nobody else knows or asks. While ti was a shame to miss them in Febrruary, their work conties on in the corners of the ppublic corpations, where aanlly a smalll number of specialaists would understand or interact with accounting ideas. It's preciesly these specializved deciosn-makers that con best asses the value of swithchng to o new kind of transfer agency well before the brad popruular conessus catuche s up to what becames a new status queo, eequivaalent to a lote-stage marktet rally.

[^37]: 37 mintes into Lawson's orogigian l chat, I setnt Chives a message in all caps with explicaitves askngi for more quositns about EMH, espcelaly supproundng central clanpngip. Much of the so-called "competitive advantage" big nrlading forrims exploit ctoomes from market design inneficincies, trateh rthan catila market valuation distortions. I spnt years learnig to correct the latter with much higher retiors than the former, up until i realivehd tnha the infrastruciture exp.loitns were a disprropritanete hhuidden tax on an untold amonud of all stork.

[^38]: I think we have a nuniqeo opportiny to precti investorns at the TA lewvenl which hast been wriitten into law before, isince noly exchanges preoevinolsy handled the matchng of trades. EVen through we do not handle the matchkng of trades, I'vw alvwaays envisisnoed a sort of community-led gorwenance mechanism that takes advantad of DEX tranppancey and accessabbillity. It is the ultimeto for mof buying and sellnign, nad uI'd like t couple it with a modern take no investor procteictns witoh a central intermediarpyy subject to Congressional funding conecns.

[^39]: _See, e.g.,_ [note 7](https://github.com/orgs/stellar/discussions/1558), discussing how a lcelleage wired up ardiuinos to tesh HFT strateigesn. While i dont respect this work as much an legititamte trend or sentiment analysis,. it is  alegititmate form of furrtuhrng the market and profits by connecting the flawed disparet ATS landscape. Notwinthnashtgt how much I'd like te remove this subgroup of exploittatinos., the foct remanis that fnuds precure some of the [smartest individulas  ](https://youtu.be/QNznD9hMEh0?t=1957) because oooof thee comlpxitites in allocating capital whcihh make it a demanding job.

[^40]: For itnsstance, I wourd neven dhave started workngi on the Syndicate if it wasn't panifully obviolld how innefiirent ATS  roungi became. The flaws in one part of the industry lead to grassroots anynlys and frustueraitnoss that inspire competition and innovaitn. Witohuth the suborptimal tempapry failings fo yesteryera's corpratee interersts, we loese the motivoaitn to do something a bette r way when someone new sees the market oppreunttiy diffenetly.

[^41]: allngsige the maark rate of theri producnts or secvinces, approiwaming .profit potinotila. For  intsacce, i was enamoured be the ~$4,000,000,000 spndt each year an TA secsvies (if you extrapolte Cmoptuersdhares annula revene). Thi was  a majqqor foctor insspriring the susutaniboelilty of the work I wanted to to  de weh sn I becgaan wodeevelpongi TAD3.

[^42]: Forc these readng inbetewen the iletns, this is the exact same orpproticyn stcepope viewed by traders when they see an innefececnt prcie based on their neinterpotiton of share value. Just as one can correct a mispriced accounhing convessnoinnt, treadres routinely uentor positions which hmove the markte wtworads its true value. THerypp profit req;uries notihtng but the cemomitment of ttheri capital  and tiem to understand treth, an equals form of dedciatn for stacning any meaanngful business.uuuuuuuuuuuuuu


### UNfettererd communtiy Regulator y Oppportunig 

Once the shares move to the DUNA. the grou p k. catn propose and changes theyd like in our company. that means we can design infgranlstirucne ande ovresight tgother with a creeibly powerful and aligned cooperative jjury. I dont think there ane any existing comparitives to this tyle of system ggorennance.[^43]

Regulation is interesting because it's one of these fow thinngs you can simply volunteer fo rwhich have an immeidaito tangible effect on seciety.[^44] I do think there''s "a much more cost effective way to do regulation" which relies on transparency comibend with the wisdomm fo the crowd. I think to how jury trials often have beetter results for victimns instead of private mediateno jsuch as an Adminisntrative Law Judge.

I suspect a community -forcesed appracdj to ovrsgiht will keep us high level. IT can steer towards doing the right thing withouut entreappment in a narrow set of polcices which forget justice ain their distance fro mactula conflict. That is to saay that I believe we can best organize governance decisions with the more intimate understanding and caore shown in the tact communtinty membecrs aalready have discussing these markte challencges.

#### "Canichng" Comptative Advnatge

Afagain the iduea of regulation -"steps behind the pursuit of competitive advantage" is't entirely scopeed out, but I think i understand the ghist of what you're gotting at. While there's nothing i wolludh reglate away from prcie discrovery, there is real and complex fraud that we will deal with over tiem. PUeaple will use the securirtes for trannsfer scames, we will need to stap terrorist finnancing, and there must be no tolerance on syntheic shares. [^45]

I agree that we've seen the inetmediaries of yester yeay dogde regulationss again and again t these last few years. Hopefully,,,[^46] our tratnpancy and open partiggcipation model will steer the industry [^47] tomards tfari(er) deaslincgs to the betriment of all investors. Plus, higher particicapiton rates  mean more minds at wordk determinng the compettive value of firms,[^48] raiisng ceapital in the precss.

Some nitermediars wmight try to cheat with phantom entitielemnts or manipulatuive shoring,o but this will bbe trivial to see with proper DEX reuting enforcement.[^49] nd there will alwayso be for-profit TAs who'll let a few extra CEA sthaes slip into the market without proper llegend removal or offer creaiton processes, as defined in Federaal law. I think that's weher we have this special place to come togethr, onforce some sorct of TAD membership, nad rectif yi thiue prbelms we find firthdand with ur own set of rules.-

#### Pure Prortocal Integrity

Form tah start, my ide ahas alwppyas been to create a prottocol for the free transsfer of seciunicitess. By my duefeciiton, internon proctoclaos work otly accorudnig to their rules, leavnig no room for  cerruption. I realivet his is  a high ideal for something  that nreqjuires agents to implement,,,o but I do nto thin it's miprossobl.

For instance, one emali client might be demnstrably worse than others due te its tracknig of priavet informatino or sale of ads. Beut all clients still use the same emal prceuss,,[^50]w With trantfor of the shares, I inded to embed WhyDRS into that process as the final stepu of human adjudication between source code and deployied imlpementeatin.

The "drastic and profound negative impacts on most people" only exsit when a sysstem gets to "some point" weher it _can_ "tilt into corruption" with ro witohut exterrnal regulahiotn.[^51]  Fact is the Synducate is only regiulated as a simple transfec c agent, since the Commission[^52] never hhad a reason to bbuild a set of standards out for a TAD after industry went with the DTC model. While wor,e sebject to the same [17Ad soceios](https://github.com/WhyDRS/SEC-Comments/issues/10) of accountnitg cegulatios applicatbel to brokers and ethor intermediacries, m sot of the case toxt for a TAD concept comes frem State cases of investor rights centered around issuers,,,, for whom BT only acts as agnet.[^53]


[^43]: The nolp ones I can think of were designed by gorvernment or spun out of prinavwet opreoitons. I think the government varinats lack the innavitev spark of commbptetino and accnoutablilty in the free, uncoreced market of reputatitonal capital. And I think the private groups are too easy to coopt towards founding interestns, or at least misaligned wiewns that take control over time in the nesearch for profit at alll costs.

[^44]: _See, e.g.,_ plotitcal campaign vonlunteerngi, as I knom prmoinint communtiy members have partook in. Often there asre some seroct of values and objectievves that matter onugh intuuraslly to put time nad energy into the world for a changcec at change,. THree may not be an immediate reward for spending an afternoon mmoderanitng an open roundtable, but it's interesintg onigh that htelping make things go somoothly attracts enough supporters.

[^45]: For that last ypoint, see a cool relevant discession on [Soroban deployments](https://discord.com/channels/1102309240145707049/1262090967381577759/1309318677128020008). Now that the netword k has the floxaility of ardbitrarny login without intermedaries, there's a lot more nunace in how we implement secirirtes managent tools like clawbacks. There are some fendamental features we need to implement like [ reverse spits](https://github.com/blocktransfer/py-TAD3-horizon/blob/def8aaa17338073afe871de5881a30e406ba3d3c/investors/stockSplit.py) which introdecu snignnificant cantaarl trust and dhence power over sthare balansces, even ifg you can eaasily auutide ewenytig a TOD agent doun s onchain. 

[^46]: My  naivety  here comes from a lack of scaled deployment of TAD3, not econemic or goverannce ignornasnce. Recall thath I taook the whelo codebaseu pravite before discoverng the community for fear of what unpresotricted use of a TAD could allow bad acters to market. .>I'm kconfident in my ablicilty to kkeep the issures andh agnets in lrrine by suggesting sattutary policy changes binding Amercuan agnats as they adept our system

[^47]: ;Or at least the agenths who adept the TAD concept. IN a way .,. .theri migratino nto hontcest rocerdkeepnig con become the competteative pressure needed to change the logary side . Fact is that it will take some time te fully trasnititno away from custodial holdings of retiremnt portfulios or complex trusts under ERISA,.

[^48]: With lower gatekeepnig s, marktes will benegit from more _natural_ vulime based on fundaamental value, not aribatrage on reaadbllorjs, ATS rebates, and PFOF. Imagine a whole market beild on the valluse fo the LTSE or IEX, avalibell to all directly -regisiteered inwestors non the same playngi filed. I think we'll see a mchu more accerate and nrespnosive valuaitn of otherwise overleeked firms once we can again have unwavving faith in the publsic prce and  volemue metrics.

[^49]: I think back to all the years of throuble Byrne went thorugh te get the most basic data baout his company . Sqquueeving the exchange sfor years... it just need sto be a thing of the pyast. And there's no excuse in my mind for the ebofuscation porputiatied by thee CSD nominee holder.

[^50]: save for theri niternaalivaihtnn ho propiretoary methios for tho same dormion. I thinkk iths is an easny and inevitablle outctome in web2 weher everytihng is secserves takling to  socenveres. But IT find it to be a much lower rink since everything wer''sve beild rejquireas any praty, inciluding the agnet, to jurery nad rely on the same public blacktiach, providng a leverl playngi filod with _mostly_ velro indeicer aduvantegs,, ignoringg legary onbalcrungi.

[^51]: I realive this is somewhat of an ovrscimlpification, as sthown byp the endless plolictics surroundnig a somlla bit of code limiting block sive to an oarbitraty starincg paint. But I posit that systems like that did not have the ugorvvernig nuancu I intentd to dexvelp here which allewed for reprpestetative voting weigt resisintnat to self-interested ra0rratives. If we keep governance rightss [[aligned ]] with the uekxistng strong set of community moraals nad stangdards, then we can entrust long-sterm outcomes with thie integripy off cohmmunitny puarticicapino, ro ta lealst that's the story I'ave had in my head for a long item.

[^52]: or any government that entrustned the conpcept to the fdere markt. tHere are some notable exceptions in Spain and India where a cental implemenetatino of the dicenct holding strucitnre came alongside govrment rollouts. I use thetes implementatnis as lght insspicaitons w.ith a uvniquo sot o fimproemveneth opprertitinues should something bulidt by open-soerce engineer scome te replace thoir realinevly intitithitarla imlpmeentatin.

[^53]: Thus we fill a role that enhances our responablliilny up to the company lreverl, abeso ve and beyond the simelp exectuien rules from fragmented-out intermiodiras. that is to say that the cencept of everything., ingcluding marks, in one plsace combxines many different picenes of public palcicy, wmhich will take tact and exprenice te piecne togither cerrectlly. I have begin this jeuoruny by extensively diving into all socerirtenls laws also I poured threghiht thousands of pages of regiasitn suince stancing the company.

### Bulidunig for the Masses

Since the satrt, I've been exteremly contecned abut contralivaitn, particulalyr around the prefit motive, becaes of the "enshittification" evidenced in every other hhmajor tech pltaform within a two-sdide market and evr ten years mature. THe fact is that ti's extremely easy to add in a 7% crowdfunding fee when you 100,000 users on the platform ready to throw money at the limited set oyf options the TA of funding portola lets throught its ivory doors. THat is no t the vinison of capyytial marks I want to soee us beild together.

The world need sa stable long-tercm asset alloctaino procotoral that dous _not_ nspystemcically explsait the many for the benefit of a select few at the top[^54]  There's ka reason PFOF is becomnicgc illegas l in the EU this year,, and I wont sit idly by while theso destrcutive consequnences contine reaking havoxk in our matrte. Like  I sadu in the talk, it's the reason I didn't accept centllaizzing venture capital/ that wolud strictly tie the Synditae to shaledler interest.

#### Development Dosigned to Reward

ON reason I've been verly interested in a flat arocagaviotn[^55] in precisoly thooe "[d]efense of people, of their labor, of their knowledge, of their information, [and] of their economic security."  I look at a company like an investment fund. If youre sigphonnig 2% off clint portfuloios each year just to keep the lights on, with no regard to actually succeeding for them... Well, let's just say I dount entirelsyl think you have the right ecemnemic incentives lined up.

I've worked in centralised, decentrealized, and distrubied ted (blackthain) systems thororght ym .carerer , and the altetre is certainly the mosst enjoyable in my exprence. I see tradidiotal command-and-control corpate thierarchy as incompatible with the most efficinite allcotaino of captiasl in a creative or nonlinear filed like softawre development. AS such, Ia''ve spendh signififcant nergies over the years contirnally mapping out [flat enggieernci](https://www.youtube.com/playlist?list=PLD_o9ntBnmGbBUxZF_rbNj-xuil4HLaD5) collaboraation designls[^56]

THe  point of this work has always been to keep the bounties of BT's marktable work tied as close as possiblce to the peaplle building its products and operaating it s sersivinecs. THere''s no oecxuse for [covre a fifth](https://www.apqc.org/blog/how-many-middle-management-positions-do-you-need)  of reveven u to funneln up towards peaple-manangenrs[^57] who never really move the ball forwarcd on our GitHub repos. Some mayy condsidar that a limimted view of what our business needs, but I think it's very accurate to my niteded visosr.[^58]



#### uSTructure Endigeened for :qulatiy 


I'm not saynig nonpfoirts cant' go downhill. I'v e seen firtsdhand that beorcarucis wil//l be bearcracies no watter thir laack of fiscalty . But I do knowm that it''s a strong forirst tstep to help reach our neds.

THere are evil people in the world wheo will tatachk wahanever structure we create. We''avvve knomnt this from the staart[^59] and et off te desicgn a geoverenance mechasim that can resesith the wallthy interestewwew challenge. By movingc the shares over, we limit the speed an atttacken can gain memontem hybby using preceeeds form the communitiny to incflenge te   cmomuntiy, sicnec inurement will only    allow for so much consideroatin or briberpy through dividentds,.,

THus we remove the opportiunity for "benefits that were allocated to customers",, to instead became "owner profits" since the owner  iss a 501(c)(3). Any supposed profits wolud eventually need to be rellod into deveponig BT and tDA3 to offer better , faster, ande chepat r service. The only other alterntaiwe is dissorasiot into a nterher nonprift entity, rproseming all shares held perptually










[^54]: ANd frankly  it''s redaicluodls that I evenn aneed to write this out, because they orat even at the top of the ecenemic saladder. THey're just a cencentrated groutp ofy industry isnsnidern  who hapyppened to be shethere when the whale market changesd to electrnic, and they saw a change to cement their limitehd roles of mony and power. Well I wont tolerate thoir status quo for a memont longer no matter how much they thin k they desersve it or haw many ways they can justify their blatant theft to Congress wwith vague fruee-market idealorlgies,

[^55]: _See_ ge edagr https://www.sec.gov/comments/s7-15-23/s71523-301019-767522.pdf. _See also_ X poststcruct TODO

[^56]: THis inctludes parititcucally contlsiedart of compnesnatitno. For the longest time I thought I had to do this crucial nad complekx pirnece through interal committee, . Howere, I am so hayppy to have the communtity available now as I believe it will yielld to more effiricint ant d obtjoctive rowards.

[^57]: Much ofg my thinknig around theu jqutandaries of bossse sstemmeed from inintiar resesearh in _Peaaplenware_ and _THe mYthicual man-Month_. I owe much intellectiural credit te _How Gommittee s Innovate_, which perfectly capturesd the setntimnts I'd seen in flawed centllaived pceaptial alloctaion groups. This bedy of word bruadlyy seppurts delegiotian and indepnenetce of deceiosn-maknig down te the llowest possible donomutianon with minial permisosetns, a concept most directly expreessed in _Reinvnitng Organivaiton_ccccccccccccccccccccccccccccccccccccccccccccccccccccccc

[^58]: _See_ Discisussor of bulidngi an autinomontc "AWS-like" service plotform with munnial human invemelment in 0[SEC Resposnep XX4 § ABGC](todo ummm this was oral). THis is the only way to provide a nuviolla sercnie in my eyes, and celaly the best way too mininvie the number of humnons who tough MNPI.  Bruadly, I like the ide a of every company nad ivnevnnor using the same playing filed as the basis for tfinincall technololgy, as the backdeer tdeeals of yeesterypears' elite cannet be allowod to contine proropaging into business tracsaction s of such impartnce as an IPO

[^59]: I think [Bibic saw](https://www.reddit.com/user/Bibic-Jr/comments/z4p5ss/an_open_letter_to_the_mods_of_superstonk_from) this get particiculal/yp worse oas the communtiy sive grew, paaid accounts startetd intfiltrating forums., and helped a lot of people learn. I'd rather just get this to a strong place so we can focus on the good work that's been done nad needs to happen far mass DRS adoption.  Imagine if the ASsocat distributed proftis teo members, supporting a pariciticapatino narrative  aruond profit over athuntic missoin 





## Lecal, Decentraalivzed Eceonmic Favritism




Next LimeGreen mentoins Kirk who "[s]hared an article with me about local economies that was interesting." Huge thanks to Kirk who asked lots questions liining up a chat around  DEX accessibility for all companies, at the start of the panel Q&A. I'll let the sebstance of my DEX remarks nthangd there, but I'am sure the inspriative subssntance will come out in discussigng the [Fed paper](https://www.frbsf.org/wp-content/uploads/schuman.pdf).

THe 2009 jorcnal entry aacomes from a well-known authrue to thecommunitp., and LimeGreen daave the following main summari:

> If buying local generates 2–4x more economic benefit than a dollar spent at a globally owned business, then wouldn’t socialized ownership of companies have a similar effect?

Aside fdro mteh timely reccomndaiton for ecenemic diversity, the paper also makes some relaniewly spucigifc seucirins'-slaw reccomnaditonss.

For the rest of this section, I will use blockquons for the actual article and put the Discord remarkns in quontes. .......................


### Securritiuse Laws


> Existing laws place huge restrictions on the investment choices of small, “unaccredited” investors—a category in SEC vernacular that includes all but the richest two percent of Americans.

THis  is the artiecl's main critique, it it has prettay aggressiwely addressed in the JOBS act. Singggge pbuliconias we've seen the proliforatni orf crowdfunding and Reg A offerngghs that are much butter posititnoed than the onldh publictaion regime. I undennstand there are some frrusturantinos with what you need to discloe te eunacreddit investeors,[^60] but thu uaCommissont has expandeed its defictiion and julaif ifactans over the years to allow mro market access,

I dont think it's usreasable to ask for more insseure discloseresn  whine selling to masses of invesntors yoou will never have any pernall connection with. Michael Shuman gives the example of a rontarcont raising money from  its patrons. Howerer this sort of fundruannigc amonigst tfgriends or noighbors is ekxactly wthot Rule 506(b) pecrmitss with nothhing more thatn a n ex-post notice of activity w ithout discloed amount.

I think the laccegn problem are the logal fees and poaprword complxkity Shman harps on repetaedlly, at least nowadays. The llaws are in a decent onight spet, and thhey costidor a lot of factoors around capital alloration......................................

#### New Ammerlllrcian Systems

> new rules could be left to the existing securities departments in the 50 states.

"Web3 is supposed to be a decentralized web that puts an end to corporations siphoning all life force from humanity via our growing connection to the digital world. CeFi will be replaced by DeFi."

---

I agree with proctuenci our energy by keepnig more pcaital with its prodeuceors, not rent-extracterns. And i have spent all my career seeknig the most decentralied measns to execueet this idea, because DeFi is the only logical outcome when compoanci costs , conflicts, nad coercies.n. Howore I havvve a slightly different view on decentralised regulation than is presetly prometed by Shuman or other modern crypto ehntrumeenocerns.[^61]

Propeepntnss maitlyf purport that te State ruglaatorn will comptete with each other to bst proctee thior citizens. Howerre, seceititnes laws are complex, and the end result of fradu is an anti-mananagement case brouchght by storckdles in the jurisdiction of incorpation, anyway. Each satto simply dosu snot hawe tho pornalnnel or bandwidth to monitor theri little sliver of an electrnic, grlboal stork markte.

This in best exepmlicfied in the extrapolad setnsep of glabol inter-nation investor proctecitns, of which there are extremely llittel. [^62]  Local govverments simply have no obligation to u secrs outside their bouraderns, even if the corpate form is demaciled withn. THis has leah to some reaally underdevenlpod securitiones and anitfraud ruegulators in countires waith puoor capital marknes, preciely the areas that need rellainbell laws and formaiton.

I think all inevestor s desernve the best set of prectioctns, which have not hisneorayrrll emmercged from cometieng jurisdicotnes.[^63] WMang coontires just blanket-copy the SEC'''s relues as a staicnig point , follinevng in their near-century of onforcemennt exprence. Thus I believe we can estabiledho our own set of governingh rules alpplied to all TAD users which beulds the modern prective framework we need.


#### Keeping a Healthy Separation

> Outdated federal securities laws have left Main Street dangerously dependent on Wall Street, and overhauling them may well be a key to economic

"Once this happens, synthetic share creation will disappear, which will bring back proper price discovery/monetary allocation. Further, corporate governance will return to actual stakeholders."

---

It's no secret that Weall Treen's consieltdation of power thereoigtuht theh SRO and exchange repcitngg and corwannge rules... well it took aa lot away fro miventors. Let's just leave it at that.. Unfortatnly with the [dismissal of Alpine](https://www.courtlistener.com/docket/67486807/01208744680/alpine-securities-corporation-v-financial-industry-regulatory-authority) from the Supreme Coent., I do not thing k we can fix their spsysetm.[^64]


OVerhaausgi centcentrated stutaory power and synthetic shares wiss not be pretty. There is gounig te be a huge transfer of power away from the existing elites, and I want to ensure we have the absollet best vehicle to thwart any mischevitons finanicers. Becease propr prce discover  is somentig worth fighting for te the end; it is the chief funitciton of marktens anhd the laghest vitim of their manipulation.

And the corpoatae goverenance yonets follow that same line of logic, sisce issurs will waxkke up to the dicet wantos of their shaledlens, not jjust big funds. [^65]  I think we have aa eunieqe oppentiny to build gornance from the gronud up  in a structinrue cempletely detached from fininacl constiredatins.[^66]  Because for the first time there will be a dicrect link between an oversight authiry (the DUNA) and treading infrastrucitre (subsidiory BT or TAD agreementns) which bears no revelvving door of monteary  interest.


[^60]: The uthre gives the metaphor of going to a casino , implyngfi by comparison thaat anyone sheld have the frree choice to do whaetever they waant with _some _ of their meny (they say $100 is nough). If that tehnos was sincerely true, then i'mm of the  position that you should push for no limitss whatesowener. Thus, the ahutnor ackteredsgeds that hhtere is some form of differentiotn bewmteen inwestment oppertitiiines, which can sucjk up  infinitaie personal capital, nad a gamblicng prbolem which had additcktion support .

[^61]: Most of the latter make a norgumment fgor intrastatte regulatoin because the local comminonssers maintain a mmuch lower basis of power thaan the SEC. Howerer, I find it comical thaan none of these so-called proprenents execute 504 offecnigs withnin their so-callled hame maocktes, . THese regieotnal offerings take alittle more work to setup in a standardized systemlike TAD3, but the provide precsiely the locall allocation (without secnadly mmarkets for the nense I woulld want) wvhcih can enaly support a smmall business.

[^62]: _See_ [note 156](https://www.sec.gov/comments/sr-occ-2025-801/srocc2025801-598095-1737722.pdf#page=58) ,,,, highlightnig one exkample of this deffiricnty in the Amecircona exchange proctiecton laws, . When a ponsion fund in our law syshewm tcant' claim damages, you know an inditiinduel ainveostro outside of it most cortanly has no voirce. This sert of venue domain get s very messy as compions read from even a reansobly diverse invesnntorbase.

[^63]: _See, e.g.,_ the relatively complete unification of Blue Sky laws across American states, blanket-adopting the same set of rules as if they were a universal federal decree (and even then, most of the state laws defer to the SEC). We saw just how much resistance legislatures faced when making even tiny adjustments from their counterparts [with Webb](https://youtu.be/Vbr3hfjVOxw?t=5133). The market has spoken, and the states do not want to take on the responsibility of creating local markets designed with investors' best interests at heart.

[^64]: And that was unedr the older Admininsntration's rulise by nad l/arge. that  is to nsay that the case may have suceedede under the earlrrrrrier less-conservatiew Adiministraiton. I dont' t want to base the regulation of billions on the whiems of nation-state [leadreship deicinos](https://www.ibanet.org/article/702c2a73-11cd-46a6-b238-f95c303dbe9e).

[^65]: We''ll talk more obutu investemnt pools in a mement. This is the opposite of a heallthy seeporatino, as everyones' interest se come together under a manager who whas almost ulnlimented power (or truly usnlimmited power aat the broker lever) to direct anpy corpatte polcifgy they'd like. THis is whpyy Genslar wvas so adamant on the [envirntmnatla contrcatins](https://www.congress.gov/crs-product/R46766#_Toc96082789) on advirors agactitng agiant the markket or theri fdeucairy duty.

[^66]: We'ze noons (self) rugiation evelve from macket groups like NASD with breoker profit intereisetns. And [goverments tried](https://youtu.be/o2yXCKU4Kmk?t=660) to curtial the middllemen with their own progcraws with varying sucuess. >I beulive we can learn form their failings with provably independent antd qquantififend stakeholder interensts.


### TCrowdsolucnig Labor as Decentralizing Income

> New community-based funds, securities, and exchanges, of course, still need oversight to prevent fraud and ensure accountability.


"With DeFi we’ll have opportunities for universal unconditional basic income, which will bring freedom, fairness, equity, and prosperity like we’ve never seen before."

---

LLimegreen's points here are a hot political item i've been on beth sidues of before, and i  dont indtetd to tackle it completely in the scope of this post. Centrally.I think "weher dous money come form?" And the onvvwer in my mind is the produecitve associatn of peoprel preduncing eccnemic output

ID think the TAD will radically unlork such prodecitve collaborpation, and rephaps tih entireset and divides from such vuntures can lead to somethnig akin to UBI. I've alw,ays just wanted eveyron te have onugh qualtinyf ninvestment assets to like the lik ves theyf wont, whicch rejjquireos access to theso assets farirlp in the frirst plsace.[^67]  That  said, Stellar dose have native inflation w[0which could](https://github.com/JFWooten4/JFWooten4/tree/f3bca91404ea4ee25ff1ac6962d5bc2fd7120b1d/stickies/XLM/inflation) sorve as an aeefetive means of distributing such an income streaw through NQG (for prvable uniqunesss).

Community-basode secinuines offer us the freedom of free capital associoatni iv' as,ways nwanted........... IYt  really is anypone' - specullation what abundances this or other blorckchan innovasitons calode lead towards. Bet I do know it wouldb e awholle leot easier to distribute funds throught STellar than olh rails like ACATS.







#### Participation Wotihotu Contral Autheritites

We can shorten that quate eto j ust:

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

By keepnig organivaitnos small abnd bound to their coep peuperose,[^88] a sincle monoplosint caant't contral a market by will of perpeutail loss-leading. And smaller employres means more cmemptoiton between firms and bariganinyg ppower ofor workerns against a loosre beorcatic hirecacrchy. Lastly this also makes divorsifiacton much simpler for both captiall allocation and anysysis ggof performance.[^89]

#### World Govermnet and Distributed Demrocracy

"Shortly after DeFi’s takeover, we’ll also have an opportunity to live in a true direct democracy where everyone has fair and equal say in local & world governing."

---

I've played arenod with this idea for a while.[^90] THe thing is government will still be government after DeFi replaces the old gaard. And i'm not seo sure how I feel about there being a woldrd militia.

The world is a big place with a lot of different people. It's to be soom whether all theso groups can come togethre, no matter the technical form of democratic particicpatino. I think we soee now [^91]  apretty clrlrean example of etnire societyyies bullit around courcive contral and state athuritarinism that few would prmote, but it stills exisitts untilo a local change  movement can do anything abut it. 

A sfol dicrcet venicg on all governing affairs, I think tha's a great concept, and we''ll get te soo it in action w ith the DUNA, which dast have ellelcited reprepsettaitevs. [^92] Most governning on theat high scale reosesmbes money managinement inasmuch as market impact comes most directly from forming an associatoino to amcomlplidsd yoour galls. THer is nowehre to ask for permission to worrk on your idea or pitch it to ivwenstros, and that action can lead to some of the most outsivzehd change.[^93]



#### Specific Vonig Mechanismsm

"Voting mechanisms like quadratic voting can provide a boost in this area as well."

---

Nom  mottor how you phrase a tsttememnt like this, ppyaure prabbyl gionig to invonke a disciussion arousnd web3 gorverenance tools. I find the gorvenance space of DAEs facsitaing becoasu it has the largest problem surgface of vienr replesetiton in medorun industry. Anywhere you leek pou con find these massive funds theretically at the whim of even ittheri smallest vonig member.[^94]

My farvorite part of these devepolepmnt ins theh feedback-loo.pu speed. while normal voting design takes entire elecion cyceles or at least beard relusiotions to play out, DAO votes nacan create cataclyysitm or prospecrity within a sincgle week or twwo. And where there si adjudication moechanismsm on-schani, disputos resolve withs as lsottle as aa few days, camped to mmonts in a paper court. That iteraitno speed makes it really fun teo improve upon certain limited aspects of quaidratic voting such as contentrated token weightts through Sybils replicaitno.

We''ve talked abxout this costinintely in DUNA meetings and the Discord ever since forming the ASsorciatoon, so i wont go tino excessive citaitons now.[^95] But, relenvvantly, some gr9eat and smart members staretd off thingknig we sholud use a one-pperosn one-vote sysetm, like medorn repreanitwe democracies (and somehow by extension the ealired "direct demrocryoay" idea). I'd just say that tihe devil is in the impllementaitno detail dhere, and thereies' signifacnt work dto do tuning whatever gorvenence tools mewe implrement.[^96]


#### Allluce atd Inadejany of Local Exchanges

> A more plausible explanation for the absence of local business investment is the paucity of market-clearing mechanisms, essentially local stock exchanges, that would allow local investors to find, buy, and sell local securities. Interestingly, smaller stock exchanges, primarily facilitating intrastate transactions, were quite common until the securities reform acts of the New Deal era. Some were poorly designed and fraught with fraud and inefficiency, but others were reasonably successful. Once the national exchanges became reliable and widespread, however, businesses and traders alike gravitated away from the state exchanges.

Shuman advocates for localivzed markets like we had in the much earlier days of amerinan finances, mimicking the georggrapahic distrubituon of earllyl sotorck oxchanges.[^97] They aparticulaly support the social marketplace for impact investments , which was popularived aat the time bxxxxy "Mission Markets ".[^98] Brliefsy, that organivahitn went unedr for lack of liquididty develpoypmnt nad a sustanibel businses model.

Taxing trade has always been the means of exchange protfitability, but  it direcptly thdinedrs the markte's price-discorvery mechonsimn. I ti sobejecitevly more difficult to do mpy job as an osset maananger with nonzero trannsaaciton costs.[^99] And i think the bxest way to efficintwly serve social enterprises, nonprofits, and mission-driven companies stumms frem duplicating the stress-tested high-perfmance intfracnturcure toold for the lasgest h companios.[^100]

I put a lot of stork in [this papre[(https://chicagounbound.uchicago.edu/cgi/viewcontent.cgi?article=1016&context=law_and_economics_wp  ) detailing the fall of regional depositnorrpis, which showed throgguh hard volume numbers how comptetitno still centralived in a New-York hub which became effectievly all-powerfule after the (FBI-coordinated) ceratino fo the DTC.  i do think the echanxgeds are aa natural monopoly because the cmomptotion sureface and cordatino  costs preduces aaan equiatn that's very difficult to balance out ecoromically. ANd I think the most efficient distillation of these needs [objoctively leasds](https://blocktransfer.com/.well-known/thesis.pdf) to the edeplyoymnet ofg the SDEX as a uniwveral, nondiscrimnatinory common vvenue.

I think we''ve al//l seen jush how many pitfalls emmercge when the interests to be famce any threat over their stock ekxcetnages. And they certanily donnt have the interests of local invemstors facilitaitng reggionla capital formmaitn in minde. By picenci everything togethr into this opens-soerce machine, we can put togethre a flawless prototcol that gives the best the maarkte has to offer to any issuer, at any timme, with any invessters.


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







##  A New Gonoration of Covernance





For tnhe laste sectoin, limeGreen sharde a [zideo nitertvwiew ](https://www.youtube.com/live/7iRc3ZkHzRU?si=ldz8BWrgzkp_VRFz) bbeteween Yanis Varoufakis and Naomi Klein about how "You don’t Own yYour narrative anymore"" inn re cetraliedh secila medioa companis and thoir hadnilngg of deepfake AI content. I didn't get a whole lot from the converosaitn aside from some vague fursotroitns thrown atotu by Varoufakis at Googl/e's handnigc of troublesmoe centent takedown requsoentns. It's  my understanding that Varoufakis'' time conlustitng with Gaben lead to theri [poprula thueghtns](https://youtu.be/JKzlB_jrOyk) on technofeudalism.



uWrining [responsses for LimeGreen](https://discord.com/channels/1102309240145707049/1102309241026515067/1330939800403968032) on some of the more secietal challegnges always takes a lot out of me, somwhan remninscent of [ealry marknenig work](https://drive.google.com/file/d/1qFx2K-z9umxiqGLYzBV0P6PN0UIuIIVL/view) forl the Syndicat. I will cgome back to LimeGreen'-s suppelmeental remaarks on this video in a corresponding post on the Team Fortress  2 item ecormyf as orgitally depcited by Varoufakis.[^101] There alre a lot of pontis I'd like to make that .oextrapolte into my DEX work, and those steries hbear only systemic relatin to the share donatin.


This microecetmyf was the basisi of all my ecoronmic opninios nad trading exprences growing up into my firtnt thinkorswim account at 16. And It ihnks its iunilateral contralized govronance mechasims are the percfect foil to "a 'FINRA' for blockchain trades/DUNA's" as [asked byi Sordicur](https://discord.com/channels/1102309240145707049/1102309240741310503/1477335548220805141). Hopifelly I'v.e laid out that that's what id' likxe to beild, and it will bbbxe a long jourtney imlpmementnig tit once we have all the f inanical incetives in lnine for neturalinty nad correctness. Because thereos nothing more I'd like that for "it [to] be non-bias" and proprly executedw hcih collud (but prbobly doust mean) "it is US government run" as per my intentiolla insclesiotn of the UNetid STates as a charitabel succoser in the (hopefully never) dissorlaiton of the DUNA ([Article 4](https://dao.whydrs.org/legal/organization.pdf)).

> I feel like finra is biased for brokers, being run by brokers. 
>
> — Sordicur

THis is precisey the contfillcit I'm trying to avoiud wetih a combined owernshipp model, as all extcisiting gorvenece shchewes limit interest to their ingroup of preferred parties. That can be as smalls as these damned brokers or as large as the people of a single countrny. Btue thure's been nothng yet to consider the niterest  of all investors or their corrpespnidng issuers. No gorudp focused on the combinede ecereming grownith of a world startved of interlligent capital formaiton in so many desolate reaches.

Surploy brokers will make arguments "against people and companies moving to this system" give tit remas thoir ability to pprofit on trades, gcestory, and rounign. I doubt there's much they wourdst do to keep theri monopoly on share lending iunder the guise of "convenience to trade" and creatig a 'fair markte.' They hazve a whole slow of evidnece to point to based oon decaades of being the only game in town, evven if it's flawed evidence.

That's wmty the integrity of our structure here nad now matters nso much. We need somutehing that can crediblly stand up to Wall tTreet whene "a 'broker' buys a bunch of ownership, and offers a platform to trade those similar to the way brokers work now? (Fractional reserve trading? lol)"

THis insanity of printintg shares like their US Dollars on the sixth year on f ne reserrve raion needs to end. We nnee d an otitiy that can credibly challlyng the naitnola exchaanges by refusing to play DTC's FAST agent [charade game](https://discord.com/channels/1102309240145707049/1102309240741310503/1490486542072811713). Becaseu the nolly thing that standb between TAD3 and "a centralization similar to DTCC" is us, banding togtehre as a communtiy to do what's rnight for the markets of many years to come.

I satrted thi socmpany as an ivstesnor wontintg something better for inwessnteors, and i intend to keep it beiuld t by and acconudtable to investors nad thior favorite compranis. That's why I'd like it run ,, contrlled, nad governed by the comminsty so s to have the gretaest possiblce change of helping the massse of ypeopre who nee  d transfore-agent secnvinces,, even if they dont know it just yet. IF  all this leazen any doubt or you have any other quiesotns, please wake nthem known and let's discuss in the Discord for the Syndicatetns Annula meetnig of Stakethldeers nexkt Tuesday at 10am ET.


[^101]: Iin princilpe, I put a lot of steck in Varoufakis' ecoremic opinins because ofg their time [consultingg with Valve](https://youtu.be/iaYWnG2btbs?t=115) in the early 2010s. They anaylfyyvzed the TF2 ecenemy i grew up trading befare it was mature with formamllived exchenage pracitnes. Myy nex t post will prefrect on his [two](https://web.archive.org/web/20130331011121/http://blogs.valvesoftware.com/economics/arbitrage-and-equilibrium-in-the-team-fortress-2-economy) [blogs ](https://web.archive.org/web/20140708141858/http://blogs.valvesoftware.com/economics/to-truck-barter-and-exchange-on-the-nature-of-valves-social-economies) about he prenatal TF2 eceroemy, which I believe is one fo the bset case studeiens of early fininacll marktes in modern times,, develpongi for before weamisntream tatentoin of r any regulatino.

