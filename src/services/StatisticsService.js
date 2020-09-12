const API = "http://mesurit.com:8086/api/data/search";

async function getStatistics(dateStart, dateEnd) {
  const login = process.env.LOGIN;
  const password = process.env.PASSWORD;
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${login}:${password}`),
      "Content-Type": "application/json",
    },
    body: {
      deviceType: "WELL",
      measurementType: "NORMAL",
      searchDateEnd: {
        day: dateStart.date(),
        month: dateStart.month(),
        year: dateStart.year(),
      },
      searchDateStart: {
        day: dateEnd.date(),
        month: dateEnd.month(),
        year: dateEnd.year(),
      },
    },
  });
  const data = await res.json();
  return data[0];
}

export default { getStatistics };
