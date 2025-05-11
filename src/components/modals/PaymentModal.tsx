import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Upload, Check, CreditCard, User } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: any;
  onConfirm: (receipt?: File | null) => void;
}
const PaymentModal = ({
  isOpen,
  onClose,
  bookingDetails,
  onConfirm,
}: PaymentModalProps) => {
  const [receipt, setReceipt] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setReceipt(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setReceiptPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Call the parent confirm handler with the receipt
      onConfirm(receipt);

      toast.success("Booking completed!");
      onClose();
    } catch (err) {
      console.error("Booking error:", err);
      toast.error("There was an error processing your booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">
            Complete Your Booking
          </DialogTitle>

          <p className="text-muted-foreground">
            Choose your payment method to confirm your booking
          </p>
        </DialogHeader>

        <div className="flex-1 space-y-6 py-4 custom-scrollbar overflow-y-auto pr-2">
          {/* Booking Summary */}
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-3 pb-2 border-b">
              Booking Summary
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between gap-2">
                <p className="font-medium">Name:</p>
                <p>{bookingDetails.name}</p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="font-medium">Email:</p>
                <p>{bookingDetails.email}</p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="font-medium">Phone:</p>
                <p>{bookingDetails.phone}</p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="font-medium">Date:</p>
                <p>
                  {bookingDetails.date instanceof Date
                    ? bookingDetails.date.toLocaleDateString()
                    : bookingDetails.date}
                </p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="font-medium">Time:</p>
                <p>{bookingDetails.time}</p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="font-medium">Service:</p>
                <p>{bookingDetails.service}</p>
              </div>

              <div className="flex justify-between gap-2">
                <p className="font-medium">Location:</p>
                <p>{bookingDetails.location}</p>
              </div>

              {bookingDetails.notes && (
                <div className="flex justify-between gap-2">
                  <p className="font-medium">Additional Notes:</p>
                  <p>{bookingDetails.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <h3 className="font-medium text-lg mb-3">Payment Method</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className={`border rounded-lg p-4 text-center transition-colors ${
                  paymentMethod === "bank"
                    ? "border-accent/50 bg-accent/5 "
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => setPaymentMethod("bank")}
              >
                <CreditCard className="h-6 w-6 mx-auto mb-2" />
                <span className="font-medium">Bank Transfer</span>
              </button>

              <button
                type="button"
                className={`border rounded-lg p-4 text-center transition-colors ${
                  paymentMethod === "person"
                    ? "border-accent/50 bg-accent/5 "
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => setPaymentMethod("person")}
              >
                <User className="h-6 w-6 mx-auto mb-2" />
                <span className="font-medium">Pay in Person</span>
              </button>
            </div>
          </div>

          {/* Bank Payment Details (shown only when bank transfer selected) */}
          {paymentMethod === "bank" && (
            <>
              <div className="border border-accent/50 bg-accent/5  p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-3 pb-2 border-b border-amber-200">
                  Bank Payment Details
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Account Name:</span>
                    <span className="font-bold">MaskAndBlade</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Account Number:</span>
                    <span className="font-bold">01234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Bank Name:</span>
                    <span className="font-bold">Bank of Africa</span>
                  </div>
                </div>
              </div>

              {/* Payment Receipt Upload */}
              <div>
                <h3 className="font-medium text-lg mb-3">Payment Receipt</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Please upload a screenshot or photo of your payment receipt
                </p>

                {!receiptPreview ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Input
                      id="receipt"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                    />
                    <label
                      htmlFor="receipt"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <span className="text-sm font-medium">
                        Click to upload receipt
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        Supports: JPG, PNG, PDF (Max 5MB)
                      </span>
                    </label>
                  </div>
                ) : (
                  <div className="bg-muted rounded-lg p-3 relative">
                    {receiptPreview.startsWith("data:image") ? (
                      <Image
                        src={receiptPreview}
                        alt="Receipt Preview"
                        className="w-[200px] max-h-[300px] mx-auto rounded-md object-cover"
                        width={200}
                        height={200}
                      />
                    ) : (
                      <div className="text-center py-6">
                        <Check className="h-10 w-10 text-green-500 mx-auto" />
                        <p className="mt-2">PDF Receipt Uploaded</p>
                      </div>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-gray-200 mt-2"
                      onClick={() => {
                        setReceipt(null);
                        setReceiptPreview(null);
                      }}
                    >
                      Change Receipt
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Pay in Person Notice */}
          {paymentMethod === "person" && (
            <div className="border border-accent/50 bg-accent/5 p-4 rounded-lg">
              <h3 className="font-medium text-lg mb-3 pb-2 border-b border-amber-200">
                Pay in Person
              </h3>
              <div className="space-y-2">
                <p>
                  Your booking will be confirmed immediately. Please bring cash
                  or card when you arrive for your appointment.
                </p>
                <p className="font-medium">
                  Note: Your appointment may be canceled if payment is not made
                  within 15 minutes of your scheduled time.
                </p>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
            className="hover:bg-gray-200"
          >
            Back to Form
          </Button>

          <Button
            className="bg-accent hover:bg-amber-300 text-black"
            onClick={handleSubmit}
            disabled={(paymentMethod === "bank" && !receipt) || isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Complete Booking"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
