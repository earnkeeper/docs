# White Paper

## Project Introduction

Stop guessing, start earning!

EarnKeeper.io is the leading Play to Earn GameFi Analytics platform.

With detailed analysis for their favourite Play to Earn games we enable players and investors to maximise their returns. 
Wondering which game is currently the most lucrative one? Or what items give you the best returns? Look no further. Our in-house and 3rd party developers built the tools to answer questions like this.

Developers from all over the world are invited to join and build within the EarnKeeper.io ecosystem. Got a great idea that would help players in a game? Great!

With our toolbox you are already almost done. Develop with the latest tech and publish it on EarnKeeper.io.

Tools are hard to monetize. Not so on EarnKeeper.io. We will help you distribute and make money with your developed tools.

## The Problem to Solve

Play to Earn games provide a way for users to earn a living, by exchanging effort and time for reward. Each game is different, the method to earn rewards is different and their economy will evolve in different ways. A generic analysis is not enough to determine return on initial investment into Play to Earn games.

The space also comes with risk, new users to the space expecting a return generally do not understand the risk of becoming a bag holder.

Developers who play the games currently create their own analysis pages, which they use to track their earning, and often share these tools with the community. They will include a donate button or advertisements to help fund the further development of the page.

We did this ourselves with <https://cryptozoon.earnkeeper.io>, and here are the features that were most popular with our users:

### Enhanced Market Place

![  ](/img/whitepaper/0.png)

A market place designed for Play to Earn , including

- Grouping of NFTs by rarity
- Estimated earnings if you were to buy the NFT
- Expected days to pay for the cost of the NFT (ROI)
- Flexible and fast filtering and sort

### Fantasy Mode

![  ](/img/whitepaper/1.png)

A detailed team calculator, used before you buy, including:

- Building your collection of NFTs before you purchase
- Viewing total cost, average daily earnings and, time to pay off initial cost
- Automatically setting the cost of your fantasy team based on current market prices

### Team Listing

![  ](/img/whitepaper/2.png)

A detailed view of your current position, including :

- All of your owned NFTs
- Their game history (%win rate)
- Their earnings to date, and whether they have paid themselves off
- Their current market value

---

### Global Game Data

![  ](/img/whitepaper/3.png)

An overall view of the game economy, including :

- Market floors by rarity
- Fight win rates
- Gas costs over time
- Total rewards over time
- Rewards by rarity

We could only create these metrics and have such a positive response to them because we played the game ourselves.

We looked to expand into more games, but without playing the games, it is difficult to understand which are the most relevant metrics.

✅ &nbsp; Better, is to allow game players and developers to easily gather the relevant metrics and easily display them, without having to create all the boilerplate around their own site.

✅ &nbsp; Developers should be rewarded for their effort, currently individual developers are relying on donations and individual sites to continue enhancements to the site and perform maintenance. If the donations run out, or the developer stops playing, projects can be abandoned.

✅ &nbsp; By using a GNU license model, we will keep all of the analysis work in the public domain, where it can be picked up by other developers (including our team) when needed.

---

## For Users - The Plugin System

Users of the EarnKeeper site will continue to receive the metrics we provided for CryptoZoon, and for many new games, that the EarnKeeper team and other developers are actually playing.

![  ](/img/whitepaper/4.png)

All plugins use a freemium model, where most metrics are shown publicly for free, and some metrics are available to users who pay a monthly subscription, or hold a Lifetime Access NFT.

Benefits for the user:

✅ &nbsp; Access to metrics for more games, and discovery of new games

✅ &nbsp; Fast turn around in metric changes when the game economy changes

✅ &nbsp; Free or in-expensive access to metrics created by real players of the game, who are also invested

✅ &nbsp; A transparent and simple payment model, which goes directly to development of analytics, leading to a sustainable platform

Each plugin developer controls the metrics which are displayed, the EarnKeeper team will focus on the following features in each plugin:

- Enhanced market place, showing extra detail for each NFT, including estimated and historic ROI
- Enhanced team listing, including historic earnings and break even information
- Enhanced player game history
- Global game data
- Data export for all grids and tables

---

## For Developers - The Plugin System

