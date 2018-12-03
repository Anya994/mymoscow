$(document).ready(function() {

    // Синхронный запрос
    
        // $('#ajax-btn').click(function() {
    
        //         var xhr = new XMLHttpRequest();
        //         xhr.open('GET', 'get_users.php',  false);
        //         xhr.send();
    
        //         if(xhr.status == 200) {
        //         console.log(xhr.responseText);
        //         $('#ajax-container').html(xhr.responseText);
        //         }
    
        //     }); 
    
     
    
    // Асинхронный запрос
    
    
            $('#ajax-btn-async').click(function() {
        
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', 'get_users.php',  true);
                    xhr.send();
    
                xhr.onreadystatechange = function(){
                        if(xhr.readyState !=4 ) {
    
                            return;
                        }
    
                    if(xhr.status == 200) {
                    $('#ajax-container').html(xhr.responseText);
                    }
                        
                }
    
                }); 
    
    // Получить пользователя 
                
            $('#ajax-get-user').click(function() {
                var user_id = $ ('#user-id').val();
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'get_user_name.php?user_id='+user_id, true);
                xhr.send();
    
                 xhr.onreadystatechange = function(){
                    if(xhr.readyState !=4 ) {
                        return;
                    }
    
                if(xhr.status == 200) {
                $('#ajax-container').html('<h2>' + xhr.responseText + '</h2>');
                }
                    
            }
    
            }); 
        
            $('form').submit(function() {
                var user_name = $('#user-name').val();
                var user_box = $('#user-box').val();
                var user_message = $('#user-message').val();
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'create_user.php?name='+user_name+'&box='+user_box+'&message='+user_message, true);
                xhr.send();
    
                 xhr.onreadystatechange = function(){
                    if(xhr.readyState !=4 ) {
                        return;
                    }
    
                if(xhr.status == 200) {
                $('#ajax-container').html('<h2>' + xhr.responseText + '</h2>');
                }       
            }
    
            return false;

            }); 

     });