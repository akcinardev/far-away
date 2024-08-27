export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items on your list.</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything. You are good to go!"
          : `You have ${numItems} items on your list and you have packed ${numPacked} of them. You are ${
              percentage ? percentage : 0
            }% ready!`}
      </em>
    </footer>
  );
}
