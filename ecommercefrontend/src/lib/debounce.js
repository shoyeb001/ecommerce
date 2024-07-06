export function debounce(fn, delay){
    let timeout;
    return function (...args){
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout( ()=>{
             fn(...args)
        }, delay)
    }
}