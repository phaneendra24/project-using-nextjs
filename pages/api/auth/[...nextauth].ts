import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'


const options={
    site : process.env.NEXTAUTH_URL
}

export default (req,res)=> NextAuth(req,res,options)