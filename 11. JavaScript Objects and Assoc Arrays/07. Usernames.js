function usernames(arr) {
    //Now taking Unique names - NO DUPLICATES. :)
    let users = Array.from(new Set(arr));
    users = users
        .sort((user1, user2) => sortMe(user1, user2));
    console.log(users.join("\n"));
    function sortMe(user1, user2) {
        if (user1.length > user2.length) {
            return 1;
        } else if (user1.length < user2.length) {
            return -1;
        } else {
            return user1.localeCompare(user2);
        }
    }
}