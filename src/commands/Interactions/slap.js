module.exports = {
name: "slap",
$if: "v4",
code: `
$globalCooldown[5s;Please wait before using this social command again. This helps us enforce ratelimits. %time%]

$if[$findUser[$message;no]==$authorID]
$title[1;Dank RPG slaps $username[$authorID]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$httpRequest[https://api.dankrpg.xyz/anime/slap;GET;;url]]
$else

$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has social commands disabled from their settings.]

$title[1;$username[$authorID] slaps $username[$findUser[$message;no]]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$httpRequest[https://api.dankrpg.xyz/anime/slap;GET;;url]]
$endif
$onlyIf[$message!=;Mention someone.]
$onlyIf[$isBot[$authorID]!=true;]
`
}
