import instance from "./api"

// Get your profile
async function getProfile() {
    const data = await instance.get("/mini-project/api/auth/me")
    console.log(data)
    return data
}

// Get user info by user userId
async function getProfileById(userId) {
    const data = await instance.get(`/mini-project/api/auth/user/${userId}`)
    console.log(data)
    return data
}

// Get all users
async function getAllUsers() {
    const data = await instance.get("/mini-project/api/auth/users")
    console.log(data)
    return data
}

// Get your transactions
async function getTransactions() {
    const data = await instance.get("/mini-project/api/transactions/my")
    console.log(data)
    return data
}


// Deposit to your account
async function deposit(formData) {
    console.log("amount", formData.amount)
    const data = await instance.put("mini-project/api/transactions/deposit",formData.amount)
    console.log(data)
    return data
}

// Withdraw from your account
async function withdraw(amount) {
    console.log("amount", amount)
    const data = await instance.put("mini-project/api/transactions/withdraw", amount)
    console.log(data)
    return data
}

export { getProfile, getProfileById, getAllUsers, getTransactions, deposit, withdraw };
