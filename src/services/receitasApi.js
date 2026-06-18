export async function buscarReceitasPorNome(nomeReceita) {
  const resposta = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${nomeReceita}`
  );

  const dados = await resposta.json();

  if (dados.meals === null) {
    return [];
  }

  return dados.meals;
}