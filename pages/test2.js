const submit = (e) => {

    const client = require('contentful-management').createClient({
       space: 'bmr0ht5lqw49',
       accessToken: 'CFPAT-6PcoIiZR6-99kWbq5xZBHLpNBL64MZyOZjmIS_LI-NE'    
    })
     e.preventDefault();
      client.getSpace(space)
      .then((space) => space.createEntry({content_type: 'title'}, {
          fields: { 
            message: {
              'en-us': e.target.message.value
            } ,
            slug: {
              'en-us': e.target.title.value
            } ,
            title: {
              'en-us': e.target.title.value
            },
            "localized": true,
          }
          
      }))
      
      .then((entry) => entry.publish())
      .catch(console.error)
      console.log(e.target.title.value);
       e.target.reset();
  };