We have developed an open source plugin system for [EarnKeeper.io](https://earnkeeper.io) which allows developers to gather metrics from the chain (or game APIs) and display the metrics using tables, charts, and other widgets.

Our Github repositories are available here: https://github.com/earnkeeper .

Documentation for the protocol and SDK is available here: https://developer.earnkeeper.io .

The goals of this development effort are:

- Keep game analysis techniques in the public domain, so that they can be enhanced and supported by the community
- Reduce time to market to gather and display metrics, so that metrics can be available as soon as launch day
- Build a community of game players and developers to improve metrics and discuss qualitative game strategies
- Create a sustainable flow of funds from the site users to the analytics developers to keep analytics projects alive

Benefits for Developers:

✅ &nbsp; Use tried and tested data connections with examples from existing projects

✅ &nbsp; Reduce time to market with boilerplate reduction, caching and limiting built in

✅ &nbsp; Build the UI with widgets already tested on mobile and laid out correctly

✅ &nbsp; Earn revenue from plugins that users actually use, or from bounties where there is demand

✅ &nbsp; Be part of a developer community focused on GameFi analytics

✅ &nbsp; Immediate exposure to an existing user base

Further Reading:

- [The NestJs SDK](https://github.com/earnkeeper/ekp-sdk-nestjs)
- [SDK and Protocol Documentation](../developer/welcome.md)
- Example plugins
  - [Splinterlands](https://github.com/earnkeeper/ekp-splinterlands)
  - [Critterz](https://github.com/gavin-shaw/ekp-critterz)

---

## Business Model

Revenue will be generated through a freemium model.

- Free users of the site will have access to most metrics on all plugins and community support
- Premium users of the site will pay a low subscription fee per month, and will enjoy access to all metrics as well as premium support from the EarnKeeper team
- Payment will be made by wallet transfer on the BSC or Polygon chains.

The CryptoZoon tracker attracted **17,300** unique returning visitors to the site, **200,000** visitors in total.

![  ](/img/whitepaper/7.png)

Some issues to solve from this period are:

- Cryptozoon game mechanics changed, which required development to reflect on the website
- Cryptozoon infrastructure changed, causing breakages in our integrations, which required development to fix

To solve these, we have developed the Earn Keeper plugin system, which allows a quick time to market when reacting to changes or breakages in the underlying game. It also allows other developers to contribute to this work.

To incentivise other developers to contribute to Earn Keeper analytics, we will distribute the earnings of the site in the following ratio:

![  ](/img/whitepaper/8.png)

### Third Party Developers

Third party developers will receive **25%** of monthly revenue, paid each month to a wallet specified in their plugin.

The monthly revenue will be distributed pro-rata based on number of user-visit-days by Premium Users.

For example, a plugin that has had 1 premium user visit its pages for 10 days of the month, will have earn't 10 user-visit-days. If all plugins have earned 100 user-visit-days, this plugin owner will receive 10% x 25% x total subscription amount for the month.

This will incentivise developers to implement a freemium model as well, as only visits by premium users will be counted.

### Development Fund

A development fund will receive **5%** of all revenue, these funds will be used to promote development of plugins by issuing bounties to developers when games with large user counts and poor analytics are found.

### Platform, Plugins, Marketing, Staff

The remainder of revenue will be used to support and grow EarnKeeper. With real marketing spend to bring users to the site, developer hires to expand the platform to make development easier and cheaper, and staff to build game partnerships, support users and more.

Our goal is to take away as much administration away from developers as we can, so that they can concentrate and retrieving and posting metrics as quickly as possible to as many players as possible.

---

## Roadmap

Our roadmap for 2022 is below, with some big wins under our belt already.

### Jan 2022

- ✅ &nbsp; Client side front end application https://earnkeeper.io
- ✅ &nbsp; Subscription Framework
- ✅ &nbsp; ETH, BSC and Polygon integration

### Feb 2022

- ✅ &nbsp; Seed funding complete
- ✅ &nbsp; Tool Marketplace
- ✅ &nbsp; First Game Partnerships (Honey Wasp, Little Heroes, Armed Beasts)
- ✅ &nbsp; Four tech demo plugins on the system (Critterz, Bomb Crypto, Cryptozoon, Splinterlands)

### Mar 2022

- ✅ &nbsp; First production plugin on the platform (Splinterlands)
- ✅ &nbsp; Javascript SDK, documentation and training
- ✅ &nbsp; Hiring (Marketing and Development)

### Apr 2022

- ✅ &nbsp; Game Support: Thetan Arena
- ✅ &nbsp; Full Development Team Hired

### May 2022

- ✅ &nbsp; Global marketplace volume tracking, keep track of the most active collections
- ✅ &nbsp; Discord notification support, catch the best deals in real time
- ✅ &nbsp; Game Support: Metabomb
- ⏱ &nbsp; Game Support: Pegaxy
- ⏱ &nbsp; Game Support: Mines of Dalarnia
- 👀 &nbsp; Game Support: https://discord.gg/RHnnWBAkes

### Jun 2022

- Game Support: 4 new games, every month
- Player tracking and inventory management for guilds
- Python SDK, documentation and training

### Jul 2022

- Game Support: 4 new games, every month
- Game Partnership and whitelist announcements
- True Alpha private discord, for the most up to date realtime analysis and inside information

### Aug 2022

- Game Support: 4 new games, every month
- The True Alpha DAO, for deciding platform direction and game support
- Opensea Support

### Sept 2022

- Game Support: 4 new games, every month
- Wax, Avalanche and Solana support
