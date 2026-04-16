import nodemailer from 'nodemailer'

class MailService{
    constructor(){
        this.transporter = nodemailer
    }
}
export default  MailService