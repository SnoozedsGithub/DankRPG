module.exports = {
name: "shop",
$if: "v4",
code: `
$title[1;Welcome to my shop!]
$description[1;Here are my items on sale.\n
<:hpDrop:915888646454927380> **__hpDrop__**\nIncreases your HP by 100. | <:RPGCoin:855767372534906920>**750**\n**In stock: ∞**\n$getServerVar[Prefix]buyhp
$if[$getGlobalUserVar[HouseL;$authorID]==1] \n<:ItmHouse:921118526876577814> **__House__** \nAutomatically heals HP as you type. | **500 Wood** \n**In stock: $getGlobalUserVar[HouseL;$authorID]** \n$getServerVar[Prefix]buyhouse $endif $if[$getGlobalUserVar[PickL;$authorID]==1] \n<:pickaxe:963846459126583347> **__Pickaxe__** \nDecreases your mining speed by 5m. | **100 Stone** \n**In stock: $getGlobalUserVar[PickL;$authorID]** \n$getServerVar[Prefix]buypick $endif $if[$getGlobalUserVar[BaitL;$authorID]==1] \n<:Bait:916369932072128544> **__Bait__** \nFind double the animals in \`$getServerVar[Prefix]hunt\`. | **50 Slime** \n**In stock: $getGlobalUserVar[BaitL;$authorID]** \n$getServerVar[Prefix]buybait $endif
Other Shop commands:\n\`upgrade\`, \`hp\`, \`heal\`, \`petshop\`]
$color[1;$getGlobalUserVar[EmbedColor]]
`
}
