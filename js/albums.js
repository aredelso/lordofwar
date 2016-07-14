var albums = [
  {
    title : 'Suffer',
    cover_img : 'img/suffer/suffer.jpg',
    tracks : [
      'Age of Heresy',
      'Nexus of Hate',
      'Embryo',
      'Suffer',
      'Behold the Harvest',
      'Manufactured Existence',
      'Skin',
      'Carbon Based Genocide',
      'Hamunaptra',
      'Drowning',
      'Killing Must Feel Good to God'
    ],
    bandcamp_link : 'https://uniqueleaderrecords.bandcamp.com/album/suffer',
    preorder_link : 'http://www.indiemerch.com/uniqueleader/band/lord-of-war'
  }
]

new_album = _.find(albums, function(obj) { return obj.title == 'Suffer' });

var cover = "<img src='" + new_album['cover_img'] + "' alt='" + new_album['title'] + " Cover Art' width='350px' height='350px' />";

$("<a href=\"" + new_album['preorder_link'] + "\" target='blank'><div class='cover_contain'>" + cover + "<div class='overlay'><h1>Preorder Now</h1></div></div></a>").insertBefore('.track_list_contain');

$("<h2>" + new_album['title'] + " - Out July 8th</h2>").insertBefore(".track_list");

for(var i = 0; i < new_album['tracks'].length; i++)
{
    var track_number = i + 1;
    var li = "<li class='track'>" + track_number + ". " + new_album['tracks'][i] + "</li>";
    $(".track_list").append(li);
};

$('#preorder').append("<h2><a href=\"" + new_album['preorder_link'] + "\" target='blank'>physical</a><a href=\"" + new_album['bandcamp_link'] + "\" target='blank'>digital</a></h2>");
