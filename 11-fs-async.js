const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err,res)=>{
    if(err) {
        console.log(err)
        return null
    }
    console.log(res)
    const first = res
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if(err) {
            console.log(err)
            return null
        }
        console.log(res)
        const second = res

        writeFile('./content/result-async.txt', `This is the aysnc result: 
            ${first}, 
            ${second}`, (err, res) => {
            if(err) {
                console.log(err);
                return null;
            }
            console.log(res)
        })
    })
});