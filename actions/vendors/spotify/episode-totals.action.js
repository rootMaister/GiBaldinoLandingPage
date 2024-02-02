const episodeTotalsAction = async () => {
  const token =
    "BQAoHmuxJyYLRp8yZ8InuPICorjEaxsQbqwTDJCJ6nyaYhOc3JuQd7Q3y3_ZatRfH_cutUXN9HGSlEC6qY-0TE27hTUsZ_v7bC9FPqi3wNZpqTC5pe9YY4pVs3Do3MgrLgCJ1u8JShkG4yt-HoPZR7eG2WHbcHZGww_1CTWVXyRMd6xFcM6hm8bbKV-NE38TILhsVGEHSJYJBwhPLksvnaesez11-GeDIn3I4K2NFP6_cSk-b0My48jh9RIt-RYpWbhjG8AS1T1XuQWui28eJeq8";

  const res = await fetch(
    `https://api.spotify.com/v1/shows/7u6FZwkBNf7fW6csb5eEf4`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  res.json().then((data) => {
    const element = document.getElementById("cassette-data");
    element.innerText = `Totalizando ${data.total_episodes} episódios`;
  });
};

episodeTotalsAction();
