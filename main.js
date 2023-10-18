
// const assets = {
//   FCA00C000001: "GA3TEWIUQOSAKW25DADJILDGTCMEOSELHVTH3U3HHEAW7P6TUMJP6IRN",
//   FCA00C000002: "GANS46Q7RRMFEV4FPKDCDKHYWDNG5O5EO7GZS3ZGL4MCM6ORYLMFU7P7",
//   FCA00C000003: "GD6OLQUWE3J42TYIVO3CP5M6WPYXWOE4FO2V3YWXHTA4L63ZFUXB7D7E",
//   FCA00C000004: "GA4QDG22XUJEBJC7OBT56WSPZDBIFII6TVK2KX55BSFN5T2YQPPWHUID",
//   FCA00C000005: "GB4JV3OBVNZIH3JRB4TTNNB65HR7CJR5A7LZVEHIKR3WYEXINPLMZDJN",
//   RPCIEGE00001: "GC3DQ2W7BJUF7OFKJTJH3EPGUVR3FRN2A2263PUK6DD2HN4FWW2K3OVE",
//   RPCIEGE00002: "GCIRN2JFSEJ2LQDISAM3CJP3BY2XTJFKKNYKPII5TTB2CPSB2YYIPFAP",
//   RPCIEGE00003: "GDP2PS4Q2EZHBTTLOKMDQTCW44XQ4AI5Y46AWZ3RQVYFCMPOGSCVTICB",
//   RPCIEGE00004: "GCJLBUIQLJYZCHBQCTBVOQAE6LJBKRWWDL7E5FYDDSP5X5O7MF7TCCV3",
//   RPCIEGE00005: "GCOJBFANAFYGFHFPTIEGVHP5N7K5AXLNOGAUCWM4RKYRHKH5DGOCMPLQ",
//   RPCIEGE00006: "GDD4VN7E4FWOFB5YGK5ILSIEXIUD36JZY3VIJ62H7PVWD2CKIO35QNL7",
//   RPCIEGE00007: "GC7AY72P5QWJPTEF6O7VES6HSKLDDQVY55DOKK6US2CSITEYDD5ACSTM",
//   RPCIEGE00008: "GCLC2QHTFGGV5W4SEPK6BMNUODNK6PFQRTDQOCWAEOUJKXNP2M7BGELO",
//   RPCIEGE00009: "GDCIPB65Q2DY6JFQR4GCENG5PWEAZIDUKG6QG3BJBAOCUY4KG67VR2VR",
//   RPCIEGE00010: "GA64CAONZHGEMJHZRJEPTKALTF5DCPRQP7OFYWMB4HERDEARKEAJS3MK",
//   RPCIEGE00011: "GBNKBO5Y5GHECGZR4GVBHYWFFTVHS6URYRQBOTTUZQRTFYLO7S4BDGEY",
//   RPCIEGE00012: "GCCE7VKVVBTTCK6YAPATEZM2KVXLUZNJHCWG2XRCSCHSIPX2AMFET62B",
//   RPCIEGE00013: "GASPVOXXO4QGQEEHHPHZXZMSH4Z6CVEFP5XFI5OQHNN4QHNC36VSNJ7H",
//   RPCIEGE00014: "GCUOIIC2DBWPZMTK4IXQMWK6I5XPWKULU4QHCQQLLXRGYY5QPZLQOYPX",
//   RPCIEGE00015: "GCRKFDJCKXGMYNHHGPTAM77IAYOYMPX4COABU32ZPV6M2FCUKCFJRVY4",
//   RPCIEGE00016: "GARYG2WR36J7FIFKACKYFWZ4FQ3DYAMUDHZSAEGDYERHKWHYUXLKHHRE",
//   RPCIEGE00017: "GCU4N3R6BKLAJR4YCOXRHEBR76FJRVZ3Y5OMPCGRLMGI7F26OW43YZ6F",
//   RPCIEGE00018: "GAMNO6VGY6HULC5ZM56763U3RX6XFJA5KORICTGSB5KQFVBFBX5C3ADG",
//   RPCIEGE00019: "GAPZECEAXUBKKMIDJD7QOHZ5WLGJPO5IPD5W2NXEHYKB4DQNZ2DU3JO4",
//   RPCIEGE00020: "GAU77EGHS463DG4252HPABQY5E3GYDHCPQ5AKMTQKXXU3GEA2AED3USU",
//   RPCIEGE00021: "GAPR7FXMMTHU3TIDPYKQWHHYR2HPFLTT3IMFJRDHKXLPZGYSK5OQNFOS",
//   RPCIEGE00022: "GDNGS47AZDO2M4Z2MZQKA3OS63B5Z5ETPCMSONTNCLUFDDPM2XN3KCA6",
//   RPCIEGE00023: "GCA5HMGJUPMY526JVJF7XWRBJMWQFUTVAJA3CPPXLKTQJLSCIJYTBWNA",
//   RPCIEGE00024: "GAL77EM4ABY3CAMGMXGUWTZJS4J2O5MPK3WFCH5UOC2IYLSNCDWTIGPK",
//   RPCIEGE00025: "GDO4PHUQAESUMPV4Z42U2H577QMO4CJS4LIHBMNTVW2KPYI7EZAX2SBF",
//   RPCIEGE00026: "GB7PHOM5PRNCRNZQSPFKRCWWJB2LHLFJUFNNJZTEGFQJJZSNGJLD52JB",
// };

