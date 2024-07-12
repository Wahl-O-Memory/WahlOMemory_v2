export function loadProgress(uID){
    let data=localStorage.getItem(uID)
    if (data!=null){
        data=JSON.parse(data)
    }
    return data
}
export function setProgress(uID,data){
    localStorage.setItem(uID,JSON.stringify(data))
}