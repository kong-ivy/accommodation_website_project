import React from 'react'

export default function PostData(type,userData) {
    let url="http://127.0.0.1:8080/v2/user";
    return new Promise((resolve,reject)=>{
        let res=fetch(url,{
            method: 'post',
            headers:{
                'content-type':'application/json',
                'accept':'application/xml'
            },
            body: JSON.stringify(userData)
        }).then((result) => {
            result.json().then((resp)=>{
                resolve(resp)

            })
            
            .catch((error) =>{
                reject(error);
            });
        
        });
    });
}
