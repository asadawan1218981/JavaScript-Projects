const users = [
    { name: "Asad", balance: 200 },
    { name: "kazim", balance: 300 },
    { name: "yousuf", balance: 2900 },
    { name: "siddiq", balance: 5000 }
];

function performAction(userName, action, targetUserName = null, amount = 0) {
    let user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());
    if (!user) {
        return `User "${userName}" not found.`;
    }

    switch (action) {
        case "deposit":
            user.balance += amount;
            return `${user.name} deposited $${amount}. New balance: $${user.balance}`;

        case "withdraw":
            if (amount <= user.balance) {
                user.balance -= amount;
                return `${user.name} withdrew $${amount}. New balance: $${user.balance}`;
            } else {
                return `${user.name} has insufficient balance.`;
            }

        case "transfer":
            let targetUser = users.find(u => u.name.toLowerCase() === targetUserName.toLowerCase());
            if (!targetUser) {
                return `Target user "${targetUserName}" not found.`;
            }
            if (amount <= user.balance) {
                user.balance -= amount;
                targetUser.balance += amount;
                return `${user.name} transferred $${amount} to ${targetUser.name}. New balance: $${user.balance}`;
            } else {
                return `${user.name} has insufficient balance for transfer.`;
            }

        case "checkBalance":
            return `${user.name}'s current balance: $${user.balance}`;

        default:
            return "Invalid action.";
    }
}

// ✅ Corrected function calls
console.log(performAction("Asad", "deposit", null, 200));
console.log(performAction("kazim", "withdraw", null, 300));
console.log(performAction("yousuf", "transfer", "siddiq", 100));
console.log(performAction("siddiq", "checkBalance"));
