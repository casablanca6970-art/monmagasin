function commander(produit) {
  let nom = prompt("Votre nom ?");
  let taille = prompt("Taille ?");
  let adresse = prompt("Adresse ?");
  let tel = prompt("Téléphone ?");

  let message = `
🛒 COMMANDE
Magasin : TWINS MODE
Produit : ${produit}
Taille : ${taille}
Nom : ${nom}
Adresse : ${adresse}
Téléphone : ${tel}
`;

  window.open(
    "https://wa.me/212662401126?text=" + encodeURIComponent(message)
  );
}
