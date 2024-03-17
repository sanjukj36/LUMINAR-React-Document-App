import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const DocumentCollectionRef= collection(db,"Documents");
class DocumentDataService{
    addDocuments=(newDocument)=>{
        return addDoc(DocumentCollectionRef,newDocument);
    };
    updateDocument=(id,updateDocument)=>{
        const DocumentDoc=doc(db,"Documents",id);
        return updateDoc(DocumentDoc,updateDocument);

    };

    deleteDocument=(id)=>{
        const DocumentDoc=doc(db,"Documents",id);
        return deleteDoc(DocumentDoc);    
    }

    getAllDocument=()=>{
        return getDocs(DocumentCollectionRef);
    };

    getDocument=(id)=>{
        const DocumentDoc=doc(db,"Documents",id);
        return getDoc(DocumentDoc);

    };


}

export default new DocumentDataService();