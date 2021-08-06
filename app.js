fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Philippines')
    .then(response => response.json())
    .then(data => {
        const {All} = data;
        var confirmed = All.confirmed;
        var recovered = All.recovered;
        var deaths = All.deaths;
        var activeCases = confirmed-recovered-deaths;
        if(confirmed === 0){
            document.getElementById('confirmed').innerText= '---'
        } else{
            document.getElementById('confirmed').innerText=confirmed;
        }
        if(recovered === 0){
            document.getElementById('recovered').innerText= '---'
        } else{
            document.getElementById('recovered').innerText=recovered;
        }
        if(deaths === 0){
            document.getElementById('deaths').innerText= '---'
        } else{
            document.getElementById('deaths').innerText=deaths;
        }
        if(confirmed === 0 || recovered === 0 || deaths === 0){
            document.getElementById('activeCases').innerText= '---'
        } else{
            document.getElementById('activeCases').innerText=activeCases;
        }

    })


fetch('https://covid-api.mmediagroup.fr/v1/vaccines?country=Philippines')
    .then(response => response.json())
    .then(data => {
        const {All} = data;
        var administered = All.administered;
        var people_vaccinated = All.people_vaccinated;
        var people_partially_vaccinated = All.people_partially_vaccinated;
        document.getElementById('administered').innerText=administered;
        document.getElementById('peopleVaccinated').innerText=people_vaccinated;
        document.getElementById('peoplePartiallyVaccinated').innerText=people_partially_vaccinated;
    })