let current_users :string[]= ['shehbaz','Imran','nawaz','zrdari','Diesel']
let new_users :string[]=['maryam','imran','bilawal','diesel','siraj'];
    
for(let new_user of new_users){
    let is_userAvailable = true
    for(let current_user of current_users){
        if(current_user.toLowerCase()===new_user.toLowerCase()){
            is_userAvailable = false
        }
    }
    if(is_userAvailable){
        console.log(`The username '${new_user}' is available`)
    } else{
        console.log(`This username '${new_user}' is already taken`)
    }
}