var videos = [
  {
    "title": "Nexus of Hate",
    "url": "https://www.youtube.com/embed/P8cYTkvx4_g"
  }
]

single = _.find(videos, function(single) { return single.title == 'Nexus of Hate' })

var yt_title = "<h2>listen to the new single \"" + single["title"] + "\" here</h2>";
var yt_embed = "<iframe width='560px' height='315px' src='" + single["url"] + "' frameborder='0' allowfullscreen></iframe>";

$(".yt_contain").append(yt_title + yt_embed);
