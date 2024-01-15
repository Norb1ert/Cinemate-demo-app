import styles from "./PricingPage.module.css";
import PageNav from "../components/PageNav";
import PricingBox from "../components/PricingBox";

function PricingPage() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <h2>
          Welcome to Cinemate, your ultimate destination for an unparalleled
          cinematic experience! Choose the subscription plan that suits your
          movie cravings and unlocks a world of unlimited entertainment.
        </h2>
        <div className={styles.pricing}>
          <PricingBox
            price={"$4.99/month"}
            level={"Basic "}
            quality={"Standard definition (SD) streaming"}
            access={"Access to a limited movie library"}
            adds={"Ad-supported browsing"}
            watchList={"Create up to 2 watchlists"}
          />
          <PricingBox
            price={"$9.99/month"}
            level={"Premium "}
            quality={"High definition (HD) streaming"}
            access={"Unlimited access to an extensive movie library"}
            adds={"Ad-free browsing"}
            watchList={"Create unlimited personalized watchlists"}
          />
          <PricingBox
            price={"$14.99/month"}
            level={"Family"}
            quality={"Ultra high definition (UHD) streaming"}
            access={"Access to movie library for the whole family"}
            adds={"Ad-free browsing for everyone"}
            watchList={"Create individual watchlists"}
          />
        </div>
      </section>
    </main>
  );
}

export default PricingPage;
