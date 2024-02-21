

function useDebounce(callback,delay=700){
    let id;
     return (...movies)=>{

        clearTimeout(id);
       id=  setTimeout(()=>{
            callback(...movies)
        },delay)
     }

}

export default useDebounce;