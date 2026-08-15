
const callbacks = {
    onReadyForServerApproval: function(paymentId) {
        console.log("Payment ready for server approval:", paymentId);
        fetch('https://pi-backend-sv9w.onrender.com/approve', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ paymentId: paymentId })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Approval response:", data);
        })
        .catch(error => {
            console.error("Error approving payment:", error);
        });
    },

    onReadyForServerCompletion: function(paymentId, txid) {
        console.log("Payment ready for server completion:", paymentId, txid);
        fetch('https://pi-backend-sv9w.onrender.com/complete', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ paymentId: paymentId, txid: txid })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Completion response:", data);
            alert("Payment completed successfully!");
        })
        .catch(error => {
            console.error("Error completing payment:", error);
        });
    },

    onCancel: function(paymentId) {
        console.log("Payment cancelled:", paymentId);
    },

    onError: function(error, payment) {
        console.error("Payment error:", error);
        alert("Payment error occurred: " + (error.message || error));
    }
};
