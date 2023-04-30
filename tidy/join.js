function createNotionPage(name, mail, position, company) {
    console.log(name, mail, position, company);
    const url = "https://api.notion.com/v1/pages";
    const proxiedUrl = `https:\/\/cors-anywhere.herokuapp.com/${url}`;
    const databaseId = "438db125d76c4173b624024e81134de5";
    const apiKey = "secret_Wa9Misu7LjcsQ6ZY06GeAsFxeTGrQhzuWHrdNqigc1L";
    const data = {
        parent: {
            database_id: databaseId,
        },
        properties: {
            Name: {
                title: [
                    {
                        text: {
                            content: name,
                        },
                    },
                ],
            },
            Email: {
                email: mail,
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
    };
    fetch(proxiedUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-02-22",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to create Notion page");
            }
            console.log("Notion page created successfully");
        })
        .catch((error) => {
            console.error(error);
        });
}