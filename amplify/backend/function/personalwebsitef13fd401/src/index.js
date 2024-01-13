exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream 
      const candidateName = streamedItem.dynamodb.NewImage.name.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S 
      const candidateMessage = streamedItem.dynamodb.NewImage.message.S 

      await ses 
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_Email], 
          }, 
          Source: process.end.SES_EMAIL, 
          Message: {
            Subject: {Data: 'Candidate Submission'},
            Body: {
              Text: {Data: `My name is ${candidateName}. You can reach me at ${candidateEmail}.
              ${candidateMessage}
              `},
            },
          },
        })
        .promise()
    }
  }
  return {status:'done'}
}