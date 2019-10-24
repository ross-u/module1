// starter-code/js/index.js

var $cart = document.querySelector('#cart tbody');

//
// Calc
//

var $calc = document.getElementById('calc');

//
// Iteration 1
//

function updateSubtot($product) {
  var $subtot = $product.querySelector('.subtot span');
  var $pu = $product.querySelector('.pu span');
  var $qty = $product.querySelector('.qty input');

  var pu = Number($pu.textContent);
  var qty = Number($qty.value) || 0;
  var subtot = pu*qty;
  
  $subtot.textContent = subtot; // update the product's subtotal

  return subtot;
}

var $bigtotal = document.querySelector('h2 span');

function calcAll() {
  var sum = 0;

  //
  // Iteration 2
  //

  var $products = [...document.querySelectorAll('.product')]; // find all the products
  $products.forEach(function ($product) {
    var subtot = updateSubtot($product);

    sum += subtot;
  });

  // Iteration 3 : update the total with `sum`
  $bigtotal.textContent = sum;
}

$calc.onclick = calcAll;

//
// Iteration 4
//

var $deleteButtons = [...document.querySelectorAll('.btn-delete')];

function bindDeleteButton($deleteButton) {
  $deleteButton.onclick = function (e) {
    // delete the product
    var $product = e.currentTarget.parentNode.parentNode; // product tr
    $cart.removeChild($product);

    calcAll(); // once deleted, recalc all
  };
}
$deleteButtons.forEach(bindDeleteButton);

//
// Iteration 5
//

var $createButton = document.getElementById('create');
$createButton.onclick = function () {
  var $name = document.querySelector('.new input[type="text"]');
  var $pu = document.querySelector('.new input[type="number"]');

  var $tr = document.createElement('tr');
  $tr.className = 'product';
  $tr.innerHTML = `
    <td class="name">
      <span>${$name.value}</span>
    </td>

    <td class="pu">
      $<span>${$pu.value}</span>
    </td>

    <td class="qty">
      <label>
        <input type="number" value="0" min="0">
      </label>
    </td>

    <td class="subtot">
      $<span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">delete</button>
    </td>
  `;
  $cart.appendChild($tr);

  // don't forget to bind the .onclick handler
  bindDeleteButton($tr.querySelector('.btn-delete'));

  $name.value = '';
  $pu.value = '';
};
