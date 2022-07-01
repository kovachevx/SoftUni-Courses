function solve() {
   let boughtProducts = [];
   let totalPrice = 0;
   let buttons = Array.from(document.getElementsByClassName('product'));
   let textarea = document.querySelector('textarea');
   for (let btn of buttons) {
      btn.addEventListener('click', onClick);
   }

   function onClick(ev) {
      let product = ev.currentTarget.children[1].firstChild.nextElementSibling.textContent;
      if (!boughtProducts.includes(product)) {
         boughtProducts.push(product);
      }
      let price = Number(ev.currentTarget.children[3].textContent);
      totalPrice += price;
      textarea.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
   }

   let checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', onCheckout);

   function onCheckout() {
      textarea.textContent += `You bought ${boughtProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;

      for (let btn of buttons) {
         btn.removeEventListener('click', onClick);
      }

      checkoutBtn.removeEventListener('click', onCheckout);
   }

}