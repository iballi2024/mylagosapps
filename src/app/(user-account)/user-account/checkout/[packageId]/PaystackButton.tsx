"use client";

import { environment } from "@/src/app/environment/environment";

interface PaystackPopSetupConfig {
  key: string;
  email: string;
  amount: number;
  currency: string;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
}

interface PaystackPopHandler {
  openIframe: () => void;
}

interface PaystackPop {
  setup: (config: PaystackPopSetupConfig) => PaystackPopHandler;
}

declare global {
  interface Window {
    PaystackPop?: PaystackPop;
  }
}

export default function PaystackButton({
  email,
  amount,
}: {
  email: string;
  amount: number;
}) {
  const pay = () => {
    const PaystackPop = window.PaystackPop;

    if (!PaystackPop) {
      alert("Payment system not loaded yet");
      return;
    }

    const handler = PaystackPop.setup({
      key: environment.paystack.publicKey,
      email: email,
      amount: amount * 100, // convert to kobo
      currency: "NGN",

      callback: function (response: { reference: string }) {
        console.log("Payment reference:", response.reference);

        alert("Payment successful");
      },

      onClose: function () {
        console.log("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={pay}
      className="cursor-pointer bg-green-600 text-white px-6 py-3 rounded-lg"
    >
      Pay ₦{amount}
    </button>
  );
}
