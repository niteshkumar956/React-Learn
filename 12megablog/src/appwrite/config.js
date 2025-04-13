import conf from "../conf/conf.js";
import { Client, Account , ID,Databases , Storage, Query } from "appwrite";
export class Service{
    client = new Client();
    database;
    storage;

    constructor(){
        this.client 
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteProjectID);
        
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title , slug,content , featureimage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug,{
                    title,
                   
                    content,
                    featureimage,
                    status,
                    userId
                }
            )
        } catch(error){
          console.log("Appwrite service :: createPost ::error",error);
        }
    }
 async updatePost(slug,{title ,content , featureimage, status, userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug,{
                    title,
                    content,
                    featureimage,
                    status,

                }
            )
        } catch(error){
          console.log("Appwrite service :: updatePost ::error",error);
        }
    }
async deletePost(slug){
        try{
            return await this.databases.deleteDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true;
        } catch(error){
          console.log("Appwrite service :: deletePost ::error",error);
            return false;
        }
    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch(error){
          console.log("Appwrite service :: getPost ::error",error);
        }
    }
    async getPosts(){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                [
                    Query.equal('status', 'active')
                ]
            )
        } catch(error){
          console.log("Appwrite service :: getPosts ::error",error);
        }
    }
    /*
async getPost (queries = [Query.equal('status', 'active')]) {
try{
            return await this.databases.listDocuments(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                queries,
               
            )
        } catch(error){
          console.log("Appwrite service :: getPosts ::error",error);
        }
    }
    */
// file upload service
async uploadFile(file){
    try{
        return await this.storage.createFile(
            conf.appwriteBucketID,
            ID.unique(),
            file
        )
    } catch(error){
      console.log("Appwrite service :: uploadFile ::error",error);
    }
}
async deletefile(fileId){
    try{
        return await this.storage.deleteFile(
            conf.appwriteBucketID,
            fileId
        )
    } catch(error){
      console.log("Appwrite service :: deletefile ::error",error);
    }
}
 getFilePreview(fileId){
    return this.storage.getFilePreview(
        conf.appwriteBucketID,
        fileId
    )
 }

 }

const service = new Service();
export default service;