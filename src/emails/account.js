const sgMail=require('@sendgrid/mail')
require('dotenv').config()



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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