export const getOtherUserName = (item,id) => {
    let otherUserId = "";
    item.assignedUsersIds.map((item,index)=>{
        if (id !== item){
            otherUserId = item;
        }
    })
    console.log("otherUserName",item.assignedUsersNames[otherUserId])
    return item.assignedUsersNames[otherUserId]
}