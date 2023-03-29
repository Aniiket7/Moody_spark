let total = 0
const router = require('express').Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Item = require('../Models/ProductModel');


router.post("/ids/:item_ids", async (req, res) => {
    const { item_ids } = req.params;
    let p = item_ids.split('_')
    p.pop();	
    for(let i=0;i<p.length;i++){
        let item = await Item.findById(p[i])
        total = total + item.price
    }
    console.log(total)
});



const razor = new Razorpay({
    key_id: "rzp_test_A5nfFb3qV9GdGB",
    key_secret: "1oNKtfSNhIuSvO7QFkOcDev3",
});

router.post("/do/:item_ids", async (req, res) => {
    
    const { item_ids } = req.params;
    let p = item_ids.split('_')
    p.pop();
    console.log(p)
    for(let i=0;i<p.length;i++){
        let item = await Item.findById(p[i])
        total = total + item.price
    }
    console.log(total)
	try {
		const instance = new Razorpay({
			key_id: "rzp_test_A5nfFb3qV9GdGB",
			key_secret: "1oNKtfSNhIuSvO7QFkOcDev3",
		});

		const options = {
			amount: total * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});
router.post("/do/single/:iid", async (req, res) => {

	const { iid } = req.params;
	let item = await Item.findById(iid)
	total = item.price
	
    
	try {
		const instance = new Razorpay({
			key_id: "rzp_test_A5nfFb3qV9GdGB",
			key_secret: "1oNKtfSNhIuSvO7QFkOcDev3",
		});

		const options = {
			amount: total * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

router.post("/verify", async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", "1oNKtfSNhIuSvO7QFkOcDev3")
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});





module.exports = router;
