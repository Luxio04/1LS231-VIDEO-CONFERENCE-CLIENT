class StorageHelper{
    static getFiles (path){
        return [
            `uploads/file1.txt`,
            `uploads/file2.jpg`,
            `uploads/file3.pdf`
        ];
    }

    static upload(file,path,progress_callback){
        return true; 
    }

    static download(path) {  
        return "https://google.com";
    }
}

