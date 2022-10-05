window.addEventListener("load", async (e) => {
  yourFunction();
});
function yourFunction() {
  const ethereum = window;
  if (ethereum) {
    window.ethereum.request({ method: "eth_requestAccounts" }).then(async (result) => {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      })
      const walletaddress = result[0]
      await axios.post(`http://13.233.108.70:5000/userBalance/?publicAddress=${walletaddress}`)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      });
    });
  }
}


// function makeCode () {		
// 	const ethereum = window;
// 	if (ethereum) {
// 		window.ethereum.request({ method: "eth_requestAccounts" })
// 		.then((newAccount) => {
// 			alert(newAccount[0]);
// 		});
// 	}
// }
// makeCode();
