module.exports = {
name: "privacy",
code: `
$title[1;Privacy Policy]
$description[1;DankRPG's Privacy Policy

**__Personally Identifiable Information (PII) :__**
We do not collect any information that can be personally linked to you. 
PII is information that can be used to identify you, such as your name, address, email address, phone number, etc.

**__Database Information:__**
We may collect the following:
Discord Server IDs (for server variables)
Discord User IDs (for user variables)
Command cooldown times
Global User Count. This is anonymous. 
Prefixes (provided by the server owner)
User settings

**__Top.gg Voting:__**
When you vote on top.gg, this makes your usage of the bot public to both parties DankRPG uses this information to give rewards to voting users.
We also use top.gg's api to display our server count on their website. However, this is public info that discord displays themselves.

**__Deleting data:__**
You cannot delete any data as we do not collect any personal data (PII).
Removing DankRPG will stop database information from being used. However, it won't be deleted.

A more detailed version of this privacy policy can be found on our [website](https://dankrpg.com/privacy).
Note: By inviting DankRPG, you have already agreed to this privacy policy.
]
$footer[1;Discord Version Last Updated: 15/05/22 (BST)]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]`
}