
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
export function handlesIcon(val) {
  return ('text--' + (val.split('--')[1] - 2));
}

export function handelTextContentModalDelete(val) {
  let arr = val?.split('||')
  return `
  <i class="fa-regular fa-key text--10 color-text-warning font--semibold"></i> <span class="text--10 color-text-warning">${arr[0]}</span> <br />
  <i class="fa-light fa-signature text--10 color-text-warning font--semibold"></i> <span class="text--10 color-text-warning">${arr[1]}</span>
  `
}

export function randomNumber(val){
  switch (val){
    case 'rate':{
      return (Math.random() * (500 - 100) + 100).toFixed();
    }
    case 'star':{
      return (Math.random() * (5 - 3) + 3).toFixed(2);
    }
    case 'price-old':{
      return (Math.random() * (900 - 300) + 300).toFixed()*1000
    }
    case 'discount':{
      return (Math.random() * (20 - 1) + 1).toFixed()
    }
  }
}

export function formatCurrency(val){
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
