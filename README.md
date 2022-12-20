# discord-js-bot-v14

An opinionated discord.js v14 bot template. Maximum setup of a minimal v14 bot.

# Donate
If this helps you, please consider a small donation in ETH or BTC:

- `ETH`: 0xb360709D085cE050B9D031fdaE5dB14b53329D58
- `BTC`: 1M6yN9UDPEDRWWwUyGFdCNsB6gKjgmVMEX


# Setup

```
git clone git@github.com:mikeyb/discord-js-bot-v14.git
cd discord-js-bot-v14
yarn
```

# Usage

## Start Bot

```
cp config.json.example config.json
# edit config
yarn start
```

## Register/Unregister Guild Commands

```
yarn deploy-commands-guild
```

## Register/Unregister Global Commands

```
yarn deploy-commands-global
```

# Creating Commands

-   https://discordjs.guide/creating-your-bot/slash-commands.html

Commands are automatically loaded from `./commands/*.js`

# Handling Events

-   https://discordjs.guide/creating-your-bot/event-handling.html#resulting-code

Base template files are available in `./events/` for every event type possible. Simply customize the ones you need.

# Development
