const canva = window.Canva;

document.getElementById("btn-quote").addEventListener("click", async () => {
  await canva.design.insertText("“A educação é a arma mais poderosa que você pode usar para mudar o mundo.” — Nelson Mandela");
});

document.getElementById("btn-tip").addEventListener("click", async () => {
  await canva.design.insertText("💡 Dica: Revise o conteúdo em intervalos curtos — isso ajuda na memorização!");
});

document.getElementById("btn-image").addEventListener("click", async () => {
  await canva.design.insertImage({
    url: "https://images.unsplash.com/photo-1584697964154-ef376b3c9f22",
    alt: "Imagem educativa - Aprender para Transformar"
  });
});
