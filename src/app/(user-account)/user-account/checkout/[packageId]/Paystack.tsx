// "use client";

// import { environment } from "@/src/app/environment/environment";
// import { FormEvent } from "react";

// export default function Paystack() {
//   const plans = {
//     bronze: 5000,
//     silver: 10000,
//     gold: 20000,
//   };

//   //   const plan = params.packageId;
//   //   const amount = plans[plan];
//   const amount = 20000;

//   return (
//     <>
//       <PayButton email="customer@email.com" amount={amount} plan={"bronze"} />
//     </>
//   );
// }


//  function PayButton({
//   email,
//   amount,
//   plan,
// }: {
//   email: string;
//   amount: number;
//   plan: string;
// }) {
//   const handlePayment = () => {
//     const handler = (window as any).PaystackPop.setup({
//       key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // REQUIRED
//       email: email, // REQUIRED
//       amount: amount * 100, // REQUIRED (kobo)
//       currency: "NGN",

//       metadata: {
//         plan,
//       },

//       callback: async (response: any) => {
//         await fetch("/api/paystack/verify", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             reference: response.reference,
//             plan,
//           }),
//         });

//         alert("Payment successful");
//       },

//       onClose: () => {
//         console.log("Payment closed");
//       },
//     });

//     handler.openIframe();
//   };

//   return (
//     <button
//       onClick={handlePayment}
//       className="bg-green-600 text-white px-6 py-3 rounded-lg"
//     >
//       Pay ₦{amount}
//     </button>
//   );
// }