let ASSETS = {}
let toml = await StellarSdk.StellarTomlResolver.resolve("fastcheapandoutofcontrol.com");
for (let c of toml.CURRENCIES) {
  if (c.code.startsWith("RPCIEGE") || c.code.startsWith("FCA00C")) {
    let common = c.code.endsWith("c");
    let fortress = c.code.endsWith("F");
    let community = c.code.endsWith("C");
    let rare = !common ;

    // Temporary fix for wrong issuers
    if (fortress) {
      ASSETS["G" + c.code] = {
        image: c.image,
        code: c.code,
        rare: rare,
        common: common,
      }

      continue;
    }

    if (!ASSETS[c.issuer]) {
      ASSETS[c.issuer] = {
        image: c.image,
        code: c.code,
        rare: rare,
        common: common,
      }
    }
    if (!ASSETS[c.issuer].rare) {
      ASSETS[c.issuer].rare = rare;
    }
    if (!ASSETS[c.issuer].common) {
      ASSETS[c.issuer].common = common;
    }
  }
}

const simpleSignerUrl = "https://sign.plutodao.finance";

let doc = document.querySelector(".card-grid-inner");
let content = ``;
let i = 0;
for (let asset in ASSETS) {
  if (ASSETS[asset].code.startsWith("FC")) {
    continue;
  }
  content += `
  <div class="card-grid-item ">
    <div class="card-grid-item-card-faces" ">
      <a class="card-grid-item-card">
        <div class="card-grid-item-card-front">
          <img class="card border-black "  loading="eager" id="${asset}" src="${ASSETS[asset].image}" />
          <div class="info show-hover " id="common">
            <div class="amount">0</div>
            <div class="rarity">common</div>
          </div>
          <div class="info show-hover " id="rare">
            <div class="amount">0</div>
            <div class="rarity">rare</div>
          </div>
          <video id="video${asset}" style="display:none;" preload="none" poster="${ASSETS[asset].image}">
            <source src="https://assets.rpciege.com/${ASSETS[asset].code}.mp4" autoplay="true" muted="muted" type="video/mp4" />
          </video>
        </div>
      </a>
    </div>
  </div>
  `

  i += 1;
}

content += ``;
doc.innerHTML += content;

var poped = false;
document.addEventListener("click", (ev) => {
  if (poped) {
    document.getElementById("popover").innerHTML = "";
    document.getElementById("popover").style.display = "none";

    poped = false;
    return;
  }

  if (ev.target.id.startsWith("G")) {
    let video = document.getElementById("video" + ev.target.id).cloneNode(true);

    video.style.display = "inline";
    video.muted = true;
    video.loop = true;
    video.load();
    video.play();

    document.getElementById("popover").appendChild(video);
    document.getElementById("popover").style.display = "block";
    poped = true;
    return;
  }

  if (ev.target.id == "login") {
    openConnectWindow();
    return;
  }

  if (ev.target.id.startsWith("FCA")  && !poped.state) {
    document.getElementById("popover").appendChild(ev.target.cloneNode(true));
    document.getElementById("popover").style.display = "block";
    poped = true;
    return;
  }

  // if (ev.target.id.startsWith("leaderboard")) {
  //   window.open('https://rpciege.com/leaderboard', '_blank');
  //   return;
  // }
  // if (ev.target.id.startsWith("claim")) {
  //   window.open('https://rpciege.com/claim', '_blank');
  //   return;
  // } 
});

