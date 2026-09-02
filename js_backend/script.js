const span = document.querySelector('span');
const tabel = document.querySelector('.table');
let value = 0;

/*for (var i = 1; i <= 1000; i++) {
	span.textContent = i;
}*/

/*setInterval(function(){
	span.textContent = value;
	value += 1;
	value = (value>=10)? 0 : value
}, 100);*/


let dataSensor = async function(){
	const res = await fetch('./data_sensor.php');
	const data = await res.json();
	return data
}

// console.log(myData)

setInterval(function(){
	dataSensor().then(res=> span.textContent = res[0].nilai)
}, 1000)

let dataASN = async function(){
	const res = await fetch('./data_asn_pdi.php');
	const data = await res.json();
	return data
}

// rangkai
let isiTabel, tableHeader;

setInterval(function(){
	isiTabel = '';
	dataASN().then(res=>{
		// looping
		res.map(e=>{
			// console.log(e);
			isiTabel +=`
			<tr>
				<td>${e.id}</td>
				<td>${e.nama}</td>
				<td>${e.nip}</td>
				<td>${e.pangkat_gol}</td>
				<td>${e.jabatan}</td>
			</tr>`});

		// susun
		tableHeader=`
			<table class="table table-dark table-striped table-hover table-bordered">
				<tr>
					<th>No</th> <th>Nama</th> <th>NIP</th> <th>Pangkat/Gol</th> <th>Jabatan</th>
				</tr>
				<tr>
					${isiTabel}
				</tr>
			</table>
		`;

		// tampil
		tabel.innerHTML = tableHeader;
	});
}, 1000); 



	



