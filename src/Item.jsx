export default function Item({ completed, title, id, toggleTo, deleteTo }) {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTo(id, e.target.checked)}
          />
          {title}
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteTo(id);
          }}
        >
          Delete
        </button>
      </li>
      <hr width="100%"></hr>
    </>
  );
}
