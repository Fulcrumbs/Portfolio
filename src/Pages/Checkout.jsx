import styles from "./Checkout.module.css"

export default function CheckoutButton(){
    return(
        <div className={styles.checkoutButton}>
    <stripe-buy-button
        buy-button-id="buy_btn_1SyLMRGAYC1x6VQlT4FUWrRA"
        publishable-key="pk_live_51SYlXYGAYC1x6VQlOtwePZLhPTy3f5TtrJnIY8VVIsicKeFlNzx01g4UwWRRINVya7poy3Ar7HDMfzD54MLjHitL00khEC92wF"
    >
    </stripe-buy-button>
    </div>
)}