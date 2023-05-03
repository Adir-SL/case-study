function notionAPI(title, email, position, company){
  
    if(document.getElementById("form-name").value !== '' && document.getElementById("form-mail").value !== '' && document.getElementById("form-position").value !== '' && document.getElementById("form-mail").checkValidity() == true){
      createNotionPage(title, email, position, company);
      document.getElementById("submit-button").value = "Joined !";
      setTimeout(function(){
        document.getElementById("submit-button").value = "Join the waiting list";
        document.getElementById("form-name").value = '';
        document.getElementById("form-mail").value = '';
        document.getElementById("form-position").value = '';
        document.getElementById("form-company").value = '';
      }, 2000);
    }
  
}

function createNotionPage(title, email, position, company) {
  const data = JSON.stringify({
    parent: {
      database_id: "59b459b8152e4a808a80998126fc27ff",
    },

    properties: {
      Name: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      Email: {
        email: email,
      },
      Position: {
        rich_text: [
          {
            text: {
              content: position,
            },
          },
        ],
      },
      Company: {
        rich_text: [
          {
            text: {
              content: company,
            },
          },
        ],
      },
    },
  });
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Notion-Version": "2021-08-16",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  };

  fetch("https://corsproxy.io/?https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Notion-Version": "2021-05-13",
      Authorization:
        "Bearer secret_LLZvVuOqXWfvNFjURcdzr57pwx53Y6TlZjs2zIyTpLt",
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => { 
      console.log("data", data)
    })
    .catch((err) => console.log("error", err));
}