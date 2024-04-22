export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list.</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const perc = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {perc == 100
          ? "You got everything ready to go ✈"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${perc.toFixed(
              2
            )}%)`}
      </em>
    </footer>
  );
}
