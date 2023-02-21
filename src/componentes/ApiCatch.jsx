
    const apiCatch = (setTeams) => {
        fetch('https://teams-soccer-api.onrender.com')
        .then(response => response.json())
        .then(allTeams => setTeams(allTeams))
      }


export { apiCatch } 