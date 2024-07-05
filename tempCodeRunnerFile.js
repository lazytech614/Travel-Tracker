es.push(row.country_code));
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  const newCountry = req.body["country"];
  db.query("SELECT country_")
});

app.listen(port, () =>
  console.log(`Serever running on port http://localhost:${port}`)
);
