# spam-final
**Klasifikasi Spam vs Non-Spam**

Proyek ini adalah aplikasi web berbasis machine learning yang mampu mengklasifikasikan isi email menjadi spam atau non-spam. Aplikasi ini dibangun menggunakan metode ensemble learning dari dua model: Naive Bayes dan Random Forest, dengan implementasi full-stack menggunakan backend Flask dan frontend yang sederhana namun responsif.
Proyek ini dibuat untuk memenuhi tugas Mata Kuliah Machine Learning COMP6577001 LK01 Tahun Ajaran GENAP Semester 4 yang beranggotakan:
-HUGO SACHIO WIJAYA 2702261151 Computer Science: Bertugas sebagai penulis utama code, backend, serta frontend (tetapi bukan penullis model backend pickle)
BRIAN ALEXANDER 2702282351 : Bertugas menguji dan menciptakan model pickle Naive Bayes, Random Forest dan stacking serta menguji akurasi model 
EZEKIEL AARON SETIAWAN 2702288600 : Bertugas mendeploy model ke frontend streamlit
#Fitur

* Klasifikasi isi email melalui input manual atau unggah file (.txt/.pdf)
* Pembelajaran ensemble (Naive Bayes + Random Forest)
* Menampilkan skor kepercayaan (confidence score) dari model
* Autentikasi pengguna (register & login)
* Riwayat klasifikasi tersimpan untuk setiap pengguna
* Tampilan frontend dengan opsi mode gelap/terang (uji coba)

Teknologi yang Digunakan

* Backend: Python, Flask, scikit-learn
* Frontend: HTML, CSS, JavaScript
* Model ML: Naive Bayes, Random Forest (Model Stacking)
* Lainnya: pdfplumber, Flask-Login

### **Cara Menjalankan Aplikasi**

1. Buat virtual environment (KOMPATIBEL: PYTHON 3.10 **JANGAN PAKAI 3.13):

   ```bash
   python -m 3.10 venv venv310
   source venv/bin/activate  # atau venv\\Scripts\\activate di Windows
   ```

2. Instal dependensi:

   ```bash
   pip install -r requirements.txt
   ```

3. Jalankan backend Flask:

   ```bash
   cd backend
   python app.py
   ```

4. Buka folder frontend dan akses `LoginPage.html`, `RegisterPage.html`, atau `MainPage.html` melalui browser.

### **Struktur Proyek** ** Kurang lebih hanya illustrasi, untuk lebih akurat bisa dibuka filenya

```
spam-nonspam-classifier/
├── backend/
│   ├── app.py
│   ├── model/
│   └── ...
├── frontend/
│   ├── index.html
│   └── ...
├── requirements.txt
└── README.md
```

---

### **Penulis**

**Hugo Sachio Wijaya** (`hugocodeseverything`)
Disubmit sebagai bagian dari portofolio untuk Apple Developer Academy 2025 Sekaligus bagian dari tugas kelompok Machine Learning Kelompok 3.

---

### **Lisensi**

Proyek ini dilisensikan di bawah [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).
Anda dapat melihat isi repositori ini, namun tidak diperkenankan untuk menyalin, memodifikasi, mendistribusikan, atau menggunakannya untuk keperluan komersial tanpa izin eksplisit.
