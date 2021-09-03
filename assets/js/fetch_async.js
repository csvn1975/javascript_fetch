const fetData = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    let data = null;
    try {
        const response = await fetch(url);
        data = await response.json();
        //console.log(data)
        return data
        /* doSomething mit data-value */
    } catch (err) {
        console.log(err.message);
    }
};
fetData()