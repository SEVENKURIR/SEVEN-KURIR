# Seven Kurir — Dashboard Real-Time

## Isi folder
- `index.html` — dashboard publik, bisa diakses siapa aja (link ini yang dikirim ke driver)
- `admin.html` — panel admin (login dulu), buat input orderan harian, bikin setoran, catat cashflow
- `firebase-config.js` — koneksi ke database Firebase (aman, bukan password rahasia)
- `style.css` — tampilan/desain

## Cara upload ke GitHub Pages
1. Buat repo baru di github.com (Public), misal `seven-kurir`
2. Upload SEMUA file di folder ini ke repo itu (index.html, admin.html, firebase-config.js, style.css)
3. Masuk Settings → Pages → pilih branch `main`, folder `/root` → Save
4. Tunggu 1-2 menit, link jadi: `https://username-kamu.github.io/seven-kurir/`
5. Link itu yang dikirim ke driver. Buat admin, tambahin `/admin.html` di belakangnya.

## Cara pakai sehari-hari
1. Buka `admin.html`, login pakai akun yang udah dibikin di Firebase Authentication
2. **Input orderan harian**: pilih driver, tanggal, nominal → Simpan. Bisa diinput berkali-kali sehari kalau perlu (per orderan atau digabung per hari, terserah).
3. Dashboard driver (`index.html`) otomatis update seketika — nggak perlu upload apa-apa lagi ke GitHub.
4. **Buat setoran**: pilih driver, rentang tanggal, persen potongan → sistem otomatis jumlahin orderan di rentang itu, lalu hitung bersih.
5. **Cashflow pribadi**: catat uang masuk/keluar admin, terpisah dari data driver, cuma keliatan pas admin login.

## Kalau lupa password admin
Buka Firebase Console → Authentication → Users → klik akun admin → reset password.

## Nambah admin baru
Firebase Console → Authentication → Users → Add user → isi email & password baru.
