import conf
const conf = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDataBaseID: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_BUCKET_ID),
}
export default conf