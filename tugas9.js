function objectVar() {
   let menu = {
      cafeLatte : {
         nama : 'cafe latte',
         harga : 25000
      },
      esJeruk : {
         nama : 'es jeruk',
         harga : 12000
      },
      satePadang : {
         nama : 'sate padang',
         harga : 19000
      },
      empalGentong : {
         nama : 'empal gentong',
         harga : 20000
      }
   }
   for (let i in menu) {
      console.log(menu[i]);
   }
}
objectVar()