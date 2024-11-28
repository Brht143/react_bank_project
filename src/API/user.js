import instance from "./api"

// Get your profile
async function getProfile() {
    const data = await instance.get("mini-project/api/auth/me")
    console.log("Profile ", data)
    return data
}

// Upload Profile Image
async function uploadProfilePic(image) {
    console.log("deposit", image)
    const data = await instance.put("/mini-project/api/auth/profile",image)
    console.log(data)
    return data
}


// Get user info by user userId
async function getProfileById(userId) {
    const data = await instance.get(`mini-project/api/auth/user/${userId}`)
    console.log(data)
    return data
}

// Get all users
async function getAllUsers() {
    const data = await instance.get("mini-project/api/auth/users")
    console.log("Users List ", data)
    return data
}

// Get your transactions
async function getTransactions() {
    const data = await instance.get("mini-project/api/transactions/my")
    console.log("Transactions List", data)
    return data
}


// Deposit to your account
async function deposit(formData) {
    console.log("deposit", formData)
    const data = await instance.put("mini-project/api/transactions/deposit",formData)
    console.log(data)
    return data
}

// Withdraw from your account
async function withdraw(formData) {
    console.log("withdraw", formData)
    const data = await instance.put("mini-project/api/transactions/withdraw", formData)
    console.log(data)
    return data
}

// Transfer
async function transfer(transferData) {

    const requiredData = {
        amount: transferData.amount,
        username: transferData.username
    }
    const data = await instance.put(`/mini-project/api/transactions/transfer/${transferData.receiver}`, requiredData)
    console.log("Transfer ", data)
    return data
}

export { getProfile, uploadProfilePic,  getProfileById, getAllUsers, getTransactions, deposit, withdraw, transfer };
