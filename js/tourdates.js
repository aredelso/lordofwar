var dates = [
  {
    date : new Date("2016/4/20"),
    location : "San Diego, CA",
    venue : "Brick by Brick",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/21"),
    location : "Los Angeles, CA",
    venue : "Chain Reaction",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/23"),
    location : "Pomona, CA",
    venue : "That Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/25"),
    location : "San Diego, CA",
    venue : "This Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/20"),
    location : "San Diego, CA",
    venue : "Brick by Brick",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/21"),
    location : "Los Angeles, CA",
    venue : "Chain Reaction",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/23"),
    location : "Pomona, CA",
    venue : "That Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/25"),
    location : "San Diego, CA",
    venue : "This Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/20"),
    location : "San Diego, CA",
    venue : "Brick by Brick",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/21"),
    location : "Los Angeles, CA",
    venue : "Chain Reaction",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/23"),
    location : "Pomona, CA",
    venue : "That Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/25"),
    location : "San Diego, CA",
    venue : "This Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/20"),
    location : "San Diego, CA",
    venue : "Brick by Brick",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/21"),
    location : "Los Angeles, CA",
    venue : "Chain Reaction",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/23"),
    location : "Pomona, CA",
    venue : "That Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/25"),
    location : "San Diego, CA",
    venue : "This Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/20"),
    location : "San Diego, CA",
    venue : "Brick by Brick",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/21"),
    location : "Los Angeles, CA",
    venue : "Chain Reaction",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/23"),
    location : "Pomona, CA",
    venue : "That Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/25"),
    location : "San Diego, CA",
    venue : "This Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/20"),
    location : "San Diego, CA",
    venue : "Brick by Brick",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/21"),
    location : "Los Angeles, CA",
    venue : "Chain Reaction",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/23"),
    location : "Pomona, CA",
    venue : "That Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/4/25"),
    location : "San Diego, CA",
    venue : "This Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/7/20"),
    location : "San Diego, CA",
    venue : "Brick by Brick",
    buyLink : "#"
  },
  {
    date : new Date("2016/7/21"),
    location : "Los Angeles, CA",
    venue : "Chain Reaction",
    buyLink : "#"
  },
  {
    date : new Date("2016/7/23"),
    location : "Pomona, CA",
    venue : "That Venue",
    buyLink : "#"
  },
  {
    date : new Date("2016/7/25"),
    location : "San Diego, CA",
    venue : "This Venue",
    buyLink : "#"
  },
]

dates.sort(function(a,b){
  return new Date(a.date) - new Date(b.date);
});

var upcomingDates = [];

for(var i = 0; i < dates.length; i++)
{
  var now = new Date();
  if (dates[i]["date"] >= now) {
    var month = dates[i]["date"].getMonth() + 1;
    var day = dates[i]["date"].getDate();
    var tr = "<tr>";
    var td1 = "<td class='date'>" + month + "/" + day + "</td>";
    var td2 = "<td class='location'>" + dates[i]["location"] + "</td>";
    var td3 = "<td class='venue'>" + dates[i]["venue"] + "</td>";
    if (dates[i]["buyLink"]) {
      var link = "<a href='" + dates[i]["buyLink"] + "' target='blank'><span class='fa fa-ticket' aria-hidden='true'>";
      var td4="<td class='ticket'>" + link + "</span></a></td></tr>";
    } else {
      var td4="</tr>";
    };
    upcomingDates.push(dates[i]);
    $(".datesTable").append(tr + td1 + td2 + td3 + td4);
  };
};

if (upcomingDates.length == 0) {
    $(".datesTable").append("<tr><td colspan='4'><h2>No Upcoming Dates</h2></td></tr>")
}
