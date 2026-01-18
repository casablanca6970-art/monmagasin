// --- 1. Produits ---
const produits = [
  { nom: "T-shirt Noir", prix: 120, img: "tshirt.jpg" },
  { nom: "Jeans Bleu", prix: 250, img: "jeans.jpg" },
  { nom: "Casquette Rouge", prix: 80, img: "casquette.jpg" }
];

const container = document.getElementById("produits");

produits.forEach(p => {
  const div = document.createElement("div");
  div.className = "produit";
  div.innerHTML = `
    <img src="${p.img}" width="150">
    <h3>${p.nom}</h3>
    <p>Prix : ${p.prix} DH</p>
    <button onclick="ajouterPanier('${p.nom}', ${p.prix})">Ajouter au panier</button>
  `;
  container.appendChild(div);
});

// --- 2. Panier ---
let panier = [];

function ajouterPanier(nom, prix) {
  panier.push({ nom, prix });
  afficherPanier();
}

function afficherPanier() {
  const panierDiv = document.getElementById("panier");
  let html = "<h3>Panier :</h3><ul>";
  let total = 0;
  panier.forEach(p => {
    html += `<li>${p.nom} - ${p.prix} DH</li>`;
    total += p.prix;
  });
  html += `</ul><p>Total : ${total} DH</p>`;
  panierDiv.innerHTML = html;
}

// --- 3. Firebase ---
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// --- 4. Envoyer la commande ---
function envoyerCommande(nomClient, adresse) {
  db.collection("commandes").add({
    nomClient,
    adresse,
    panier,
    date: new Date()
  })
  .then(() => alert("Commande envoyée !"))
  .catch(err => console.error(err));
}
