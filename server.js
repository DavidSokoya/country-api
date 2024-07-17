const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let naijaStates = {

    "abia" : {
            "name" : "Abia",
            "capital" : "Umuahia",
            "slogan" : "God's Own State",
            "lgas" : ["Aba North","Arochukwu","Aba South","Bende","Isiala Ngwa North","Ikwuano","Isiala Ngwa South","Isuikwuato","Obi Ngwa","Ohafia","Osisioma","Ugwunagbo","Ukwa East","Ukwa West","Umuahia North","Umuahia South","Umu Nneochi"],
            "governor" : "Dr Alex Otti"       
            },
    "adamawa" : {
            "name" : "Adamawa",
            "capital" : "Yola",
            "slogan" : "Land of Beauty",
            "lgas" : ["Demsa","Fufure","Ganye","Gayuk","Gombi","Grie","Hong","Jada","Larmurde","Madagali","Maiha","Mayo Belwa","Michika","Mubi North","Mubi South","Numan","Shelleng","Song","Toungo","Yola North","Yola South"],
            "governor" : "Ahmadu Umaru Fintiri"
    },
    "akwa ibom" : {
            "name" : "Akwa Ibom",
            "capital" : "Uyo",
            "slogan" : "Land of Promise",
            "lgas" : [
                "Abak",
                "Eastern Obolo",
                "Eket",
                "Esit Eket",
                "Essien Udim",
                "Etim Ekpo",
                "Etinan",
                "Ibeno",
                "Ibesikpo Asutan",
                "Ibiono-Ibom",
                "Ikot Abasi",
                "Ika",
                "Ikono",
                "Ikot Ekpene",
                "Ini",
                "Mkpat-Enin",
                "Itu",
                "Mbo",
                "Nsit-Atai",
                "Nsit-Ibom",
                "Nsit-Ubium",
                "Obot Akara",
                "Okobo",
                "Onna",
                "Oron",
                "Udung-Uko",
                "Ukanafun",
                "Oruk Anam",
                "Uruan",
                "Urue-Offong/Oruko",
                "Uyo"
              ],
            "governor" : "Umo Eno"
    },
    "anambra" : {
        "name" : "Anambra",
        "capital" : "Awka",
        "slogan" : "Light of the Nation",
        "lgas" : [
            "Aguata",
            "Anambra East",
            "Anaocha",
            "Awka North",
            "Anambra West",
            "Awka South",
            "Ayamelum",
            "Dunukofia",
            "Ekwusigo",
            "Idemili North",
            "Idemili South",
            "Ihiala",
            "Njikoka",
            "Nnewi North",
            "Nnewi South",
            "Ogbaru",
            "Onitsha North",
            "Onitsha South",
            "Orumba North",
            "Orumba South",
            "Oyi"
          ],
        "governor" : "Charles Soludo"
    },
    "bauchi" : {
        "name" : "Bauchi",
        "capital" : "Bauchi",
        "slogan" : "Pearl of Tourism",
        "lgas" : [
            "Alkaleri",
            "Bauchi",
            "Bogoro",
            "Damban",
            "Darazo",
            "Dass",
            "Gamawa",
            "Ganjuwa",
            "Giade",
            "Itas/Gadau",
            "Jama'are",
            "Katagum",
            "Kirfi",
            "Misau",
            "Ningi",
            "Shira",
            "Tafawa Balewa",
            "Toro",
            "Warji",
            "Zaki"
          ],
        "governor" : "Bala Abdulkadir Mohammed"
     },
     "bayelsa" : {
        "name" : "Bayelsa",
        "capital" : "Yenagoa",
        "slogan" : "Glory of all lands",
        "lgas" : [
            "Brass",
            "Ekeremor",
            "Kolokuma/Opokuma",
            "Nembe",
            "Ogbia",
            "Sagbama",
            "Southern Ijaw",
            "Yenagoa"
          ],
        "governor" : "Douye Diri"
    },
    "benue" : {
        "name" : "Benue",
        "capital" : "Makurdi",
        "slogan" : "Food Basket of the Nation",
        "lgas" : [
            "Agatu",
            "Apa",
            "Ado",
            "Buruku",
            "Gboko",
            "Guma",
            "Gwer East",
            "Gwer West",
            "Katsina-Ala",
            "Konshisha",
            "Kwande",
            "Logo",
            "Makurdi",
            "Obi",
            "Ogbadibo",
            "Ohimini",
            "Oju",
            "Okpokwu",
            "Oturkpo",
            "Tarka",
            "Ukum",
            "Ushongo",
            "Vandeikya"
          ],
        "governor" : "Hyacinth Iormem Alia"
    },
    "borno" : {
        "name" : "Borno",
        "capital" : "Maiduguri",
        "slogan" : "Home of Peace",
        "lgas" : [
            "Abadam",
            "Askira/Uba",
            "Bama",
            "Bayo",
            "Biu",
            "Chibok",
            "Damboa",
            "Dikwa",
            "Guzamala",
            "Gubio",
            "Hawul",
            "Gwoza",
            "Jere",
            "Kaga",
            "Kala/Balge",
            "Konduga",
            "Kukawa",
            "Kwaya Kusar",
            "Mafa",
            "Magumeri",
            "Maiduguri",
            "Mobbar",
            "Marte",
            "Monguno",
            "Ngala",
            "Nganzai",
            "Shani"
          ],
        "governor" : "Babagana Umara Zulum"
    },
    "cross River" : {
        "name" : "Cross River",
        "capital" : "Calabar",
        "slogan" : "The People's Paradise",
        "lgas" : [
            "Abi",
            "Akamkpa",
            "Akpabuyo",
            "Bakassi",
            "Bekwarra",
            "Biase",
            "Boki",
            "Calabar Municipal",
            "Calabar South",
            "Etung",
            "Ikom",
            "Obanliku",
            "Obubra",
            "Obudu",
            "Odukpani",
            "Ogoja",
            "Yakuur",
            "Yala"
          ],
        "governor" : "Bassey Edet Otu"
    },
    "delta" : {
        "name" : "Delta",
        "capital" : "Asaba",
        "slogan" : "The Big Heart",
        "lgas" : [
            "Aniocha North",
            "Aniocha South",
            "Bomadi",
            "Burutu",
            "Ethiope West",
            "Ethiope East",
            "Ika North East",
            "Ika South",
            "Isoko North",
            "Isoko South",
            "Ndokwa East",
            "Ndokwa West",
            "Okpe",
            "Oshimili North",
            "Oshimili South",
            "Patani",
            "Sapele",
            "Udu",
            "Ughelli North",
            "Ukwuani",
            "Ughelli South",
            "Uvwie",
            "Warri North",
            "Warri South",
            "Warri South West"
          ],
        "governor" : "Sheriff Oborevwori"
    },
    "ebonyi" : {
        "name" : "Ebonyi",
        "capital" : "Abakaliki",
        "slogan" : "Salt of the Nation",
        "lgas" : [
            "Abakaliki",
            "Afikpo North",
            "Ebonyi",
            "Afikpo South",
            "Ezza North",
            "Ikwo",
            "Ezza South",
            "Ivo",
            "Ishielu",
            "Izzi",
            "Ohaozara",
            "Ohaukwu",
            "Onicha"
          ],
        "governor" : "Francis Nwifuru"
    },
    "edo" : {
        "name" : "Edo",
        "capital" : "Benin City",
        "slogan" : "Heart Beat of Nigeria",
        "lgas" : [
            "Akoko-Edo",
            "Egor",
            "Esan Central",
            "Esan North-East",
            "Esan South-East",
            "Esan West",
            "Etsako Central",
            "Etsako East",
            "Etsako West",
            "Igueben",
            "Ikpoba Okha",
            "Orhionmwon",
            "Oredo",
            "Ovia North-East",
            "Ovia South-West",
            "Owan East",
            "Owan West",
            "Uhunmwonde"
          ],
        "governor" : "Godwin Obaseki"
    },
    "ekiti" : {
        "name" : "Ekiti",
        "capital" : "Ado - Ekiti",
        "slogan" : "Land of Honour and Integrity",
        "lgas" : [
                "Ado Ekiti",
                "Efon",
                "Ekiti East",
                "Ekiti South-West",
                "Ekiti West",
                "Emure",
                "Gbonyin",
                "Ido Osi",
                "Ijero",
                "Ikere",
                "Ilejemeje",
                "Irepodun/Ifelodun",
                "Ikole",
                "Ise/Orun",
                "Moba",
                "Oye"
              ],
        "governor" : "Biodun Abayomi Oyebanji"
    },
    "enugu" : {
        "name" : "Enugun",
        "capital" : "Enugun",
        "slogan" : "Coal City State",
        "lgas" : [
            "Awgu",
            "Aninri",
            "Enugu East",
            "Enugu North",
            "Ezeagu",
            "Enugu South",
            "Igbo Etiti",
            "Igbo Eze North",
            "Igbo Eze South",
            "Isi Uzo",
            "Nkanu East",
            "Nkanu West",
            "Nsukka",
            "Udenu",
            "Oji River",
            "Uzo Uwani",
            "Udi"
          ],
        "governor" : "Dr. Peter Ndubuisi Mbah"
    },
    "abuja" : {
        "name" : "Fedral Capital Teritory",
        "capital" : "",
        "slogan" : "Centre of Unity",
        "lgas" : [
            "Abaji",
            "Bwari",
            "Gwagwalada",
            "Kuje",
            "Kwali",
            "Municipal Area Council"
          ],
        "minister" : "Nyesom Ezenwo Wike"
    },
    "gombe" : {
        "name" : "Gombe",
        "capital" : "Gombe",
        "slogan" : "Jewel in the Savannah",
        "lgas" : [
            "Akko",
            "Balanga",
            "Billiri",
            "Dukku",
            "Funakaye",
            "Gombe",
            "Kaltungo",
            "Kwami",
            "Nafada",
            "Shongom",
            "Yamaltu/Deba"
          ],
        "governor" : "Muhammad Inuwa Yahaya"
    },
    "imo" : {
        "name" : "Imo",
        "capital" : "Owerri",
        "slogan" : "Eastern Heartland",
        "lgas" : [
            "Aboh Mbaise",
            "Ahiazu Mbaise",
            "Ehime Mbano",
            "Ezinihitte",
            "Ideato North",
            "Ideato South",
            "Ihitte/Uboma",
            "Ikeduru",
            "Isiala Mbano",
            "Mbaitoli",
            "Isu",
            "Ngor Okpala",
            "Njaba",
            "Nkwerre",
            "Nwangele",
            "Obowo",
            "Oguta",
            "Ohaji/Egbema",
            "Okigwe",
            "Orlu",
            "Orsu",
            "Oru East",
            "Oru West",
            "Owerri Municipal",
            "Owerri North",
            "Unuimo",
            "Owerri West"
          ],
        "governor" : "Hope Odidika Uzodinma"
    },
    "jigawa" : {
        "name" : "Jigawa",
        "capital" : "Dutse",
        "slogan" : "The New World",
        "lgas" : [
            "Auyo",
            "Babura",
            "Buji",
            "Biriniwa",
            "Birnin Kudu",
            "Dutse",
            "Gagarawa",
            "Garki",
            "Gumel",
            "Guri",
            "Gwaram",
            "Gwiwa",
            "Hadejia",
            "Jahun",
            "Kafin Hausa",
            "Kazaure",
            "Kiri Kasama",
            "Kiyawa",
            "Kaugama",
            "Maigatari",
            "Malam Madori",
            "Miga",
            "Sule Tankarkar",
            "Roni",
            "Ringim",
            "Yankwashi",
            "Taura"
          ],
        "governor" : "Malam Umar A. Namadi"
    },
    "kaduna" : {
        "name" : "Kaduna",
        "capital" : "Kaduna",
        "slogan" : "Centre of Learning",
        "lgas" : [
            "Birnin Gwari",
            "Chikun",
            "Giwa",
            "Ikara",
            "Igabi",
            "Jaba",
            "Jema'a",
            "Kachia",
            "Kaduna North",
            "Kaduna South",
            "Kagarko",
            "Kajuru",
            "Kaura",
            "Kauru",
            "Kubau",
            "Kudan",
            "Lere",
            "Makarfi",
            "Sabon Gari",
            "Sanga",
            "Soba",
            "Zangon Kataf",
            "Zaria"
          ],
        "governor" : "Uba Sani"
    },
    "kano" : {
        "name" : "Kano",
        "capital" : "Kano",
        "slogan" : "	Centre of Commerce",
        "lgas" : [
            "Ajingi",
            "Albasu",
            "Bagwai",
            "Bebeji",
            "Bichi",
            "Bunkure",
            "Dala",
            "Dambatta",
            "Dawakin Kudu",
            "Dawakin Tofa",
            "Doguwa",
            "Fagge",
            "Gabasawa",
            "Garko",
            "Garun Mallam",
            "Gezawa",
            "Gaya",
            "Gwale",
            "Gwarzo",
            "Kabo",
            "Kano Municipal",
            "Karaye",
            "Kibiya",
            "Kiru",
            "Kumbotso",
            "Kunchi",
            "Kura",
            "Madobi",
            "Makoda",
            "Minjibir",
            "Nasarawa",
            "Rano",
            "Rimin Gado",
            "Rogo",
            "Shanono",
            "Takai",
            "Sumaila",
            "Tarauni",
            "Tofa",
            "Tsanyawa",
            "Tudun Wada",
            "Ungogo",
            "Warawa",
            "Wudil"
          ],
        "governor" : "Engr. Abba Kabir Yusuf"
    },
    "katsina" : {
        "name" : "Kastina",
        "capital" : "Kastina",
        "slogan" : "Home of Hospitality",
        "lgas" : [
            "Bakori",
            "Batagarawa",
            "Batsari",
            "Baure",
            "Bindawa",
            "Charanchi",
            "Danja",
            "Dandume",
            "Dan Musa",
            "Daura",
            "Dutsi",
            "Dutsin Ma",
            "Faskari",
            "Funtua",
            "Ingawa",
            "Jibia",
            "Kafur",
            "Kaita",
            "Kankara",
            "Kankia",
            "Katsina",
            "Kurfi",
            "Kusada",
            "Mai'Adua",
            "Malumfashi",
            "Mani",
            "Mashi",
            "Matazu",
            "Musawa",
            "Rimi",
            "Sabuwa",
            "Safana",
            "Sandamu",
            "Zango"
          ],
        "governor" : "Dikko Umaru Radda"
    },
    "kebbi" : {
        "name" : "Kebbi",
        "capital" : "Birnin Kebbi",
        "slogan" : "Land of Equity",
        "lgas" : [
            "Aleiro",
            "Argungu",
            "Arewa Dandi",
            "Augie",
            "Bagudo",
            "Birnin Kebbi",
            "Bunza",
            "Dandi",
            "Fakai",
            "Gwandu",
            "Jega",
            "Kalgo",
            "Koko/Besse",
            "Maiyama",
            "Ngaski",
            "Shanga",
            "Suru",
            "Sakaba",
            "Wasagu/Danko",
            "Yauri",
            "Zuru"
        ],
        "governor" : "Abubakar Atiku Bagudu"
    },
    "kogi" : {
        "name" : "Kogi",
        "capital" : "Lokoja",
        "slogan" : "The Confluence State",
        "lgas" : [
            "Ajaokuta",
            "Adavi",
            "Ankpa",
            "Bassa",
            "Dekina",
            "Ibaji",
            "Idah",
            "Igalamela Odolu",
            "Ijumu",
            "Kogi",
            "Kabba/Bunu",
            "Lokoja",
            "Ofu",
            "Mopa Muro",
            "Ogori/Magongo",
            "Okehi",
            "Okene",
            "Olamaboro",
            "Omala",
            "Yagba East",
            "Yagba West"
          ],
        "governor" : "Yahaya Adoza Bello"
    },
    "kwara" : {
        "name" : "Kwara",
        "capital" : "Ilorin",
        "slogan" : "State of Harmony",
        "lgas" : [
            "Asa",
            "Baruten",
            "Edu",
            "Ilorin East",
            "Ifelodun",
            "Ilorin South",
            "Ekiti Kwara State",
            "Ilorin West",
            "Irepodun",
            "Isin",
            "Kaiama",
            "Moro",
            "Offa",
            "Oke Ero",
            "Oyun",
            "Pategi"
          ],
        "governor" : "Abdul Rahman Abdul Razaq"
    },
    "lagos" : {
        "name" : "Lagos",
        "capital" : "Ikeja",
        "slogan" : "State of Excellence",
        "lgas" : [
            "Agege",
            "Ajeromi-Ifelodun",
            "Alimosho",
            "Amuwo-Odofin",
            "Badagry",
            "Apapa",
            "Epe",
            "Eti Osa",
            "Ibeju-Lekki",
            "Ifako-Ijaiye",
            "Ikeja",
            "Ikorodu",
            "Kosofe",
            "Lagos Island",
            "Mushin",
            "Lagos Mainland",
            "Ojo",
            "Oshodi-Isolo",
            "Shomolu",
            "Surulere Lagos State"
          ],
        "governor" : "Babajide Olusola Sanwo-Olu"
    },
    "nasarawa" : {
        "name" : "Nasarawa",
        "capital" : "Lafia",
        "slogan" : "	Home of Solid Minerals",
        "lgas" : [
            "Akwanga",
            "Awe",
            "Doma",
            "Karu",
            "Keana",
            "Keffi",
            "Lafia",
            "Kokona",
            "Nasarawa Egon",
            "Nasarawa",
            "Obi",
            "Toto",
            "Wamba"
          ],
        "governor" : "Abdullahi Sule"
    },
    "niger" : {
        "name" : "Niger",
        "capital" : "Mina",
        "slogan" : "The Power State",
        "lgas" : [
            "Agaie",
            "Agwara",
            "Bida",
            "Borgu",
            "Bosso",
            "Chanchaga",
            "Edati",
            "Gbako",
            "Gurara",
            "Katcha",
            "Kontagora",
            "Lapai",
            "Lavun",
            "Mariga",
            "Magama",
            "Mokwa",
            "Mashegu",
            "Moya",
            "Paikoro",
            "Rafi",
            "Rijau",
            "Shiroro",
            "Suleja",
            "Tafa",
            "Wushishi"
          ],
        "governor" : "Mohammed Umar Bago"
    },
    "ogun" : {
        "name" : "Ogun",
        "capital" : "Abeokuta",
        "slogan" : "Gateway State",
        "lgas" : [
            "Abeokuta North",
            "Abeokuta South",
            "Ado-Odo/Ota",
            "Egbado North",
            "Ewekoro",
            "Egbado South",
            "Ijebu North",
            "Ijebu East",
            "Ifo",
            "Ijebu Ode",
            "Ijebu North East",
            "Imeko Afon",
            "Ikenne",
            "Ipokia",
            "Odeda",
            "Obafemi Owode",
            "Odogbolu",
            "Remo North",
            "Ogun Waterside",
            "Shagamu"
          ],
        "governor" : " State	Dapo Abiodun"
    },
    "ondo" : {
        "name" : "Ondo",
        "capital" : "Akure",
        "slogan" : "Sunshine State",
        "lgas" : [
            "Akoko North-East",
            "Akoko North-West",
            "Akoko South-West",
            "Akoko South-East",
            "Akure North",
            "Akure South",
            "Ese Odo",
            "Idanre",
            "Ifedore",
            "Ilaje",
            "Irele",
            "Ile Oluji/Okeigbo",
            "Odigbo",
            "Okitipupa",
            "Ondo West",
            "Ose",
            "Ondo East",
            "Owo"
          ],
        "governor" : "Rotimi Akeredolu"
    },
    "osun" : {
        "name" : "Osun",
        "capital" : "Oshogbo",
        "slogan" : "Land of Virtue",
        "lgas" : [
            "Aiyedire",
            "Atakunmosa West",
            "Atakunmosa East",
            "Aiyedaade",
            "Boluwaduro",
            "Boripe",
            "Ife East",
            "Ede South",
            "Ife North",
            "Ede North",
            "Ife South",
            "Ejigbo",
            "Ife Central",
            "Ifedayo",
            "Egbedore",
            "Ila",
            "Ifelodun",
            "Ilesa East",
            "Ilesa West",
            "Irepodun",
            "Irewole",
            "Isokan",
            "Iwo",
            "Obokun",
            "Odo Otin",
            "Ola Oluwa",
            "Olorunda",
            "Oriade",
            "Orolu",
            "Osogbo"
          ],
        "governor" : "Ademola Nurudeen Adeleke"
    },
    "oyo" : {
        "name" : "Oyo",
        "capital" : "Ibadan",
        "slogan" : "Pace Setter State",
        "lgas" : [
            "Afijio",
            "Akinyele",
            "Atiba",
            "Atisbo",
            "Egbeda",
            "Ibadan North",
            "Ibadan North-East",
            "Ibadan North-West",
            "Ibadan South-East",
            "Ibarapa Central",
            "Ibadan South-West",
            "Ibarapa East",
            "Ido",
            "Ibarapa North",
            "Irepo",
            "Iseyin",
            "Itesiwaju",
            "Iwajowa",
            "Kajola",
            "Lagelu",
            "Ogbomosho North",
            "Ogbomosho South",
            "Ogo Oluwa",
            "Olorunsogo",
            "Oluyole",
            "Ona Ara",
            "Orelope",
            "Ori Ire",
            "Oyo",
            "Oyo East",
            "Saki East",
            "Saki West",
            "Surulere Oyo State"
          ],
        "governor" : "Oluseyi Abiodun Makinde"
    },
    "plateau" : {
        "name" : "Plateau",
        "capital" : "Jos",
        "slogan" : "Home of Peace and Tourism",
        "lgas" : [
            "Bokkos",
            "Barkin Ladi",
            "Bassa",
            "Jos East",
            "Jos North",
            "Jos South",
            "Kanam",
            "Kanke",
            "Langtang South",
            "Langtang North",
            "Mangu",
            "Mikang",
            "Pankshin",
            "Qua'an Pan",
            "Riyom",
            "Shendam",
            "Wase"
          ],
        "governor" : "Caleb Manasseh Mutfwang"
    },
    "rivers" : {
        "name" : "Rivers",
        "capital" : "Port Harcourt",
        "slogan" : "Treasure Base of the Nation",
        "lgas" : [
            "Abua/Odual",
            "Ahoada East",
            "Ahoada West",
            "Andoni",
            "Akuku-Toru",
            "Asari-Toru",
            "Bonny",
            "Degema",
            "Emuoha",
            "Eleme",
            "Ikwerre",
            "Etche",
            "Gokana",
            "Khana",
            "Obio/Akpor",
            "Ogba/Egbema/Ndoni",
            "Ogu/Bolo",
            "Okrika",
            "Omuma",
            "Opobo/Nkoro",
            "Oyigbo",
            "Port Harcourt",
            "Tai"
          ],
        "governor" : "Siminalayi Fubara"
    },
    "sokoto" : {
        "name" : "Sokoto",
        "capital" : "Sokoto",
        "slogan" : "Seat of the Caliphate",
        "lgas" : [
            "Gudu",
            "Gwadabawa",
            "Illela",
            "Isa",
            "Kebbe",
            "Kware",
            "Rabah",
            "Sabon Birni",
            "Shagari",
            "Silame",
            "Sokoto North",
            "Sokoto South",
            "Tambuwal",
            "Tangaza",
            "Tureta",
            "Wamako",
            "Wurno",
            "Yabo",
            "Binji",
            "Bodinga",
            "Dange Shuni",
            "Goronyo",
            "Gada"
          ],
        "governor" : "Ahmad Aliyu"
    },
    "taraba" : {
        "name" : "Taraba",
        "capital" : "Jalingo",
        "slogan" : "Nature's Gift to the Nation",
        "lgas" : [
            "Ardo Kola",
            "Bali",
            "Donga",
            "Gashaka",
            "Gassol",
            "Ibi",
            "Jalingo",
            "Karim Lamido",
            "Kumi",
            "Lau",
            "Sardauna",
            "Takum",
            "Ussa",
            "Wukari",
            "Yorro",
            "Zing"
          ],
        "governor" : "Agbu Kefas"
    },

  "yobe" : {
    "name" : "Yobe",
    "capital" : "Damaturu",
    "slogan" : "Pride of the Sahel",
    "lgas" :  [
        "Bade",
        "Bursari",
        "Damaturu",
        "Fika",
        "Fune",
        "Geidam",
        "Gujba",
        "Gulani",
        "Jakusko",
        "Karasuwa",
        "Machina",
        "Nangere",
        "Nguru",
        "Potiskum",
        "Tarmuwa",
        "Yunusari",
        "Yusufari"
      ],
    "governor" : "Mai Mala Buni"
 },
  "zamfara" : {
    "name" : "Zamfara",
    "capital" : "Gusau",
    "slogan" : "Farming is Our Pride",
    "lgas" : [
        "Anka",
        "Birnin Magaji/Kiyaw",
        "Bakura",
        "Bukkuyum",
        "Bungudu",
        "Gummi",
        "Gusau",
        "Kaura Namoda",
        "Maradun",
        "Shinkafi",
        "Maru",
        "Talata Mafara",
        "Tsafe",
        "Zurmi"
      ],
    "governor" : "Dauda lawal"
  },
  "unknown" : {
    "name" : "unknown",
    "capital" : "unknown",
    "slogan" : "unknowne",
    "lgas" : [],
    "governor" : "unknown"
  }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const stateName = request.params.name.toLowerCase()
    if(naijaStates[stateName]){
        response.json(naijaStates[stateName])
    }else{
        response.json(naijaStates['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})