import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

interface SendEmailProps {
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({ to, subject, body }: SendEmailProps) => {
  try{
    const {data, error} = 
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to,
        subject,
        text: body,
        })

        if(error){
            console.error('Respond error:', error)
            throw new Error(error.message)
        }

        return data

    }catch(err){
        console.error('Failed to send email:', err)
        throw err
    }
}
