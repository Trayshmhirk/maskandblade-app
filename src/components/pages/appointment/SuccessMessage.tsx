import { Button } from "@/components/ui/button";

// Extracted Success Message component
const SuccessMessage = ({ onReturnHome }: { onReturnHome: () => void }) => (
  <section className="py-16 md:py-20 bg-gray-50">
    <div className="app_container min-h-[40vh] flex items-center justify-center">
      <div className="bg-white p-8 border rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your booking. We&apos;ll reach out shortly after
          confirming your payment.
        </p>

        <Button
          onClick={onReturnHome}
          className="bg-accent hover:bg-amber-300 text-black"
        >
          Return Home
        </Button>
      </div>
    </div>
  </section>
);

export default SuccessMessage;
