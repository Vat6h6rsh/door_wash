import Header from "@/components/header";
import PricingCard from "@/components/pricingCard";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <PricingCard
        title="Pro Plan"
        price="$49"
        features={[
          "Unlimited Access",
          "Priority Support",
          "Custom Features",
          "Free Updates",
        ]}
        buttonLabel="Subscribe Now"
      />
    </div>
  );
}
