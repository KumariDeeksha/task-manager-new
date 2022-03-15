const sgMail=require('@sendgrid/mail')

const sendgridAPIkey='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'

sgMail.setApiKey(sendgridAPIkey)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'deeku2117@gmail.com',
        subject:'thanks for joining',
        text:`welcome to the app,${name}.Let me know how you get to know us`
        
    })

}

const sendCancellationEmail=(email,name)=>{
   sgMail.send({
       to:email,
       from:'deeku2117@gmail.com',
       subject:'sorry to see you go',
       text:`goodbye,${name}.I hope to see you back sometime soon`

   })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}