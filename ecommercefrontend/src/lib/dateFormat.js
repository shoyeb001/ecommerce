const dateFormat = (timestamp)=>{
    const dateStr = timestamp;
    const dateObj = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    return formattedDate;
}
export default dateFormat;