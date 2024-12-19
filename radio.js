const radioButtons = document.querySelectorAll('input[name="JAWABAN"]');
const labels = document.querySelectorAll('label[for^="step"]');

radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        const selectedValue = parseInt(radio.value); // Nilai yang dipilih

        // Update label yang aktif berdasarkan nilai
        labels.forEach((label, i) => {
            if (i < selectedValue) {
                label.classList.add('active'); // Tambah class 'active'
            } else {
                label.classList.remove('active'); // Hapus class 'active'
            }
        });
    });
});
