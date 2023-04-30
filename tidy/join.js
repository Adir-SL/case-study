function createNotionPage(name, mail, position, company) {
    console.log(name, mail, position, company);
    const url = "https://api.notion.com/v1/pages";
    const proxiedUrl = `https:\/\/cors-anywhere.herokuapp.com/${url}`;
    const databaseId = "59b459b8152e4a808a80998126fc27ff";
    const apiKey = "secret_LLZvVuOqXWfvNFjURcdzr57pwx53Y6TlZjs2zIyTpLt";
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

// secret_LLZvVuOqXWfvNFjURcdzr57pwx53Y6TlZjs2zIyTpLt

// https://www.notion.so/59b459b8152e4a808a80998126fc27ff?v=59dee72f69ed4af899f8920921bd6f26&pvs=4
