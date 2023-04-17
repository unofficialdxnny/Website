document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.netlify.com/api/v1/sites/1630956c-77e1-4162-8636-a83d116d0c2e/deploys')
      .then(function (response) {
        return response.json();
      })
      .then(function (deploys) {
        var lastDeploy = deploys[0];
        var lastDeployDate = new Date(lastDeploy.created_at);
        document.getElementById('last-published-date').textContent = lastDeployDate.toLocaleString();
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  