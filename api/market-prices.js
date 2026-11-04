export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets" +
      "?vs_currency=usd" +
      "&ids=bitcoin,ethereum,tether,binancecoin,solana,usd-coin" +
      "&order=market_cap_desc" +
      "&per_page=20" +
      "&page=1" +
      "&sparkline=false" +
      "&price_change_percentage=24h"
    );

    const data = await response.json();

    res.status(response.status).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Market prices unavailable"
    });
  }
}
