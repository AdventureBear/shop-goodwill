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

    let collection = [{}]
    $('.auctioncategories').find('tr').each(function(i,el){
      obj = {}
      $(this).find('td').each(function(j,elem){
        if (j===0)
          obj["id"] = $(this).text()
        if (j===1)
        obj["item"]=$(this).text()
        if (j===2)
          obj["price"]=$(this).text()

      })

        collection.push(obj)
      })

    console.log(collection)

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