function openConnectWindow() {
  window.open(
    `${simpleSignerUrl}/connect`,
    "Connect_Window",
    "width=360, height=450"
  );
}

async function findPosition(publicKey, code, issuer, callback) {
  let position = 1;
  let server = new StellarSdk.Server("https://horizon.stellar.org");
  let rpcassets = await server.assets().forIssuer(issuer).forCode(code).call();
  let total = (
    rpcassets.records[0].amount / 0.0000001 +
    rpcassets.records[0].num_claimable_balances
  ).toFixed(0);
  let owners = rpcassets.records[0].num_accounts;
  let r = await server.transactions().forAccount(issuer).limit(200).call();
  outer: while (r.records.length > 0) {
    for (let record of r.records) {
      let ops = await record.operations();
      for (let op of ops.records) {
        if (op.asset == `${code}:${issuer}` && op.type_i == 14) {
          if (op.claimants[0].destination == publicKey) {
            callback(position, owners, total);
            break outer;
          } else {
            position += 1;
          }
        }
      }
    }
    r = await r.next();
  }
}

async function handleMessage(e) {
  // Reject messages that are not coming from simple signer (tailor this according to your needs)
  if (e.origin !== simpleSignerUrl) {
    return;
  }

  const messageEvent = e.data;

  if (messageEvent.type === "onConnect") {
    const publicKey = messageEvent.message.publicKey;
    localStorage.setItem("publicKey", publicKey);
    //loadAccount();
    location.reload();
    // Validate the public key received. This is just good practice.
  }
}

async function loadAccount() {

  let publicKey = localStorage.getItem("publicKey");

  let params = new URL(document.location).searchParams;
  let urlId = params.get("id");
  if (urlId) {
    publicKey = urlId;
  }

  if (StellarSdk.Keypair.fromPublicKey(publicKey)) {

    document.getElementById("share-url").href = "?id=" + publicKey;
    console.log("The public key is", publicKey);
    document.getElementById("login").innerHTML =
      publicKey.substr(0, 4) + "..." + publicKey.substr(52);

    let server = new StellarSdk.Server("https://horizon.stellar.org");
    server.loadAccount(publicKey).then((account) => {
      for (let b of account.balances) {
        if (b.asset_issuer && (b.asset_code.startsWith("RPCIEGE") || b.asset_code.startsWith("FCA00"))) {
          if (b.balance > 0) {
            let idasset = b.asset_issuer; 
            let common = b.asset_code.endsWith("c");
            let fortress = b.asset_code.endsWith("F");
            let community = b.asset_code.endsWith("C");
            let rare = b.asset_code.startsWith("R") && !common ;
            console.log(idasset + " == " + b.asset_code)
            if (document.getElementById(idasset)) {
              let elem = document.getElementById(idasset);
              elem.style.filter = "grayscale(0)";
              if (rare) {
                elem.parentElement.querySelector("#rare .amount").innerHTML = Number(b.balance) * 10000000 ;
                elem.parentElement.querySelector("#rare").style.opacity = 1;
                // elem.parentElement.querySelector("#rare .rarity").innerHTML = "rare";
              } else {
                elem.parentElement.querySelector("#common .amount").innerHTML = Number(b.balance) * 10000000 ;
                elem.parentElement.querySelector("#common").style.opacity = 1;

              }

            }
            
          }
        }
      }
    });
  } else {
    document.getElementById("login").innerHTML = "Log in";
    localStorage.removeItem("publicKey");
  }
}

// see https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event
window.addEventListener("message", handleMessage);
loadAccount();
