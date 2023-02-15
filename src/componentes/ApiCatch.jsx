
    const apiCatch = (setTeams) => {
        fetch('http://localhost:9000/api/teams/')
        .then(response => response.json())
        .then(allTeams => setTeams(allTeams))
      }


export { apiCatch } 