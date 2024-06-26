// Crear la clase CallActions
class CallActions {
    //agregar metodo toggle audio
        toggleAudio() { 
            const result = ApiRTCHelper.toggleAudio();
            return result;
        }
    //agregar metodo toggle video 
        toggleVideo() { 
            ApiRTCHelper.toggleVideo();
            return ApiRTCHelper.toggleVideo();
        }
    
    // Agregar método leaveConversation 
    async leaveConversation() {
        await ApiRTCHelper.leaveConversation();   
     }
}
    
    
    