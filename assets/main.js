function cekKhodam(event) {
    event.preventDefault();
    $('#hasil').hide();
    $('#loading').show();
    $('#loading1').show();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Nama tidak boleh kosong!');
        $('#loading').hide();
        $('#loading1').hide();
        $('#hasil').show();
    } else {
        setTimeout(() => {
            let status = [
                'isi',
                'kosong'
            ];
            const randomStatus = Math.floor(Math.random() * status.length);
            if (randomStatus === 0) {
                let khodam = [
                    'sungut lele',
                    'kecoa birahi',
                    'kuntilanak arisan',
                    'beat gentayangan',
                    'kipas ketawa',
                    'tali rapia',
                    'sop buntut',
                    'harimau sumatra',
                    'dpr',
                    'kominfo',
                    'deodoran bau',
                    'kotak kardus',
                    'kuyang autopilot',
                    'lampu rgb',
                    'siluman rudal',
                    'gajah stroberi',
                    'rehan whatsapp',
                    'Kiki Aditama',
                    'bangku goyang',
                    'proyektor indonesia',
                    'dosen ghaib',
                    'Ihsandudin',
                    'argus reog',
                    'budi jhonson',
                    'kadita pantai selatan'
                ];
                const random = Math.floor(Math.random() * khodam.length);
                $('#khodamnya').html(`${nama.toUpperCase()} - Khodam kamu (${khodam[random]})`);
            }
            $('#search').val('');
            $('#loading').hide();
            $('#loading1').hide();
            $('#hasil').show();
        }, 2000); // Simulasi loading selama 2 detik
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});