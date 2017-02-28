/**
 * Created by suzanne on 2/28/17.
 */
var request = require('request'),
  cheerio = require('cheerio'),
  urls = [];

var sourceURL="https://www.shopgoodwill.com/listings/listByCatFilter.asp?catID=187&ending=Items";

request(sourceURL, function(err ,res, body) {

  if (!err && res.statusCode==200){
    console.log(res.statusCode);
    var $ = cheerio.load(body);



    $('.auctioncategories').filter(function(){
      var data = $(this).children().children().children().children()
      console.log(data)
    })


  }
});


//Ironman Data
/*
 request('http://track.ironman.com/newsearch.php?y=2014&race=arizona&v=3.0', function(err ,res, body) {
 console.log(res.statusCode);
 if (!err && res.statusCode==200){
 var $ = cheerio.load(body);

 $('a.athlete', '#eventResults').each(function(){
 //var url = $(this).attr('href');
 var name = $(this).attr('href');
 console.log(name);
 });

 }

 */

