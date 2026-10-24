// Connexion à la base Supabase de l'annuaire.
// Ces deux valeurs se trouvent dans Supabase > Project Settings > API.
// La clé « anon / publishable » est faite pour être visible : ce sont les règles d'accès
// de la base (réservée aux membres) qui protègent les données, pas cette clé.
window.ANNUAIRE_CONFIG = {
  supabaseUrl: "https://zsgekjidtzwypjssglbx.supabase.co",
  supabaseAnonKey: "sb_publishable_H-6I3DxUjDAq8H03OgxusA_9C0DB9HS",
  contactAcces: ""      // facultatif : qui contacter pour obtenir l'accès, ex. "Julien (chef de service)"
};
