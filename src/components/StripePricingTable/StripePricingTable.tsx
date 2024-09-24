import { useEffect } from 'react';

const StripePricingTable = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Hola</h1>
      <stripe-pricing-table
        pricing-table-id="prctbl_1Q2GBYP9nlbropOBdJtFHKPb"
        publishable-key="pk_test_51Q0Sj1P9nlbropOBdlLCGvxtY44VuPXE82Trsy5N04q3c5atgkUtadLLiCgRPEnRxWVIWcqtpRIkzdHau0PZSjvF007wBVHvSu"
      ></stripe-pricing-table>
    </div>
  );
};

export default StripePricingTable;