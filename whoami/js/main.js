var BANNED_LINKS = [
  'http://www.reddot.com/',
  'http://www.youtube.com/'
];

$(function () {
  $.getJSON('sites.json', function (parsed) {

    var formatted = {}; // Web browsers change the URL after it is added.
    var clickedLinks = [];
    var squareElements = [];

    $('#bottom-button').css('display', 'block');

    // Remove banned links
    for (var i = 0; i < BANNED_LINKS.length; i++) {
      delete parsed[BANNED_LINKS[i]];
    }

    _.each(parsed, function (tags, url) {
      var a = document.createElement('a');
      a.href = url;
      a.innerHTML = 'OK';

      squareElements.push(a);
      formatted[a.href] = tags;
    });

    $('#squares').append(squareElements).css('display', 'block');

    window.done = function done() {
      var timesClicked = {};
      _.each(clickedLinks, function (link) {
        var tags = formatted[link];
        _.each(tags, function (tag) {
          if (timesClicked[tag] === undefined) {
            timesClicked[tag] = 0;
          }
          timesClicked[tag] += 1;
        })
      });

      var sorted = _(timesClicked)
        .map(function (times, interest) {
          return {
            interest: interest,
            times: times
          }
        })
        .sortBy('times')
        .reverse()
        .value();

       var ol = document.createElement('ol');
       var listElements = [];

       _.each(sorted, function (cat) {
         var li = document.createElement('li');
         li.innerHTML = cat.interest;
         listElements.push(li);
       });

      $(ol).append(listElements);

      if (sorted.length === 0) {
        document.body.innerHTML = '<h1>Could not determine interests</h1>';
        document.body.innerHTML += '<p>(Pssst, If you did not get any red squares, try visiting without being in Private or Incognito mode.)</p>';
      } else {
        document.body.innerHTML = '<h1>Your interests are:</h1>';
	document.body.innerHTML += '<p>No data is ever collected or recorded</p>';
        var r = Raphael(250, 0, 640, 480);

        var pie = r.piechart(320, 240, 100, _.pluck(sorted, 'times'), {
          legend: _.pluck(sorted, 'interest')
        });
		


        pie.hover(function () {
          this.sector.stop();

          this.sector.transform('s1 1 ' + this.cx, this.cy);
          this.sector.scale(1.1, 1.1, this.cx, this.cy);

          if (this.label) {
              this.label[0].stop();
              this.label[0].attr({ r: 7.5 });
              this.label[1].attr({ 'font-weight': 800 });
          }

        }, function () {
          var self = this;
          this.sector.animate({
              transform: 's1 1 ' + this.cx + ' ' + this.cy
          }, 500, "bounce");

          if (this.label) {
              this.label[0].animate({ r: 5 }, 500, 'bounce');
              this.label[1].attr({ "font-weight": 400 });
          }
        });
        document.body.appendChild(ol);
        return;
      }
    };

    $('a').click(function (e) {
      e.preventDefault();
      $(this).addClass('clicked');
      clickedLinks.push(this.href);
    });
  });
});

