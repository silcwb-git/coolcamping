const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const writeStream = fs.createWriteStream('post.txt');

writeStream.write(`Name|Link|Summary| \n`);

request("https://coolcamping.com/campsites/uk", {"rejectUnauthorized": false}, (error, response, html) => {
   
    if(!error && response.statusCode == 200) {
        
        const $ = cheerio.load(html)

        $('.details').each((i, el) =>{
           const name = $(el)
                .find('h3')
                .text();
            
           const link = $(el)
                .find('a')
                .attr('href');

           const summary  = $(el)
                .find('div')
                .next()
                .text()
        
        writeStream.write(`${name} | ${link} | ${summary} \n`);
       
        console.log(name, link, summary);
            
        });   
        
        console.log('it works...');
              
    }
});
