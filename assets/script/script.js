function openSidenav() {
  document.getElementById('sidenav').style.width = '250px'
}

function closeSidenav() {
  document.getElementById('sidenav').style.width = '0px'
}

const fakeData = [
  {
    id: 1,
    image:
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOHf1q.img?h=416&w=624&m=6&q=60&u=t&o=f&l=f',
    title: 'Lake George and the Village of Caldwell',
    author: 'Thomas Chambers',
    description:
      'Ini merupakan salah satu lukisan lanskap terkenal karya pelukis kelahiran Inggris, Thomas Chambers, yang pindah ke Amerika Serikat pada tahun 1832. Dalam lukisan ini, ia menampilkan dengan cantik matahari terbenam yang memesona dan sungai yang damai dengan perahu layar di tepian.',
  },
  {
    id: 2,
    image:
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOHf5o.img?h=416&w=624&m=6&q=60&u=t&o=f&l=f',
    title: 'High Point: Shandaken Mountains',
    author: 'Asher Brown Durand',
    description:
      'Lukisan ini menggambarkan suasana dekat kota Olive, New York, tempat seniman Amerika ini menikmati musim panas pada tahun 1853 hingga 1855. Bertolak belakang dengan "lanskap sejarah" yang substansial, ia berkonsentrasi pada keberadaan populasi Amerika di kawasan pinggiran – menampilkan suami istri memancing di pinggir sungai dengan latar pemandangan alam yang indah.',
  },
  {
    id: 3,
    image:
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOHkxp.img?h=416&w=624&m=6&q=60&u=t&o=f&l=f',
    title: 'Canadian Rockies (Lake Louise)',
    author: 'Albert Bierstadt',
    description:
      'Lukisan tahun 1889 karya pelukis Jerman-Amerika ini merupakan salah satu mahakaryanya dari berbagai perjalanan yang ia lakukan untuk melukis lanskap Amerika barat dan Kanada. Detail dalam lukisan tajam dan hampir seperti foto, namun, ia dengan hati-hati tetap mempertahankan tampilan yang lembut dan hampir romantis dengan penggunaan warna dan kontras yang halus.',
  },
]

const articles = document.getElementById('articles')

let article = ''

for (let item of fakeData) {
  article += `
  <article class='article card' key={item.id}>
    <div class='left-section'>
      <img src='${item.image}' />
    </div>
    <div class='right-section'>
      <h1>${item.title}</h1>
      <h4>Karya: ${item.author}</h4>
      <p>${item.description}</p>
    </div>
  </article>
  `
}

articles.innerHTML = article
