const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};
list1=document.getElementsByClassName("_acan _acap _acas _aj1-")
const gainFollowing = async () => {
    for (let i = 0; i < list1.length; i++) {
        await sleep(5000);
        list1[1].click()
    }

    console.log("The loop is finished :)");
}


// gainFollowing();
