class DatabaseHelper {    
    static saveChat(chat){
        let promesa = new Promise((resolve, reject) => {
              
            const databaseRef = firebase.database().ref('chats');
            
            const newChatRef = databaseRef.push();
            
            newChatRef.set(chat).then(() => {
                
                console.log(newChatRef.key);
                resolve(newChatRef.key);
            })
            .catch((error) => {
                
                reject(error);
            });
        });
        
        return promesa;
    }

    static getChats(roomCode){
        return [
            { 
                "action": "chat",
                "message": "XYZ",
                "sender": {
                    "name":"John Doe",
                    "picture": "images/avatar.jpeg"
                }
            },
            {
                action: "file",
                file: "12345/test.txt",
                sender: {
                    name: "John Doe",
                    picture: "images/avatar.jpeg"
                }   
            },
            { 
                "action": "chat",
                "message": "XYZ",
                "sender": {
                    "name":"John Doe",
                    "picture": "images/avatar.jpeg"
                }
            }
        ];
    }

    static addNote(note) {
        let promesa = new Promise((resolve, reject) => {
            
            const databaseRef = firebase.database().ref('notes');         
            const newNoteRef = databaseRef.push();    
       
            newNoteRef.set(note).then(() => {
                console.log(newNoteRef.key);
                resolve(newNoteRef.key);
            })
            .catch((error) => {
                reject(error);
            });
        });
        
        return promesa;
    }

    static editNote(note){
        return true;

    }

    static deleteNote(idNote){
        return true;

    }


    static getNotes(roomCode){
        return [
            {
                "sender": {
                  "name": "XYZ",
                  "picture": "images/avatar.jpeg"
                },
                "content": {
                  "message": "XYZ",
                  "color": "#000"
                }
            },
            {
                "sender": {
                  "name": "XYZ",
                  "picture": "images/avatar.jpeg"
                },
                "content": {
                  "message": "XYZ",
                  "color": "#000"
                }
            }
        ];
    }
}