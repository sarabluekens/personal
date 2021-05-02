const submit = (e) => {
    let myuuid = uuidv4();
    const client = createClient({
      accessToken: 'CFPAT-6PcoIiZR6-99kWbq5xZBHLpNBL64MZyOZjmIS_LI-NE'
    })
    e.preventDefault();
    client.getSpace('bmr0ht5lqw49')
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createEntry('title', {
            fields: {
                title: {
                    'en-US': e.target.title.value
                },
                slug: {
                    'en-US': myuuid
                },
                letter: {
                    'en-US': e.target.message.value
                },
            }
        }))
        .then((entry) => entry.publish())
  
        .catch(console.error)
  
  }