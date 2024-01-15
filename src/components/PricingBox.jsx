import Button from "./Button";
import styles from "./pricingBox.module.css";

// eslint-disable-next-line react/prop-types
function PricingBox({ price, level, access, quality, watchList, adds }) {
  return (
    <div className={styles.pricing}>
      <h3>{level}</h3>
      <Button type="buy">{price}</Button>
      <ul>
        <li>✔ {access}</li>
        <li>✔ {quality}</li>
        <li>✔ {watchList}</li>
        <li>✔ {adds}</li>
      </ul>
      <Button type="subscribe">Subscribe</Button>
    </div>
  );
}

export default PricingBox;
