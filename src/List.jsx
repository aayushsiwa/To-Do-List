import Item from "./Item";

export default function List({ tos, toggleTo, deleteTo }) {
  return (
    <ul className="list">
      {tos.length === 0 && "No To-Do's"}
      {tos.map((to) => {
        return (
          <Item
            {...to}
            toggleTo={toggleTo}
            deleteTo={deleteTo}
            // id={to.id}
            // completed={to.completed}
            // title={to.title}
            // key={to.id}
          />
        );
      })}
    </ul>
  );
}
