import conf from "../conf/conf.js";
import { Client, Account , ID } from "appwrite";

 export class AuthService{
    client = new Client();
    account ;
    constructor(){
        this.client
        .setEndpoint(config.appwriteurl)
        .setProject(config.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({email , password , name}){
        try{
           const userAccount= await this.account.create(IDBCursor.unique(), email , password , name);
          if(userAccount){
               return this.login({email,password});
              }
           else { 
    return userAccount; 
           }

        }catch(error){
            throw error;
        }
        
    }
async login ({email , password}){
    try {
      return   await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
        throw new Error("error");
        
    }

}
async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        throw error
    }
    return null;
}
async logout(){
    try {
        await this.account.deleteSession();
    } catch (error) {
        console.log("Appwrite logout: error ")
    }
 }
}
const authService = new AuthService();
 export default AuthService