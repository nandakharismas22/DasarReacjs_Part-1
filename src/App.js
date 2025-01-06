//PERCOBAAN 1 (Creating and nesting components )

// function MyButton() {
//   return (
//     <button>
//       Saya adalah tombol
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Selamat datang di aplikasi saya</h1>
//       <MyButton />
//     </div>
//   );
// }

//PERCOBAAN 2 (How to to add markup & styles Untuk mendisplay Data)

// const user = {
//   name: 'Nanda Kharisma Safitri',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     //markup
//     <> 
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Foto ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>//markup
//   );
// }

// PERCOBAAN 3 (How to render conditions and lists)
// const products = [
//   { title: 'Kubis', isFruit: false, id: 1 },  // Produk non-buah
//   { title: 'Bawang Putih', isFruit: false, id: 2 },  // Produk non-buah
//   { title: 'Apel', isFruit: true, id: 3 },  // Produk buah
// ];

// export default function ShoppingList() {
//   // 1. Merender daftar produk menggunakan .map()
//   //    - Di sini, `products.map()` digunakan untuk mengubah array `products` menjadi elemen-elemen <li> yang dapat ditampilkan dalam list.
//   const listItems = products.map(product =>
//     <li
//       key={product.id}  // 2. Atribut key untuk mengidentifikasi item secara unik
//       style={{
//         // 3. Kondisi render: Memeriksa apakah produk adalah buah atau bukan dan mengubah warna teks berdasarkan kondisi tersebut.
//         color: product.isFruit ? 'magenta' : 'darkgreen'  // Jika `isFruit` true, warna teks magenta, jika false, darkgreen.
//       }}
//     >
//       {product.title}  {/* Menampilkan nama produk */}
//     </li>
//   );

//   // 4. Merender daftar item sebagai <ul> dengan elemen <li> yang sudah dibuat sebelumnya
//   return (
//     <ul>{listItems}</ul>  // 5. Menampilkan seluruh daftar produk dalam sebuah unordered list (<ul>)
//   );
// }

//PERCOBAAN 4 (How to respond to events and update the screen)
// import { useState } from 'react';

// // Komponen utama yang menampilkan dua tombol penghitung
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />  {/* Tombol pertama */}
//       <MyButton />  {/* Tombol kedua */}
//     </div>
//   );
// }

// // Komponen tombol penghitung
// function MyButton() {
//   // Mendeklarasikan state 'count' yang diset ke 0 pada awalnya
//   const [count, setCount] = useState(0);

//   // Fungsi event handler untuk merespons klik pada tombol
//   function handleClick() {
//     setCount(count + 1);  // Memperbarui nilai count setiap kali tombol diklik
//   }

//   return (
//     // Tombol yang merespons klik dengan memanggil handleClick
//     <button onClick={handleClick}>
//       Clicked {count} times  {/* Menampilkan jumlah klik */}
//     </button>
//   );
// }

//PERCOBAAN 5 (How to share data between components)
import { useState } from 'react';
// Komponen utama yang menampilkan dua tombol penghitung yang diperbarui bersamaan
export default function MyApp() {
  // Mendeklarasikan state 'count' dengan nilai awal 0
  const [count, setCount] = useState(0);

  // Fungsi event handler untuk menangani klik pada tombol
  function handleClick() {
    setCount(count + 1);  // Memperbarui nilai count dengan menambahkan 1 setiap kali tombol diklik
  }

  return (
    <div>
      <h1>Penghitung yang diperbarui bersamaan</h1>
      {/* Menyediakan nilai count dan fungsi onClick ke kedua tombol */}
      <MyButton count={count} onClick={handleClick} />  {/* Tombol pertama */}
      <MyButton count={count} onClick={handleClick} />  {/* Tombol kedua */}
    </div>
  );
}

// Komponen tombol yang menerima properti 'count' dan 'onClick' dari komponen induk (MyApp)
function MyButton({ count, onClick }) {
  return (
    // Tombol yang akan memanggil fungsi onClick saat diklik
    <button onClick={onClick}>
      Diklik {count} kali  {/* Menampilkan jumlah klik berdasarkan nilai count */}
    </button>
  );
}
