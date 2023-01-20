
//initialize new XML http request

let xhr = new XMLHttpRequest();

//URL passing as request to methods

xhr.open("GET", "https://restcountries.com/v3.1/all");


//process the request on server and retrieve the data
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
        let data = JSON.parse(this.response);
        // for(i in data){
        //     console.log(`
        //     Region: ${data[i].region}
        //     `)
        // }
        console.log(data);
        //a.Get all the countries from the Asia continent /region using the Filter function

        let asianCountries=data.filter((place)=>place.region === "Asia")
        console.log(asianCountries);

        //b.Get all the countries with a population of less than 2 lakhs using Filter function
        let population=data.filter((data)=>data.population <= 200000)
        console.log(population);

        //c.Print the following details name, capital, flag using forEach function
        data.forEach((data)=>{
            console.log(`
            Name:${data.name.common},
            capital:${data.capital},
            flag:${data.flags.png}
            `)
        })

        //d.Print the total population of countries using reduce function
        let totPopulation=data.reduce((prev, curr)=>{
            return prev+curr.population;
        },0)
        console.log(totPopulation);

        //e.Print the country which uses US Dollars as currency.
        let usDollar=data.filter((data)=>{

            if(data.currencies === "$"){
                console.log(`
                Name:${data.name.common}
                `)
            }
        })
        


    }
}

xhr.send();